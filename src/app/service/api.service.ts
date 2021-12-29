import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getProductList() {
    return [
      {
        id: 1,
        title: 'Ben Fisher',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-1779698-5788387255886799431.jpg',
      },
      {
        id: 2,
        title: 'Alfredo Torres',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-17443-15939210801188204908.jpg',
      },
      {
        id: 3,
        title: 'Helmut Geissler',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-3351-8433025934971687072.png',
      },
      {
        id: 4,
        title: 'Helmut Geissler',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-17827206-2069139169765945482.png',
      },
      {
        id: 5,
        title: 'Helmut Geissler',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-1490-6192154893436272170.jpg',
      },
      {
        id: 6,
        title: 'Helmut Geissler',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-13757-14237762030555157939.jpg',
      },
      {
        id: 7,
        title: 'Helmut Geissler',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-1342-12944937613789426918.jpg',
      },
      {
        id: 8,
        title: 'Tomek Wydra',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-17443-15939210801188204908.jpg',
      },
      {
        id: 9,
        title: 'Tomek Wydra',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-2806592-12483305168182000802.png',
      },
      {
        id: 10,
        title: 'Tomek ',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-18283-17256047292636289319.jpg',
      },
      {
        id: 11,
        title: 'KarlS',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-16075-6080954538832152131.jpg',
      },
      {
        id: 12,
        title: 'IdahoJoe',
        description: 'Google My Business, Google Maps',
        image:
          'https://storage.googleapis.com/support-forums-api/avatar/profile-14777-3427385789392209919.png',
      },
    ];
  }
}
