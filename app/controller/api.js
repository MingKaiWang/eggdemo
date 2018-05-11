// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      data: {
        Hello: 'World !'
      }
    }
  }
}

module.exports = HomeController;
