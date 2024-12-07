export const getCoinsList = async (query) => {
    const result = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
        .then(response => response.json()).catch(console.error);
    console.log('✌️result --->', result);
    return result?.coins;
}
