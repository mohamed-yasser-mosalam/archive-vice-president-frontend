import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./main-components/welcome/welcome.component";
import {ImportFilesComponent} from "./import-files/import-files.component";
import {ExportFilesComponent} from "./export-files/export-files.component";
import {LoginComponent} from "./login/login.component";
import {AddExportComponent} from "./add-export/add-export.component";
import {AddImportComponent} from "./add-import/add-import.component";
import {UpdateExportComponent} from "./update-export/update-export.component";
import {FileHasGoneComponent} from "./file-has-gone/file-has-gone.component";
import {FileHadGoneComponent} from "./file-had-gone/file-had-gone.component";
import {FileNotComeComponent} from "./file-not-come/file-not-come.component";
import {ImportantLetterComponent} from "./important-letter/important-letter.component";
import {UpdateImportComponent} from "./update-import/update-import.component";
import {AllFilesComponent} from "./all-files/all-files.component";
import {RegisterComponent} from "./register/register.component";
import {ExportPaginationComponent} from "./export-pagination/export-pagination.component";
import {UrgentExportComponent} from "./urgent-export/urgent-export.component";
import {ResponsExportComponent} from "./respons-export/respons-export.component";
import {ResponsImportComponent} from "./respons-import/respons-import.component";
import {ImportPaginationComponent} from "./import-pagination/import-pagination.component";
import {UpdateLoginInformatioComponent} from "./update-login-informatio/update-login-informatio.component";
import {AnyThingComponent} from "./any-thing/any-thing.component";
import {UsersComponent} from "./users/users.component";
import {CanActivate} from "./auth.guard";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {TodayExportsComponent} from "./today-exports/today-exports.component";
import {TodayImportsComponent} from "./today-imports/today-imports.component";
import {ArchiveExportComponent} from "./archive-export/archive-export.component";
import {ArchiveImportComponent} from "./archive-import/archive-import.component";
import {SpecialfileComponent} from "./specialfile/specialfile.component";
import {SpecialPaginationComponent} from "./special-pagination/special-pagination.component";
import {UpdateSpecialComponent} from "./update-special/update-special.component";
import {AddSpecialComponent} from "./add-special/add-special.component";
import {ArchiveSpecialComponent} from "./archive-special/archive-special.component";
import {UserActivityComponent} from "./user-activity/user-activity.component";
import {ChangePasswordByAdminComponent} from "./change-password-by-admin/change-password-by-admin.component";
import {LastExportComponent} from "./last-export/last-export.component";
import {LastImportComponent} from "./last-import/last-import.component";
import {LastSpecialComponent} from "./last-special/last-special.component";
import {AuthenticationServiceService} from "./Services/Security/authentication-service.service";
import {AuthGuardService} from "./Services/guard/auth-guard.service";
import {DeandecisionComponent} from "./deandecision/deandecision.component";
import {SavefileimportComponent} from "./savefileimport/savefileimport.component";
import {SavefileexportComponent} from "./savefileexport/savefileexport.component";
import {UpdatedeandecisionComponent} from "./updatedeandecision/updatedeandecision.component";
import {AdddeandecisionComponent} from "./adddeandecision/adddeandecision.component";
import {DeanDecisionPaginationComponent} from "./dean-decision-pagination/dean-decision-pagination.component";
import {LastDeanDecisionComponent} from "./last-dean-decision/last-dean-decision.component";
import {LastExportPaginationComponent} from "./last-export-pagination/last-export-pagination.component";
import {LastSpecialPaginationComponent} from "./last-special-pagination/last-special-pagination.component";
import {
  LastDeanDecisionPaginationComponent
} from "./last-dean-decision-pagination/last-dean-decision-pagination.component";
import {LastImportPaginationComponent} from "./last-import-pagination/last-import-pagination.component";
import {AllSignComponent} from "./all-sign/all-sign.component";
import {SignPaginationComponent} from "./sign-pagination/sign-pagination.component";
import {AddSignComponent} from "./add-sign/add-sign.component";
import {UpdateSignComponent} from "./update-sign/update-sign.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: 'home', component: WelcomeComponent, canActivate: [CanActivate]},
  {path: 'getallImports', component: ImportFilesComponent, canActivate: [CanActivate]},
  {path: 'getallexports', component: ExportFilesComponent, canActivate: [CanActivate]},
  {path: 'filehasgone', component: FileHasGoneComponent, canActivate: [CanActivate]},
  {path: 'filehadgone', component: FileHadGoneComponent, canActivate: [CanActivate]},
  {path: 'filenotcome', component: FileNotComeComponent, canActivate: [CanActivate]},
  {path: 'importantletter', component: ImportantLetterComponent, canActivate: [CanActivate]},
  {path: 'todeyexports', component: TodayExportsComponent, canActivate: [CanActivate]},
  {path: 'todayimports', component: TodayImportsComponent, canActivate: [CanActivate]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'/login',pathMatch:'full'},
  {path: 'addexportfile', component: AddExportComponent, canActivate: [CanActivate]},
  {path: 'addimportfile', component: AddImportComponent, canActivate: [CanActivate]},
  {path: 'updateimport/:id', component: UpdateImportComponent, canActivate: [AuthGuardService, CanActivate]},
  {path: 'updateexport/:id', component: UpdateExportComponent, canActivate: [AuthGuardService, CanActivate]},
  {path: 'allfiles', component: AllFilesComponent, canActivate: [CanActivate]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'export-pagination?page/:page', component: ExportPaginationComponent, canActivate: [CanActivate]},
  {path: 'import-pagination?page/:page', component: ImportPaginationComponent, canActivate: [CanActivate]},
  {path: 'add-urgent/:id', component: UrgentExportComponent, canActivate: [CanActivate]},
  {path: 'add-export-response/:id', component: ResponsExportComponent, canActivate: [CanActivate]},
  {path: 'add-import-response/:id', component: ResponsImportComponent, canActivate: [CanActivate]},
  {path: 'update-login-information', component: UpdateLoginInformatioComponent, canActivate: [CanActivate]},
  {path: 'users', component: UsersComponent, canActivate: [AuthenticationServiceService, CanActivate]},
  {path: 'changepassword/:username', component: ChangePasswordComponent, canActivate: [CanActivate]},
  {path: 'any', component: AnyThingComponent, canActivate: [CanActivate]},
  {path: 'exportfile/:summary', component: ExportFilesComponent, canActivate: [CanActivate]},
  {path: 'archiveexport/:id', component: ArchiveExportComponent, canActivate: [CanActivate]},
  {path: 'archiveimport/:id', component: ArchiveImportComponent, canActivate: [CanActivate]},
  {path: 'archivespecial/:id', component: ArchiveSpecialComponent, canActivate: [CanActivate]},
  {path: 'specialfile', component: SpecialfileComponent, canActivate: [CanActivate]},
  {path: 'special-pagination?page/:page', component: SpecialPaginationComponent, canActivate: [CanActivate]},
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
  {path:'deandecisionpagination?page/:page',component:DeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'updatedeandecision/:page',component:UpdatedeandecisionComponent,canActivate:[CanActivate]},
  {path:'adddeandecision',component:AdddeandecisionComponent,canActivate:[CanActivate]},
  {path:'lastdeandecision',component:LastDeanDecisionComponent,canActivate:[CanActivate]},
  {path:'lastexportpagination?page/:page',component:LastExportPaginationComponent,canActivate:[CanActivate]},
  {path:'lastimportpagination?page/:page',component:LastImportPaginationComponent,canActivate:[CanActivate]},
  {path:'lastspecialpagination?page/:page',component:LastSpecialPaginationComponent,canActivate:[CanActivate]},
  {path:'lastdeandecisionpagination?page/:page',component:LastDeanDecisionPaginationComponent,canActivate:[CanActivate]},
  {path:'allsigns',component:AllSignComponent,canActivate:[CanActivate]},
  {path:'signpagination?page/:page',component:SignPaginationComponent,canActivate:[CanActivate]},
  {path:'addsign',component:AddSignComponent,canActivate:[CanActivate]},
  {path:'updatesign/:page',component:UpdateSignComponent,canActivate:[CanActivate]},
  { path: "**",component:ErrorPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
