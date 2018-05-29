export interface User
{
id:Number;

firstname:String;
lastname:String;
email?:String;
address:String;
provinceId:Number;

password?:String;

province:String; //orginally ID, but string is fine
photo?:string;
}
