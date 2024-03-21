export class AddExport {
  receiver: string;
  summary: string;
  recipientName: string;
  num: string;
  date: Date;
  numberOfAttachments: number;
  no: number;


  constructor(
    receiver: string,
    summary: string,
    recipientName: string,
    num: string,
    date: Date,
    numberOfAttachments: number,
    no: number
  ) {
    this.receiver = receiver;
    this.summary = summary;
    this.recipientName = recipientName;
    this.num = num;
    this.date = date;
    this.numberOfAttachments = numberOfAttachments
    this.no = no
  }
}
