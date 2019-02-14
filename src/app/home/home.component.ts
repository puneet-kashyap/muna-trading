import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  companyName = 'Muna Trading Co.';

  intro = `established in 1999
  and located in the princely city of Kapurthala is a family owned and
  operated business recognized as one of the best wholesale distributors of
  confectionery goods.`;

  descriptions = [
    `For more than 20 years, we at Muna Trading Co. have abided by key core
    principles: to provide customers with the highest quality confectioneries,
    at reasonable prices, with exceptional customer care. We have clients all
    over the Punjab and business is well known as a "One Stop Shop" for many
    retailers.`,
    `Muna Trading readily services retailers such as convenience stores,
    independent grocery chains, restaurants, caterers, bakeries, distributors,
    non-profit organizations, janitorial and many small businesses. We
    specialise in the sales and distribution of Beverages, Confectionery,
    Snackfoods, Grocery and Customer Service.`
  ];

  reasons = [
    {
      title: 'Value',
      text: `Our established relationships with manufacturers coupled with our high
      sales volume give us the ability to negotiate the best possible prices,
      which we then pass along to our customers.`
    },
    {
      title: 'Huge Selection',
      text: `We offer thousands of everyday and seasonal items including candy,
      chocolates, nuts, snacks, gum, baking supplies, novelties, beverages,
      and more. Our inventory is dynamic, which means that you’ll never see an
      “out of stock” sign on our website.`
    },
    {
      title: 'Outstanding Customer Service',
      text: `There’s no shortage of ways to get in touch with us! We have a dedicated
      team of associates available to assist you over the phone, via our
      online customer support live chat bot , and we will quickly respond to
      all emails sent to sales@munatrading.com. We take pride in establishing
      strong relationships and offering personalized service to our buyers.
      Once you become a Muna Trading customer, you’ll never shop anywhere
      else!`
    },
    {
      title: 'Convenience',
      text: `You’re busy and we understand that. With Muna Trading, you can shop 24/7
      whenever it’s convenient for you!`
    },
    {
      title: 'We Understand Your Business',
      text: `Muna Trading has been in business for over 20 years and nobody knows the
      confectionery industry better than we do! Our CEO, a former
      confectionery store owner himself, has brought his knowledge of the
      retail candy industry to the wholesale side of the business to create a
      better buying experience for retailers all over the Punjab.`
    }
  ];
}
