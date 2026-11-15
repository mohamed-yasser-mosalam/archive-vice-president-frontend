import {Component, OnInit} from '@angular/core';
import {PermissionService} from '../../../Services/Security/permission.service';

interface ToolLink {
  title: string;
  description: string;
  icon: string;
  tone: string;
  link?: string;
  action?: () => void;
  /** Permission needed to see the card; 'admin' means the admin role. */
  permission?: string;
}

interface ToolSection {
  title: string;
  subtitle: string;
  items: ToolLink[];
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  sections: ToolSection[] = [];

  constructor(private perms: PermissionService) {
  }

  ngOnInit(): void {
    const all: ToolSection[] = [
      {
        title: 'دليل الاتصال',
        subtitle: 'أرقام التواصل داخل الكلية وخارجها',
        items: [
          {title: 'أعضاء هيئة التدريس', description: 'أرقام وبيانات التواصل مع أعضاء هيئة التدريس', icon: 'users', tone: 'tone-blue', link: '/teaching-phone-directly', permission: 'PHONE_DIRECTORY_READ'},
          {title: 'موظفين الكلية', description: 'أرقام وبيانات التواصل مع موظفي الكلية', icon: 'badge', tone: 'tone-teal', link: '/employee-phone-directly', permission: 'PHONE_DIRECTORY_READ'},
          {title: 'الأرقام الهامة', description: 'الأرقام الداخلية والخارجية الهامة', icon: 'phone', tone: 'tone-amber', link: '/faculty-phone-directly', permission: 'PHONE_DIRECTORY_READ'},
        ]
      },
      {
        title: 'السنوات السابقة',
        subtitle: 'أرشيف سجلات الأعوام الماضية',
        items: [
          {title: 'الوارد', description: 'الخطابات الواردة في السنوات السابقة', icon: 'inbox', tone: 'tone-red', link: '/last-imports', permission: 'IMPORT_READ'},
          {title: 'الصادر', description: 'الخطابات الصادرة في السنوات السابقة', icon: 'outbox', tone: 'tone-green', link: '/last-exports', permission: 'EXPORT_READ'},
          {title: 'الخاص', description: 'ملفات الحفظ في السنوات السابقة', icon: 'bookmark', tone: 'tone-blue', link: '/last-specials', permission: 'SPECIAL_READ'},
          {title: 'الإنتدابات', description: 'سجل الإنتدابات السابقة', icon: 'briefcase', tone: 'tone-slate', link: '/all-last-mandates', permission: 'MANDATE_READ'},
          {title: 'التحقيقات', description: 'التحقيقات في السنوات السابقة', icon: 'search', tone: 'tone-sky', link: '/last-investigations', permission: 'INVESTIGATION_READ'},
          {title: 'قرارات العميد', description: 'قرارات العميد في السنوات السابقة', icon: 'file', tone: 'tone-violet', link: '/last-dean-decision', permission: 'DEAN_DECISION_READ'},
          {title: 'الفاكس والإشارات', description: 'الفاكسات والإشارات السابقة', icon: 'signal', tone: 'tone-amber', link: '/all-signs'},
        ]
      },
      {
        title: 'إدارة المستخدمين',
        subtitle: 'الحسابات والصلاحيات والنسخ الاحتياطي',
        items: [
          {title: 'المستخدمين', description: 'عرض حسابات المستخدمين وتفعيلها', icon: 'users', tone: 'tone-blue', link: '/user-pagination?page=/1', permission: 'USER_READ'},
          {title: 'إضافة مستخدم', description: 'إنشاء حساب مستخدم جديد', icon: 'user-plus', tone: 'tone-green', link: '/register', permission: 'USER_CREATE'},
          {title: 'الأدوار والصلاحيات', description: 'إنشاء الأدوار وتحديد صلاحيات كل قسم', icon: 'shield', tone: 'tone-amber', link: '/roles', permission: 'admin'},
          {title: 'نشاط المستخدمين', description: 'سجل العمليات التي قام بها المستخدمون', icon: 'activity', tone: 'tone-violet', link: '/user-activity', permission: 'USER_ACTIVITY_READ'},
          {title: 'نسخة احتياطية', description: 'عرض وإدارة النسخ الاحتياطية', icon: 'download', tone: 'tone-teal', link: '/backups', permission: 'BACKUP_READ'},
        ]
      },
    ];
    this.sections = all
      .map(s => ({...s, items: s.items.filter(i => this.allowed(i.permission))}))
      .filter(s => s.items.length > 0);
  }

  private allowed(permission?: string): boolean {
    if (!permission) return true;
    return permission === 'admin' ? this.perms.isAdmin() : this.perms.can(permission);
  }

}
