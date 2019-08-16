# stranger-things [![Build Status](https://travis-ci.org/vadimdemedes/stranger-things.svg?branch=master)](https://travis-ci.org/vadimdemedes/stranger-things)

> Random words from Stranger Things


## Install

```
$ npm install stranger-things
```


## Usage

```js
const strangerThings = require('stranger-things');

strangerThings.all;
//=> ['Eleven', 'Hawkins', 'Hopper', ...]

strangerThings.random();
//=> 'Mad Max'
```


## API

### .all

Type: `string[]`

All words.

### .random()

Type: `Function`

Return a random word.
