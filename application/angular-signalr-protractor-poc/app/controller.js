app.controller('main', ['$scope', '$http', 'signalrService', 'historyService', function (scope, http, signalrService, historyService) {
    scope.title = 'signalr angularjs protractor example';
    scope.history = historyService.history;

    signalrService.start();

    scope.ping = function () {
        signalrService.ping();
    };
}]);