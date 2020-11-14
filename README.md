# [npm-get-package-info](https://github.com/JB1905/npm-get-package-info)

[![NPM version](https://img.shields.io/npm/v/npm-get-package-info?style=flat-square)](https://www.npmjs.com/package/npm-get-package-info)
[![NPM downloads](https://img.shields.io/npm/dm/npm-get-package-info?style=flat-square)](https://www.npmjs.com/package/npm-get-package-info)
[![NPM license](https://img.shields.io/npm/l/npm-get-package-info?style=flat-square)](https://www.npmjs.com/package/npm-get-package-info)
[![Codecov](https://img.shields.io/codecov/c/github/JB1905/npm-get-package-info?style=flat-square)](https://codecov.io/gh/JB1905/npm-get-package-info)
[![Travis](https://img.shields.io/travis/JB1905/npm-get-package-info/master?style=flat-square)](https://travis-ci.org/JB1905/npm-get-package-info)
[![Bundle size](https://img.shields.io/bundlephobia/min/npm-get-package-info?style=flat-square)](https://bundlephobia.com/result?p=npm-get-package-info)

## About

Get info about npm package

### Alternatives

- [npm-view](https://docs.npmjs.com/cli/v7/commands/npm-view)
- [package-info](https://github.com/AlessandroMinoccheri/package-info) by [Alessandro Minoccheri](https://github.com/AlessandroMinoccheri)

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

**Connect libary to project using ES6 import:**

```js
import npmGetPackageInfo from 'npm-get-package-info';
```

**Or CommonJS:**

```js
const npmGetPackageInfo = require('npm-get-package-info');
```

Next use library:

```js
const info = await npmGetPackageInfo({
  // options...
});
```

## Options

| Name            | Type               | Default                  | Description                       | Available options                            |
| --------------- | ------------------ | ------------------------ | --------------------------------- | -------------------------------------------- |
| **name**        | string             | `undefined`              | Package name                      | e.g.: `react`                                |
| **version**     | string             | `undefined`              | Package version                   | e.g.: `16.8.0`, `~2.1.2`, `^4.5.0`           |
| **parseOutput** | boolean            | `true`                   | Parse results to JSON             | Enable `true` / disable `false`              |
| **info**        | string[] or string | package.json fields keys | Info about packages to be fetched | e.g.: `version`, `contributors`, `main` etc. |

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
