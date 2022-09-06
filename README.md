# Better Random

## Ian Marshall

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Live Site

> [https://ianjstutor.github.io/better-random/](https://ianjstutor.github.io/better-random/)

### Description

JavaScript's <code>Math.random()</code> is perfectly serviceable as a basic pseudo random number generator. But it isn't seeded. So, when you need a fast, seeded pseudo random number generator, you'll have to write your own…or use mine!

This is a linear congruential generator algorithm from the book <cite>Numerical Recipes: The Art of Scientific Computing</cite>, 1986, by William H. Press, Saul A. Teukolsky, William T. Vetterling, and Brian P. Flannery.

It's NOT suitable for cryptography, but stable in production, and is a lot faster than more modern, more sophisticated algorithms (like Mersenne Twister or ARC4, for example).

Built with vanilla JavaScript, my favorite flavor!

### Testing

```bash
npm test
```

Provided testing uses Jest on a Node environment. Please note that special configuration has been made for Node and for Jest to both use ECMAScript modules (<code>import</code> instead of the Common.js <code>require()</code>).

The following was inserted into <code>package.json</code> for testing to work.

```json
"type": "module",
"jest": {
    "transform": {}
},
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

### Usage

Include <code>better-random.js</code> in your project. Import the JS into your main JavaScript file and call <code>betterRandom(seed)</code>, where <code>seed</code> is an optional seed number. The return value is an object with three possible functions: <code>range(min, max)</code>, <code>nextInt()</code>, and <code>nextFloat()</code>.

#### HTML

```html
<head>
    <script defer type="module" src="main.js"></script>
</head>
```

#### JavaScript

```js
//main.js
import { betterRandom } from "./better-random.js";
const rand = betterRandom();
const randFloat = rand.nextFloat();
const randInt = rand.nextInt();
const rangedRand = rand.range(100);
const chooseAWholeNumberBetweenZeroAnd100 = rangedRand.nextInt();
```

### Documentation

#### Module Export

```js
export { betterRandom };
```

#### Public Methods

##### betterRandom

```js
betterRandom(seed)
```

Calling <code>betterRandom</code> initializes a new pseudo random number generator. The <code>seed</code> is optional, and defaults to <code>Date.now()</code>. If a seed is provided, for best results it should be a positive integer inclusively between zero and <code>1.7976931348623157e+308</code>.

<code>betterRandom</code> returns an object containing the three functions below.

<code>betterRandom</code> is not a constructor as in an object-oriented paradigm. Instead it is a function that keeps values in closure and returns an object literal with methods that can act within that closure.

##### range

```js
betterRandom().range(min, max)
```

The <code>range</code> function defines low and high clamping boundaries for the random number. If only one argument is given, the second one will default to zero. <code>min</code> does not need to be less than <code>max</code>.

After defining a range, <code>nextInt</code> and <code>nextFloat</code> will produce numbers within that range, never going below <code>min</code> and never going above <code>max</code>, although matching values are possible when later calling <code>nextInt()</code>. Calling <code>range</code> without arguments will reset the range to defaults (between zero and one, inclusive).

<code>range</code> returns an object containing the two functions below.

##### nextInt

```js
betterRandom().nextInt()
betterRandom().range().nextInt()
```

The <code>nextInt</code> function returns a random integer. Calling it without setting a range will randomly produce an integer up to ten digits long. Calling <code>nextInt</code> after setting a range will produce a random integer clamped to that range, inclusive.

Each call to <code>nextInt</code> changes the seed according to the algorithm. So calling it multiple times will produce a deterministic sequence of integers. Use the same seed, and you'll get the exact same sequence.

##### nextFloat

```js
betterRandom().nextFloat()
betterRandom().range().nextFloat()
```

The <code>nextFloat</code> function returns a random floating-point number. Calling it without setting a range will randomly produce a number greater-than or equal to zero and less-than one. This matches the base functionality of <code>Math.random</code> but with a seed. Calling <code>nextFloat</code> after setting a range will produce a random floating-point number greater-than or equal to the min and less-than the max.

Each call to <code>nextFloat</code> changes the seed according to the algorithm. So calling it multiple times will produce a deterministic sequence of floating-point numbers. Use the same seed, and you'll get the exact same sequence.
