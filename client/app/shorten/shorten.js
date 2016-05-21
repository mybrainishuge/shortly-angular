angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  if(!Auth.isAuth()) {
    Auth.signout();
  }
  $scope.link = {};
  $scope.addLink = (link) => {
    Links.addOne(link).then(resp => resp);
  };

  $scope.signOut = Auth.signout;
});
