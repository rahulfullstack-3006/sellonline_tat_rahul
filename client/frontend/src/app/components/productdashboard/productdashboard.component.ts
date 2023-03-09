import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {
  title = 'ng-carousel-demo';
   
  images = [
    {title: '', short: 'Protecting those who care unconditionally', src: "https://sellonlineuat.tataaia.com/wps/PA_TATAAIA_SO/images/revamp/product-banner.jpg?v=1676638150423"},
    {title: '', short: 'Protecting those who care unconditionally', src: "https://sellonlineuat.tataaia.com/wps/PA_TATAAIA_SO/images/revamp/product-banner.jpg?v=1676638150423"},
    {title: '', short: 'Protecting those who care unconditionally', src: "https://sellonlineuat.tataaia.com/wps/PA_TATAAIA_SO/images/revamp/product-banner.jpg?v=1676638150423"}
  ];

//   tabs = [
//     {
//         "bgColorClass": "primary",
//         "content": "Tab Content ... "
//     },
//     {
//         "bgColorClass": "secondary",
//         "content": "Tab Content..."
//     }
// ];
   
  constructor(config: NgbCarouselConfig,private router:Router) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

  onSisPersonal(){
   this.router.navigate(['/sisPersonal'])
  }

  onBuyNow(){
    this.router.navigate(['/sisPersonal'])
  }

}
