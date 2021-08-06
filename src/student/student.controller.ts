import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return 'All Students ';
    }

    @Get("/:studentId")
    getStudentById() {
        return "Get StudentById";
    }

    @Post()
    createStudent() {
        return "Create Student";
    }
    @Put("/: studentId")
    upateStudentById() {
        return "updated student with Id "
    }
}
