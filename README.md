# mass_cert
It is a most simplest automated mass certificate generator for event certificate distribution `(Size : 1000x750)`
It also requires `Python3` installed with path setuped in your system. 

## Install 

```sh
npm i mass_cert
```
## Import Module
**Node.js:**
```js
const cert = require('mass_cert');

```

### Example

```js
    const cert = require("./mass_cert");
    cert.certmaker(file,img,path);

```

**expects:**
* `file` : Text file which contains names of the certificate eligible participants.
* `img`  : Image file as Blank Certificate template _high quality PNG Format file is Best_.
* `path` : Relative path of the location where to save all the generated Certificates.

## Demo

```js
    const cert = require("./mass_cert");
    cert.certmaker('./list.txt','./blank_cert.png','./path_certificates/');

```

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
['Node.js' release schedule]

## License

MIT

### Thanks! If you like then checkout : https://github.com/Krishna2gupta2000/
