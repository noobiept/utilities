module.exports = function( grunt )
{
    // project configuration
grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        qunit: {
            all: [ '../tests/tests.html' ]
        },

        copy: {
            definitions: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: '../utilities.d.ts',
                        dest: '../release/'
                    }
                ]
            }
        },

        rename: {
            definitions: {
                src: '../release/utilities.d.ts',
                dest: '../release/<%= pkg.name %>.<%= pkg.version %>.d.ts'
            }
        },

        uglify: {
            release: {
                files: {
                    '../release/<%= pkg.name %>.<%= pkg.version %>.min.js': [ '../utilities.js' ]
                }
            }
        }
   });


    // load the plug-ins
grunt.loadNpmTasks( 'grunt-contrib-qunit' );
grunt.loadNpmTasks( 'grunt-contrib-copy' );
grunt.loadNpmTasks( 'grunt-contrib-uglify' );
grunt.loadNpmTasks( 'grunt-rename' );

    // tasks
grunt.registerTask( 'tests', [ 'qunit' ] );
grunt.registerTask( 'release', [ 'uglify', 'copy:definitions', 'rename:definitions' ] );
grunt.registerTask( 'default', [ 'tests', 'release' ] );
};