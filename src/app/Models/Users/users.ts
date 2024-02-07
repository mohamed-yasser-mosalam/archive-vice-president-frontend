export class Users {
  username: string;
  firstName: string;
  lastName: string;
  roles:string
  isActive: number;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    roles:string,
    isActive: number
  ) {
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.roles=roles;
    this.isActive=isActive
  }
}
