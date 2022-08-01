import { Component, OnInit } from '@angular/core';
import { Package, PackageType } from '../../models/package.model';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {

  responsiveOptions;

  packages: Package[] = [
    {
      packageType: PackageType.Basic, pricePerMonth: 59.9, noSMSLimit: true, noCallsLimit: true,
      noMessagesLimit: true, GBamount: 15, advantage: '100 דקות לחו"ל', orderOnlineGift: 'CyberGuard לשנה ללא עלות', isOnlineExclusive: false
    },
    {
      packageType: PackageType.Discounted, pricePerMonth: 49.9, noSMSLimit: true, noCallsLimit: true,
      noMessagesLimit: true, GBamount: 10, advantage: 'מחיר קבוע לשנתיים', orderOnlineGift: 'המחיר נשאר לשנתיים', isOnlineExclusive: true
    },
    {
      packageType: PackageType.Extended, pricePerMonth: 69.9, noSMSLimit: true, noCallsLimit: true,
      noMessagesLimit: true, GBamount: 25, advantage: '1000 דקות לחו"ל', orderOnlineGift: 'כרטיס SIM במתנה', isOnlineExclusive: false
    },
    {
      packageType: PackageType.Basic, pricePerMonth: 62.9, noSMSLimit: true, noCallsLimit: true,
      noMessagesLimit: true, GBamount: 20, advantage: 'מחיר קבוע לשנתיים', orderOnlineGift: 'המחיר נשאר לשנתיים', isOnlineExclusive: false
    },
    {
      packageType: PackageType.Basic, pricePerMonth: 65.9, noSMSLimit: true, noCallsLimit: true,
      noMessagesLimit: true, GBamount: 20, advantage: '800 דקות לחו"ל', orderOnlineGift: 'כרטיס SIM במתנה', isOnlineExclusive: false
    }
  ]

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1025px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '640px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {

  }

}
