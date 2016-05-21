angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  
  if (!Auth.isAuth()) {
    Auth.signout();
  }
  $scope.link = {};
  console.log('whole obj', $scope.link);
  $scope.addLink = (link) => {
    console.log('in the function',link);
    Links.addOne(link).then(resp => resp);
  };

  $scope.signOut = Auth.signout;
});
