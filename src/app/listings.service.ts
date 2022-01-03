import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}

  // ============= Gets all Listings
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  // ============ Get single listing
  getListingById(id: string): Observable<Listing> {
    return this.http.get<Listing>(`/api/listings/${id}`);
  }

  // ============ Increases view count on listing
  addViewToListing(id: string): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  // ============ Get all listings for a specific user
  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/users/12345/listings');
  }

  // ============ Deletes a listing
  deleteListing(id: string): Observable<any> {
    return this.http.delete(`/api/listings/${id}`);
  }

  // =========== Creates a new Listing
  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings`,
      { name, description, price },
      httpOptions
    );
  };

  // =========== Edit a listing
  editListing(id: string,name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      `/api/listings/${id}`,
      httpOptions
    )
  }
}
