import { JwtService } from '@nestjs/jwt';
import { AppService } from './app.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('token')
  generateToken(@Body() payload: any) {
    return { data: this.jwtService.sign(payload) };
  }
}
