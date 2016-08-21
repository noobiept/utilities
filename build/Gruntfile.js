module.exports = function( grunt )
{
    // project configuration
grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

            // run the tests
        qunit: {
            all: [ '../tests/tests.html' ]
        },

            // compile the typescript code to javascript
        ts: {
            release: {
                tsconfig: '../tsconfig.json',
                dest: '../release/<%= pkg.version %>/<%= pkg.name %>.<%= pkg.version %>.js'
            }
        },

            // minify the javascript code
        uglify: {
            options: {
                mangle: false
            },
            release: {
                files: {
                    '../release/<%= pkg.version %>/<%= pkg.name %>.<%= pkg.version %>.min.js': [ '../release/<%= pkg.version %>/<%= pkg.name %>.<%= pkg.version %>.js' ]
                }
            }
        },


            // build the documentation
        typedoc: {
            options: {
                out: '../documentation/',
                name: 'Utilities',
                mode: 'File'
            },
            src: '../utilities.ts'
        }
   });


    // load the plug-ins
grunt.loadNpmTasks( 'grunt-contrib-qunit' );
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-ts' );
grunt.loadNpmTasks( 'grunt-typedoc' );

    // tasks
grunt.registerTask( 'default', [ 'qunit', 'ts', 'uglify', 'typedoc' ] );
};