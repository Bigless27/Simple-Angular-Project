
var searchApp = angular.module('searchApp', ['ngRoute']);

searchApp.config(function($routeProvider){
  $routeProvider
  .when('/',
  {
    controller: 'SimpleController',
    templateUrl: 'Partials/View1.html'
  })
  .when('/view2',
  {
    controller: 'SimpleController',
    templateUrl: "Partials/View2.html"
  })
  .otherwise({redirectTo: '/'});
});

searchApp.controller('SimpleController', function($scope){
  $scope.customers = [
  {name: 'Gendelman', city: 'West Bloomfield'},
  {name: 'Ryan Lesson', city: "Chicago"},
  {name: 'Corey Lesson', city: "Bloomfield Hills"},
  {name: "Ash Ketchum", city: "Pallet Town"},
  {name: "Videl", city: "Hercule City"},
  {name: "Josh Lesson", city: "Miami Beach"}
  ];

  $scope.addCustomer = function(){
    $scope.customers.push({name: $scope.newCustomer.name , city: $scope.newCustomer.city})
  }
});


