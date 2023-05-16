console.log('cartscontroller');
const express = require('express');
const cartscontrollers = express();
const { Op } = require("sequelize");
const con = require('../auth/conn.js');
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;

// const users = require('../models/users.js');
const Cart = require('../models/carts.js');
const Product = require('../models/products.js');

// userscontrollers.get('/users', (req, res) => {
//     res.status(200).json({
//         "status" : "success users",
//         "message" : "Test api users"
//     });
// });

exports.carts = async (req, res) => {
    try {
        // let addtocart = await Cart.findAll({});
        // let addtocart = await Cart.findAll({
        //   where: {
        //     // authorId: 2
        //   }
        // });


        // const addtocart = await Cart.findAll({ include: [{model: Product, as: 'products'}] });
        /*const [addtocart, metadata] = await sequelize.query(
          "SELECT `add_to_cart`.`id`, `add_to_cart`.`product_id`, `add_to_cart`.`user_id`, `add_to_cart`.`quantity`, `add_to_cart`.`createdAt`, `add_to_cart`.`updatedAt`, `products`.`id` AS `products.id`, `products`.`title` AS `products.title`, `products`.`description` AS `products.description`, `products`.`price` AS `products.price`, `products`.`discountPercentage` AS `products.discountPercentage`, `products`.`rating` AS `products.rating`, `products`.`stock` AS `products.stock`, `products`.`brand` AS `products.brand`, `products`.`category` AS `products.category`, `products`.`thumbnail` AS `products.thumbnail`, `products`.`images0` AS `products.images0`, `products`.`images1` AS `products.images1`, `products`.`images2` AS `products.images2`, `products`.`images3` AS `products.images3`, `products`.`images4` AS `products.images4`, `products`.`images5` AS `products.images5`, `products`.`createdAt` AS `products.createdAt`, `products`.`updatedAt` AS `products.updatedAt` FROM `add_to_carts` AS `add_to_cart` LEFT OUTER JOIN `products` AS `products` ON `add_to_cart`.`product_id` = `products`.`id`"
        );*/
        const addtocart = await Cart.findAll({ include: Product });
        // const addtocart = await Cart.findAll({ include: Product,
        //     where: {
        //       user_id: {
        //         [Op.eq]: req.params.user_id
        //       }
        //     }
        // });
        // console.log(JSON.stringify(addtocart, null, 2));


        res.status(200).json({
            status : "success carts",
            message : "Test api carts",
            data: addtocart
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail carts",
            message : "Test api carts",
            data: error
        });
    }
};

exports.cartsByUser = async (req, res) => {
    try {
        // let addtocart = await Cart.findAll({});
        // let addtocart = await Cart.findAll({
        //   where: {
        //     // authorId: 2
        //   }
        // });


        // const addtocart = await Cart.findAll({ include: [{model: Product, as: 'products'}] });
        /*const [addtocart, metadata] = await sequelize.query(
          "SELECT `add_to_cart`.`id`, `add_to_cart`.`product_id`, `add_to_cart`.`user_id`, `add_to_cart`.`quantity`, `add_to_cart`.`createdAt`, `add_to_cart`.`updatedAt`, `products`.`id` AS `products.id`, `products`.`title` AS `products.title`, `products`.`description` AS `products.description`, `products`.`price` AS `products.price`, `products`.`discountPercentage` AS `products.discountPercentage`, `products`.`rating` AS `products.rating`, `products`.`stock` AS `products.stock`, `products`.`brand` AS `products.brand`, `products`.`category` AS `products.category`, `products`.`thumbnail` AS `products.thumbnail`, `products`.`images0` AS `products.images0`, `products`.`images1` AS `products.images1`, `products`.`images2` AS `products.images2`, `products`.`images3` AS `products.images3`, `products`.`images4` AS `products.images4`, `products`.`images5` AS `products.images5`, `products`.`createdAt` AS `products.createdAt`, `products`.`updatedAt` AS `products.updatedAt` FROM `add_to_carts` AS `add_to_cart` LEFT OUTER JOIN `products` AS `products` ON `add_to_cart`.`product_id` = `products`.`id`"
        );*/
        // const addtocart = await Cart.findAll({ include: Product });
        const addtocart = await Cart.findAll({ include: Product,
            where: {
              user_id: {
                [Op.eq]: req.params.user_id
              }
            }
        });
        // console.log(JSON.stringify(addtocart, null, 2));


        res.status(200).json({
            status : "success carts",
            message : "Test api carts",
            data: addtocart
        }); 
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail carts",
            message : "Test api carts",
            data: error
        });
    }
};


exports.addtocart = async (req, res) => {
    try {
        let addtocart = await Cart.create({
            productId: req.body.productId,
            user_id: req.body.user_id,
            createdAt: Date.now(),
            updatedAt: null,
            quantity: req.body.quantity,
        });
        let addedtocart = await addtocart.save();

        // const productAddedtocart = await Cart.findAll({
        //     include: {
        //         model: Product,
        //         // through: {
        //         //   attributes: []
        //         // }
        //     },
        //     where: {
        //         user_id: req.params.user_id
        //     }
        // });
        // console.log(req.body.productId);
        // let cartProducts = [];
        // productAddedtocart.forEach(function(key, value) {
        //     cartProducts.push(key.productId)
        // })
        // console.log(cartProducts);
        // if (cartProducts.includes(req.body.productId)) {
        //     console.log('if')
        // } else {
        //     console.log('else')
        // }

        // const productAddtocart = await Cart.findAll({ include: Product });
        // const productAddtocart = await Cart.findOne({
        //   include: {
        //     model: Product,
        //     through: {
        //       attributes: []
        //     }
        //   }
        // });
        const productAddtocart = await Cart.findOne({
          include: {
            model: Product,
            // through: {
            //   attributes: []
            // }
          }
        });
        // console.log(addedtocart)
        res.status(200).json({
            status : "success post addtocart try",
            message : "Test post api addtocart try",
            data: addedtocart, productAddtocart,
        });
    } catch (error) {
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error.errors,
            // data: error.errors.map((item)=>item.message),
        });
    }
};

exports.updatequantity = async (req, res) => {
    try {
        // console.log('req.body.quantity', req.body.quantity)
        // console.log('req.params.product_id', req.params.product_id)
        let updatequantity = await Cart.update({
            // product_id: req.body.product_id,
            // user_id: req.body.user_id,
            // createdAt: Date.now(),
            // updatedAt: null,
            // createdAt: null,
            updatedAt: Date.now(),
            quantity: req.body.quantity,
            }, {
              where: {
                // lastName: null
                productId: req.params.productId
            }
        });
        let updatedquantity = await Cart.findOne({
          where: {
            // authorId: 2
            productId: req.params.productId
          }
        });
        // console.log(updatequantity)
        // let addedtocart = await addtocart.save();
        res.status(200).json({
            status : "success post updatequantity addtocart try",
            message : "Test post api updatequantity addtocart try",
            data: updatedquantity,
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error.errors,
            // data: error.errors.map((item)=>item.message),
        });
    }
};


exports.removefromcart = async (req, res) => {
    try {
        console.log('req', req.params.productId)
        // console.log('req', req.query.array)
        // console.log('req', JSON.parse(req.query.array))
        // let addtocart = await Cart.destroy({
        //   where: {
        //     // authorId: 2
        //     productId: {
        //         // [Op.eq]: req.params.id
        //         // [Op.eq]: req.query.array
        //         [Op.in]: req.query.array
        //         // [Op.eq]: JSON.parse(req.query.array)
        //         // [Op.in]: JSON.parse(req.query.array)
        //         // [Op.eq]: req.query.array.split(',')
        //         // [Op.in]: JSON.parse(req.query.array.split(','))
        //         // [req.params.id]
        //     }
        //   }
        // });
        let addtocart = await Cart.destroy({
          where: {
            // authorId: 2
            productId: req.params.productId
          }
        });
        console.log('r', addtocart)
        // let addtocart = await Cart.findOne({}, {
        //   where: {
        //     // user_id: req.params.user_id
        //     product_id: req.params.product_id
        //   }
        // });
        // console.log('f', addtocart)
        // let addedtocart = await addtocart.destroy({
        //   where: {
        //     // user_id: req.params.user_id
        //     product_id: req.params.product_id
        //   }
        // });
        // console.log('d', addtocart)
        res.status(200).json({
            status : "success destroy addtocart try",
            message : "Test destroy api addtocart try",
            data: addtocart,
        });
    } catch (error) {
        console.error(error)
        res.status(200).json({
            status : "fail post addtocart catch",
            message : "Test post api addtocart catch",
            data: error,
            // data: error.errors.map((item)=>item.message),
        });
    }
};


// exports.signup = async (req, res) => {
//     try {
//         let user = await User.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: hashPass,
//             contact: req.body.contact,
//             // createdAt: Date.now();
//         });
//         res.status(200).json({
//             status : "success users",
//             message : "Test api users signup try",
//             data: user
//         });   
//     } catch (error) {
//         console.error(error);
//     }
// };

// exports.login = (req, res) => {
//     try {
//         res.status(200).json({
//             "status" : "success users",
//             "message" : "Test api users login try"
//         });   
//     } catch (error) {
        
//     }
// };


// module.exports = userscontrollers;