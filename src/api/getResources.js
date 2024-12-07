const query = {
    products: /* GraphQL  */ `
        query ($cursor: String, $query: String, $cursorVariants: String) {
            products(first: 40, after: $cursor, query: $query) {
                edges {
                    node {
                        id
                        title
                        priceRangeV2 {
                            minVariantPrice {
                                amount
                            }
                        }
                        featuredMedia {
                            preview {
                                image {
                                    url
                                }
                            }
                        }
                        variants(first: 25, after: $cursorVariants) {
                            edges {
                                node {
                                    id
                                    title
                                    price
                                    image {
                                        url
                                    }
                                }
                              cursor
                            }
                        }
                    }
                    cursor
                }
                pageInfo {
                    hasNextPage
                }
            }
        }
    `
}
//https://shopify.dev/docs/api/admin-graphql
async function fetchShopifyData(query, variables = null) {
    const response = await fetch('http://localhost:3000/api/shopify-admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    });


    const responseJson = await response.json();
    return responseJson;
}


export const fetchProducts = async (cursor = null) => {
    const response = await fetchShopifyData(query.products, { cursor });
    return response?.data?.products?.edges;
}


export const findProducts = async (queryParam) => {
    const response = await fetchShopifyData(query.products, { query: queryParam });
    return response?.data?.products?.edges;
};

