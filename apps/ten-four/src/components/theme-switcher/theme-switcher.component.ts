import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {ToggleComponent} from '@stain-win/tf-ui/components';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'tf-theme-switcher',
  standalone: true,
    imports: [CommonModule, ToggleComponent, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
    static style: HTMLStyleElement | null = null;
    public theme: boolean | undefined;
    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        ) {}

    ngOnInit(): void {
        this.renderer.addClass(this.doc.documentElement, 'dark');
    }
}
