import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "../../../interfaces/dtos/users/create-user.dto";
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsersRepository {
    constructor(private prismaService: PrismaService) {}

    async create(createUserDto: CreateUserDto){
        const {email, name } = createUserDto
        try {
            const userExists = await this.prismaService.user.findUnique({
                where:{
                    email,
                }
            })
            
            if (userExists) return { statusCode: 400, message: ["Email já está em uso"], error: "Email" }
            
            const user = await this.prismaService.user.create({
                data:{
                    email,
                    name,
                }
            })            
            return user
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);               
        }
    }

    async findAll(){
        try {
            const users = await this.prismaService.user.findMany();
            return users;
          } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
          }
    }

    async findOne(id: number){
        try {
            const user = await this.prismaService.user.findUnique({
                where:{
                    id
                }
            });
            return user;
          } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
          }
    }

    async findByEmail(email: string){
        try {
            const user = await this.prismaService.user.findUnique({
                where:{
                    email
                }
            });
            return user;
          } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
          }
    }
}