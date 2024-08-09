import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class SignInUserDto {
    @ApiProperty()
    @IsNotEmpty({ message: "Por favor, insira o seu email!" })
    email: string;

    @ApiProperty()
    @IsNotEmpty({ message: "Por favor, insira o sua senha!" })
    password: string;
}
