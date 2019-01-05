var { After } = require('cucumber');

After(async function () {
    const browserLogs = await browser.manage().logs().get('browser');

    console.log();
    console.log('------------------- browser log START --------------------------------')
    browserLogs.forEach(function (log) {
        console.log(log.message);
    });
    console.log('------------------- browser log END   --------------------------------')
    console.log();
});