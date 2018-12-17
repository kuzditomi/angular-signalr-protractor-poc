let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,

    onPrepare: function () {
        const env = jasmine.getEnv();
        
        env.clearReporters();
        env.addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));
    },
}