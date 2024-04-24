export class DeanDecision {
  date: Date;
  summary: string;
  num: number;
  typeNumber:number;
  constructor(date: Date,
              summary: string,
              num: number,
              typeNumber:number) {
    this.date=date;
    this.summary=summary;
    this.num=num;
    this.typeNumber=typeNumber
  }
}
