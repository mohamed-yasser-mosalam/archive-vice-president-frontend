export class Showallimport {
  id: number;
  incomeDate:string;
  numberOfAttachments: number;
  sender: string;
  incomingLetterNumber:number;
  incomingLetterDate:Date;
  summary: string;
  recipientName: string;
  recipientDate: Date;
  responseNumber: number;
  responseDate: Date;
  responseSide: string;
  archiveId: number;
  typeNumber: number;
  num: number;
  expectResponseDate:Date;

  constructor( id: number,
  incomeDate:string,
  numberOfAttachments: number,
  sender: string,
  incomingLetterNumber:number,
  incomingLetterDate:Date,
  summary: string,
  recipientName: string,
  recipientDate: Date,
  responseNumber: number,
  responseDate: Date,
  responseSide: string,
  archiveId: number,
  typeNumber: number,
  num: number,
  expectResponseDate:Date,
) {
    this.id = id;
    this.incomeDate = incomeDate;
    this.numberOfAttachments = numberOfAttachments;
    this.sender = sender;
    this.incomingLetterNumber = incomingLetterNumber;
    this.incomingLetterDate = incomingLetterDate
    this.summary = summary;
    this.recipientName = recipientName;
    this.recipientDate = recipientDate;
    this.responseNumber = responseNumber;
    this.responseDate = responseDate;
    this.responseSide = responseSide;
    this.archiveId = archiveId;
    this.typeNumber = typeNumber;
    this.num = num;
    this.expectResponseDate =expectResponseDate;
  }
}
