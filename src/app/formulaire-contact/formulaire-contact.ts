// formulaire-contact.ts
import { Component, Output, EventEmitter } from '@angular/core';import { FormsModule } from '@angular/forms';
//import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.interface';
@Component({
    selector: 'app-formulaire-contact',
    imports: [FormsModule, CommonModule], // Tout ce qu'on utilisera
    templateUrl: './formulaire-contact.html',
    styleUrl: './formulaire-contact.css',
})
export class FormulaireContact {
   // ── Exercice 1 ──────────────────────────────────────────────
  titre: string = 'Formulaire de contact';
  version: string = 'Angular 20';
 
  // ── Exercice 2A : Interpolation ──────────────────────────────
  prenom: string = 'Ahmed';
  note: number = 17;
  notes: number[] = [14, 16, 18, 12, 17];
  dateAujourdhui: string = new Date().toLocaleDateString('fr-FR');
 
  // ── Exercice 2B : Property Binding ───────────────────────────
  imageUrl: string = 'https://picsum.photos/200/100';
  boutonActif: boolean = false;
  tailleTexte: number = 18;
  classeCSS: string = 'alerte-info';
 
  // ── Exercice 2C : Event Binding ───────────────────────────────
  compteur: number = 0;
  couleurBouton: string = 'gris';
  texteInput: string = '';
 
  incrementer(): void { this.compteur++; }
  decrementer(): void { if (this.compteur > 0) this.compteur--; }
  reinitialiser(): void { this.compteur = 0; }
  changerCouleur(c: string): void { this.couleurBouton = c; }
  onFrappe(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.texteInput = input.value;
  }
 
  // ── Exercice 2D : Two-Way Binding (formulaire de saisie) ──────
  nom: string = '';
  email: string = '';
  telephone: string = '';
  age: number = 0;
 
  // ── Exercice 3 : @Output ──────────────────────────────────────
  @Output() contactSauvegarde = new EventEmitter<Contact>();
 
  sauvegarder(): void {
    if (this.nom.trim() && this.email.trim()) {
      this.contactSauvegarde.emit({
        nom: this.nom,
        email: this.email,
        telephone: this.telephone,
      });
      // Réinitialiser
      this.nom = this.email = this.telephone = '';
      this.age = 0;
    } else {
      alert("Veuillez remplir le nom et l'email.");
    }
  }
  }