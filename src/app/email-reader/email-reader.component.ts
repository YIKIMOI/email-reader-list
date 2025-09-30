import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FocusBgDirective } from '../focus-bg.directive';

interface Email {
  from: string;
  to: string;
  subject: string;
  body?: string;
}

@Component({
  selector: 'app-email-reader',
  standalone: true,
  imports: [CommonModule, FormsModule, FocusBgDirective],
  templateUrl: './email-reader.component.html',
  styleUrls: ['./email-reader.component.css']
})
export class EmailReaderComponent {
  @ViewChild('emailForm') emailForm!: NgForm;

  email: Email = { from: '', to: '', subject: '', body: '' };
  emails: Pick<Email, 'to' | 'subject'>[] = [];

  toastMessage: string | null = null;

  send() {
    this.emails.push({ to: this.email.to, subject: this.email.subject });
    this.toastMessage = `The email [${this.email.subject}] has been sent to [${this.email.to}]`;
    this.emailForm.resetForm();
    setTimeout(() => (this.toastMessage = null), 3000);
  }

  reset(form: NgForm) {
    form.resetForm();
  }

  classes(ctrl: any) {
    const touched = ctrl?.touched || ctrl?.dirty;
    return {
      'is-invalid': touched && ctrl?.invalid,
      'is-valid': touched && ctrl?.valid,
      'invalid-border': touched && ctrl?.invalid,
      'valid-border': touched && ctrl?.valid,
      'error-bg': touched && ctrl?.invalid
    };
  }
}
