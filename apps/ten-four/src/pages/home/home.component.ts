import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToggleComponent} from '@stain-win/tf-ui/components';

@Component({
    selector: 'tf-home',
    standalone: true,
    imports: [CommonModule, ToggleComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
