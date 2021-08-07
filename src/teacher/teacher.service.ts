/* eslint-disable prettier/prettier */
import { findTeacherResDto } from './dto/teacher.dto';
import { teachers } from './../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
    private teachers = teachers;
    getTeachers(): findTeacherResDto[] {
        return this.teachers;
    }
    getTeacherById(teacherId: string): findTeacherResDto {
        return this.teachers.find((teacher) => {
            return (teacher.id = teacherId);
        });
    }
}
