import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users/users.repository';
import { CreateUserDto } from '../../../interfaces/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../../interfaces/dtos/users/update-user.dto';
import { SignInUserDto } from '../../../interfaces/dtos/users/sign-in-user.dto';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class UsersService {
  
  constructor(
    private userRepository: UsersRepository,
    private readonly authService: AuthService
  ){}

  async create(user: CreateUserDto){    
    return await this.userRepository.create(user);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  signUp(createUserDto: CreateUserDto) {    
    return `This action signUp user`;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new NotFoundException({ message: "Usuário não encontrado!", error: "Not Found", statusCode: 404 });

    return user 
  }

  async signIn(signInUserDto: SignInUserDto) {    
    const user = await this.findByEmail(signInUserDto.email)
    return user  
  }
}
