import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from './image/image.module';
import { VideoController } from './video/video.controller';
import { VideoService } from './video/video.service';
import { VideoModule } from './video/video.module';

@Module({
  imports: [ImageModule, VideoModule],
  controllers: [AppController, VideoController],
  providers: [AppService, VideoService],
})
export class AppModule {}
