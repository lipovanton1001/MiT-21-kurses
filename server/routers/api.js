import express from 'express';
import fetch from 'node-fetch';
import env from '../env.js';


const router = express.Router();
const SHOPIFY_ADMIN_API_KEY = env.SHOPIFY_ADMIN_API_KEY;


router.post('/shopify-admin', async (req, res) => {
    try {
        const response = await fetch('https://coin-sync.myshopify.com/admin/api/2024-10/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': SHOPIFY_ADMIN_API_KEY,
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error connecting to Shopify API:', error);
        res.status(500).json({ error: 'Failed to connect to Shopify API' });
    }
});


export default router;
