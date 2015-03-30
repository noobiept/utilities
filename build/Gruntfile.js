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
        typescript: {
            dev: {
                src: [ '../utilities.ts' ],
                dest: '../<%= pkg.name %>.js',
                options: {
                    declaration: true
                }
            },

            release: {
                src: [ '../utilities.ts' ],
                dest: '../release/<%= pkg.version %>/<%= pkg.name %>.<%= pkg.version %>.js',
                options: {
                    declaration: true
                }
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
grunt.loadNpmTasks( 'grunt-typescript' );
grunt.loadNpmTasks( 'typedoc' );

    // tasks
grunt.registerTask( 'default', [ 'typescript:dev' ] );
grunt.registerTask( 'tests', [ 'default', 'qunit' ] );
grunt.registerTask( 'docs', [ 'typedoc' ] );
grunt.registerTask( 'release', [ 'tests', 'typescript:release', 'uglify', 'docs' ] );
};