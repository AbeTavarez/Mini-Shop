import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dummyData } from '../dummy-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // gets the is from url (ActivatedRoute)
    const id = this.route.snapshot.paramMap.get('id');
    // finds the corresponding listing
    this.listing = dummyData.find(listing => listing.id === id)
  }

}
