export class ShowTodayExports {
    id:number;
    receiver: string;
    summary:string;
    recipientName:string;
    typeNumber: number;
    num:number;

    constructor(
        id:number,
        receiver: string,
        summary:string,
        recipientName:string,
        typeNumber: number,
        num:number)
    {
        this.id=id;
        this.receiver=receiver;
        this.summary=summary;
        this.recipientName=recipientName;
        this.typeNumber=typeNumber;
        this.num=num
    }
}


