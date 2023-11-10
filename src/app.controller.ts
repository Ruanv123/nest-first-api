import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './module/auth/decorators/is-public-decorator';
import { CurrentUser } from './module/auth/decorators/current-user.decorator';
import { User } from './module/user/entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
