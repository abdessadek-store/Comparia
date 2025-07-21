export class User {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public telephone: string = '',
    public ville: string = '',
    public budget:number=0
  ) {}
}