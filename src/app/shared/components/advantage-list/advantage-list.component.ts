import { Component, OnInit } from '@angular/core';
import { Advantage } from '../../models/advantage.model';

@Component({
  selector: 'app-advantage-list',
  templateUrl: './advantage-list.component.html',
  styleUrls: ['./advantage-list.component.scss']
})
export class AdvantageListComponent implements OnInit {

  imagesSrc = 'assets/images';

  advantages: Advantage[] = [
    { imageSrc: `${this.imagesSrc}/earth.png`, description: 'גלישה ב 15,000 עמודי אינטרנט' },
    { imageSrc: `${this.imagesSrc}/spiral.png`, description: '534 שעות של שיחה על גבי האינטרנט' },
    { imageSrc: `${this.imagesSrc}/mail.png`, description: 'לשלוח 127,400 מיילים' },
    { imageSrc: `${this.imagesSrc}/video.png`, description: '6 שעות צפיה בוידאו באיכות HD' },
    { imageSrc: `${this.imagesSrc}/chat.png`, description: 'לשלוח אן לקבל 240,000 תמונות או 12,000,000 הודעות' },
    { imageSrc: `${this.imagesSrc}/music.png`, description: 'לנגן 3984 שירים' },
    { imageSrc: `${this.imagesSrc}/like.png`, description: 'לבלות 132 שעות ברשתות חברתיות' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
