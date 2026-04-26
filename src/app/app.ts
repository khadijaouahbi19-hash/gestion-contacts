// app.ts
import { Component,OnInit } from '@angular/core';
import { FormulaireContact}
from './formulaire-contact/formulaire-contact';
import { ListeContacts }
from './liste-contacts/liste-contacts';
import { Contact } from './contact.interface';
import { CommonModule } from '@angular/common';
@Component({
selector: 'app-root',
standalone: true,
imports: [FormulaireContact, ListeContacts, CommonModule],
templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent implements OnInit {
  mesContacts: Contact[] = [];
 
  constructor() {}
 
  ngOnInit(): void {
    // Pré-remplir avec 2 contacts démo
    this.mesContacts = [
      { nom: 'Ali Benali',  email: 'ali@example.com',  telephone: '0600000001' },
      { nom: 'Sara Alami',  email: 'sara@example.com', telephone: '0600000002' },
    ];
    console.log('AppComponent initialisé avec', this.mesContacts.length, 'contacts');
  }
 
  // Reçoit l'événement @Output du formulaire
  ajouterContact(contact: Contact): void {
    this.mesContacts = [...this.mesContacts, contact]; // Nouvelle référence pour ngOnChanges
    console.log('Contact ajouté :', contact);
  }
 
  // Reçoit l'événement @Output de la liste
  supprimerContact(index: number): void {
    this.mesContacts = this.mesContacts.filter((_, i) => i !== index);
    console.log(`Contact ${index} supprimé. Reste : ${this.mesContacts.length}`);
  }
 
  // Exercice 5C : Propriétés calculées (getters)
  get nombreContacts(): number {
    return this.mesContacts.length;
  }
 
  get messageStatut(): string {
    if (this.mesContacts.length === 0) return 'Carnet vide';
    if (this.mesContacts.length === 1) return '1 contact';
    return `${this.mesContacts.length} contacts`;
  }
}