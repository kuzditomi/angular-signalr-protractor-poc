describe('Example app', function () {
    it('should have a title', async function () {
        await browser.get('http://localhost:4500/');

        const title = await browser.getTitle();
        expect(title).toEqual('Example app');
    });

    it('should connect to signalr', async function () {
        await browser.get('http://localhost:4500/');

        const pre = element(by.css('pre'));
        const text = await pre.getText();

        expect(text).toContain('signalr connected.');
    });

    it('should receive pong', async function () {
        await browser.get('http://localhost:4500/');
        await browser.sleep(1000);
        
        const pingButton = element(by.css('button'));
        await pingButton.click();

        const pre = element(by.css('pre'));
        const text = await pre.getText();

        expect(text).toContain('Pong from Hub.');       
    });
});