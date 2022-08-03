import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Package, PackageType } from 'src/app/shared/models/package.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = '';


  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.userName = this.authService.getUser();
  }

}
