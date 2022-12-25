[js-graph-theory-notation](http://make-github-pseudonymous-again.github.io/js-graph-theory-notation)
==

Graph theory notation code bricks for JavaScript. Parent is
[js-gn](https://github.com/make-github-pseudonymous-again/js-gn).

```js
for ( let v of V( G ) ) ... ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-theory-notation/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-theory-notation.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-theory-notation)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-theory-notation.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-theory-notation)
[![Build Status](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-theory-notation)
[![Coverage Status](https://img.shields.io/coveralls/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://coveralls.io/r/make-github-pseudonymous-again/js-graph-theory-notation)
[![Dependencies Status](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-theory-notation#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://david-dm.org/make-github-pseudonymous-again/js-graph-theory-notation#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-theory-notation)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-theory-notation.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-theory-notation)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-theory-notation.svg?style=flat)](https://github.com/make-github-pseudonymous-again/js-graph-theory-notation/issues)
[![Inline docs](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-theory-notation.svg?branch=master&style=shields)](http://inch-ci.org/github/make-github-pseudonymous-again/js-graph-theory-notation)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-theory-notation
# or
jspm install npm:@aureooms/js-graph-theory-notation
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-theory-notation
```

### bower
```terminal
bower install @aureooms/js-graph-theory-notation
```

### ender
```terminal
ender add @aureooms/js-graph-theory-notation
```

### jam
```terminal
jam install @aureooms/js-graph-theory-notation
```

### spm
```terminal
spm install @aureooms/js-graph-theory-notation --save
```

### npm
```terminal
npm install @aureooms/js-graph-theory-notation --save
```

## Require
### jspm
```js
let graphtheorynotation = require( "github:aureooms/js-graph-theory-notation" ) ;
// or
import graphtheorynotation from '@aureooms/js-graph-theory-notation' ;
```
### duo
```js
let graphtheorynotation = require( "aureooms/js-graph-theory-notation" ) ;
```

### component, ender, spm, npm
```js
let graphtheorynotation = require( "@aureooms/js-graph-theory-notation" ) ;
```

### bower
The script tag exposes the global variable `graphtheorynotation`.
```html
<script src="bower_components/@aureooms/js-graph-theory-notation/js/dist/graph-theory-notation.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-graph-theory-notation" ] , function ( graphtheorynotation ) { ... } ) ;
```


## Use

```js
let { V , E , N } = graphtheorynotation ;

for ( let v of V( G ) ) ... ;

for ( let e of E( G ) ) ... ;

for ( let v of N( G , u ) ) ... ;
```

