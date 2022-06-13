import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';


@Component({
  selector: 'app-page-edition-utilisateur',
  templateUrl: './page-edition-utilisateur.component.html',
  styleUrls: ['./page-edition-utilisateur.component.scss']
})
export class PageEditionUtilisateurComponent implements OnInit {

  public formulaire: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(2)]],
    prenom: ['', [Validators.required, Validators.minLength(2)]],
    image: ['', []],
    mot_de_passe: ['', [Validators.required]]
  });

  private idUtilisateur: number | undefined
  public image: any

  constructor(
    private formBuilder: FormBuilder, 
    private client: HttpClient, 
    private route: ActivatedRoute, 
    private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(parametres => {
      if (parametres['id'] != null) {
        this.client.get<Utilisateur>("http://localhost/angular/utilisateur.php?id=" + parametres['id']).subscribe((utilisateur: Utilisateur) => {
          this.formulaire = this.formBuilder.group({
            "nom": [utilisateur.nom, [Validators.required, Validators.minLength(2)]],
            "prenom": [utilisateur.prenom, [Validators.required, Validators.minLength(2)]],
            "image": [utilisateur.image, []],
            "mot_de_passe": [utilisateur.mot_de_passe, [Validators.required]]
          })
          // this.formulaire.patchValue(utilisateur) méthode différente
          this.idUtilisateur = utilisateur.id
        })
      }
    })
  }

  onChangeFile(event: any){
    this.image = event.target.files[0]
  }

  onSubmit() {
    if (this.formulaire.valid) {
      const utilisateur: Utilisateur = this.formulaire.value
      utilisateur.id = this.idUtilisateur

      const formData = new FormData()

      formData.append("image", this.image)
      formData.append("utilisateur", JSON.stringify(utilisateur))

      this.client.post("http://localhost/angular/edition-utilisateur.php",
        formData,
        {responseType: "text"}
      ).subscribe(resultat => this.router.navigateByUrl("liste-utilisateur"))
    }
  }
}
