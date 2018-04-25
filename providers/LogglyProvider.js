'use strict'

/**
 * adonis-loggly
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const { ServiceProvider } = require('@adonisjs/fold')

class LogglyProvider extends ServiceProvider {
  register () {
    this.app.extend('Adonis/Src/Logger', 'loggly', () => {
      const Loggly = require('../src/Loggly')
      return new Loggly()
    })
  }
}

module.exports = LogglyProvider
