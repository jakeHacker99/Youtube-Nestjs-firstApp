/* eslint-disable prettier/prettier */
export class CreateStudentDto {
    name: string;
    teacher: string;
}
export class UpdateStudentDto {
    name: string;
    teacher: string;
}

export class FindStudentResDto {
    id: string;
    name: string;
    teacher: string;
}

export class StudentResDto {
    id: string;
    name: string;
    teacher: string;
}
