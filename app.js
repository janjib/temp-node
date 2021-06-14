// npm - global command , come with nodes
// npm --version

// local dependecy - use only in local project
// npm i <packagename>

// global dependacy - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (store important info about project)
// manual approach - (create package.json in the root,create propertiets etc)
// npm init(step by step,press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)