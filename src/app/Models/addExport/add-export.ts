export class AddExport {
  receiver: string;
  summary: string;
  recipientName: string;
  num: string;
  date: Date;
  numberOfAttachments: number;
  no: number;
  secure:number


  constructor(
    receiver: string,
    summary: string,
    recipientName: string,
    num: string,
    date: Date,
    numberOfAttachments: number,
    no: number,
    secure:number
  ) {
    this.receiver = receiver;
    this.summary = summary;
    this.recipientName = recipientName;
    this.num = num;
    this.date = date;
    this.numberOfAttachments = numberOfAttachments
    this.no = no
    this.secure=secure
  }
}
