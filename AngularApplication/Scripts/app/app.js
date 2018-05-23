var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap'
]);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Look I am a column !' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
        })
        .state('datePicker', {
            url: '/datePicker',
            templateUrl: 'partials/datePicker.html',
            controller: 'DatePickerCtrl'
        })
        .state('alert', {
            url: '/alert',
            templateUrl: 'partials/alert.html',
            controller: 'AlertCtrl'
        });
});

myApp.controller('AlertCtrl', function ($scope) {
    $scope.message = 'Angular UI Bootstrap Alert Componenet Example';
    $scope.alerts = [
          { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
          { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function () {
        $scope.alerts.push({ msg: 'Another alert!' });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
});

myApp.controller('TimepickerCtrl', function ($scope) {
    $scope.mytime = new Date();
    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        $scope.mytime = d;
    };

    $scope.changed = function () {
        $log.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function () {
        $scope.mytime = null;
    };
});

myApp.controller('DatePickerCtrl', function ($scope) {
    $scope.date = new Date();

    $scope.status = {
        opened: false
    };

    $scope.open = function ($event) {
        $scope.status.opened = true;
    };

    $scope.dateFormat = "dd/mm/yyyy";
});

myApp.controller('scotchController', function ($scope) {
    $scope.message = 'List of Scotches';
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
});
