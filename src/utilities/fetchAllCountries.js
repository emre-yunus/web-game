export async function fetchAllCountries() {
    console.log(`---fetching all counries`)

    const response = await fetch(`https://restcountries.com/v3.1/all`);
    console.log(`---fetching all countries done`)
    const data = await response.json();
    console.log(`---response all countries done `, {data})

    let result = [];

    for(let i=0;i<data.length ;i++) {
        result.push(data[i].name.common);
    }

    return {
        countries: result
    };
}