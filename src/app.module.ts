import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from './image/image.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [ImageModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
