import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent implements OnInit {

  user = {
        "id": 1,
        "name": "Daniel Garcia",
        "clientSince": "2018-10-06",
        "domicile": "United Arab Emirates",
        "education": "PhD",
        "nationality": "Spanish",
        "investorType": "active",
        "rm": "Baraa Al Bitar",
        "segment": "UHNWI"
    }

  constructor() { }

  ngOnInit() {
  }

}
