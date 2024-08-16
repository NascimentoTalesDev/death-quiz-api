import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ){}

  async validateUser(email: string, password: string){
    let user: User;
    try {
      user = await this.usersService.findByEmail(email)
    } catch (error) {
      return null
    }

    if (user) {
      console.log("SEU USER", user);
      console.log("COMPARAR SENHA" );
      return user
    }else{
      console.log("NOT USER", user);
      return null
    }
  }

  async login(user: User){
    const payload = { sub: user.id, email: user.email }

    return {
      token: this.jwtService.sign(payload)
    }
  }
 
}
