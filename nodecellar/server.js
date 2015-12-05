var express = require('express'),
    wine = require('./routes/wines');
    shopifyOrder = require('./routes/shopify/order')
    extShopifyOrder = require('./routes/ext/shopify/order')

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.get('/shopify/order', shopifyOrder.findAll);
app.get('/shopify/order/:id', shopifyOrder.findById);
app.post('/shopify/order', shopifyOrder.add);
app.put('/shopify/order/:id', shopifyOrder.update);
app.delete('/shopify/order/:id', shopifyOrder.delete);

app.get('/ext/shopify/order', extShopifyOrder.findAll);
app.get('/ext/shopify/order/:id', shopifyOrder.findById);
app.post('/ext/shopify/order', shopifyOrder.add);
app.put('/ext/shopify/order/:id', shopifyOrder.update);
app.delete('/ext/shopify/order/:id', shopifyOrder.delete);

app.listen(3000);
console.log('Listening on port 3000...');