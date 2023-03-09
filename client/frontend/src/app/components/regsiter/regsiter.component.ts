import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regsiter',
  templateUrl: './regsiter.component.html',
  styleUrls: ['./regsiter.component.css']
})
export class RegsiterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username:[''],
      email:[''],
      password:[''],
      conpassword:['']
    })
  }

  onSubmit(){
    console.log("register page",this.registerForm.value);
    

  }

}
