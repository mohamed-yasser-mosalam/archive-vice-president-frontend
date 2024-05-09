export class TeachingPhoneDirectory {
  id:number;
  serial:number;
  name: string;
  job: string;
  department: string;
  phone: number;
  mobile:number
  address: string;
  email: string;
  notes: string;

  constructor(id: number, serial: number, name: string, job: string, department: string, phone: number, mobile: number, address: string, email: string, notes: string) {
    this.id = id;
    this.serial = serial;
    this.name = name;
    this.job = job;
    this.department = department;
    this.phone = phone;
    this.mobile = mobile;
    this.address = address;
    this.email = email;
    this.notes = notes;
  }
}
