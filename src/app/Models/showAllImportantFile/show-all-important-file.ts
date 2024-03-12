export class ShowAllImportantFile {
    no:number;
    id: number;
    summary: string;
  expectResponseDate:Date;

  constructor(id:number,summary:string,  expectResponseDate:Date,no:number) {
        this.id=id;
        this.summary=summary;
        this.expectResponseDate=expectResponseDate;
        this.no=no
    }
}
