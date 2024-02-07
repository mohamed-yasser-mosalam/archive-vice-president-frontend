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

const routes: Routes = [
  {path: 'home', component: WelcomeComponent,canActivate:[CanActivate]},
  {path: 'getallImports', component: ImportFilesComponent,canActivate:[CanActivate]},
  {path: 'getallexports', component: ExportFilesComponent,canActivate:[CanActivate]},
  {path: 'filehasgone', component: FileHasGoneComponent,canActivate:[CanActivate]},
  {path: 'filehadgone', component: FileHadGoneComponent,canActivate:[CanActivate]},
  {path: 'filenotcome', component: FileNotComeComponent,canActivate:[CanActivate]},
  {path: 'importantletter', component: ImportantLetterComponent,canActivate:[CanActivate]},
  {path: 'todeyexports', component: TodayExportsComponent,canActivate:[CanActivate]},
  {path: 'todayimports', component: TodayImportsComponent,canActivate:[CanActivate]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent,canActivate:[CanActivate]},
  {path: 'addexportfile', component: AddExportComponent,canActivate:[CanActivate]},
  {path: 'addimportfile', component: AddImportComponent,canActivate:[CanActivate]},
  {path: 'updateimport/:id', component: UpdateImportComponent,canActivate:[CanActivate]},
  {path: 'updateexport/:id', component: UpdateExportComponent,canActivate:[CanActivate]},
  {path: 'allfiles', component: AllFilesComponent,canActivate:[CanActivate]},
  {path: 'register', component: RegisterComponent,canActivate:[CanActivate]},
  {path: 'export-pagination?id/:id', component: ExportPaginationComponent,canActivate:[CanActivate]},
  {path: 'import-pagination?id/:id', component: ImportPaginationComponent,canActivate:[CanActivate]},
  {path: 'add-urgent/:id', component: UrgentExportComponent,canActivate:[CanActivate]},
  {path: 'add-export-response/:id', component: ResponsExportComponent,canActivate:[CanActivate]},
  {path: 'add-import-response/:id', component: ResponsImportComponent,canActivate:[CanActivate]},
  {path: 'update-login-information', component: UpdateLoginInformatioComponent,canActivate:[CanActivate]},
  {path: 'users', component: UsersComponent,canActivate:[CanActivate]},
  {path:'changepassword/:username',component:ChangePasswordComponent,canActivate:[CanActivate]},
  {path:'any',component:AnyThingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
