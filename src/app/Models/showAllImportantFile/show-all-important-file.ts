export class ShowAllImportantFile {
    id: number;
    summary: string;
  expectResponseDate:Date;

  constructor(id:number,summary:string,  expectResponseDate:Date) {
        this.id=id;
        this.summary=summary;
        this.expectResponseDate=expectResponseDate
    }
}
