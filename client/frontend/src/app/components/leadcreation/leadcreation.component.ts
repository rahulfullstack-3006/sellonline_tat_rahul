import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook,faLinkedin,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

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
  constructor(private fb:FormBuilder,private router:Router) { }

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

  onSaveProcced(){
   this.router.navigate(['/leadDashboard'])
  }

}
