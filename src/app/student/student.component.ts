import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
    students =[
        {id:1,name:"Ahmed",age:20, gender:"male", education:"computer science", is_graduate:false},
        {id:2,name:"Omar",age:23, gender:"male", education:"sciense", is_graduate:true, },
        {id:3,name:"Ali",age:22, gender:"male", education:"computer science", is_graduate:false},
      ]
}
