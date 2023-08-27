import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef, EventEmitter,
    forwardRef, Input, OnDestroy, OnInit, Output,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NOOP} from '@stain-win/tf-core';


@Component({
    selector: 'tfui-toggle',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleComponent),
            multi: true,
        },
    ],
})
export class ToggleComponent implements ControlValueAccessor, OnInit {
    modelValue: boolean = false;

    focused: boolean = false;


    valueChange = new EventEmitter<boolean>();

    @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() trueValue: any = true;
    @Input() falseValue: any = false;
    @Input() disabled: boolean | undefined;
    @Input() readonly: boolean | undefined;

    onModelChange: Function = NOOP;

    onModelTouched: Function = NOOP;

    constructor( protected _elementRef: ElementRef<HTMLElement>,
                 protected _changeDetectorRef: ChangeDetectorRef,
                 ) {
    }

    ngOnInit() {
    }

    get checked() {
        return this.modelValue === this.trueValue;
    }
    onClick(event: Event, el: HTMLElement) {
        if (!this.disabled && !this.readonly) {
            this.toggle(event);
            el.focus();
            el.setAttribute('aria-checked', String(this.checked));
            event.preventDefault();
        }
    }

    onInputChange(event: Event) {
        if (!this.readonly) {
            const inputChecked = (<HTMLInputElement>event.target).checked;
            (<HTMLInputElement>event.target).setAttribute('aria-checked', String(this.checked));
            this.updateModel(event, inputChecked);
        }
    }

    toggle(event: Event) {
        this.updateModel(event, !this.checked);
    }

    updateModel(event: Event, value: boolean) {
        this.modelValue = value ? this.trueValue : this.falseValue;
        this.onModelChange(this.modelValue);
        this.onChange.emit(this.modelValue);
    }

    onFocus(event: Event) {
        this.focused = true;
    }

    onBlur(event: Event) {
        this.focused = false;
        this.onModelTouched();
    }

    registerOnChange(fn: Function): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: Function): void {
        this.onModelTouched = fn;
    }

    writeValue(value: any): void {
        this.modelValue = value;
        this._changeDetectorRef.markForCheck();
    }

}
