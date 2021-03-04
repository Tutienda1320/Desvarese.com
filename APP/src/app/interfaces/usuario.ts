export interface Login{
    ususario: Usuario,
    jwtoken : string
}

export interface Usuario{
    sub: string;
    nickname: string;
    estado?: boolean;
}