import {Directive, Input, OnChanges} from '@angular/core';
import {JediForce} from '../types';
import {ReplaySubject} from 'rxjs';

@Directive({
    selector: '[tfcUiMode]',
})
export class UiModeDirective implements OnChanges {
    @Input('tfcUiMode')
    mode: JediForce | null = null;

    readonly change$ = new ReplaySubject<void>();

    ngOnChanges(): void {
        this.change$.next();
    }
}
