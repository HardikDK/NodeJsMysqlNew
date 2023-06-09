console.log('ordersRoutes');
const express = require('express');
const ordersRoutes = express();

const ordersControllers = require('./ordersControllers.js');
const ordersValidation = require('../services/ordersValidation.js');

ordersRoutes.get('/ordersList', ordersControllers.orders);
ordersRoutes.get('/ordersList/:userId', ordersControllers.ordersByUser);
ordersRoutes.post('/addorder/:userId', [ordersValidation.ordersValidation], ordersControllers.addorder);
ordersRoutes.get('/ordersList/:id', ordersControllers.ordersById);
ordersRoutes.get('/ordersListByMonth/:userId/:month', ordersControllers.ordersByMonth);
ordersRoutes.post('/createorder/', ordersControllers.payUsingRazorpay);

module.exports = ordersRoutes;
