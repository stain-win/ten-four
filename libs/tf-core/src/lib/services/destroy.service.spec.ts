import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { timer } from 'rxjs';
import { endWith, mapTo, shareReplay, takeUntil } from 'rxjs/operators';

import { DestroyService } from './destroy.service';

@Component({
    selector: 'core-test-destroy',
    template: '',
    providers: [
        DestroyService,
    ],
})
export class TestDestroyServiceComponent {
    toDestroy$ = timer(0, 1000).pipe(
        mapTo(false),
        endWith(true),
        takeUntil(this._destroy$),
        shareReplay(1),
    );

    constructor (
        private _destroy$: DestroyService,
    ) {
        this.toDestroy$.subscribe();
    }
}

describe('DestroyService', () => {
    let service: DestroyService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                TestDestroyServiceComponent,
            ],
            providers: [ DestroyService ],
        });
        TestBed.compileComponents();
        service = TestBed.inject(DestroyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should destroy subscriptions on component lifecycle end', fakeAsync(() => {
        const fixture = TestBed.createComponent(TestDestroyServiceComponent);
        fixture.destroy();
        tick();
        fixture.componentInstance
            .toDestroy$
            .subscribe(isDestroyed => expect(isDestroyed).toBe(true));
    }));
});
