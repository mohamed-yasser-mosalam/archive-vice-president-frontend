export class Showallimport {
  no: number
  id: number;
  incomeDate: Date;
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
  hasResponse: boolean

  constructor(id: number,
              incomeDate: Date,
              numberOfAttachments: number,
              paths: string [],
              sender: string,
              incomingLetterNumber: number,
              incomingLetterDate: Date,
              summary: string,
              recipientName: string,
              recipientDate: Date,
              responseNumber: number,
              responseDate: Date,
              responseSide: string,
              archiveId: number,
              typeNumber: number,
              num: number,
              expectResponseDate: Date,
              receiver: string,
              no: number,
              createdBy: string,
              hasResponse: boolean
  ) {
    this.id = id;
    this.incomeDate = incomeDate;
    this.numberOfAttachments = numberOfAttachments;
    this.paths = paths;
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
    this.expectResponseDate = expectResponseDate;
    this.receiver = receiver;
    this.no = no;
    this.createdBy = createdBy;
    this.hasResponse=hasResponse

  }
}
