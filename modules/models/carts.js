console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const Product = require('./products.js');

const Cart = sequelize.define('add_to_cart', {
    // Model attributes are defined here
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      references: {
        model: Product, // 'Actors' would also work
        key: 'id',
        as : 'products'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true,
      allowNull: false,
      required: true,
    },
    quantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,    
  }, {
    // Other model options go here
    sequelize,
    // paranoid: true,

    // If you want to give a custom name to the deletedAt column
    // deletedAt: 'destroyTime'
});

Cart.hasOne(Product, {
  foreignKey: 'id',
  key: 'product_id',
  as: 'products'
})




Product.belongsTo(Cart, {
  foreignKey: 'product_id',
  key: 'id',
  as: 'products'
})

// Cart.hasMany(Product)

// Product.hasOne(Cart, {
//   foreignKey: 'product_id'
// })
// Product.belongsTo(Cart)

// Cart.hasMany(Product, {
//   key: 'id',
//   as: 'products'
// });
// Product.belongsTo(Cart, {
//   foreignKey: 'product_id'
// });


// This will run .sync() only if database name ends with '_test'
// sequelize.sync({ force: true, match: /_test$/ });
// sequelize.sync({ alter: true });

module.exports = Cart;
