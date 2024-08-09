import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from '../../../domain/services/users/users.service';
import { CreateUserDto } from '../../dtos/users/create-user.dto';
import { UpdateUserDto } from '../../dtos/users/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInUserDto } from '../../dtos/users/sign-in-user.dto';
import { CreateSwagger } from '../../../docs/swagger/users/create.swagger';
import { BadRequestSwagger } from 'src/docs/swagger/errors/bad-request.swagger';
import { NotFoundSwagger } from 'src/docs/swagger/errors/not-found.swagger';

@Controller('users')
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('sign-up')
  @ApiOperation({ summary: "Create a new user and make login" })
  signUp(@Body() createUserDto: CreateUserDto){
    return this.usersService.signUp(createUserDto);
  }
  
  @Post('sign-in')
  @ApiOperation({ summary: "Make login user" })
  signIn(@Body() signInUserDto: SignInUserDto){
    return this.usersService.signIn(signInUserDto);
  }

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso", isArray: true, type: CreateSwagger })
  @ApiResponse({ status: 400, description: "Parametros inválidos", type: BadRequestSwagger })
  create(@Body() createUserDto: CreateUserDto){    
    return this.usersService.create(createUserDto)
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a user by id" })
  @ApiResponse({ status: 404, description: "Usuário não encontrado", type: NotFoundSwagger })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: "Edit a user by id" })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a user by id" })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
