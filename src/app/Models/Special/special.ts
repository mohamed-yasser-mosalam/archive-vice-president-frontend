import {Subjects} from "../subjects/subjects";
export class Special { id: number;
  no:number;
  importNum: number;
  summary: string;
  numberOfAttachments: number;
  paths: string[];
  incomeDate: Date;
  sender: string;
  subjects: Subjects[]
  typeNumber: number;
  num: number;
  createdBy:string;

  constructor(id: number, importNum: number, summary: string, numberOfAttachments: number, paths: string[], incomeDate: Date, sender: string, subjects: Subjects[], typeNumber: number, num: number,no:number,createdBy:string) {
    this.id = id;
    this.importNum = importNum;
    this.summary = summary;
    this.numberOfAttachments = numberOfAttachments;
    this.paths = paths;
    this.incomeDate = incomeDate;
    this.sender = sender;
    this.subjects = subjects;
    this.typeNumber = typeNumber;
    this.num = num;
    this.no=no;
    this.createdBy=createdBy
  }
}
