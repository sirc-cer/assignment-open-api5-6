import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule

@Module({
  imports: [HttpModule],  // Add HttpModule here
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService],
})
export class AppModule {}

