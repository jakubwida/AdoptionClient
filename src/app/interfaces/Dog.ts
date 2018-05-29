import {Race} from './Race'
import {User} from './User'
import {Adoption} from './Adoption'

export interface Dog
{
id:Number;

dogName:String;
dogAge:Number;
dateAdded:String;
sex:String;
vetInfo?:String;
raceId:Number;
height:Number;
description:String;

race?:Race;
user?:User;
adoption?:Adoption;
photos:String[];
}
