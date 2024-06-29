export class Mandate {

  id: number;
  no: number;


  constructor(id: number, no: number, degree: string, name: string, department: string, deputationUniversity: string, deputationPeriod: number, deputationDays: DeputationDays[], note: string) {
    this.id = id;
    this.no = no;
    this.degree = degree;
    this.name = name;
    this.department = department;
    this.deputationUniversity = deputationUniversity;
    this.deputationPeriod = deputationPeriod;
    this.deputationDays = deputationDays;
    this.note = note;
  }

  degree: string;
  name: string;
  department: string;
  deputationUniversity: string;
  deputationPeriod: number;
  deputationDays: DeputationDays[]
  note: string;
}
export  interface DeputationDays{
  id:number
  day:string
}
