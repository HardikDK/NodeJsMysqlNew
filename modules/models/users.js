console.log('models/users');
const con = require('../auth/conn.js');
const Model = con.Model;
const DataTypes = con.DataTypes;
const Sequelize = con.Sequelize;
const sequelize = con.sequelize;
const conn = con.con;
const createdb = require('../auth/createdb.js');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });


const User = sequelize.define('users', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    // lastName: {
    //   type: DataTypes.STRING
    //   // allowNull defaults to true
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
      // createdBy: {
      //   type: DataTypes.INTEGER,
      // },
      // updatedBy: {
      //   type: DataTypes.INTEGER,
      // },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true,
    },
  }, {
    // Other model options go here
});

// User.sync({ alter: true });
// const User = sequelize.define('users', {
//     // Model attributes are defined here
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     // lastName: {
//     //   type: DataTypes.STRING
//     //   // allowNull defaults to true
//     // },
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       contact: DataTypes.INTEGER,
//       // createdBy: DataTypes.STRING,
//       // updatedBy: DataTypes.STRING,
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,
//   }, {
//     // Other model options go here
//   });


// class User extends Model {}
// User.init({
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     contact: DataTypes.INTEGER,
//       createdAt: DataTypes.DATE,
//       updatedAt: DataTypes.DATE,    
// }, { sequelize, modelName: 'user' });

  // const User = sequelize.define('User', {
  //   // Model attributes are defined here
  //   firstName: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   lastName: {
  //     type: DataTypes.STRING
  //     // allowNull defaults to true
  //   }
  // }, {
  //   // Other model options go here
  // });

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// const User = sequelize.define("users", {
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//   password: DataTypes.STRING,
//   contact: DataTypes.NUMBER,
//   createdBy: DataTypes.STRING,
//   updatedBy: DataTypes.STRING,
//   createdAt: DataTypes.DATE,
//   updatedAt: DataTypes.DATE,
//   // age: DataTypes.INTEGER,
//   // cash: DataTypes.INTEGER
//   // favoriteColor: {
//   //   type: DataTypes.TEXT,
//   //   defaultValue: 'green'
//   // },
// });


// const User = sequelize.define("user", {
//     name: DataTypes.TEXT,
//     favoriteColor: {
//       type: DataTypes.TEXT,
//       defaultValue: 'green'
//     },
//     age: DataTypes.INTEGER,
//     cash: DataTypes.INTEGER
//   });
  

const Data = sequelize.define("data", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
    //   defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });
  
  (async () => {
    await sequelize.sync({ force: false });
    // Code here
  }) ();

//   (async () => {
//     await sequelize.sync({ force: true });
//     // Code here
//   })();


// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();

module.exports = User;
//  module.exports = Data;