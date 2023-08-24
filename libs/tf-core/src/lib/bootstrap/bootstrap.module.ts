import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {interceptorProviders} from './interceptors';
import {BOOTSTRAP_CONFIG, BootstrapConfig} from './configs';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        interceptorProviders,
    ],
    exports: [CommonModule],
})
export class BootstrapModule {
    static forRoot (config: BootstrapConfig): ModuleWithProviders<BootstrapModule> {
        return {
            ngModule: BootstrapModule,
            providers: [
                {
                    provide: BOOTSTRAP_CONFIG,
                    useValue: config,
                },
            ],
        };
    }

    constructor (@Optional() @SkipSelf() parentModule: BootstrapModule) {
        if (parentModule) {
            throw new Error('BootstrapModule is already loaded. Import it in the AppModule only');
        }
    }
}
