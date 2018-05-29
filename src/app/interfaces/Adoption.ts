import {User} from './User'
import {Dog} from './Dog'

export interface Adoption
{
adoptionId:Number;

dogId:Number;
userId:Number;
adoptionStatusId:Number;
dateAdopted?:Date;
adoptedDescription:String;

dog?:Dog;
user?:User;
adoptionStatus?:String;
}
