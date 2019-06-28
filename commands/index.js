#! /usr/bin/env node

const program = require('commander')
const git = require('./git')

program
    .version('1.0.0', '-v, --version')
    .option('-p, --push', 'autopush 直接推送文件')
    .option('-l, --pull', 'pull 拉取文件，然后推送')
    .option('-m, --pushm [ops]', 'push 文件接 描述信息,使用双引号描述')

program.on('--help', () => {
    console.log('                                                                   ')
    console.log(' ***************************************************************** ')
    console.log('     [fllow me](https://mrzhoulichao.github.io/reco/)              ')
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
