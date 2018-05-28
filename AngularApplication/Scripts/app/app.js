var myApp = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap'
]);

angular.module('myApp').config(
    ["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {

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
            })
            .state('modal', {
                url: '/modal',
                templateUrl: 'partials/modalexample.html',
                controller: 'ModalCtrl',
                controllerAs: "$ctrl"
            });
    }]);


