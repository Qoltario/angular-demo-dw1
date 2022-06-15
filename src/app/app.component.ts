import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  @ViewChild("recherche")
  private inputRecherche : ElementRef | undefined;

  constructor(private router: Router){}

  onSubmit(){
    const recherche = this.inputRecherche?.nativeElement.value

    if(recherche){
    this.router.navigate(['resultat-recherche', recherche])
    }
  }
}
