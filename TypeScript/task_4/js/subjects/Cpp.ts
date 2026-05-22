namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  };
  
  export class Cpp extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Cpp'
    }
    getAvailableTeacher(teacher: Teacher): string {
        if (!teacher.experienceTeachingC) {
            return 'No available teacher'
        }
        return `Available Teacher: ${teacher.firstName}`
    }
  };
}
