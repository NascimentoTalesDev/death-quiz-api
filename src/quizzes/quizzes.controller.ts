import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Get("latest")
  async findLatestQuizzesAdded() {
    return await this.quizzesService.findLatestQuizzesAdded();
  }

  @Post('favorites')
  async findAllFavorites(@Param('userId') userId: number) {    
    return await this.quizzesService.findAllFavorites(userId);
  }

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  async findAll() {
    return await this.quizzesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {    
    return this.quizzesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizzesService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.quizzesService.remove(id);
  }
}
