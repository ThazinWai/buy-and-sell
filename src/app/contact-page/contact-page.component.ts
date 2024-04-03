import { Component, OnInit } from '@angular/core';
import {Listing} from '../types';
import { fakeListings } from '../fake-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{
  email:String ='';
  message:String = '';
  listing!:Listing;


  constructor(
     private route:ActivatedRoute,
     private router:Router,
  ){}
  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing=>listing.id === id) as Listing;
    this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
