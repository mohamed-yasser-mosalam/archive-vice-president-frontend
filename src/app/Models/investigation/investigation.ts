export interface Investigation {


  id: number,
  studentName: string,
  academicYear: string,
  result: string;
  year : number;
  semester : number;
  department: string,
  exam: string,
  investigationKind: string,
  examDate: string,
  belongings: string;
  investigationName: string,
  investigationResult: string,
  investigationDate: string,
  paths?: string[],
  numberOfImages?: number,

}
