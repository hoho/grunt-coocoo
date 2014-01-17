/*!
 * grunt-conkitty, https://github.com/hoho/grunt-conkitty
 * (c) 2013 Marat Abdullin, MIT license
 */

'use strict';

module.exports = function(grunt) {
    var coocoo = require('coocoo');

    grunt.registerMultiTask('coocoo', 'Compile CooCoo.', function() {
        this.files.forEach(function(f) {
            var files = [],
                common = f.dest.common,
                app = f.dest.app,
                debug = f.dest.debug;

            coocoo.decl = {};
            //coocoo.cmd = {};

            f.src
                .filter(function(filepath) {
                    // Warn on and remove invalid source files (if nonull was set).
                    if (!grunt.file.exists(filepath)) {
                        grunt.log.warn('Source file "' + filepath + '" not found.');
                        return false;
                    } else {
                        return true;
                    }
                })
                .map(function(filepath) {
                    grunt.log.writeln('Adding "' + filepath + '" to compile list.');

                    files.push(filepath);
                });


            if (files.length) {
                grunt.log.writeln('Compiling' + (debug ? ' in debug mode' : '') + '...');

                if (common) { grunt.file.write(common, ''); }
                if (app) { grunt.file.write(app, ''); }

                coocoo(files, common, app, debug);

                if (common) { grunt.log.writeln('File "' + common + '" created.'); }
                if (app) { grunt.log.writeln('File "' + app + '" created.'); }
            } else {
                grunt.log.warn('No files to compile.');
            }
        });
    });

};
