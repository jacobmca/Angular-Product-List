import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);