export class Mandate {

  id: number;
  no: number;
  count: number;
  deputationDaysIds: []
  departmentAccept: number
   notice:boolean;
  constructor(id: number, no: number, degree: string, name: string, department: string,
              deputationUniversity: string, deputationPeriod: number, deputationDays: DeputationDays[],
              note: string, departmentRecordNum: number, deputationDaysIds: [], departmentAccept: number,
              count: number,notice:boolean) {
    this.id = id;
    this.no = no;
    this.degree = degree;
    this.name = name;
    this.department = department;
    this.deputationUniversity = deputationUniversity;
    this.deputationPeriod = deputationPeriod;
    this.deputationDays = deputationDays;
    this.note = note;
    this.departmentRecordNum = departmentRecordNum;
    this.count = count;
    this.deputationDaysIds = deputationDaysIds;
    this.departmentAccept = departmentAccept
    this.notice=notice
  }

  degree: string;
  name: string;
  department: string;
  deputationUniversity: string;
  deputationPeriod: number;
  deputationDays: DeputationDays[]
  note: string;
  departmentRecordNum: number
  departmentSpecialNum: number
  facultySpecialNum: number
}

export interface DeputationDays {
  id: number
  day: string
}
