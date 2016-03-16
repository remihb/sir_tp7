/* jshint
laxcomma:true
, laxbreak:true
, node:true
*/

'use strict';

/**
* @ngdoc function
* @name pokesirApp.controller:HeaderCtrl
* @description
* # HeaderCtrl
* Controller of the pokesirApp
*/
angular.module('tp6App')
.controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
