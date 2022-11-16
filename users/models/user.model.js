const mysql = require('../../config/database').DATABASE;

const User = {
  getAll: async (result) => {
    try {
      const users = await mysql.query(`SELECT * FROM users`);
      return users[0];
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};

module.exports = User;
