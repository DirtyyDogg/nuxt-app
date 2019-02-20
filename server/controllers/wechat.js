const mongoose = require('mongoose')
const User = mongoose.model('User')
const dbHelp = require('../database/dbHelp')
const wechatLib = require('../lib/wechat-lib')
const config = require('../config')
// const reply = require('../config')

module.exports.hear = async (ctx, next) => {
  const middle = wechatLib.hear(config.wechat, wechatLib.reply)
  const body = await middle(ctx, next)
  return ctx.body = ctx.body
}
