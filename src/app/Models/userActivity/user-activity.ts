export class UserActivity {
  id:number;
  summary:string;
  createdBy:string;
  lastModifiedBy:Date;
  createdDate:Date;
  lastModifiedDate:Date;
  type:string;
  no:number;


  constructor(id: number, summary: string, createdBy: string, lastModifiedBy: Date,
              createdDate:Date,lastModifiedDate:Date,type:string,no:number
) {
    this.id = id;
    this.summary = summary;
    this.createdBy = createdBy;
    this.lastModifiedBy = lastModifiedBy;
    this.createdDate=createdDate;
    this.lastModifiedDate=lastModifiedDate;
    this.type=type;
    this.no=no
  }
}
