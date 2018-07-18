
# fittxt
[![package version](https://img.shields.io/npm/v/fittxt.svg?style=flat-square)](https://npmjs.org/package/fittxt)
[![package downloads](https://img.shields.io/npm/dm/fittxt.svg?style=flat-square)](https://npmjs.org/package/fittxt)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/fittxt.svg?style=flat-square)](https://npmjs.org/package/fittxt)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Modernized [FitText.js](https://github.com/adactio/FitText.js)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install fittxt
$ # OR
$ yarn add fittxt
```

## Usage

```js
import fittxt from 'fittxt'

fittxt('.test', {
  factor: 6,
  min: 50,
  max: 600,
  throttleTime: 500
})
fittxt(['.test', '.foop'])
fittxt(document.querySelector('.test'))

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    