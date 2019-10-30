const shell  = require('shelljs')

if(!shell.which('git')){
    shell.echo('对不起，不支持git操作！')
    shell.exit(1)
}

module.exports = (cmd,ops) => {
    // /* 执行 automated.build.js 文件使用模板生成 */
    // shell.exec('npm run auto')
    if(cmd === 'p'){
        shell.exec('git add *')
        shell.exec("git commit -m 'autocommit'")
        shell.exec('git push')
    }
     if(cmd === 'l'){
        shell.exec('git pull')
        shell.exec('git add *')
        shell.exec("git commit -m 'autocommit'")
        shell.exec('git push')
    }
    if(cmd === 'm'){
        shell.exec('git add *')
        shell.exec(`git commit -m "${ ops }"`)
        shell.exec('git push')
    }
}