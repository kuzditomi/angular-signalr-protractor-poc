var { Given, When, Then } = require('cucumber');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

Given('I go to {string}', async function (site) {
    await browser.get(site);
});

Then('I should see the title {string}', async function (expectedTitle) {
    const title = await browser.getTitle();
    expect(title).to.equal(expectedTitle);
});

let logs = '';
When('I check the logs', async function () {
    const pre = element(by.css('pre'));
    const text = await pre.getText();
    logs = text;
});

Then('I should see signalr is connected', function () {
    expect(logs).to.contain('signalr connected.');
});

When('Signalr is connected', async function () {
    const pre = element(by.css('pre'));
    const text = pre.getText();

    await expect(text).to.eventually.contain('signalr connected.');
});

When('I ping the hub', async function () {
    const pingButton = element(by.css('button'));
    await pingButton.click();
});

Then('the push from hub arrives', async function () {
    const pre = element(by.css('pre'));
    const text = await pre.getText();

    expect(text).to.contain('Pong from Hub.');
});


