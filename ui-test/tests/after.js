var { After } = require('cucumber');

var reset = "\x1b[0m";
var colors = {
    INFO: reset,// blue: "\x1b[34m",
    SEVERE: "\x1b[31m", // red
    WARNING: "\x1b[33m", // yellow
};

After(async function () {
    const browserLogs = await browser.manage().logs().get('browser');

    console.log();
    console.log('\t------------------- browser log START --------------------------------');
    browserLogs.forEach(function (log) {
        const color = colors[log.level.name];
        console.log(`${color}\t[${log.level.name}] ${log.message}${reset}`);
    });
    console.log('\t------------------- browser log END   --------------------------------');
    console.log();
});