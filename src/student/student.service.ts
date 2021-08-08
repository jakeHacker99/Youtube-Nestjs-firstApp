import { findTeacherResDto } from './../teacher/dto/teacher.dto';
/* eslint-disable prettier/prettier */
import {
    CreateStudentDto,
    StudentResDto,
    UpdateStudentDto,
    FindStudentResDto,
} from './dto/student.dto';
import { students } from './../db';
import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    students = students;
    getStudents(): FindStudentResDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResDto {
        return this.students.find((student) => {
            return student.id === studentId;
        });
    }
    createStudent(paylaod: CreateStudentDto): StudentResDto {
        const newStudent = {
            id: uuid(),
            ...paylaod,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, studentId: string) {
        let updatedStudent: StudentResDto;
        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payload,
                };
                return updatedStudent
            } else return student;
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
    getStudentsByTeacherId(teacherId: string): FindStudentResDto[] {
        return this.students.filter((student) => {
            return student.teacher;
        });
    }
    updateStudentTeacher(teacherId: string, studentId: string): StudentResDto {
        let updatedStudent: StudentResDto;

        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    ...student,
                    teacher: teacherId,
                };
                return updatedStudent
            } else return student;
        });
        this.students = updatedStudentList;
        return updatedStudent;
    }
}
