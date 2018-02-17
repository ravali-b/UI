// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : './home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/services', {
            templateUrl : './services.html',
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
                bookName: $scope.bName,
                isbn: $scope.bIsbn,
                author: $scope.bAuthor,
                year: $scope.bYear,
                done: false
            });
        }
        else {
            $scope.booksList[$scope.editIndex].bookName = $scope.bName;
            $scope.booksList[$scope.editIndex].isbn = $scope.bIsbn;
            $scope.booksList[$scope.editIndex].author = $scope.bAuthor;
            $scope.booksList[$scope.editIndex].year = $scope.bYear;
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
        $scope.bName = $scope.booksList[x].bookName;
        $scope.bIsbn = $scope.booksList[x].isbn;
        $scope.bAuthor = $scope.booksList[x].author;
        $scope.bYear = $scope.booksList[x].year;
        $scope.editIndex = x;
    };
    $scope.save = function (x) {
        $scope.current = {};
    }
});


