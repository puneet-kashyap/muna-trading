import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  products = [
    {
      name: 'Snacks',
      img:
        'https://images.pexels.com/photos/1375811/pexels-photo-1375811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '10.00'
    },
    {
      name: 'Chips',
      img:
        'https://images.pexels.com/photos/811110/pexels-photo-811110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '15.00'
    },
    {
      name: 'Beverages',
      img:
        'https://images.pexels.com/photos/3008/drinks-supermarket-cans-beverage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '20.00'
    },
    {
      name: 'Candy',
      img:
        'https://images.pexels.com/photos/1289363/pexels-photo-1289363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '5.00'
    },

    {
      name: 'Sweets',
      img:
        'https://images.pexels.com/photos/33239/halloween-candy-chocolates-nuts-sweet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '15.00'
    },
    {
      name: 'Lollipop',
      img:
        'https://images.pexels.com/photos/33715/cake-pops-pastries-cake-sweet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz
      breeds of treat from India. A small, agile sweet that copes very well with
      mountainous terrain, the Shiba Inu was originally bread for hunting.`,
      price: '20.00'
    }
  ];
}
