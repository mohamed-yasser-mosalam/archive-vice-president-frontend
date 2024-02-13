import {Component, OnInit} from '@angular/core';
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-any-thing',
  templateUrl: './any-thing.component.html',
  styleUrls: ['./any-thing.component.css']
})
export class AnyThingComponent{
  specialfile: any = [
    {
      studentId: uuidv4(),
      name: "",
      class: "",
      age: "",
      subjects: [
        {
          subjectId: uuidv4(),
          subject: "",
          marks: "",
        },
      ],
    },
  ];

  addSpecialFile(form: any) {
    console.log(this.specialfile);
  }

  track(item: any, index: number) {
    return index;
  }

  addNewDecision() {
    this.specialfile.push({
      id: uuidv4(),
      name: "",
      class: "",
      age: "",
      subjects: [
        {
          subjectId: uuidv4(),
          subject: "",
          marks: "",
        },
      ],
    });
  }

  removeDecision(decisionIndex: number) {
    this.specialfile.splice(decisionIndex, 1);
  }

  addNewSubject(i: number) {
    this.specialfile[i].subjects.push({
      subjectId: "",
      subject: "",
    });
  }

  removeSubject(decisionIndex: number, subjectIndex: number) {
    this.specialfile[decisionIndex].subjects.splice(subjectIndex, 1);
  }
}












// import {Component, OnInit} from '@angular/core';
// import { v4 as uuidv4 } from "uuid";
//
// @Component({
//   selector: 'app-any-thing',
//   templateUrl: './any-thing.component.html',
//   styleUrls: ['./any-thing.component.css']
// })
// export class AnyThingComponent{
//   studentData: any = [
//     {
//       studentId: uuidv4(),
//       name: "",
//       class: "",
//       age: "",
//       subjects: [
//         {
//           subjectId: uuidv4(),
//           subject: "",
//           marks: "",
//         },
//       ],
//     },
//   ];
//
//   submitForm(form: any) {
//     console.log(this.studentData);
//   }
//
//   track(item: any, index: number) {
//     return index;
//   }
//
//   addNewStudent() {
//     this.studentData.push({
//       id: uuidv4(),
//       name: "",
//       class: "",
//       age: "",
//       subjects: [
//         {
//           subjectId: uuidv4(),
//           subject: "",
//           marks: "",
//         },
//       ],
//     });
//   }
//
//   removeStudent(studentIndex: number) {
//     this.studentData.splice(studentIndex, 1);
//   }
//
//   addNewSubject(i: number) {
//     this.studentData[i].subjects.push({
//       subject: "",
//       marks: "",
//     });
//   }
//
//   removeSubject(studentIndex: number, subjectIndex: number) {
//     this.studentData[studentIndex].subjects.splice(subjectIndex, 1);
//   }
// }
