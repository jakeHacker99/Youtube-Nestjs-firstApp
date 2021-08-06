import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:tTeacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents() {
        return 'Get All Students that belong to teacher';
    }
    @Put("/:studentId")
    updateStudentTeacher() {
        return "udpate Student Teacher";
    }
}
