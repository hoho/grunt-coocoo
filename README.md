grunt-coocoo
============

Compile CooCoo

Install:

```sh
npm install grunt-coocoo --save-dev
```

Enable:

```js
grunt.loadNpmTasks('grunt-coocoo');
```

Use:

```js
coocoo: {
    compile: {
        src:   ['src/**/*.coo'],
        dest: {
            common: 'dest/common.js',
            app:    'dest/app.js',
            debug:  true
        }
    }
}
```
