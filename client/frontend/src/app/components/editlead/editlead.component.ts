import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-editlead',
  templateUrl: './editlead.component.html',
  styleUrls: ['./editlead.component.css']
})
export class EditleadComponent implements OnInit {

  leadForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.leadForm=this.fb.group({
      insurance:['individual'],
      firstname:[''],
      middlename:[''],
      lastname:[''],
      dob:[''],
      email:[''],
      mobile:['']
    })
  }

  onSubmit(){
    console.log("leadCreation",this.leadForm.value);
    
  }

}
