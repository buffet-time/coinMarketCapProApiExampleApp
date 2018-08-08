import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinMarketCapService 
{	
	key: string = "REDACTED"; // https://pro.coinmarketcap.com/ free 6000 requests per month. 
	apiUrl: string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/';

	constructor(public http: HttpClient) { }

	getCurrencies(totalCurrencies: number)
	{
		let promise = new Promise((resolve, reject) => {
			let url: string = this.apiUrl + "listings/latest?sort=market_cap&cryptocurrency_type=coins&limit=" + totalCurrencies + "&CMC_PRO_API_KEY=" + this.key;
			this.http.get(url)
			.toPromise()
			.then(
			res => { 
				resolve(res);
			});
		})
		return promise;
	}

	getCurrency(currencyId: number)
	{
		let promise = new Promise((resolve, reject) => {
			let url: string = this.apiUrl + "info?id=" + currencyId + "&CMC_PRO_API_KEY=" + this.key;
			this.http.get(url)
			.toPromise()
			.then(
			res => { 
				resolve(res);
			});
		})
		return promise;
	}
}