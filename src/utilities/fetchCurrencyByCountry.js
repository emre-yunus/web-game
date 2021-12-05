export async function fetchCurrencyByCountry(country) {
    console.log(`---fetch ${country} `)

    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(`---fetch ${country} done`)
    const data = await response.json();
    console.log(`---fetch ${country} done `, {data})
    const currencies = await data[0].currencies;
    console.log([currencies[Object.keys(currencies)[0]]][0].symbol);
    const currencySymbol = String([currencies[Object.keys(currencies)[0]]][0].symbol)
    return {
        symbol: currencySymbol
    };
}