angular.module('list',[])
.controller('MainController', ['$scope',
    function($scope){
        $scope.dataList = [{
            id: 1,
            color: "red",
            number: 2},
            {
            id: 2,
            color: "blue",
            number: 3},
            {
            id:3,
            color: "yellow",
            number: 4}
        ];
        $scope.selected =  {}

        $scope.addData = function(){
            $scope.dataList.push({color: $scope.newColor, number: $scope.newNumber})
        }
        $scope.getTemplate = function (data) {
            if (data.id === $scope.selected.id) return 'edit';
            else return 'display';
        };

        $scope.editData = function (data) {
            $scope.selected = angular.copy(data);
        };

        $scope.saveData = function (idx) {
            console.log("Saving contact");
            $scope.dataList[idx] = angular.copy($scope.selected);
            $scope.reset();
        };

        $scope.reset = function () {
            $scope.selected = {};
        };
    }])