import { Module } from '@nestjs/common';
import { CoService } from './co/co.service';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
  providers: [CoService, ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
