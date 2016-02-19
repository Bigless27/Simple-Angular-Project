
var searchApp = angular.module('searchApp', []);

searchApp.controller('SimpleController', function($scope){
  $scope.customers = [
  {name: 'Gendelman', city: 'West Bloomfield'},
  {name: 'Ryan Lesson', city: "Chicago"},
  {name: 'Corey Lesson', city: "Bloomfield Hills"}
  ];
});
