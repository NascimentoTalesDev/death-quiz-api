import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/domain/services/auth/auth.service';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
    
    constructor(private readonly authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req: any){
        return this.authService.login(req.user)
    }
}