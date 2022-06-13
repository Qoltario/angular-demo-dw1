import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {

  public textButton : string = 'Cliquez ici';
  public nbClick : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.nbClick++;
  }

}
