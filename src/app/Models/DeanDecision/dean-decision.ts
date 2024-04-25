export class DeanDecision {
  id: number;
  no: number;
  date: Date;
  summary: string;
  createdBy: string;
  paths: string[];
  archiveId: number;
  num: number;
  typeNumber: number;


  constructor(id: number, no: number, date: Date, summary: string, createdBy: string, paths: string[],
              archiveId: number, num: number, typeNumber: number) {
    this.id = id;
    this.no = no;
    this.date = date;
    this.summary = summary;
    this.createdBy = createdBy;
    this.paths = paths;
    this.archiveId = archiveId;
    this.num = num;
    this.typeNumber = typeNumber;
  }
}
