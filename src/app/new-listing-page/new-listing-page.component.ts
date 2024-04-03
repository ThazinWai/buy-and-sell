import { Component, OnInit } from '@angular/core';'../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit{
name:String = '';
description:String ='';
price:String ='';

constructor(
  private router:Router,
){}

  ngOnInit(): void {
     
  }

  onSubmit(): void {
      alert('Creating a new listing....');
      this.router.navigateByUrl('/my-listings');
  }

}
