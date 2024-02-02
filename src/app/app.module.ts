import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentsComponent } from './main-components/main-components.component';
import {NavbarComponent} from "./main-components/navbar/navbar.component";
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { WelcomeComponent } from './main-components/welcome/welcome.component';
import { ExportFilesComponent } from './export-files/export-files.component';
import { ImportFilesComponent } from './import-files/import-files.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AddImportComponent } from './add-import/add-import.component';
import { AddExportComponent } from './add-export/add-export.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateExportComponent } from './update-export/update-export.component';
import { FileHasGoneComponent } from './file-has-gone/file-has-gone.component';
import { FileNotComeComponent } from './file-not-come/file-not-come.component';
import { ImportantLetterComponent } from './important-letter/important-letter.component';
import { FileHadGoneComponent } from './file-had-gone/file-had-gone.component';
import { UpdateImportComponent } from './update-import/update-import.component';
import { AllFilesComponent } from './all-files/all-files.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ImportPaginationComponent } from './import-pagination/import-pagination.component';
import {ExportPaginationComponent} from "./export-pagination/export-pagination.component";
import { NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpInterceterBaseAuthService} from "./Services/Security/http-interceter-base-auth.service";
import { UrgentExportComponent } from './urgent-export/urgent-export.component';
import { ResponsExportComponent } from './respons-export/respons-export.component';
import { ResponsImportComponent } from './respons-import/respons-import.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponentsComponent,
    NavbarComponent,
    SidebarComponent,
    WelcomeComponent,
    ExportFilesComponent,
    ImportFilesComponent,
    LoginComponent,
    AddImportComponent,
    AddExportComponent,
    UpdateExportComponent,
    FileHasGoneComponent,
    FileNotComeComponent,
    ImportantLetterComponent,
    FileHadGoneComponent,
    UpdateImportComponent,
    AllFilesComponent,
    RegisterComponent,
    ImportPaginationComponent,
    ExportPaginationComponent,
    UrgentExportComponent,
    ResponsExportComponent,
    ResponsImportComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbPaginationModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceterBaseAuthService,multi:true}
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
