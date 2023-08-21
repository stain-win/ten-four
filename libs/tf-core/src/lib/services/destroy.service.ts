import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject} from 'rxjs';

/**
 * Use it in your components to be able to seamlessly end the active streams.
 * Provide it on component/directive level.
 * Usage:
 * @Component({
 *     selector: 'my-super-component',
 *     providers: [
 *         DestroyService,
 *     ],
 * }),
 * MySuperComponent {
 *     constructor (private _destroy$: DestroyService) {
 *         interval(1000).pipe(
 *             takeUntil(this._destroy$),
 *         ).subscribe();
 *     }
 * }
 */
@Injectable()
export class DestroyService extends ReplaySubject<void> implements OnDestroy {
    constructor () {
        super(1);
    }

    ngOnDestroy () {
        this.next();
        this.complete();
    }
}
