export class FacultyPhoneDirectory {
  id:number;
  serial:number;
  side:string;
  phone:number

  constructor(id: number, serial: number, side: string, phone: number) {
    this.id = id;
    this.serial = serial;
    this.side = side;
    this.phone = phone;
  }
}
