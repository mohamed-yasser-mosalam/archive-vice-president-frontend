export class Users {
  username: string;
  firstName: string;
  lastName: string;
  isActive: number;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    isActive: number
  ) {
    this.username=username;
    this.firstName=firstName;
    this.lastName=lastName;
    this.isActive=isActive
  }
}
