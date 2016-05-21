angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  //check authorization
  if (!Auth.isAuth()) {
    Auth.signout();
  }

  //form handling helpers
  $scope.formInput = '';
  $scope.spin = false;
  $scope.showLink = false;
  $scope.showError = false;
  
  $scope.validate = (url) => {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    return url.match(rValidUrl);
  };

  //form submission and state change
  $scope.sub = (input) => {
    $scope.spin = true;
    $scope.link.url = input;
    if ($scope.validate(input)) {
      $scope.showError = false;
      $scope.addLink($scope.link);
    } else {
      $scope.showError = true;
      $scope.spin = false; 
      $scope.errMsg = "Please enter a valid URL!!";
    }
    $scope.formInput = '';
  };

//model
  $scope.link = {};
//add link to DB
  $scope.addLink = (link) => {
    Links.addOne(link).then(resp => {
      $scope.spin = false;
      $scope.showLink = true;
      $scope.link = resp.data;
    });
  };

  $scope.signOut = Auth.signout;
});
