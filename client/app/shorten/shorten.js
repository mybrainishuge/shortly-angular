angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  
  if (!Auth.isAuth()) {
    Auth.signout();
  }

  $scope.formInput = '';
  $scope.spin = false;
  $scope.showLink = false;
  $scope.sub = (input) => {
    $scope.spin = true;
    $scope.link.url = input;
    $scope.addLink($scope.link);
    $scope.formInput = '';
  };
  $scope.link = {};
  // console.log('whole obj', $scope.link);
  $scope.addLink = (link) => {
    console.log('in the function',link);
    Links.addOne(link).then(resp => {
      $scope.spin = false;
      $scope.showLink = true;
      $scope.link = resp.data;
    });
  };

  $scope.signOut = Auth.signout;
});
