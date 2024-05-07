import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './Components/authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileHadGoneComponent} from './Components/imports/file-had-gone/file-had-gone.component';
import {UpdateImportComponent} from './Components/imports/update-import/update-import.component';
import {AllFilesComponent} from './Components/all-files/all-files.component';
import {RegisterComponent} from './Components/authentication/users/register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {NgbCarouselModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpInterceterBaseAuthService} from "./Services/Security/http-interceter-base-auth.service";
import {ResponsExportComponent} from './Components/exports/respons-export/respons-export.component';
import {ImageSliderComponent} from './Components/images/image-slider/image-slider.component';
import {
  UpdateLoginInformatioComponent
} from './Components/authentication/update-login-informatio/update-login-informatio.component';
import {UsersComponent} from './Components/authentication/users/users/users.component';
import {ChangePasswordComponent} from './Components/authentication/users/change-password/change-password.component';
import {SearchComponent} from './Components/search/search.component';
import {SearchPipe} from './search.pipe';
import {SpecialfileComponent} from './Components/specials/specialfile/specialfile.component';
import {SpecialPaginationComponent} from './Components/specials/special-pagination/special-pagination.component';
import {UpdateSpecialComponent} from './Components/specials/update-special/update-special.component';
import {AddSpecialComponent} from './Components/specials/add-special/add-special.component';
import {ArchiveSpecialComponent} from './Components/specials/archive-special/archive-special.component';
import {NgConfirmModule} from "ng-confirm-box";
import {UserActivityComponent} from './Components/authentication/users/user-activity/user-activity.component';
import {
  ChangePasswordByAdminComponent
} from './Components/authentication/users/change-password-by-admin/change-password-by-admin.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {LastSpecialComponent} from './Components/specials/last-special/last-special.component';
import {DeandecisionComponent} from './Components/dean-decisions/deandecision/deandecision.component';
import {SavefileexportComponent} from './Components/exports/savefileexport/savefileexport.component';
import {AdddeandecisionComponent} from './Components/dean-decisions/adddeandecision/adddeandecision.component';
import {UpdatedeandecisionComponent} from './Components/dean-decisions/updatedeandecision/updatedeandecision.component';
import {
  DeanDecisionPaginationComponent
} from './Components/dean-decisions/dean-decision-pagination/dean-decision-pagination.component';
import {LastDeanDecisionComponent} from './Components/dean-decisions/last-dean-decision/last-dean-decision.component';
import {
  LastSpecialPaginationComponent
} from './Components/specials/last-special-pagination/last-special-pagination.component';
import {
  LastDeanDecisionPaginationComponent
} from './Components/dean-decisions/last-dean-decision-pagination/last-dean-decision-pagination.component';
import {AddSignComponent} from './Components/signs/add-sign/add-sign.component';
import {UpdateSignComponent} from './Components/signs/update-sign/update-sign.component';
import {AllSignComponent} from './Components/signs/all-sign/all-sign.component';
import {SignPaginationComponent} from './Components/signs/sign-pagination/sign-pagination.component';
import {ErrorPageComponent} from './Components/error-page/error-page.component';
import {
  ShowUserInformationComponent
} from './Components/authentication/users/show-user-information/show-user-information.component';
import {UserpaginationComponent} from './Components/authentication/users/userpagination/userpagination.component';
import {MainComponentsComponent} from "./Components/main-components/main-components.component";
import {NavbarComponent} from "./Components/main-components/navbar/navbar.component";
import {SidebarComponent} from "./Components/main-components/sidebar/sidebar.component";
import {WelcomeComponent} from "./Components/main-components/welcome/welcome.component";
import {ExportFilesComponent} from "./Components/exports/export-files/export-files.component";
import {ImportFilesComponent} from "./Components/imports/import-files/import-files.component";
import {AddImportComponent} from "./Components/imports/add-import/add-import.component";
import {AddExportComponent} from "./Components/exports/add-export/add-export.component";
import {UpdateExportComponent} from "./Components/exports/update-export/update-export.component";
import {FileHasGoneComponent} from "./Components/imports/file-has-gone/file-has-gone.component";
import {FileNotComeComponent} from "./Components/imports/file-not-come/file-not-come.component";
import {ImportantLetterComponent} from "./Components/imports/important-letter/important-letter.component";
import {ImportPaginationComponent} from "./Components/imports/import-pagination/import-pagination.component";
import {ExportPaginationComponent} from "./Components/exports/export-pagination/export-pagination.component";
import {UrgentExportComponent} from "./Components/exports/urgent-export/urgent-export.component";
import {ResponsImportComponent} from "./Components/imports/respons-import/respons-import.component";
import {TodayExportsComponent} from "./Components/exports/today-exports/today-exports.component";
import {TodayImportsComponent} from "./Components/imports/today-imports/today-imports.component";
import {ArchiveImportComponent} from "./Components/imports/archive-import/archive-import.component";
import {ArchiveExportComponent} from "./Components/exports/archive-export/archive-export.component";
import {LastExportComponent} from "./Components/exports/last-export/last-export.component";
import {LastImportComponent} from "./Components/imports/last-import/last-import.component";
import {SavefileimportComponent} from "./Components/imports/savefileimport/savefileimport.component";
import {
  LastExportPaginationComponent
} from "./Components/exports/last-export-pagination/last-export-pagination.component";
import {
  LastImportPaginationComponent
} from "./Components/imports/last-import-pagination/last-import-pagination.component";

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
    ResponsImportComponent,
    ImageSliderComponent,
    UpdateLoginInformatioComponent,
    UsersComponent,
    ChangePasswordComponent,
    TodayExportsComponent,
    TodayImportsComponent,
    SearchComponent,
    SearchPipe,
    ArchiveImportComponent,
    ArchiveExportComponent,
    SpecialfileComponent,
    SpecialPaginationComponent,
    UpdateSpecialComponent,
    AddSpecialComponent,
    ArchiveSpecialComponent,
    UserActivityComponent,
    ChangePasswordByAdminComponent,
    LastExportComponent,
    LastImportComponent,
    LastSpecialComponent,
    DeandecisionComponent,
    SavefileexportComponent,
    SavefileimportComponent,
    AdddeandecisionComponent,
    UpdatedeandecisionComponent,
    DeanDecisionPaginationComponent,
    LastDeanDecisionComponent,
    LastExportPaginationComponent,
    LastImportPaginationComponent,
    LastSpecialPaginationComponent,
    LastDeanDecisionPaginationComponent,
    AddSignComponent,
    UpdateSignComponent,
    AllSignComponent,
    SignPaginationComponent,
    ErrorPageComponent,
    ShowUserInformationComponent,
    UserpaginationComponent,

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
    NgxPaginationModule,
    NgbCarouselModule,
    NgConfirmModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceterBaseAuthService, multi: true}
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
