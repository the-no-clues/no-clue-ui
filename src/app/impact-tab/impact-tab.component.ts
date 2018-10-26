import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact-tab',
  templateUrl: './impact-tab.component.html',
  styleUrls: ['./impact-tab.component.css']
})
export class ImpactTabComponent implements OnInit {

  items = [
    {
      type : "no-powerty",
      typeId : "01",
      title : "No Powerty",
      content : "Will save 10 children from starving in Yemen."
    },
    {
      type : "good-health",
      typeId : "03",
      title : "Good Health",
      content : "Will make people run at least 10 minutes a day."
    },
    {
      type : "life-below-water",
      typeId : "14",
      title : "Life below water",
      content : "Will feed the fish."
    },
    {
      type : "decent-work",
      typeId : "08",
      title : "Decent work",
      content : "Will help to employ 10 homeless persons."
    },
    {
      type : "life-on-land",
      typeId : "15",
      title : "Life on land",
      content : "Will save habitat for 5 wild boars."
    },
    {
      type : "climate-action",
      typeId : "13",
      title : "Climate Action",
      content : "Will reduce the global carbon emission by 10 M tons annually."
    }

  ];

  constructor() { }

  imageSource(item) : string {
    return "E_SDG_Icons-"+ item.typeId +".jpg";
  }

  ngOnInit() {
  }

}
