export class ShowTodayImports {
    id:number;
    sender: string;
    summary:string;
    recipientName:string;
    typeNumber: number;
    num:number;

    constructor(
        id:number,
        sender: string,
        summary:string,
        recipientName:string,
        typeNumber: number,
        num:number)
    {
        this.id=id;
        this.sender=sender;
        this.summary=summary;
        this.recipientName=recipientName;
        this.typeNumber=typeNumber;
        this.num=num
    }
}



