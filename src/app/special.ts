import {Subjects} from "./subjects";

export interface Special {
  id: number;
  no:number;
  importNum: number;
  summary: string;
  numberOfAttachments: number;
  paths: string[];
  incomeDate: Date;
  sender: string;
  subjects: Subjects[]
  typeNumber: number;
  num: number;
  createdBy:string;
  fileType:string
}
