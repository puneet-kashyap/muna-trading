import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  companyName='Muna Trading Co.'
  tagLine='Confectionery goods distributor'
  routes=[
    {url: '/', link: 'Home'},
    {url: '/products', link: 'Products'},
    {url: '/contacts', link: 'Contact Us'},
    {url: '/signin', link: 'Sign In'},
  ]

}
