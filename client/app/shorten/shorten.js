angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = (link) => {
    Links.addOne(link).then(resp => resp);
  };
});
