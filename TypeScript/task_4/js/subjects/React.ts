namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  };
  
  export class React extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for React'
    }
    getAvailableTeacher(teacher: Teacher): string {
        if (!teacher.experienceTeachingReact) {
            return 'No available teacher'
        }
        return `Available Teacher: ${teacher.firstName}`
    }
  };
}
