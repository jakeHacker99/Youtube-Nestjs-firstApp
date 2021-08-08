
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TeacherModule } from '../teacher/teacher.module';
import { StudentModule } from './../student/student.modules';


@Module({
  imports: [StudentModule, TeacherModule],

})
export class AppModule { }
