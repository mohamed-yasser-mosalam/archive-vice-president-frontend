export class Specialfile {
  id: number;
  importNum: number;
  summary: string;
  numberOfAttachments: number;
  paths: string[];
  incomeDate: Date;
  sender: string;
  subjects: any[];
  archiveId: number;
  typeNumber: number;
  num: number;


  constructor(
    id: number,
    importNum: number,
    summary: string,
    numberOfAttachments: number,
    paths: string[],
    incomeDate: Date,
    sender: string,
    subjects: any[],
    archiveId: number,
    typeNumber: number,
    num: number
  ) {
    this.id = id;
    this.importNum = importNum;
    this.summary = summary;
    this.numberOfAttachments = numberOfAttachments;
    this.paths=paths;
    this.incomeDate = incomeDate;
    this.sender = sender;
    this.subjects = subjects;
    this.archiveId=archiveId;
    this.typeNumber=typeNumber;
    this.num=num

  }
}
