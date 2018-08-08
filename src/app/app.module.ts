import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// http imports
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHandler, HttpClientModule } from '../../node_modules/@angular/common/http';

// angular material imports
import { OverlayContainer } from '@angular/cdk/overlay';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatCardModule, MatGridListModule, MatIconModule } from '@angular/material'

import { AppComponent } from './components/app.component';
import { CoinMarketCapService } from './services/coin-market-cap.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HttpModule,
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatGridListModule,
		MatCardModule
	],
	providers: [CoinMarketCapService, HttpModule, HttpClient],
	bootstrap: [AppComponent]
})
export class AppModule 
{
	constructor(overlayContainer: OverlayContainer) 
	{
        overlayContainer.getContainerElement()
            .classList.add('app-dark-theme');
    }
}