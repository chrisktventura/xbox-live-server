import { PrismaModule } from './../prisma/prisma.module';

import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';

@Module({
  imports: [PrismaModule],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
