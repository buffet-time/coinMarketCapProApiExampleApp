import { Component } from '@angular/core';
import { CoinMarketCapService } from '../services/coin-market-cap.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent 
{	
	currenciesJson: object;
	selectedCurrency: object;
	displayInfo: boolean = false;
	finishedLoading: boolean = false;
	
	constructor(private CoinMarketCapService: CoinMarketCapService) {}
	
	ngOnInit()
	{
		this.CoinMarketCapService.getCurrencies(15)
        .then(res => {
			this.currenciesJson = res,
			this.finishedLoading = true;
        });
	}

	selectCurrency(currencyId: number)
	{
		this.CoinMarketCapService.getCurrency(currencyId)
		.then( res => {
			this.selectedCurrency = res,
			this.showInfo(true)
		})
	}

	showInfo ( showInfo: boolean )
	{
		this.displayInfo = showInfo;
	}
}