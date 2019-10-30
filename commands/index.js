#! /usr/bin/env node

const program = require('commander')
const shell = require('shelljs')
const git = require('./git')

program
    .version('1.0.0', '-v, --version')
    .option('-p, --push', 'autopush 直接推送文件')
    .option('-l, --pull', 'pull 拉取文件，然后推送')
    .option('-m, --pushm [msg]', 'push 文件接 描述信息,使用双引号描述')
    .option("-o, --orz [msg]", "用于orz.io博客打包")
    .option("-c, --copy [origin] [target]", "拷贝../temp至当前文件夹")

program.on('--help', () => {
    console.log('                                                                   ')
    console.log(' ***************************************************************** ')
    console.log('     [fllow me](https://llorz-o.github.io/)              ')
})

program.parse(process.argv);

if (program.push) {
    git('p')
} else
if (program.pull) {
    git('l')
} else
if (program.pushm) {
    git('m', program.pushm)
} else
if (program.orz) {
    shell.exec("npm run build")
    shell.exec("git add .")
    shell.exec("git commit -m 'build'")
    shell.exec("git push")
    shell.exec("git checkout master")
    shell.cp('-R', '../temp/*', './');
    shell.exec("git add .")
    shell.exec(`git commit -m '${program.orz}'`)
    shell.exec("git checkout build-br")
}
if (program.copy) {
    shell.cp('-R', '../temp/*', './');
}