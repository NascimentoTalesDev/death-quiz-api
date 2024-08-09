import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty({ message: "O nome não pode ser vazio!" })
    name: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: "O email não pode ser vazio!" })
    email: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: "A senha não pode ser vazia!" })
    password: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: "A confirmação de senha não pode ser vazia!" })
    passwordConfirmation: string;
}
