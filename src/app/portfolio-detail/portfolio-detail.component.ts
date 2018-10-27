import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  private portfolio;

  constructor(public dialog: MatDialog) { }


  @HostBinding('class.is-open')
  isOpen = false;

  ngOnInit() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  public setPortfolio(portfolio) {
    this.portfolio = portfolio;
  }

  public openSearch(): void {
    const dialogRef = this.dialog.open(PortfolioSellDialog);
  }
  
}

@Component({
  selector: 'portfolio-sell-dialog',
  templateUrl: 'portfolio-sell-dialog.html',
})
export class PortfolioSellDialog {

  constructor(
    /* public dialogRef: MatDialogRef<PortfolioSellDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any */) {}

/*   onNoClick(): void {
    this.dialogRef.close();
  } */

}