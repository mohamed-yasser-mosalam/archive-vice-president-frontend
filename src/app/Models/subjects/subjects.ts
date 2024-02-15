import {Decision} from "../decisions/decision";

export class Subjects {
  num:number;
  head:string;
  decision:Decision[]


  constructor(num: number, head: string, decision: Decision[]) {
    this.num = num;
    this.head = head;
    this.decision = decision;
  }
}
