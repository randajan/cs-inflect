# @randajan/cs-inflect

[![NPM](https://img.shields.io/npm/v/@randajan/cs-inflect.svg)](https://www.npmjs.com/package/@randajan/cs-inflect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**@randajan/cs-inflect** is a lightweight JavaScript library for Czech declension of numerals and nouns based on numbers. It supports singular, paucal (2–4), and genitive plural forms, making it easy to generate grammatically correct strings in Czech.

## Installation

Install the package using npm:

``` bash
npm install @randajan/cs-inflect
```

## Usage

Import the library and use the `csInflect` function to inflect numbers and format strings.

``` js
import csInflect from 'cs-inflect';

// Examples
console.log(csInflect("# sekund[y|a|y]", 1));        // "1 sekunda"
console.log(csInflect("# sekund[y|a|y]", 3));        // "3 sekundy"
console.log(csInflect("# sekund[y|a|y]", 5));        // "5 sekund"
console.log(csInflect("# hodin[a|y|]", 0, true));    // "0 hodin"
console.log(csInflect("# sekund[y|a|y]", 1.567, false, 2)); // "1.57 sekund"
```

### Parameters

#### `csInflect(str, num, zero = false, maxDecimal = 2)`

| Parameter      | Type     | Default | Description                                                                                     |
|----------------|----------|---------|-------------------------------------------------------------------------------------------------|
| `str`          | `string` | N/A     | String with the placeholder for the number (`#`) and declension pattern (e.g., `[y|a|y]`).     |
| `num`          | `number` | N/A     | Number to be formatted and used for declension.                                                |
| `zero`         | `boolean`| `false` | Whether to include zero (e.g., `"0 sekund"` if `true`).                                         |
| `maxDecimal`   | `number` | `2`     | Maximum number of decimal places for the formatted number.                                      |

### Placeholder Format

The string should contain:
- **`#`**: Placeholder for the number.
- **Declension Pattern**: A set of forms for singular, paucal, and plural in square brackets (`[decimal|singular|paucal|plural]`).


#### Example:
- `# sekund[y|a|y]`: Outputs "1 sekunda", "3 sekundy", "5 sekund".
- `# hodin[a|y|]`: Outputs "1 hodina", "3 hodiny", "10 hodin".

## Features

- Fast and lightweight.
- Automatic caching of declension patterns for efficiency.
- Handles singular, paucal, and plural forms in Czech grammar.
- Customizable decimal formatting.

Happy hacking

## License

MIT © [randajan](https://github.com/randajan)