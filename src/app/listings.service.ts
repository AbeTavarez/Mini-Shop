import { Injectable } from '@angular/core';
import { dummyData } from './dummy-data';
import { Listing } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor() { }

  getListings(): Listing[] {
    return dummyData;
  }
}
