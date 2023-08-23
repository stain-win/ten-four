import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavigationComponent} from '../components/navigation/navigation.component';

@Component({
  standalone: true,
    imports: [RouterModule, NavigationComponent],
  selector: 'ten-four-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ten-four';
}
