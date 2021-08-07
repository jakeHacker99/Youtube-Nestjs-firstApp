import { TeacherService } from './../teacher/teacher.service';
/* eslint-disable prettier/prettier */
import { StudentService } from './../student/student.service';
import { StudentTeacherController } from './../teacher/student.controller';
import { TeacherController } from './../teacher/teacher.controller';
import { StudentController } from './../student/student.controller';
import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule { }
