import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  app = 'Muna Trading Co.';
  email = 'info@munatrading.com';

  contacts = [
    { name: 'Roshan Lal', phone: '+91 98726-56499' },
    { name: 'Damanpreet', phone: '+91 98154-21810' }
  ];

  addresses = [
    'Shop no.: 500754, Amritsar Road,',
    'Near Sangam palace, Kapurthala, Punjab.'
  ];

  getYear() {
    return new Date().getFullYear();
  }
}
