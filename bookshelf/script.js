// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
});

scotchApp.controller('servicesController', function($scope) {
    $scope.booksList = [];
    $scope.editIndex = false;
    $scope.addBook = function() {
        if( $scope.editIndex === false) {
            $scope.booksList.push({
                bookName: $scope.bookName,
                isbn: $scope.isbn,
                author: $scope.author,
                year: $scope.year,
                done: false
            });
        }
        else {
            $scope.booksList[$scope.editIndex].bookName = $scope.bookName;
            $scope.booksList[$scope.editIndex].isbn = $scope.isbn;
            $scope.booksList[$scope.editIndex].author = $scope.author;
            $scope.booksList[$scope.editIndex].year = $scope.year;
        }
        $scope.editIndex = false;
        $scope.bookName = "";
        $scope.isbn = "";
        $scope.author = "";
        $scope.year = "";

    };

    $scope.remove = function() {
        var oldList = $scope.booksList;
        $scope.booksList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.booksList.push(x);
        });
    };
    $scope.edit = function(x) {
        $scope.bookName = $scope.booksList[x].bookName;
        $scope.isbn = $scope.booksList[x].isbn;
        $scope.author = $scope.booksList[x].author;
        $scope.year = $scope.booksList[x].year;
        $scope.editIndex = x;
    };
    $scope.save = function (x) {
        $scope.current = {};
    }
});


