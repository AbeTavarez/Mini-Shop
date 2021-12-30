import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { dummyData } from '../dummy-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.listing = dummyData.find(listing => listing.id === id);

    // message
    this.message = `Hello, I'm interested in your ${this.listing.name.toLowerCase()!}`;
  }

  sendMessage(): void {
    alert(`Your message has been sent!`);
    this.router.navigateByUrl('/listings');
  }

}
