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
    this.appendImages();
  }

  public appendImages(){
    let count: number = 1;

    this.portfolio.sdg.forEach(element => {
      element.pictureName = this.imageSource(count);
      count++;
    });
  }


  imageSource(num) : string {
    if (num<10) {
      return "E_SDG_Icons-0"+ num +".jpg";
    } else {
        return "E_SDG_Icons-"+ num +".jpg";
    }
  }

  
}
