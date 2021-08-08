/* eslint-disable prettier/prettier */


import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})

export class StudentModule { }