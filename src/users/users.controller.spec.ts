import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let userController: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  it('should return 400 if no name is provider', () => {
    const body = {
      name: '',
      email: 'any_email@example.com',
      password: 'any_password',
      passwordConfirmation: 'any_password',
    };
    const httpResponse = userController.create(body);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 400 if no email is provider', () => {
    const body = {
      name: 'any_name',
      email: '',
      password: 'any_password',
      passwordConfirmation: 'any_password',
    };
    const httpResponse = userController.create(body);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 400 if no password is provider', () => {
    const body = {
      name: 'any_name',
      email: 'any_email@example.com',
      password: '',
      passwordConfirmation: 'any_password',
    };
    const httpResponse = userController.create(body);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('should return 400 if no passwordConfirmation is provider', () => {
    const body = {
      name: 'any_name',
      email: 'any_email@example.com',
      password: 'any_password',
      passwordConfirmation: '',
    };
    const httpResponse = userController.create(body);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 400 if password no matcher with passwordConfirmation', () => {
    const body = {
      name: 'any_name',
      email: 'any_email@example.com',
      password: 'any_password',
      passwordConfirmation: 'no_matcher_password',
    };
    const httpResponse = userController.create(body);
    expect(httpResponse.statusCode).toBe(400);
  });
});
