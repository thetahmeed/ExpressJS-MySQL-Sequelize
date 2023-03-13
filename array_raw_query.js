const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize("tahmeed", "root", "", {
    host: "localhost",
    dialect: "mysql",
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

sequelize.query(
    'SELECT * FROM students WHERE student_id = ?',
    {
      replacements: ['REPLACE_STUDENT_ID'],
      type: sequelize.QueryTypes.SELECT
    }
).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});