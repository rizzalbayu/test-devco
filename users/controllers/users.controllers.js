const users = require('../models/user.model');

module.exports = {
  getAll: async (req, res) => {
    const data = await users.getAll();
    return res.send({
      status: 'Success',
      message: 'Success',
      data: data,
    });
  },
};
