import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Today } from './today.model';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  priceMulti: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getPriceMulti();
  }

  getPriceMulti() {
    this.homeService.getPriceMulti().subscribe((data: Today) => {
      this.priceMulti = data;
      console.log(data);
    },
    (error) => {
      console.log(error);
    });
  }
}
