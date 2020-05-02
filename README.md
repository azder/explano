# Explano

Use to generate short error messages to explain some problem, like

```
E123: The problem 123 occured
```


## Install

```
$ npm install --save @azhder/explano
```

## Include

- In CommonJS environment
```
const E = require('@azhder/explano');
```

- Using ES modules
```
import E from '@azhder/explano';
```

## Use


- On first access, it uses the property name as the returned message
```
console.log(E['E123: The problem 123 occured']); // E123: The problem 123 occured
```

```
console.log(E.AS3113); // AS3113
console.log(typeof E.AS3113); // string
```

- Plays nice with `JSON.stringify`
```
console.log(JSON.stringify(E.STR1N6)); // "STR1N6"
```

- Invoked as a function, it sets property to a new namespace function
```
console.log(E('FUNCT10N')); // [Function: FUNCT10N]
```


-  Must set-up sub-namespace functions before their first access (otherwise they will be set as strings)
```
E('INV0');
E('INV0')('K3D');
```

- Sub-namespaces are used as prefixes when accessing the property at the end
```
console.log(E.INV0.K3D['with some explanation']); // INV0: K3D: with some explanation
```

- Sub-namespaces don't work on strings
```
console.log(E.UND3F1N3D); // UND3F1N3D
console.log(E.UND3F1N3D.T35T); // undefined
```

- Memoizes calls for future access. The previous examples will produce an object like the following
```
console.log(E);


// [Function (anonymous)] {
//     'E123: The problem 123 occured': 'E123: The problem 123 occured',
//     AS3113: 'AS3113',
//     STR1N6: 'STR1N6',
//     FUNCT10N: [Function: FUNCT10N],
//     INV0: [Function: INV0] {
//         K3D: [Function: INV0: K3D] {
//             'INV0: K3D: with some explanation': 'INV0: K3D: with some explanation'
//         }
//     },
//     UND3F1N3D: 'UND3F1N3D'
// }
```
