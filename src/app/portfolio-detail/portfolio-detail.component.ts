import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  private portfolio;

  constructor() { }


  @HostBinding('class.is-open')
  isOpen = false;

  ngOnInit() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  public setPortfolio(portfolio) {
    this.portfolio = portfolio;
  }
  
}
