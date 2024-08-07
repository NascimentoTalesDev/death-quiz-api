import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { CreateSwagger } from './swagger/create.swagger';
import { User } from './entities/user.entity';
// import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
// import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';

@Controller('users')
@ApiTags("Users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiResponse({ status: 201, description: "Usuário criado com sucesso", isArray: true, type: CreateSwagger })
  // @ApiResponse({ status: 400, description: "Parametros inválidos", type: BadRequestSwagger })
  create(@Body() createUserDto: CreateUserDto){
    const { name, email, password, passwordConfirmation } = createUserDto
    if (!name) return { statusCode: 400, message: "Nome não pode ser vazio", error: "Missing param: name" }
    if (!email) return { statusCode: 400, message: "Email não pode ser vazio", error: "Missing param: email" }
    if (!password) return { statusCode: 400, message: "Senha não pode ser vazia", error: "Missing param: password" }
    if (!passwordConfirmation) return { statusCode: 400, message: "Confirmação de senha não pode ser vazia", error: "Missing param: confirmPassword" }
    if (passwordConfirmation !== password ) return { statusCode: 400, message: "As senhas não conferem", error: "Password not match" }
    
    return { statusCode: 201, user: User }
    // return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a user by id" })
  // @ApiResponse({ status: 404, description: "Usuário não encontrado", type: NotFoundSwagger })
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
}
