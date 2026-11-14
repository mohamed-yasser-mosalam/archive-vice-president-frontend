import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../Services/databasebacup/database.service';
import {BackupFile} from '../../../Models/backup/backup-file';
import {BackupSchedule} from '../../../Models/backup/backup-schedule';
import {AlertService} from '../../../Services/alert/alert.service';

@Component({
  selector: 'app-backup-management',
  templateUrl: './backup-management.component.html',
  styleUrls: ['./backup-management.component.css']
})
export class BackupManagementComponent implements OnInit {
  backups: BackupFile[] = [];
  busy = false;

  readonly days = [
    {value: 'SATURDAY', label: 'السبت'},
    {value: 'SUNDAY', label: 'الأحد'},
    {value: 'MONDAY', label: 'الاثنين'},
    {value: 'TUESDAY', label: 'الثلاثاء'},
    {value: 'WEDNESDAY', label: 'الأربعاء'},
    {value: 'THURSDAY', label: 'الخميس'},
    {value: 'FRIDAY', label: 'الجمعة'}
  ];
  saved: BackupSchedule = {enabled: false, day: null, time: null};
  form: BackupSchedule = {enabled: false, day: null, time: null};

  constructor(private service: DatabaseService, private alert: AlertService) {
  }

  ngOnInit(): void {
    this.load();
    this.loadSchedule();
  }

  loadSchedule(): void {
    this.service.getSchedule().subscribe({
      next: s => this.applySchedule(s),
      error: err => this.fail(err)
    });
  }

  saveSchedule(): void {
    this.busy = true;
    this.service.saveSchedule({...this.form, time: this.form.time || null}).subscribe({
      next: s => {
        this.applySchedule(s);
        this.busy = false;
        this.alert.success('تم حفظ الجدولة');
      },
      error: err => this.fail(err)
    });
  }

  scheduleSummary(): string {
    const s = this.saved;
    if (!s.enabled || !s.time) {
      return 'الجدولة غير مفعلة';
    }
    const [h, m] = s.time.split(':').map(Number);
    const time = new Intl.DateTimeFormat('ar-EG-u-nu-latn', {hour: 'numeric', minute: '2-digit'})
      .format(new Date(2000, 0, 1, h, m));
    if (!s.day) {
      return `كل يوم الساعة ${time}`;
    }
    const dayAr = this.days.find(d => d.value === s.day)?.label ?? s.day;
    return `كل يوم ${dayAr} الساعة ${time}`;
  }

  private applySchedule(s: BackupSchedule): void {
    this.saved = {enabled: !!s?.enabled, day: s?.day ?? null, time: s?.time ?? null};
    this.form = {...this.saved};
  }

  load(): void {
    this.busy = true;
    this.service.list().subscribe({
      next: list => {
        this.backups = list;
        this.busy = false;
      },
      error: err => this.fail(err)
    });
  }

  create(): void {
    this.busy = true;
    this.service.create().subscribe({
      next: () => this.load(),
      error: err => this.fail(err)
    });
  }

  async restore(b: BackupFile): Promise<void> {
    if (!await this.alert.confirm('سيتم استبدال البيانات الحالية بهذه النسخة (سيتم حفظ نسخة من الوضع الحالي أولاً). هل تريد المتابعة؟')) {
      return;
    }
    this.busy = true;
    this.service.restore(b.name).subscribe({
      next: msg => {
        this.alert.success(msg);
        this.load();
      },
      error: err => this.fail(err)
    });
  }

  async remove(b: BackupFile): Promise<void> {
    if (!await this.alert.confirm('هل تريد حذف هذه النسخة نهائياً؟')) {
      return;
    }
    this.busy = true;
    this.service.remove(b.name).subscribe({
      next: msg => {
        this.alert.success(msg);
        this.load();
      },
      error: err => this.fail(err)
    });
  }

  download(b: BackupFile): void {
    this.busy = true;
    this.service.download(b.name).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = b.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.busy = false;
      },
      error: async err => {
        let msg: any = err.error;
        if (msg instanceof Blob) {
          msg = await msg.text();
        }
        this.fail({error: msg});
      }
    });
  }

  typeLabel(name: string): string {
    if (name.startsWith('pre-restore_')) {
      return 'تلقائية قبل الاسترجاع';
    }
    if (name.startsWith('scheduled_')) {
      return 'مجدولة';
    }
    return name.startsWith('archive_') ? 'نسخة احتياطية' : 'ملف آخر';
  }

  formatDate(iso: string): string {
    return new Intl.DateTimeFormat('ar-EG-u-nu-latn', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(iso));
  }

  formatTime(iso: string): string {
    return new Intl.DateTimeFormat('ar-EG-u-nu-latn', {
      hour: 'numeric', minute: '2-digit'
    }).format(new Date(iso));
  }

  formatSize(bytes: number): string {
    if (bytes >= 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    }
    return (bytes / 1024).toFixed(1) + ' KB';
  }

  private fail(err: any): void {
    this.busy = false;
    this.alert.error(err);
  }
}
