export interface Iuser extends Document{
    readonly Name:string;
    readonly fullname: string;
    readonly email: string;
    readonly password: string;
    readonly phone: number;
    readonly _id: string;
    readonly role: string
}