import {AfterViewInit, ChangeDetectorRef, Directive, DoCheck, ElementRef, HostListener, Optional} from '@angular/core';
import {NgModel} from '@angular/forms';

export type Nullable<T = void> = T | null | undefined;

@Directive({
    selector: '[tfuiInput]',
    standalone: true,

})
export class InputDirective implements DoCheck, AfterViewInit {
    filled: Nullable<boolean>;

    constructor(public el: ElementRef, @Optional() public ngModel: NgModel, private cdr: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.updateFilledState();
        this.cdr.detectChanges();
    }

    ngDoCheck() {
        this.updateFilledState();
    }

    @HostListener('input', ['$event'])
    onInput() {
        this.updateFilledState();
    }

    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    }
}


