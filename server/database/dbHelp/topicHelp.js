const mongoose = require('mongoose')

const Topic = mongoose.model('Topic')
const accountHelp = require('./accountHelp')
const _ = require('lodash')


module.exports.getTopic = async function (query) {
  query.deleted = false
  const topic = await Topic
    .findOne(query)
    .exec()
  const account = await accountHelp.getAccount({_id: topic.account})
  return [topic, account]
}

module.exports.getTopics = async function (query, opt) {
  query.deleted = false
  let data = await Topic
    .find(query, {}, opt)
    .exec()

    data = await Promise.all(
      data.map(async topic=>{
        topic = _.pick(topic, ['_id', 'title', 'content', 'author', 'user', 'account',
        'meta', 'accountName'])
        const account = await accountHelp.getAccount({_id: topic.account})
        topic.accountName = account.name
        return topic
      })
    )

  return data
}
