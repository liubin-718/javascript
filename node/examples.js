/*
*  复制目录中所有文件包括子目录
*  @param{String}需要复制的目录
*  @param{String}复制到指定的目录
*/
var fs = require('fs'), copyStat = fs.stat;
var filecopy = function (scr, dst) {
    // 读取目录中的所有文件/目录
    fs.readdir(src, function (err, paths) {
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable;
            copyStat(_src, function (err, st) {
                if (err) {
                    throw err
                }
                // 判断是否为文件 
                if (st.isFile()) {
                    // 创建读取流
                    readable = fs.createReadStream(_src)
                    // 创建写入流
                    writable = fs.createWriteStream(_dst)
                    // 通过管道来传输流
                    readable.pipe(writable)
                } else if (st.isDirectory()) {
                    // 如果是目录则递归调用自身
                    exports.startCopy(_src, _dst)
                }
            })
        })
    })
}
// 复制目录前，先判断是否存在，不存在先创建目录
exports.startCopy = function (src, dst) {
    fs.exists(dst, function (exists) {
        // 已存在
        if (exists) {
            filecopy(src, dst)
        } else {
            fs.mkdir(dst, function () {
                filecopy(src, dst)
            })
        }
    })
}

// vue中根据不同环境读取templates中不同模板(比如：fat1-test.ejs)
// 获取入口文件
var glob = require('glob');
var path = require('path');
exports.getMultiEntry = function (globPath) {
    const entries = {};
    glob.sync(globPath).forEach(funciton(entry){
        let pathName=path.basename(entry, path.extname(entry));
        let folders=entry.split('/');
        if(folders && folders.length){
            entries[pageName] = folders[folders.length - 1]
        }
    });
    return entries
}