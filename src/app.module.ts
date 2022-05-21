import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genre/genre.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GamesModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
