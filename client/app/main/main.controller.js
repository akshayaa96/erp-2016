'use strict';

angular.module('erp2015App')
  .controller('MainCtrl', function ($scope, $state, $http, socket) {

    $state.go('coordPortalDashboard');
    $scope.awesomeThings = [];

    $http.get('/api/posts/newsfeed/1').success(function (data) {
      $scope.posts = data;
    })
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
