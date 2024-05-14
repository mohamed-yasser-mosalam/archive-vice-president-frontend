export class Showallexport {
  no:number;
  id: number;
  date: Date;
  numberOfAttachments: number;
  paths: string[];
  receiver: string;
  summary: string;
  recipientName: string;
  urgentNum: number;
  urgentDate: Date;
  responseNumber: number;
  numberOfImage: number;
  responseDate: Date;
  archiveId: number;
  typeNumber: number;
  num: number;
  hasResponse:boolean;
  hasUrgent:boolean;
  createdBy:string;
  recipientDate:Date;
  hasSpecial:boolean;

  constructor(no: number, id: number, date: Date, numberOfAttachments: number, paths: string[], receiver: string, summary: string, recipientName: string, urgentNum: number, urgentDate: Date, responseNumber: number, numberOfImage: number, responseDate: Date, archiveId: number, typeNumber: number, num: number, hasResponse: boolean, hasUrgent: boolean, createdBy: string, recipientDate: Date, hasSpecial: boolean) {
    this.no = no;
    this.id = id;
    this.date = date;
    this.numberOfAttachments = numberOfAttachments;
    this.paths = paths;
    this.receiver = receiver;
    this.summary = summary;
    this.recipientName = recipientName;
    this.urgentNum = urgentNum;
    this.urgentDate = urgentDate;
    this.responseNumber = responseNumber;
    this.numberOfImage = numberOfImage;
    this.responseDate = responseDate;
    this.archiveId = archiveId;
    this.typeNumber = typeNumber;
    this.num = num;
    this.hasResponse = hasResponse;
    this.hasUrgent = hasUrgent;
    this.createdBy = createdBy;
    this.recipientDate = recipientDate;
    this.hasSpecial = hasSpecial;
  }
}