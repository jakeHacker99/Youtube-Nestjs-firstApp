import { StudentModule } from './../student/student.modules';
/* eslint-disable prettier/prettier */
import { StudentController } from './../student/student.controller';

import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

TeacherController
import { Module } from '@nestjs/common';

@Module({
    imports: [StudentModule],
    controllers: [TeacherController, StudentController],
    providers: [TeacherService]
})

export class TeacherModule { }