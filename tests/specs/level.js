var simple = require('simple-mock')
var test = require('tape')

var Log = require('../../index')

test('log.level', function (t) {
  Log.console = {
    log: simple.stub()
  }

  var log = new Log('foo')
  log.level = 'warn'
  log.debug('bar')
  log.level = 'debug'
  log.debug('baz')
  var barLog = log.scoped('bar')
  barLog.debug('baz')

  t.is(Log.console.log.callCount, 2, 'log.debug only called after level set to "debug"')
  t.end()

  Log.console = console
})
