import {IsString, IsNotEmpty} from 'class-validator';

export class EmpDto {
    
    id : number;

    @IsNotEmpty()
    @IsString()
    empName: String; 

    @IsNotEmpty()
    contactNo : String;

    @IsNotEmpty()
    @IsString()
    username : String;

    @IsNotEmpty()
    @IsString()
    password : String; 
}