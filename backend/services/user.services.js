const UserModel = require('../model/user.model')

class UserService{

    static async loginUser(name, password) {
        try {
          const user = await UserModel.findOne({ name, password });
          return user;
        } catch (err) {
          throw err;
        }
      }
    }
module.exports = UserService;

