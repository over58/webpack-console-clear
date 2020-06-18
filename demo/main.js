/**
 * Created by xyc on 06.18.2020
 */

function testFile () {
  console.log('These')
  console.warn('console')
  console.error('statements')
  console.dir({ will: 'be', removed: 'true' })
  console.log('except for this one!')/* NotClearConsole */
}

testFile()
