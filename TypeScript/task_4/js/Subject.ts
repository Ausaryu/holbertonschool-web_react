namespace Subjects {
    export class Subject {
        teacher!: Teacher;
        
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        };
        
        constructor(teacher: Teacher) {
            this.setTeacher(teacher)
        }

    }
};
