# Adonis Loggly
> Loggly logger provider for AdonisJs

This package let you make use of loggly as the transporter for your log messages. It is expected to be used with the inbuilt `Logger` provider of AdonisJs.

## Installation

```bash
adonis install @adonisjs/loggly

# yarn users
adonis install @adonisjs/loggly --yarn
```

Next step is to register the provider as show below.

```js
const providers = [
  '@adonisjs/loggly/providers/LogglyProvider'
]
```

Now, you are all set to make use of this provider. Just make sure to define the required configuration and set `transporter=loggly`.

## Config

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
