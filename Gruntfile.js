// Generated on 2014-04-24 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        jasmine_nodejs: {
            // task specific (default) options
            options: {
                specNameSuffix: "spec.js", // also accepts an array
                helperNameSuffix: "helper.js",
                useHelpers: true,
                random: false,
                seed: null,
                defaultTimeout: null, // defaults to 5000
                stopOnFailure: false,
                traceFatal: true,
                // configure one or more built-in reporters
                reporters: {
                    console: {
                        colors: true,        // (0|false)|(1|true)|2
                        cleanStack: 3,       // (0|false)|(1|true)|2|3
                        verbosity: 4,        // (0|false)|1|2|3|(4|true)
                        listStyle: "indent", // "flat"|"indent"
                        activity: false
                    },
                    // junit: {
                    //     savePath: "./reports",
                    //     filePrefix: "junit-report",
                    //     consolidate: true,
                    //     useDotNotation: true
                    // },
                    // nunit: {
                    //     savePath: "./reports",
                    //     filename: "nunit-report.xml",
                    //     reportName: "Test Results"
                    // },
                    // terminal: {
                    //     color: false,
                    //     showStack: false,
                    //     verbosity: 2
                    // },
                    // teamcity: true,
                    // tap: true
                },
                // add custom Jasmine reporter(s)
                //customReporters: []
            },
            unit_tests: {
                // target specific options
                options: {
                    useHelpers: true
                },
                // spec files
                specs: [
                    "spec/**/*"
                ],
                helpers: [
                    "helpers/**"
                ]
            }
        }
    });

    grunt.registerTask('default', 'jasmine_nodejs');
};
