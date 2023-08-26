import {NgModule} from '@angular/core';
import {UiModeDirective} from './ui-mode.directive';

@NgModule({
    declarations: [UiModeDirective],
    exports: [UiModeDirective],
})
export class UiModeModule {
}
