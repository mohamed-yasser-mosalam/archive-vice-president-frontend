import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  const routes: Routes = [
  {path:'home',component:WelcomeComponent},
  {path:'getallImports',component:ImportFilesComponent},
  {path:'getallexports',component:ExportFilesComponent},
  {path:'filehasgone',component:FileHasGoneComponent},
  {path:'filehadgone',component:FileHadGoneComponent},
  {path:'filenotcome',component:FileNotComeComponent},
  {path:'importantletter',component:ImportantLetterComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'addexportfile',component:AddExportComponent},
  {path:'addimportfile',component:AddImportComponent},
  {path:'updateimport/:id',component:UpdateImportComponent},
  {path:'updateexport/:id',component:UpdateExportComponent},
   {path:'allfiles',component:AllFilesComponent},
   {path:'register',component:RegisterComponent},
   {path:'export-pagination?id/:id',component:ExportPaginationComponent},
    {path:'import-pagination?id/:id',component:ImportPaginationComponent},
    {path:'add-urgent/:id',component:UrgentExportComponent},
    {path:'add-export-response/:id',component:ResponsExportComponent},
    {path:'add-import-response/:id',component:ResponsImportComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
