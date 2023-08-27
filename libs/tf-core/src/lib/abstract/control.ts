import {ChangeDetectorRef, Directive, OnDestroy, OnInit, Optional} from '@angular/core';
import {TfInteractive} from './interactive';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {NOOP} from '../utils';
import {Subject} from 'rxjs';

@Directive()
export abstract class TfControl extends TfInteractive implements OnDestroy, OnInit, ControlValueAccessor {
    private onChange = NOOP;
    protected readonly destroy$ = new Subject<void>();

    // @ts-ignore
    protected constructor(
        protected readonly cdr: ChangeDetectorRef,
        // @ts-ignore
        @Optional() private readonly ngControl: NgControl | null,
    ) {
        super();

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnInit(): void {
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    writeValue(obj: any): void {
    }
}
