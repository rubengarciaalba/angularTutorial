/// <reference path="angular.js" />

var app = angular.module("myApp", []);
//Controllers
// $location added to work with services
// hexafy added to work with custom services
app.controller("myCrtl", function ($scope, $location, hexafy, $http) { 
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.myUrl = $location.absUrl(); //For services
    $scope.hex = hexafy.myFunc(255); //For custom services
    $scope.showMe = false; //Events
    $scope.master = { firstName: "John", lastName: "Doe" }; //Forms

   

    //To iterate with ng-repeat
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];

    //When click event
    $scope.changeName = function () {
        $scope.firstName = "Nelly";
    }
    //Functions
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
    //Custom sorting
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
    //$http
    $http.get("welcome.html")
    .then(function (response) {
        $scope.myWelcome = response.data;
    }, function(response){
        //Handling error (Like Ajax)
        $scope.myWelcome = "Something went wrong";
    });
    $http.get("customers.html").then(function (response) {
        $scope.myData = response.data.records;
    });
    //Toggle show/hide
    $scope.myFunc = function () {
        $scope.showMe = !$scope.showMe;
    }
    //Forms
    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});
//Directives
app.directive("testDirect", function () {
    return {
        template: "<h3>Made by a directive!</h3>"
    };
});
//Custom Filters
app.filter('myFormat', function () {
    return function (x) { //Uppercase the even positions
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
//Custom Services
app.service('hexafy', function () {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});