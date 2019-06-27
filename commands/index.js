#! /usr/bin/env node

const program = require('commander')
const git = require('./auto-push')
const automation = require('./auto-automation')

program
    .version('1.0.0', '-v, --version')
    .option('-p, --push', 'autopush 直接推送文件')
    .option('-l, --pull', 'pull 拉取文件，然后推送')
    .option('-m, --pushm [ops]', 'push 文件接 描述信息')
    .option('-a, --auto', '自动化模板构建页面配置与主页归档')


program.on('--help', () => {
    console.log('                  ')
    console.log(' **************** ')
    console.log('       测试        ')
    console.log('                  ')
})

program.parse(process.argv);

if (program.push) {
    git('p')
}
if (program.pull) {
    git('l')
}
if (program.pushm) {
    git('m', program.pushm)
}
if (program.auto) {
    automation('a')
}