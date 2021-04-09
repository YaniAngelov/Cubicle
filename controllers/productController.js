const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('../helpers/productHelper');
const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then(products => {
            // console.log(products);
            res.render('home', { title: 'Browse', products });
        })
        .catch(() => res.status(404).end());
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', validateProduct, (req, res) => {  
    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end())
});

router.get('/details/:productId', async (req, res) => {
    let product = await productService.getOneWithAccessories(req.params.productId);
    
    console.log(product);

    res.render('details', { title: 'Product Details', product });
});

router.get('/:productId/attachAccessory', async (req, res) => {
    let product = await productService.getOne(req.params.productId);
    let accessoaries = await accessoryService.getAll();

    // console.log(accessoaries);
    res.render('attachAccessory', { product, accessoaries });
});

router.post('/:productId/attachAccessory', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() => res.redirect(`/products/details/${req.params.productId}`))

});

module.exports = router;