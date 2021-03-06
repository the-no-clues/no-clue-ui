import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-impact-tab',
  templateUrl: './impact-tab.component.html',
  styleUrls: ['./impact-tab.component.css']
})
export class ImpactTabComponent implements OnInit {

  data = {
     "clientId": 1,
     "noPoverty": 1,
     "noPovertyDesc": "This is not an interest for you",
     "zeroHunger": 0,
     "zeroHungerDesc": "Similar to 2 children ",
     "goodHealt": 552182828,
     "goodHealtDesc": "good welath and being",
     "qualityEducation": 688574215,
     "qualityEducationDesc": "quality education",
     "genderEquality": 773708894,
     "genderEqualityDesc": "Gender equality ",
     "cleanWater": 568102048,
     "cleanWaterDesc": "Nclean water",
     "cleanEnergy": 658717782,
     "cleanEnergyDesc": "clean energy",
     "decentWork": 511903984,
     "decentWorkDesc": "decent work",
     "innovetion": 530189201,
     "innovetionDesc": "Innovetion and infrasctructuere",
     "reduceInequality": 606410614,
     "reduceInequalityDesc": "Reduce inequalities",
     "suistanableCity": 566250128,
     "suistanableCityDesc": "sustanable cities",
     "responsibleConsuption": 541109972,
     "responsibleConsuptionDesc": "Responsible consumptin",
     "climateAction": 888522912,
     "climateActionDesc": "Climate action",
     "lifeWater": 377408853,
     "lifeWaterDesc": "Life and below water ",
     "lifeOnLand": 382846641,
     "lifeOnLandDesc": "life on land ",
     "justice": 0,
     "justiceDesc": "Justice for all",
     "partnerShip": 0,
     "partnerShipDesc": "Partner ship for pverall goal"
 };

  total = 0;
totaleEsg= 2;
  percentage(item) : Number {
    return 100 / (this.total / item);
  }

  isHighScore(item) : Boolean {
    return this.percentage(item) > 10;
  }

  isLowScore(item) : Boolean {
    return this.percentage(item) < 5;
  }

  badgeClass(item) : String[] {
    if(this.isLowScore(item)) {
      return ["badge"];
    } else if(this.isHighScore(item)) {
      return ["badge","badge-success"];
    } else {
      return ["badge","badge-info"];
    }
  }

  constructor() {
    this.total = this.data.partnerShip
        + this.data.justice
        + this.data.lifeOnLand
        + this.data.lifeWater
        + this.data.climateAction
        + this.data.responsibleConsuption
        + this.data.suistanableCity
        + this.data.reduceInequality
        + this.data.innovetion
        + this.data.decentWork
        + this.data.cleanEnergy
        + this.data.cleanWater
        + this.data.genderEquality
        + this.data.qualityEducation
        + this.data.goodHealt
        + this.data.zeroHunger
        + this.data.noPoverty    + 30000000;
  }

  ngOnInit() {
  }

}
