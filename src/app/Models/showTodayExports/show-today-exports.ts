export class ShowTodayExports {
  no:number
  id:number;
  date:Date;
  numberOfAttachments: number;
  receiver: string;
  summary:string;
  recipientName:string;
  urgentNum:number;
  urgentDate:Date;
  responseNumber:number;
  responseDate:Date;
  archiveId:number;
  typeNumber: number;
  num:number

  constructor(id:number,
              no:number,date:Date,
              numberOfAttachments: number,
              receiver: string,
              summary:string,
              recipientName:string,
              urgentNum:number,
              urgentDate:Date,
              responseNumber:number,
              responseDate:Date,
              archiveId: number,
              typeNumber: number,
              num:number)
  {
    this.id=id;
    this.date=date;
    this.numberOfAttachments=numberOfAttachments;
    this.receiver=receiver;
    this.summary=summary;
    this.recipientName=recipientName;
    this.urgentNum=urgentNum;
    this.urgentDate=urgentDate;
    this.responseNumber=responseNumber;
    this.responseDate=responseDate;
    this.archiveId=archiveId;
    this.typeNumber=typeNumber;
    this.num=num
    this.no=no;
  }
}
