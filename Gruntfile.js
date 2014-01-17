/*!
 * grunt-coocoo, https://github.com/hoho/grunt-cooocoo
 * (c) 2013 Marat Abdullin, MIT license
 */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            grunt: {
                src: ['Gruntfile.js', 'tasks/coocoo.js'],
                options: {jshintrc: '.jshintrc'}
            }
        },

        clean: {
            coocoo: ['tmp']
        },

        coocoo: {
            ok: {
                src:   ['test/*.coo'],
                dest: {
                    common: 'tmp/ok-common.js',
                    app:    'tmp/ok-app.js',
                    debug:  true
                }
            },
            empty: {
                src:   ['test/file3.coo'],
                dest: {
                    common: 'tmp/empty-common.js',
                    app:    'tmp/empty-app.js'
                }
            },
            nofile: {
                src:   ['test/file1.coo', 'this/file/is/not/there', 'test/file2.coo'],
                dest: {
                    common: 'tmp/nofile-common.js',
                    app:    'tmp/nofile-app.js',
                    debug:  false
                },
                nonull: true
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'clean', 'coocoo']);
};
