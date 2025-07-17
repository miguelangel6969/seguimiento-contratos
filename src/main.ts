import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {OverlayContainer} from '@angular/cdk/overlay';

bootstrapApplication(App, appConfig)
  .then(appRef => {
    const overlay = appRef.injector.get(OverlayContainer);
    overlay.getContainerElement().classList.add('tailwind-overlay');
  })
  .catch(err => console.error(err));
