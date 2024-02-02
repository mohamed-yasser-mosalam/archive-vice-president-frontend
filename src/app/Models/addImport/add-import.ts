export class AddImport {
  incomeDate:string;
  sender: string;
  incomingLetterNumber:number;
  incomingLetterDate:Date;
  summary: string;
  recipientName: string;
  recipientDate: Date;
  typeNumber: number;
  num: number;
  expectResponseDate:Date;

  constructor(
               incomeDate:string,
               sender: string,
               incomingLetterNumber:number,
               incomingLetterDate:Date,
               summary: string,
               recipientDate: Date,
               recipientName: string,
               num: number,
               expectResponseDate:Date,
  ) {
    this.incomeDate=incomeDate;
    this.sender = sender;
    this.incomingLetterNumber = incomingLetterNumber;
    this.incomingLetterDate = incomingLetterDate
    this.summary = summary;
    this.recipientName = recipientName;
    this.recipientDate = recipientDate;
    this.num = num;
    this.expectResponseDate = expectResponseDate;
  }
}
