import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { ImpactTabComponent } from './impact-tab/impact-tab.component';
import { PortfolioTabComponent } from './portfolio-tab/portfolio-tab.component';
import { CertificateTabComponent } from './certificate-tab/certificate-tab.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { RestService } from './rest.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { SellPopupComponent } from './sell-popup/sell-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpactTabComponent,
    PortfolioTabComponent,
    CertificateTabComponent,
    ProfileTabComponent,
    PortfolioComponent,
    PortfolioDetailComponent,
    SellPopupComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
