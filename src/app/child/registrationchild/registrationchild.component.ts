import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration-details',
  template: `
    <div style="margin-top: 20px; border: 1px solid #ccc; padding: 10px;">
      <h3>Regisztrációs adatok</h3>
      <p><strong>Név:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Telefonszám:</strong> {{ phone }}</p>
      <button mat-raised-button color="primary" (click)="confirm()">Jóváhagyás</button>
      <button mat-raised-button color="warn" (click)="cancel()">Mégsem</button>
      <button mat-raised-button color="accent" (click)="edit()">Szerkesztés</button>
    </div>
  `,
  imports: [],
})
export class Registrationchild {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() phone: string = ''
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>()
  @Output() edited = new EventEmitter<void>();
  confirm(){this.confirmed.emit(); }
cancel(){this.cancelled.emit();}
  edit(){this.edited.emit();}
}
