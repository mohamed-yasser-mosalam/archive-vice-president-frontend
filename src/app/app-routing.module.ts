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

const routes: Routes = [
  {path: 'home', component: WelcomeComponent, canActivate: [CanActivate]},
  {path: 'get-all-imports', component: ImportFilesComponent, canActivate: [CanActivate]},
  {path: 'get-all-exports', component: ExportFilesComponent, canActivate: [CanActivate]},
  {path: 'file-has-gone', component: FileHasGoneComponent, canActivate: [CanActivate]},
  {path: 'filehadgone', component: FileHadGoneComponent, canActivate: [CanActivate]},
  {path: 'filenotcome', component: FileNotComeComponent, canActivate: [CanActivate]},
  {path: 'importantletter', component: ImportantLetterComponent, canActivate: [CanActivate]},
  {path: 'todeyexports', component: TodayExportsComponent, canActivate: [CanActivate]},
  {path: 'todayimports', component: TodayImportsComponent, canActivate: [CanActivate]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'addexportfile', component: AddExportComponent, canActivate: [CanActivate]},
  {path: 'addimportfile', component: AddImportComponent, canActivate: [CanActivate]},
  {path: 'updateimport/:id', component: UpdateImportComponent,},
  {path: 'updateexport/:id', component: UpdateExportComponent,},
  {path: 'allfiles', component: AllFilesComponent, canActivate: [CanActivate]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'export_pagination/:page', component: ExportPaginationComponent, canActivate: [CanActivate]},
  {path: 'import_pagination/:page', component: ImportPaginationComponent, canActivate: [CanActivate]},
  {path: 'add-urgent/:id', component: UrgentExportComponent, canActivate: [CanActivate]},
  {path: 'add-export-response/:id', component: ResponsExportComponent, canActivate: [CanActivate]},
  {path: 'add-import-response/:id', component: ResponsImportComponent, canActivate: [CanActivate]},
  {path: 'update-login-information/:id', component: UpdateLoginInformatioComponent, canActivate: [CanActivate]},
  {path: 'users', component: UsersComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'changepassword/:username', component: ChangePasswordComponent, canActivate: [CanActivate]},
  {path: 'exportfile/:summary', component: ExportFilesComponent, canActivate: [CanActivate]},
  {path: 'archiveexport/:id', component: ArchiveExportComponent, canActivate: [CanActivate]},
  {path: 'archiveimport/:id', component: ArchiveImportComponent, canActivate: [CanActivate]},
  {path: 'archivespecial/:id', component: ArchiveSpecialComponent, canActivate: [CanActivate]},
  {path: 'specialfile', component: SpecialfileComponent, canActivate: [CanActivate]},
  {path: 'special_pagination/:page', component: SpecialPaginationComponent, canActivate: [CanActivate]},
  {path: 'addspecialfile', component: AddSpecialComponent, canActivate: [CanActivate]},
  {path: 'useractivity', component: UserActivityComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'changepasswordbyadmin/:id', component: ChangePasswordByAdminComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'updatespecial/:id', component: UpdateSpecialComponent, canActivate: [CanActivate]},
  {path: 'lastexports', component: LastExportComponent, canActivate: [CanActivate]},
  {path: 'lastimports', component: LastImportComponent, canActivate: [CanActivate]},
  {path: 'lastspecials', component: LastSpecialComponent, canActivate: [CanActivate]},
  {path:'savefileexport/:id',component:SavefileexportComponent,canActivate:[CanActivate]},
  {path:'savefileimport/:id',component:SavefileimportComponent,canActivate:[CanActivate]},
  {path:'deandecision',component:DeandecisionComponent,canActivate:[CanActivate]},
  {path:'deandecision_pagination/:page',component:DeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'updatedeandecision/:page',component:UpdatedeandecisionComponent,canActivate:[CanActivate]},
  {path:'adddeandecision',component:AdddeandecisionComponent,canActivate:[CanActivate]},
  {path:'lastdeandecision',component:LastDeanDecisionComponent,canActivate:[CanActivate]},
  {path:'lastexport_pagination/:page',component:LastExportPaginationComponent,canActivate:[CanActivate]},
  {path:'lastimport_pagination/:page',component:LastImportPaginationComponent,canActivate:[CanActivate]},
  {path:'lastspecial_pagination/:page',component:LastSpecialPaginationComponent,canActivate:[CanActivate]},
  {path:'lastdeandecision_pagination/:page',component:LastDeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'allsigns',component:AllSignComponent,canActivate:[CanActivate]},
  {path:'sign_pagination/:page',component:SignPaginationComponent,canActivate:[CanActivate]},
  {path:'addsign',component:AddSignComponent,canActivate:[CanActivate]},
  {path:'updatesign/:page',component:UpdateSignComponent},
  { path: 'showuserinformation/:username', component:ShowUserInformationComponent,canActivate:[CanActivate] },
  { path: 'userpagination/:page', component:UserpaginationComponent,canActivate:[CanActivate] },
  { path: "**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
