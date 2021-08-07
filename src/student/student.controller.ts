/* eslint-disable prettier/prettier */
import { StudentService } from './student.service';
import {
  StudentResDto,
  FindStudentResDto,
  CreateStudentDto,
  UpdateStudentDto
} from './dto/student.dto';

import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }
  @Get()
  getStudents(): FindStudentResDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): FindStudentResDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResDto {
    return this.studentService.createStudent(body);
  }
  @Put('/: studentId')
  upateStudentById(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
