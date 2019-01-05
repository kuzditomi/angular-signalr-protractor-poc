app.service('historyService', [function () {
    var history = [];

    function add(event) {
        time = new Date();
        history.push(`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')} - ${event}`);
    }

    return {
        add,
        history
    }
}]);

app.service('signalrService', ['historyService', '$timeout', function (historyService, timeout) {
    var exampleHubProxy;
    function start() {
        console.log('random log')
        console.info('info about starting signalr');
        console.warn('prepare!');
        console.error('just kidding, no error');

        historyService.add('signalr starting...');

        exampleHubProxy = $.connection.exampleHub;
        exampleHubProxy.client.message = function (message) {
            timeout(() => {
                console.info('message from signalr', message);
                historyService.add(`message from signalr: ${message}.`)
            });
        };

        $.connection.hub.start().done(function () {
            timeout(() => {
                historyService.add('signalr connected.');
            });
        });
    }

    function ping() {
        historyService.add('Ping called from client.');
        exampleHubProxy.server.ping();
    }

    return {
        start,
        ping
    }
}]);