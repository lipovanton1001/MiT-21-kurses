/**
 * Finds coins relevant to the query.
 *
 * @param {String} query
 * @returns {Promise<Array>}
 * @example
 * [{
 *   "id": "bitcoin",
 *   "name": "Bitcoin",
 *   "api_symbol": "bitcoin",
 *   "symbol": "BTC",
 *   "market_cap_rank": 1,
 *   "thumb": "https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png",
 *   "large": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png"
 * }]
 */
export const getCoinsList = async (query) => {
    const result = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
        .then(response => response.json()).catch(console.error);
    console.log('✌️result --->', result);
    return result?.coins;
}
