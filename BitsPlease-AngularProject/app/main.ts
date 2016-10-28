import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
const contextRoot = "https://ccstore-z5ia.oracleoutsourcing.com";
platform.bootstrapModule(AppModule);
