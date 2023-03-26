import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any=FormGroup;
  constructor(private fb:FormBuilder,private mainService:MainService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:'',
      password:''

    })
  }

  onSubmit(){
    console.log("this.loginForm.value",this.loginForm.value);
    this.mainService.login(this.loginForm.value).subscribe({
    next:(data:any)=>{
    console.log("data",data);
    this.router.navigate(['/leadDashboard'])
    
    },
    error:(err)=>{
      console.log("err in login",err);
      
    }
    })

  }

}
