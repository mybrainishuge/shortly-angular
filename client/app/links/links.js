angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
 if(!Auth.isAuth()) {
    Auth.signout();

  }
  $scope.data = {};
  Links.getAll().then(data => $scope.data.links = data);

  $scope.signOut = Auth.signout;
  
});
