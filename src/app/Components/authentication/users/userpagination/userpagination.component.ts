import {Component, OnInit} from '@angular/core';
import baseUrl from "../../../../url";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../Services/user/user.service";
import {ActivateUserService} from "../../../../Services/ActivateUsers/activate-user.service";
import {PermissionService} from "../../../../Services/Security/permission.service";
import {RoleService} from "../../../../Services/roles/role.service";
import {AlertService} from "../../../../Services/alert/alert.service";
import {Role} from "../../../../Models/roles/role";

@Component({
  selector: 'app-userpagination',
  templateUrl: './userpagination.component.html',
  styleUrls: ['./userpagination.component.css']
})
export class UserpaginationComponent implements OnInit {
  page = this.routes.snapshot.params['page'];
  pageLength: number;
  size:number=1
  isActive:number
  user: any;
  img:string;
  username:any
  id = this.routes.snapshot.params['page']
  pathOfDeleteImage: any
  base = baseUrl + '/'
  showAllUsers = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    roles: new FormControl(''),
    phone: new FormControl('')
  })

  ngOnInit(): void {
    this.pageLength = localStorage.getItem('collectionsize') ? parseInt(localStorage.getItem('collectionsize')!) : 0;
    this.getCountOfUsers();
    this.showUserById()
    this.userService.getUserById(this.id)
      .subscribe((result:any) => {
        this.showAllUsers = new FormGroup({
          username: new FormControl(result['username']),
          firstName: new FormControl(result['firstName']),
          lastName: new FormControl(result['lastName']),
          password: new FormControl(result['password']),
          roles: new FormControl(result['roles']),
          phone: new FormControl(result['phone']),
        })
        this.img=this.base+result.imagePath

      })
  }

  showUserById() {
    this.userService.getUserById(this.page).subscribe((result: any) => {
      this.user = result;
      this.img=this.base+result.imagePath;
      this.username=this.user.username;
      this.isActive=this.user.isActive;
      this.selectedRoleId = result.roleId ?? null;
    })
  }

  /** Roles for the admin-only role picker. */
  roles: Role[] = [];
  selectedRoleId: number | null = null;

  constructor(
    private routes: ActivatedRoute,
    private userService: UserService,
    private activateUserService:ActivateUserService,
    private router:Router,
    private perms: PermissionService,
    private roleService: RoleService,
    private alert: AlertService
  ) {
    if (this.perms.isAdmin())
      this.roleService.list().subscribe(r => this.roles = r);
  }

  /** True when the shown user holds the built-in admin role (only known to admins, who load the roles). */
  isSystemRole(): boolean {
    return !!this.user && this.roles.some(r => r.system && r.id === this.user.roleId);
  }

  saveRole(): void {
    if (this.selectedRoleId === null || !this.user) return;
    this.roleService.assign(this.user.id, this.selectedRoleId).subscribe({
      next: async () => {
        await this.alert.success('تم تغيير دور المستخدم');
        this.change(this.page);
      },
      error: e => this.alert.error(e)
    });
  }
  unActivateUser(username:string){
    this.activateUserService.unActivateUser(username)
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
  activatedUser(username:string){
    this.activateUserService.activateUser(username)
    setTimeout(() => {
      window.location.reload();
    }, 50);

  }
  getCountOfUsers(){
    this.userService.getCountOfUser().subscribe((result:any)=>{
      this.pageLength=result;
      localStorage.setItem('collectionsize', this.pageLength.toString());

    })
  }
  change(event): void {
    this.page = event;
    this.showUserById();
    this.userService.getUserById(event).subscribe((result:any) => {
      this.showAllUsers = new FormGroup({
        username: new FormControl(result['username']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        password: new FormControl(result['password']),
        roles: new FormControl(result['roles']),
        phone: new FormControl(result['phone']),
      });
      this.img=this.base+result.imagePath;

    });
    const nextPageUrl = `/user-pagination?page=/${this.page}`;
    this.router.navigate([nextPageUrl]);
  }
}
