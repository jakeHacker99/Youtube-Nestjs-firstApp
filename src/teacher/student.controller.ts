/* eslint-disable prettier/prettier */
import { findTeacherResDto } from './dto/teacher.dto';
import { FindStudentResDto } from './../student/dto/student.dto';
import { CreateStudentDto } from './../student/dto/student.dto';
import { Controller, Get, Param, Put } from '@nestjs/common';


@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
	@Get()
	getStudents(@Param('teacherId') teacherId: string): findTeacherResDto[] {
		return `Get All Students that belong to teacher id ${teacherId}`;
	}
	@Put('/:studentId')
	updateStudentTeacher(

		@Param('teacherId') teacherId: string,
		@Param('studentId') studentId: string,
	): findTeacherResDto {
		return `udpate Student with id ${studentId} and Teacher with id ${teacherId}`;
	}
}
