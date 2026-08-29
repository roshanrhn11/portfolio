import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/health')
  getHealth() {
    return {
      success: true,
      message: 'Portfolio Backend is running',
    };
  }

  @Get('api/db-test')
  async databaseTest() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;

      return {
        success: true,
        message: 'Database connection successful',
        database: 'portfolio_db',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Database connection failed',
      };
    }
  }
}