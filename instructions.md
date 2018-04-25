## Register provider
Register the provider inside `start/app.js` file.

```js
const providers = [
  '@adonisjs/loggly/providers/LogglyProvider'
]
```

## Config
Once provider has been registered, you can add it to the list of loggers inside your `config/app.js` file.

```js
module.exports = {
  logger: {
    transporter: 'loggly',

    loggly: {
      driver: 'loggly',
      tags: [],
      json: true,
      token: 'LOGGLY_TOKEN',
      subdomain: 'LOGGLY_SUBDOMAIN'      
    }
  }
}
```

Read about all the config options here https://www.npmjs.com/package/winston-loggly-bulk.
