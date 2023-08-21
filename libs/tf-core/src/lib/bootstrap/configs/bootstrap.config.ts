import {InjectionToken} from '@angular/core';

export interface BootstrapConfig {
}

export const BOOTSTRAP_CONFIG = new InjectionToken<BootstrapConfig>('BootstrapConfig');
