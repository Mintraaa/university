class Univerity {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.Department = [];
    this.Student = [];
    this.Professor = [];
  }
  addDepartment(department) {
    this.department.push(department);
  }
  addStudent(student) {
    this.student.push(student);
  }
  addProfessor(professor) {
    this.professor.push(professor);
  }
  removeDepartment(department) {
    this.department.splice(department);
  }
  removeStudent(student) {
    this.student.splice(student);
  }
  removeProfessor(professor) {
    this.profssor.splice(professor);
  }
  getDepartments() {
    return this.department;
  }
  getStudents() {
    return this.student;
  }
  getProfessors() {
    return this.professor;
  }
  toString() {
    return `university [name = ${this.name},
            location = ${this.location}`;
  }
}

class Department {
  constructor(name) {
    this.name = name;
    this.univerity = null;
    this.course = [];
    this.student = [];
  }
}

class Course {
  code = "";
  title = "";
  constructor(code, title) {
    this.code = code;
    this.title = title;
    this.student = [];
  }
}
class Person {
  name = "";
  address = "";
  email = "";
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
  toString() {}
}

class Professor extends Person {
  constructor(name, address, email, staffId) {
    super(name, address, email);
    this.staffId = staffId;
    this.course = [];
  }
  teachCourse(Course) {}
  stopTeachingCourse(Course) {}
  getCourses() {
    return this.course;
  }
  toString() {
    return `Professor [name = ${this.name},
            staffId =${this.staffId}]`;
  }
}
class Student extends Person {
  constructor(name, address, email, studentId, year) {
    super(name, address, email);
    this.studentId = studentId;
    this.year = year;
    this.course = [];
  }
  teachCourse(Course) {}
  stopTeachingCourse(Course) {}
  getCourses() {
    //return this.course;
  }
  toString() {
    return `Student [studentId = ${this.studentId},
      year =${this.year}]`;
  }
}

const main = () => {
  const univerity = new Univerity(
    "Nakhon Pathom Rajabhat University",
    "85 Malaiman Road",
    "Nakhon Pathom",
    "Thailand"
  );
  const department = new Department("Computer Science", "Software Engineering");
  const course = new Course("CS101 - Introduction to programming");
  const student = new Student("Alice", "Bob");
  const professor = new Professor(
    "Dr. Worachet Utta",
    "Dr. Udsanee Pakdeetrakulwong"
  );
  console.log(univerity);
  console.log(department);
  console.log(course);
  console.log(student);
  console.log(professor);
};
main();
