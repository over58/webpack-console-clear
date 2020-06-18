
# webpack-console-clear
Webpack-console-clear plugin clears console by replacing console functions during bundling
## Installation
The plugin is available via npm:

```js
$ npm i webpack-clear-console
```

## Examples

You can see an example at demo/webpack.config.js.

if you dont want to delete a console statement,you can add a comment called  "NotClearConsole" as in the following example
```js
function test(){
console.dir({ will: be, removed: "true" })
console.log("except for this one!");/*NotClearConsole*/
}
```
Note:if there is more than one console statement in source code,console expression that you
dont want to delete must add to under the other console statement


### Basic

```js
var WebpackConsoleClear = require("webpack-clear-console").WebpackConsoleClear;

module.exports = {
 plugins: [
    // Other plugins.
    // WebpackConsoleClear plugin removes all statements beginning with console.
    new WebpackConsoleClear();
  ]
}
```
