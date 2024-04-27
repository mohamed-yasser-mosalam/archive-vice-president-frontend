export class Signs {
  id:number;
  date:Date;
  sender:string;
  via:string;
  signInformer:string;
  signInformerSelf:string;
  signInformerPhone:string;
  summary:string;
  signSignature:string;
  signSelf:string;
  signRecipientName:string;
  signRecipientSelf:string;
  signRecipientDate:Date;
  signExcutedName:string;
  signExcutedSelf:string;
  SignExecutionDate:Date;
  depend:string;


  constructor(id: number, date: Date, sender: string, via: string, signInformer: string, signInformerSelf: string, signInformerPhone: string, summary: string, signSignature: string, signSelf: string, signRecipientName: string, signRecipientSelf: string, signRecipientDate: Date, signExcutedName: string, signExcutedSelf: string, SignExecutionDate: Date, depend: string) {
    this.id = id;
    this.date = date;
    this.sender = sender;
    this.via = via;
    this.signInformer = signInformer;
    this.signInformerSelf = signInformerSelf;
    this.signInformerPhone = signInformerPhone;
    this.summary = summary;
    this.signSignature = signSignature;
    this.signSelf = signSelf;
    this.signRecipientName = signRecipientName;
    this.signRecipientSelf = signRecipientSelf;
    this.signRecipientDate = signRecipientDate;
    this.signExcutedName = signExcutedName;
    this.signExcutedSelf = signExcutedSelf;
    this.SignExecutionDate = SignExecutionDate;
    this.depend = depend;
  }
}
