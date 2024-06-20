import {Component, OnInit} from '@angular/core';
import {UpdateUserInformationService} from "../../../../Services/updateUserInformation/update-user-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import baseUrl from "../../../../url";

@Component({
  selector: 'app-change-password-by-admin',
  templateUrl: './change-password-by-admin.component.html',
  styleUrls: ['./change-password-by-admin.component.css']
})
export class ChangePasswordByAdminComponent implements OnInit {

  id = +this.routes.snapshot.params['id']
  name: string
  img: string
  base = baseUrl + '/'
  constructor(private updateUserInformationService: UpdateUserInformationService,
              private router: Router, private routes: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.getUserById()
  }

  getUserById() {
    this.updateUserInformationService.getUserInformationById(this.id).subscribe((result: any) => {
      this.name = result.username;
      this.img = this.base+result.imagePath
    })
  }

  changePassword(newPassword: any) {
    this.updateUserInformationService.changePasswordByAdmin(this.id, newPassword).subscribe()
    // this.router.navigateByUrl("/home")
    const nextPageUrl = `/user-pagination?page=/${this.id}`;
    this.router.navigate([nextPageUrl]);
  }
}
