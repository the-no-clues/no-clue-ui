import { Component, OnInit, HostListener, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { PortfolioDetailComponent } from '../portfolio-detail/portfolio-detail.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public portfolios: any;
  public imgUrls: any;


  @Input() portfolioDetail: PortfolioDetailComponent;

  constructor(private restService : RestService) { }

  ngOnInit(){
    this.portfolios = this.restService.getPortfolios();
    this.hasEsg(this.portfolios);
    /* console.log(this.portfolios); */

    this.imgUrls = [
      "/assets/graph.png",
      "../../assets/graph_future.png"
    ]
  }

  private hasEsg(portfolios) {
    portfolios.forEach(element => {
      element.esg ? element.hasEsg = true : element.hasEsg = false;
    });
  }

  openDetails(portfolio) {
    this.portfolioDetail.toggle();
    this.portfolioDetail.setPortfolio(portfolio);
  }


 /*  @HostListener('click')
  click() {
    this.portfolioDetail.toggle();
  } */

}
