export class Showallimport {
  no: number
  id: number;
  incomeDate: Date;
  numberOfImages: number;
  numberOfAttachments: number;
  paths: string [];
  sender: string;
  incomingLetterNumber: number;
  incomingLetterDate: Date;
  summary: string;
  recipientName: string;
  recipientDate: Date;
  responseNumber: number;
  responseDate: Date;
  responseSide: string;
  archiveId: number;
  typeNumber: number;
  num: number;
  expectResponseDate: Date;
  receiver: string;
  createdBy: string;
  hasResponse: boolean;
  hasSpecial: boolean;


  constructor(no: number, id: number, incomeDate: Date, numberOfImages: number, numberOfAttachments: number, paths: string[], sender: string, incomingLetterNumber: number, incomingLetterDate: Date, summary: string, recipientName: string, recipientDate: Date, responseNumber: number, responseDate: Date, responseSide: string, archiveId: number, typeNumber: number, num: number, expectResponseDate: Date, receiver: string, createdBy: string, hasResponse: boolean, hasSpecial: boolean) {
    this.no = no;
    this.id = id;
    this.incomeDate = incomeDate;
    this.numberOfImages = numberOfImages;
    this.numberOfAttachments = numberOfAttachments;
    this.paths = paths;
    this.sender = sender;
    this.incomingLetterNumber = incomingLetterNumber;
    this.incomingLetterDate = incomingLetterDate;
    this.summary = summary;
    this.recipientName = recipientName;
    this.recipientDate = recipientDate;
    this.responseNumber = responseNumber;
    this.responseDate = responseDate;
    this.responseSide = responseSide;
    this.archiveId = archiveId;
    this.typeNumber = typeNumber;
    this.num = num;
    this.expectResponseDate = expectResponseDate;
    this.receiver = receiver;
    this.createdBy = createdBy;
    this.hasResponse = hasResponse;
    this.hasSpecial = hasSpecial;
  }
}
