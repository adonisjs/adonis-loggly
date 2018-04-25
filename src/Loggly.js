'use strict'

/**
 * dimer-server
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const Winston = require('winston')
const _ = require('lodash')
require('winston-loggly-bulk')

/**
 * Reports logs to loggly
 *
 * @class Loggly
 */
class Loggly {
  setConfig (config) {
    this.config = Object.assign({}, {
      name: 'adonis-app',
      level: 'info',
      json: 'true',
      stripColors: true,
      timestamp: new Date().toLocaleTimeString()
    }, config)

    /**
     * Loggly returns 400 when tags are defined to an empty
     * array. So we just remove the tags here, if it's
     * an empty array
     */
    if (this.config.tags && this.config.tags.length === 0) {
      delete this.config.tags
    }

    this.logger = new Winston.Logger({
      transports: [new Winston.transports.Loggly(this.config)]
    })

    this.logger.setLevels(this.levels)
  }

  /**
   * The levels to be used by winston
   *
   * @method levels
   *
   * @return {Object}
   */
  get levels () {
    return {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    }
  }

  /**
   * Returns the current level for the driver
   *
   * @attribute level
   *
   * @return {String}
   */
  get level () {
    return this.logger.transports[this.config.name].level
  }

  /**
   * Update driver log level at runtime
   *
   * @param  {String} level
   *
   * @return {void}
   */
  set level (level) {
    this.logger.transports[this.config.name].level = level
  }

  /**
   * Log message
   *
   * @method log
   *
   * @param  {Number}    level
   * @param  {String}    msg
   * @param  {...Spread} meta
   *
   * @return {void}
   */
  log (level, msg, ...meta) {
    const levelName = _.findKey(this.levels, (num) => num === level)
    this.logger.log(levelName, msg, ...meta)
  }
}

module.exports = Loggly
