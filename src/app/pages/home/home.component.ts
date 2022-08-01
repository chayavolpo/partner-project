import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Package, PackageType } from 'src/app/shared/models/package.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responsiveOptions;
  userName = '';

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
    }
  ]

  constructor(private authService: AuthService) {
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
    this.userName = this.authService.getUser();
  }

}
