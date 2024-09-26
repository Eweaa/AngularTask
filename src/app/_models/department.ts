export class Department {
    id: number;
    name: string;
    loc: string;
    status: boolean;

    constructor(id: number, name: string, loc: string, status: boolean) 
    {
        this.id = id;
        this.name = name;
        this.loc = loc;
        this.status = status;
    }
}
