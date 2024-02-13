import {Decision} from "../decisions/decision";

export class Subjects {
  num:number;
  head:string;
  decisions:Decision[]


  constructor(num: number, head: string, decisions: Decision[]) {
    this.num = num;
    this.head = head;
    this.decisions = decisions;
  }
}
