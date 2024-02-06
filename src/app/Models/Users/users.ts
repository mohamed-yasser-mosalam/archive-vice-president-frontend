export class Users {
  username: string;
  firstName: string;
  lastName: string;
  authorities:string
  isActive: number;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    authorities:string,
    isActive: number
  ) {
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.authorities=authorities;
    this.isActive=isActive
  }
}
