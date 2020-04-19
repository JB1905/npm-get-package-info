# [npm-get-package-info](https://github.com/jb1905/npm-get-package-info)

[![NPM version](http://img.shields.io/npm/v/npm-get-package-info.svg?style=flat-square)](https://www.npmjs.com/package/npm-get-package-info)
[![NPM downloads](http://img.shields.io/npm/dm/npm-get-package-info.svg?style=flat-square)](https://www.npmjs.com/package/npm-get-package-info)

## About
Get info about npm package

## How to Install
First, install the library in your project by npm:
```sh
$ npm install npm-get-package-info
```

Or Yarn:
```sh
$ yarn add npm-get-package-info
```

## Getting Started

```js
const info = await npmGetPackageInfo({
  // options...
});
```

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
**name** | string | `undefined` | Package name | e.g.: `react`
**version** | string | `undefined` | Package version | e.g.: `16.8.0`
**parseOutput** | boolean | `true` | Parse results to JSON | Enable `true` / disable `false`
**info** | Info[] | all `Info` values | Info about packages to be fetched | `Info` values

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
