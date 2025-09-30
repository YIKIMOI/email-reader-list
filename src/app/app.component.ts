import { Component } from '@angular/core';
import { EmailReaderComponent } from './email-reader/email-reader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailReaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-reader-list';
}
