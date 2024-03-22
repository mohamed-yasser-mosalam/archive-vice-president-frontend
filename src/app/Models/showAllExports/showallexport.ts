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
  responseDate: Date;
  archiveId: number;
  typeNumber: number;
  num: number;
  hasResponse:boolean;
  hasUrgent:boolean
  constructor(id: number, date: Date,
              numberOfAttachments: number,
              paths: string [],
              receiver: string,
              summary: string,
              recipientName: string,
              urgentNum: number,
              urgentDate: Date,
              responseNumber: number,
              responseDate: Date,
              archiveId: number,
              typeNumber: number,
              num: number,
              no:number,
              hasResponse:boolean,
              hasUrgent:boolean) {
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
    this.responseDate = responseDate;
    this.archiveId = archiveId;
    this.typeNumber = typeNumber;
    this.num = num;
    this.no=no;
    this.hasResponse=hasResponse;
    this.hasUrgent=hasUrgent

  }
}
