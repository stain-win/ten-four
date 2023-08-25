import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {BootstrapModule} from '@stain-win/tf-core';


export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      importProvidersFrom(
          BootstrapModule.forRoot({}),
      ),
  ],
};
