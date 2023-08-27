import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeSwitcherComponent} from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'tf-navigation',
  standalone: true,
    imports: [CommonModule, ThemeSwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {}
