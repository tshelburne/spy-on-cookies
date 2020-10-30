spy-on-cookies
==============

[![CircleCI](https://circleci.com/gh/tshelburne/spy-on-cookies.svg?style=svg)](https://circleci.com/gh/tshelburne/spy-on-cookies)

A quick way to spy on `document.cookie`, which is more difficult than usual. If you write something that works directly with the `document.cookie` browser API, and you want to test it, you will need this - it's basically impossible to get configuration back out of `document.cookie`.

## Usage

```bash
npm install -D spy-on-cookies
```

Usage is simple - the code below shows the entire API.

```js
// in an example mocha test
import spyOnCookies from 'spy-on-cookies'

beforeEach(function() {
	this.cookie = spyOnCookies()
})

afterEach(function() {
	this.cookie.restore()
})

it('calls with the proper definition', function() {
	document.cookie = 'test=value;domain=test.com;max-age=64000'
	expect(this.cookie.calls).to.include('test=value;domain=test.com;max-age=64000')
})
```