export class Users {
  id:number
  username: string;
  firstName: string;
  lastName: string;
  roles:string
  isActive: number;
  imagePath: number;

  constructor(
    id:number,
    username: string,
    firstName: string,
    lastName: string,
    roles:string,
    isActive: number,
    imagePath:number
  ) {
    this.id=id;
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.roles=roles;
    this.isActive=isActive;
    this.imagePath=imagePath;


  }
}
