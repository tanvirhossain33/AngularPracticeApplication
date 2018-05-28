
angular.module('myApp')
    .controller('ModalInstanceCtrl',
    function ($uibModalInstance, items) {
        var $ctrl = this;

        $ctrl.items = items;
        $ctrl.selected = {
            item: $ctrl.items[0]
        };

        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.items);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });
angular.module('myApp')
    .controller('ModalInstanceCtrl2',
    function ($uibModalInstance) {
        var $ctrl = this;

        $ctrl.model = {
            name : '',
            address : '' 
        }
        

        $ctrl.ok = function () {
            $uibModalInstance.close($ctrl.model);
        };

        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });


myApp.controller('ModalCtrl',
    ['$scope', "$uibModal","$log",
        function ($scope, $uibModal, $log) {
            $ctrl = this;
            $scope.open = function (size) {

                var items = [
                    { Id: 1, Name: "Test1" },
                    { Id: 2, Name: "Test2" },
                    { Id: 3, Name: "Test3" },
                    { Id: 4, Name: "Test4" },
                    { Id: 5, Name: "Test5" },
                ];

                var size = size;
                $scope.animationsEnabled = true;

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/modals/sample.html',
                    controller: 'ModalInstanceCtrl',
                    controllerAs: '$ctrl',
                    size: size,
                    resolve: {
                        items: function () {
                            return items;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $ctrl.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };


            $scope.open2 = function (size) {


                var size = size;
                $scope.animationsEnabled = true;

                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: 'partials/modals/sample2.html',
                    controller: 'ModalInstanceCtrl2',
                    controllerAs: '$ctrl',
                    size: size,
                    resolve: {}
                });

                modalInstance.result.then(function (result) {
                    $ctrl.parentModel = result;
                   
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };
        }
    ]);

myApp.controller('AlertCtrl',
    ['$scope',
        function ($scope) {
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
        }
    ]);

myApp.controller('TimepickerCtrl',
    ['$scope',
        function ($scope) {
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
        }
    ]);

myApp.controller('DatePickerCtrl',
    ['$scope',
        function ($scope) {
            $scope.date = new Date();

            $scope.status = {
                opened: false
            };

            $scope.open = function ($event) {
                $scope.status.opened = true;
            };

            $scope.dateFormat = "dd/mm/yyyy";
        }
    ]);

myApp.controller('scotchController',
    ['$scope',
        function ($scope) {
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
        }
    ]);
