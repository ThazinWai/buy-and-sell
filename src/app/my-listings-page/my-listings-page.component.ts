import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit{

  listings:Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeMyListings;
  }

  onDeleteClicked(listingId : String) : void{
      alert(`Deleting your listing with id ${listingId}`);
  }
}
