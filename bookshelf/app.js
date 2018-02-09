/**
 * Created by ravali bolem on 02-06-2018.
 */
var app = angular.module('myApp', []);

app.controller('addCtrl', function($scope) {
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
            localStorage.setItem('bookName',JSON.stringify($scope.bookName));
            localStorage.setItem('isbn',JSON.stringify($scope.isbn));
            localStorage.setItem('author',JSON.stringify($scope.author));
            localStorage.setItem('year',JSON.stringify($scope.year));
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








