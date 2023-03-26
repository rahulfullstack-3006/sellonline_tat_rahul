import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-leadcreation',
  templateUrl: './leadcreation.component.html',
  styleUrls: ['./leadcreation.component.css']
})
export class LeadcreationComponent implements OnInit {
  leadForm!:FormGroup;
  faFacebook=faFacebook;
  faYoutube=faYoutube;
  faLinkedin=faLinkedin;
  faTwitter=faTwitter;
  leadCreateForm:any=FormGroup
  constructor(private fb:FormBuilder,private router:Router,private mainService:MainService) { }

  ngOnInit(): void {
    this.leadForm=this.fb.group({
      insurance_type:['individual'],
      first_name:[''],
      middle_name:[''],
      last_name:[''],
      dob:[''].toString,
      email:[''],
      mobile:[''],
      address:[''],
      state:[''],
      city:['']

    })
  }

  onSubmit(){
    console.log("leadCreation",this.leadForm.value);
    // const dateModify=this.leadForm.value.dob;
    // console.log("datemodify",dateModify.toString());
    

    this.mainService.leadCreate(this.leadForm.value).subscribe({
      next:(result)=>{
        console.log("result",result);
        alert('Lead save successfully');
        this.router.navigate(['/leadDashboard']);
        
      },
      error:(error)=>{
        console.log("error",error);
        
      }

    })
    
    
  }

  // onSaveProcced(){
  //  this.router.navigate(['/leadDashboard'])
  // }

}
