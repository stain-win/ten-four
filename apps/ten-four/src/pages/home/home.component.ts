import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleComponent} from '@stain-win/tf-ui/components';
import {ThemeSwitcherComponent} from '../../components/theme-switcher/theme-switcher.component';

@Component({
    selector: 'tf-home',
    standalone: true,
    imports: [CommonModule, ToggleComponent, ThemeSwitcherComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    darkMode = signal<boolean>(false)
}
