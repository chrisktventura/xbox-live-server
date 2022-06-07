import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';

@Module({
  imports: [PrismaService],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
