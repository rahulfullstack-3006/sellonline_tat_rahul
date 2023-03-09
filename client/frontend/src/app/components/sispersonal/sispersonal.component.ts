import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sispersonal',
  templateUrl: './sispersonal.component.html',
  styleUrls: ['./sispersonal.component.css']
})
export class SispersonalComponent implements OnInit {
  faPencil=faPencil
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  letDoThis(){
   this.router.navigate(['/sisCalculation'])
  }

}
