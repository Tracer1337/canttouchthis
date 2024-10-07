# canttouchthis

Hinder your users from clicking anything!

[Demo](https://tracer1337.github.io/canttouchthis/)

## Installation

```bash
yarn add canttouchthis
```

## Usage

```js
// Supports both esm and cjs
import canttouchthis from "canttouchthis"

// Apply it to any dom element
const element = document.querySelector("...")

// Call the function and save the return value
const reset = canttouchthis(element)

// Reset everything
reset()
```
