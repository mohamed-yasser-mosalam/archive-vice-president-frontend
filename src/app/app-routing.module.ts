import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from "./Components/authentication/login/login.component";

import {FileHadGoneComponent} from "./Components/imports/file-had-gone/file-had-gone.component";

import {UpdateImportComponent} from "./Components/imports/update-import/update-import.component";
import {AllFilesComponent} from "./Components/all-files/all-files.component";
import {RegisterComponent} from "./Components/authentication/users/register/register.component";

import {ResponsExportComponent} from "./Components/exports/respons-export/respons-export.component";

import {UpdateLoginInformatioComponent} from "./Components/authentication/update-login-informatio/update-login-informatio.component";
import {UsersComponent} from "./Components/authentication/users/users/users.component";
import {CanActivate} from "./auth.guard";
import {ChangePasswordComponent} from "./Components/authentication/users/change-password/change-password.component";

import {SpecialfileComponent} from "./Components/specials/specialfile/specialfile.component";
import {SpecialPaginationComponent} from "./Components/specials/special-pagination/special-pagination.component";
import {UpdateSpecialComponent} from "./Components/specials/update-special/update-special.component";
import {AddSpecialComponent} from "./Components/specials/add-special/add-special.component";
import {ArchiveSpecialComponent} from "./Components/specials/archive-special/archive-special.component";
import {UserActivityComponent} from "./Components/authentication/users/user-activity/user-activity.component";
import {ChangePasswordByAdminComponent} from "./Components/authentication/users/change-password-by-admin/change-password-by-admin.component";

import {LastSpecialComponent} from "./Components/specials/last-special/last-special.component";
import {AuthenticationServiceService} from "./Services/Security/authentication-service.service";
import {AuthGuardService} from "./Services/guard/auth-guard.service";
import {DeandecisionComponent} from "./Components/dean-decisions/deandecision/deandecision.component";
import {SavefileexportComponent} from "./Components/exports/savefileexport/savefileexport.component";
import {UpdatedeandecisionComponent} from "./Components/dean-decisions/updatedeandecision/updatedeandecision.component";
import {AdddeandecisionComponent} from "./Components/dean-decisions/adddeandecision/adddeandecision.component";
import {DeanDecisionPaginationComponent} from "./Components/dean-decisions/dean-decision-pagination/dean-decision-pagination.component";
import {LastDeanDecisionComponent} from "./Components/dean-decisions/last-dean-decision/last-dean-decision.component";
import {LastSpecialPaginationComponent} from "./Components/specials/last-special-pagination/last-special-pagination.component";
import {
  LastDeanDecisionPaginationComponent
} from "./Components/dean-decisions/last-dean-decision-pagination/last-dean-decision-pagination.component";

import {AllSignComponent} from "./Components/signs/all-sign/all-sign.component";
import {SignPaginationComponent} from "./Components/signs/sign-pagination/sign-pagination.component";
import {AddSignComponent} from "./Components/signs/add-sign/add-sign.component";
import {UpdateSignComponent} from "./Components/signs/update-sign/update-sign.component";
import {ErrorPageComponent} from "./Components/error-page/error-page.component";
import {ShowUserInformationComponent} from "./Components/authentication/users/show-user-information/show-user-information.component";
import {UserpaginationComponent} from "./Components/authentication/users/userpagination/userpagination.component";
import {WelcomeComponent} from "./Components/main-components/welcome/welcome.component";
import {ImportFilesComponent} from "./Components/imports/import-files/import-files.component";
import {ExportFilesComponent} from "./Components/exports/export-files/export-files.component";
import {FileHasGoneComponent} from "./Components/imports/file-has-gone/file-has-gone.component";
import {FileNotComeComponent} from "./Components/imports/file-not-come/file-not-come.component";
import {ImportantLetterComponent} from "./Components/imports/important-letter/important-letter.component";
import {TodayExportsComponent} from "./Components/exports/today-exports/today-exports.component";
import {TodayImportsComponent} from "./Components/imports/today-imports/today-imports.component";
import {AddExportComponent} from "./Components/exports/add-export/add-export.component";
import {AddImportComponent} from "./Components/imports/add-import/add-import.component";
import {UpdateExportComponent} from "./Components/exports/update-export/update-export.component";
import {ExportPaginationComponent} from "./Components/exports/export-pagination/export-pagination.component";
import {ImportPaginationComponent} from "./Components/imports/import-pagination/import-pagination.component";
import {UrgentExportComponent} from "./Components/exports/urgent-export/urgent-export.component";
import {ResponsImportComponent} from "./Components/imports/respons-import/respons-import.component";
import {ArchiveExportComponent} from "./Components/exports/archive-export/archive-export.component";
import {ArchiveImportComponent} from "./Components/imports/archive-import/archive-import.component";
import {LastImportComponent} from "./Components/imports/last-import/last-import.component";
import {LastExportComponent} from "./Components/exports/last-export/last-export.component";
import {SavefileimportComponent} from "./Components/imports/savefileimport/savefileimport.component";
import {
  LastExportPaginationComponent
} from "./Components/exports/last-export-pagination/last-export-pagination.component";
import {
  LastImportPaginationComponent
} from "./Components/imports/last-import-pagination/last-import-pagination.component";
import {AddFacultyPhoneComponent} from "./Components/PhoneDirectory/add-faculty-phone/add-faculty-phone.component";
import {AddTeachingPhoneComponent} from "./Components/PhoneDirectory/add-teaching-phone/add-teaching-phone.component";
import {
  FacultyPhoneDirectoryComponent
} from "./Components/PhoneDirectory/faculty-phone-directory/faculty-phone-directory.component";
import {
  TeachingPhoneDirectoryComponent
} from "./Components/PhoneDirectory/teaching-phone-directory/teaching-phone-directory.component";
import {
  EmployeePhoneDirectoryComponent
} from "./Components/PhoneDirectory/employee-phone-directory/employee-phone-directory.component";
import {AddEmployeePhoneComponent} from "./Components/PhoneDirectory/add-employee-phone/add-employee-phone.component";
import {AddArchiveFileComponent} from "./Components/all-files/add-archive-file/add-archive-file.component";
import { UpdateArchiveFileComponent } from './Components/all-files/update-archive-file/update-archive-file.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent, canActivate: [CanActivate]},
  {path: 'get-all-imports', component: ImportFilesComponent, canActivate: [CanActivate]},
  {path: 'get-all-exports', component: ExportFilesComponent, canActivate: [CanActivate]},
  {path: 'file-has-gone', component: FileHasGoneComponent, canActivate: [CanActivate]},
  {path: 'file-had-gone', component: FileHadGoneComponent, canActivate: [CanActivate]},
  {path: 'file-not-come', component: FileNotComeComponent, canActivate: [CanActivate]},
  {path: 'important-letter', component: ImportantLetterComponent, canActivate: [CanActivate]},
  {path: 'today-exports', component: TodayExportsComponent, canActivate: [CanActivate]},
  {path: 'today-imports', component: TodayImportsComponent, canActivate: [CanActivate]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'add-export-file', component: AddExportComponent, canActivate: [CanActivate]},
  {path: 'add-import-file', component: AddImportComponent, canActivate: [CanActivate]},
  {path: 'update-import/:id', component: UpdateImportComponent,},
  {path: 'update-export/:id', component: UpdateExportComponent,},
  {path: 'all-files', component: AllFilesComponent, canActivate: [CanActivate]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'export-pagination?page=/:page', component: ExportPaginationComponent, canActivate: [CanActivate]},
  {path: 'import-pagination?page=/:page', component: ImportPaginationComponent, canActivate: [CanActivate]},
  {path: 'add-urgent/:id', component: UrgentExportComponent, canActivate: [CanActivate]},
  {path: 'add-export-response/:id', component: ResponsExportComponent, canActivate: [CanActivate]},
  {path: 'add-import-response/:id', component: ResponsImportComponent, canActivate: [CanActivate]},
  {path: 'update-user-information/:id', component: UpdateLoginInformatioComponent, canActivate: [CanActivate]},
  {path: 'users', component: UsersComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'change-password/:username', component: ChangePasswordComponent, canActivate: [CanActivate]},
  {path: 'archive-export/:id', component: ArchiveExportComponent, canActivate: [CanActivate]},
  {path: 'archive-import/:id', component: ArchiveImportComponent, canActivate: [CanActivate]},
  {path: 'archive-special/:id', component: ArchiveSpecialComponent, canActivate: [CanActivate]},
  {path: 'special-file', component: SpecialfileComponent, canActivate: [CanActivate]},
  {path: 'special_pagination?page=/:page', component: SpecialPaginationComponent, canActivate: [CanActivate]},
  {path: 'add-special-file', component: AddSpecialComponent, canActivate: [CanActivate]},
  {path: 'user-activity', component: UserActivityComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'change-password-by-admin/:id', component: ChangePasswordByAdminComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'update-special/:id', component: UpdateSpecialComponent, canActivate: [CanActivate]},
  {path: 'last-exports', component: LastExportComponent, canActivate: [CanActivate]},
  {path: 'last-imports', component: LastImportComponent, canActivate: [CanActivate]},
  {path: 'last-specials', component: LastSpecialComponent, canActivate: [CanActivate]},
  {path:'save-file-export/:id',component:SavefileexportComponent,canActivate:[CanActivate]},
  {path:'save-file-import/:id',component:SavefileimportComponent,canActivate:[CanActivate]},
  {path:'dean-decisions',component:DeandecisionComponent,canActivate:[CanActivate]},
  {path:'dean-decision-pagination?page=/:page',component:DeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'update-dean-decision/:page',component:UpdatedeandecisionComponent,canActivate:[CanActivate]},
  {path:'add-dean-decision',component:AdddeandecisionComponent,canActivate:[CanActivate]},
  {path:'last-dean-decision',component:LastDeanDecisionComponent,canActivate:[CanActivate]},
  {path:'last-export-pagination?page=/:page',component:LastExportPaginationComponent,canActivate:[CanActivate]},
  {path:'last-import-pagination?page=/:page',component:LastImportPaginationComponent,canActivate:[CanActivate]},
  {path:'last-special-pagination?page/:page',component:LastSpecialPaginationComponent,canActivate:[CanActivate]},
  {path:'last-dean-decision-pagination?page=/:page',component:LastDeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'all-signs',component:AllSignComponent,canActivate:[CanActivate]},
  {path:'sign-pagination?page=/:page',component:SignPaginationComponent,canActivate:[CanActivate]},
  {path:'add-sign',component:AddSignComponent,canActivate:[CanActivate]},
  {path:'update-sign/:page',component:UpdateSignComponent},
  {path: 'show-user-information/:username', component:ShowUserInformationComponent,canActivate:[CanActivate] },
  {path: 'user-pagination?page=/:page', component:UserpaginationComponent,canActivate:[CanActivate] },
  {path: 'add-faculty-phone', component:AddFacultyPhoneComponent,canActivate:[CanActivate] },
  {path: 'add-teaching-phone', component:AddTeachingPhoneComponent,canActivate:[CanActivate] },
  {path: 'add-emoloyee-phone', component:AddEmployeePhoneComponent,canActivate:[CanActivate] },
  {path: 'faculty-phone-directly', component:FacultyPhoneDirectoryComponent,canActivate:[CanActivate] },
  {path: 'teaching-phone-directly', component:TeachingPhoneDirectoryComponent,canActivate:[CanActivate] },
  {path: 'employee-phone-directly', component:EmployeePhoneDirectoryComponent,canActivate:[CanActivate] },
  {path: 'add-archive-file', component:AddArchiveFileComponent,canActivate:[CanActivate] },
  {path: 'update-archive-file/:id', component:UpdateArchiveFileComponent,canActivate:[CanActivate] },
  {path: "**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
