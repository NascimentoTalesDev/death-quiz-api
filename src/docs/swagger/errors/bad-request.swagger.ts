import { ApiProperty } from "@nestjs/swagger";

export class BadRequestSwagger {
    @ApiProperty()
    statusCode: number;
    @ApiProperty()
    description: string;
    @ApiProperty()
    error: string;
} 