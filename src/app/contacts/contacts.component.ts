import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  constructor(public sanitizer: DomSanitizer) {}
  gMapId;
  mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.502698408197!2d75.39899121466179!3d31.372699661559007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4914e0e52c2b%3A0x8a5b77d1d2aa81ba!2sCitiMax+Enterprises!5e0!3m2!1sen!2sca!4v1542658010901`;
  ngOnInit() {
    window.scrollTo(0, 0);
    this.gMapId = this.getMap();
  }

  getMap() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

  contacts = [
    {
      name: 'Roshan Lal',
      title: 'Founder',
      phone: '+91 98726-56499',
      email: 'roshan@munatrading.com'
    },
    {
      name: 'Damanpreet',
      title: 'Managing Director',
      phone: '+91 98154-21810',
      email: 'daman@munatrading.com'
    }
  ];
}
