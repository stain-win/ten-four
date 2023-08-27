import {ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {ToggleComponent} from '@stain-win/tf-ui/components';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'tf-theme-switcher',
    standalone: true,
    imports: [CommonModule, ToggleComponent, FormsModule],
    templateUrl: './theme-switcher.component.html',
    styleUrls: ['./theme-switcher.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent implements OnInit {
    static style: HTMLStyleElement | null = null;
    public theme = true;

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {
    }

    ngOnInit() {
        this.renderer.setAttribute(this.doc.documentElement, 'data-theme', 'light');
    }

    onSwitchTheme($event: boolean) {
        if ($event) {
            this.renderer.removeClass(this.doc.documentElement, 'dark');
            this.renderer.setAttribute(this.doc.documentElement, 'data-theme', 'light');
        } else {
            this.renderer.addClass(this.doc.documentElement, 'dark');
            this.renderer.setAttribute(this.doc.documentElement, 'data-theme', 'dark');
        }
    }
}
