import {Directive, Inject, OnDestroy} from '@angular/core';
import {DOCUMENT} from '@angular/common';

/**
 * Use this abstract class to create your own toggleable themes.
 * A component extending this class must have CSS variables definitions
 * and have ViewEncapsulation set to NONE. A boolean input allows to
 * switch theme on or off.
 */
@Directive()
export abstract class AbstractThemeSwitch implements OnDestroy {
    static style: HTMLStyleElement | null = null;

    // @ts-ignore
    protected constructor( @Inject(DOCUMENT) private readonly doc: Document) {
        if (this.style !== null) {
            this.addTheme();

            return;
        }

        const styles = this.doc.head.querySelectorAll(`style`);

        (this.constructor as typeof AbstractThemeSwitch).style =
            styles[styles.length - 1];
    }

    get style(): HTMLStyleElement | null {
        return (this.constructor as typeof AbstractThemeSwitch).style;
    }

    ngOnDestroy(): void {
        this.removeTheme();
    }

    private addTheme(): void {
        if (this.style) {
            this.doc.head.appendChild(this.style);
        }
    }

    private removeTheme(): void {
        this.style?.remove();
    }
}
