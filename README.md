# reflux-flash [![npm version](http://img.shields.io/npm/v/reflux-flash.svg?style=flat)](https://npmjs.org/package/reflux-flash) [![Dependencies Status](https://david-dm.org/srph/reflux-flash.svg)](https://david-dm.org/srph/reflux-flash.svg) [![Build Status](https://travis-ci.org/srph/reflux-flash.svg?branch=master)](https://travis-ci.org/srph/reflux-flash?branch=master) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Spawn flash messages with [Reflux (```spoike/reflux```)](https://github.com/spoike/refluxjs).

So far, I aim for this usage:

```jsx
<Drawer>
  <Toast filter={'snack'} />
</Drawer>

<Drawer filter={'snack'}>
  <Snack />
</Drawer>

<Drawer filter={'flash.success'}>
  <Message />
</Drawer>
```

## Important Notice

**This project has been discontinued without working API or examples**. I am currently extremely busy at work, and, at the same time, moving to [alt](https://github.com/goatslacker/alt).

## Content

- [Important Notice](#important-notice)
  - [Todo](#todo)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contribution](#contribution)
  - [Building](#building)
  - [Coding Style](#coding-style)


## Acknowledgement

**reflux-flash** © 2014+, Kier Borromeo (srph). While [```spoike/reflux```](https://github.com/spoike/reflux) is released under the BSD-3 license, **reflux-flash** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
