import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../../../Services/Security/authentication-service.service';
import {DatabaseService} from '../../../Services/databasebacup/database.service';

interface ToolLink {
  title: string;
  description: string;
  icon: string;
  tone: string;
  link?: string;
  action?: () => void;
}

interface ToolSection {
  title: string;
  subtitle: string;
  adminOnly?: boolean;
  items: ToolLink[];
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  userRole = '';
  sections: ToolSection[] = [];

  constructor(private auth: AuthenticationServiceService, private dataBaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.userRole = this.auth.getUserRoles();
    const all: ToolSection[] = [
      {
        title: 'دليل الاتصال',
        subtitle: 'أرقام التواصل داخل الكلية وخارجها',
        items: [
          {title: 'أعضاء هيئة التدريس', description: 'أرقام وبيانات التواصل مع أعضاء هيئة التدريس', icon: 'users', tone: 'tone-blue', link: '/teaching-phone-directly'},
          {title: 'موظفين الكلية', description: 'أرقام وبيانات التواصل مع موظفي الكلية', icon: 'badge', tone: 'tone-teal', link: '/employee-phone-directly'},
          {title: 'الأرقام الهامة', description: 'الأرقام الداخلية والخارجية الهامة', icon: 'phone', tone: 'tone-amber', link: '/faculty-phone-directly'},
        ]
      },
      {
        title: 'السنوات السابقة',
        subtitle: 'أرشيف سجلات الأعوام الماضية',
        items: [
          {title: 'الوارد', description: 'الخطابات الواردة في السنوات السابقة', icon: 'inbox', tone: 'tone-red', link: '/last-imports'},
          {title: 'الصادر', description: 'الخطابات الصادرة في السنوات السابقة', icon: 'outbox', tone: 'tone-green', link: '/last-exports'},
          {title: 'الخاص', description: 'ملفات الحفظ في السنوات السابقة', icon: 'bookmark', tone: 'tone-blue', link: '/last-specials'},
          {title: 'الإنتدابات', description: 'سجل الإنتدابات السابقة', icon: 'briefcase', tone: 'tone-slate', link: '/all-last-mandates'},
          {title: 'التحقيقات', description: 'التحقيقات في السنوات السابقة', icon: 'search', tone: 'tone-sky', link: '/last-investigations'},
          {title: 'قرارات العميد', description: 'قرارات العميد في السنوات السابقة', icon: 'file', tone: 'tone-violet', link: '/last-dean-decision'},
          {title: 'الفاكس والإشارات', description: 'الفاكسات والإشارات السابقة', icon: 'signal', tone: 'tone-amber', link: '/all-signs'},
        ]
      },
      {
        title: 'إدارة المستخدمين',
        subtitle: 'الحسابات والصلاحيات والنسخ الاحتياطي',
        adminOnly: true,
        items: [
          {title: 'المستخدمين', description: 'عرض حسابات المستخدمين وتفعيلها', icon: 'users', tone: 'tone-blue', link: '/user-pagination?page=/1'},
          {title: 'إضافة مستخدم', description: 'إنشاء حساب مستخدم جديد', icon: 'user-plus', tone: 'tone-green', link: '/register'},
          {title: 'نشاط المستخدمين', description: 'سجل العمليات التي قام بها المستخدمون', icon: 'activity', tone: 'tone-violet', link: '/user-activity'},
          {title: 'نسخة احتياطية', description: 'حفظ نسخة احتياطية من قاعدة البيانات', icon: 'download', tone: 'tone-teal', action: () => this.backUp()},
          {title: 'استرجاع نسخة احتياطية', description: 'استرجاع قاعدة البيانات من آخر نسخة', icon: 'upload', tone: 'tone-red', action: () => this.restore()},
        ]
      },
    ];
    this.sections = all.filter(s => !s.adminOnly || this.userRole == 'admin');
  }

  backUp() {
    this.dataBaseService.backupDatabase().subscribe(value => alert(value));
  }

  restore() {
    if (!confirm('سيتم استبدال البيانات الحالية بآخر نسخة احتياطية. هل تريد المتابعة؟')) {
      return;
    }
    this.dataBaseService.restoreDatabase().subscribe(value => alert(value));
  }
}
