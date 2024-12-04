import dotenv from 'dotenv';
dotenv.config();


export default 
{
    SHOPIFY_ADMIN_API_KEY: process.env.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,
    PORT: process.env.SERVER_PORT || 3000,
}
