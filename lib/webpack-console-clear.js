/**
 * Created by xyc on 06.18.2020
 */

var WebpackConsoleClear = function () {
}

WebpackConsoleClear.prototype.apply = function (compiler) {
  compiler.hooks.emit.tapAsync('emit', (compilation, callback) => {
    compilation.chunks.forEach(chunk => {
      chunk.files.forEach(filename => {
        var source = compilation.assets[filename].source()

        var consoleName = ['console', 'window.console']
        var consoleType = ['log', 'info', 'warn', 'error', 'assert', 'count', 'clear', 'group',
          'groupEnd', 'groupCollapsed', 'trace', 'debug', 'dir', 'dirxml', 'profile', 'profileEnd',
          'time', 'timeEnd', 'timeStamp', 'table', 'exception']

        const rConsole = new RegExp('(' + consoleName.join('|') + ')' + '.(?:' + consoleType.join('|') + ')\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*NotClearConsole\\s*\\*\\/)\\s{0,};?', 'gi')

        source = source.replace(rConsole, function () {
          return source.replaceWith || ''
        })

        compilation.assets[filename] = {
          source: function () {
            return source
          },
          size: function () {
            return source.length
          }
        }
      })
    })
    callback()
  })
}

module.exports = WebpackConsoleClear
