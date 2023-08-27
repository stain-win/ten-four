import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive()
export abstract class TfInteractive {
    private static autoId = 0;

    abstract disabled: boolean;

    abstract focused: boolean;

    @Input()
    focusable = true;

    @Output()
    readonly focusedChange = new EventEmitter<boolean>();

    @Output()
    readonly focusVisibleChange = new EventEmitter<boolean>();

    protected updateFocused(focused: boolean): void {
        this.focusedChange.emit(focused);
    }
}
