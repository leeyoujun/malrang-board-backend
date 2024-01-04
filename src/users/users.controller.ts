import { Controller, Get, Post, Put, Param, Delete, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Req() request: Request, @Param() params): string {
    return this.userService.findOne(params.id);
  }

  @Post()
  create() {
    return this.userService.create();
  }

  @Put(':id')
  update(@Param() params) {
    return this.userService.update(params.id);
  }

  @Delete(':id')
  delete(@Param() params): string {
    return this.userService.delete(params.id);
  }
}
