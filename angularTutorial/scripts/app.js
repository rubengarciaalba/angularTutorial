/// <reference path="angular.js" />

var app = angular.module("myApp", []);
//Controllers
app.controller("myCrtl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
//Directives
/*app.directive("directivetest", function () {
    return {
        template: "<h1>Made by a directive!</h1>"
    };
});*/

var app = angular.module("myApp", []);
app.directive("w3TestDirective", function () {
    return {
        template: "<h1>Made by a directive!</h1>"
    };
});