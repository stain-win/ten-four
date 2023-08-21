import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

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
    host: {

    }
})
export class ToggleComponent {
    protected _value: boolean = false;
    get value(): boolean {
        return this._value;
    }

    set value(value: boolean) {
        this._value = value;
    }

    get ariaChecked(): boolean {
        return this._value;
    }

    constructor(protected changeDetectorRef: ChangeDetectorRef) {
    }

}
