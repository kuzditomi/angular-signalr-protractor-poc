// let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'tests/*.feature'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800,600", '--log-level=2']
        },
        // chromeOptions: {
        //     args: ['--log-level=0']
        // }
        loggingPrefs: {
            'driver': 'WARNING',
            'server': 'WARNING',
            'browser': 'INFO'
        }
    },
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    cucumberOpts: {
        require: 'tests/*.js',
        tags: false,
        format: ['json:.tmp/results.json', 'node_modules/cucumber-pretty'],
        profile: false,
        'no-source': true
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            // read the options part for more options
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
}