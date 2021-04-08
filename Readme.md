# format-naira

format-naira is a package that format number values to naira currency

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install format-naira.

```bash
npm install format-naira
```

## Usage

```javascript
const formatNaira = require(format - naira); //commmonJS import
//
import formatNaira from "format-to-naira"; //es6 imports

const nairaValue = formatNaira(1000); 
console.log(nairaValue) //₦1,000

//you can also format more than one value it will return a sum in naira 
const total = formatNaira(2000, 3000); 
console.log(total) //₦5,000
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
