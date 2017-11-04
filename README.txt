NOTE: This is broken.  It's uploaded as an example to report a bug

It gives this error:

$ npm start

> testmetal@1.0.0 prestart /Users/dave/LocalProjects/metaltest
> npm install

up to date in 1.249s

> testmetal@1.0.0 start /Users/dave/LocalProjects/metaltest
> node .

Error: invalid engine, the engine should be a constructor.
    at Ware.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/metalsmith-in-place/dist/index.js:27:12)
    at Ware.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/wrap-fn/index.js:45:19)
    at next (/Users/dave/LocalProjects/metaltest/node_modules/ware/lib/index.js:85:20)
    at /Users/dave/LocalProjects/metaltest/node_modules/wrap-fn/index.js:121:18
    at Ware.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/metalsmith-collections/lib/index.js:130:5)
    at Ware.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/wrap-fn/index.js:45:19)
    at next (/Users/dave/LocalProjects/metaltest/node_modules/ware/lib/index.js:85:20)
    at Ware.run (/Users/dave/LocalProjects/metaltest/node_modules/ware/lib/index.js:88:3)
    at Metalsmith.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/thunkify/index.js:43:12)
    at next (/Users/dave/LocalProjects/metaltest/node_modules/co/index.js:90:21)
    at Metalsmith.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/co/index.js:45:5)
    at Metalsmith.next (/Users/dave/LocalProjects/metaltest/node_modules/co/index.js:90:21)
    at Metalsmith.<anonymous> (/Users/dave/LocalProjects/metaltest/node_modules/co/index.js:93:18)
    at Immediate._onImmediate (/Users/dave/LocalProjects/metaltest/node_modules/co/index.js:52:14)
    at runCallback (timers.js:789:20)
    at tryOnImmediate (timers.js:751:5)
