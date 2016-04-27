/**
 * Created by gary on 4/27/16.
 */

app.controller("DirectiveCtrl", function($scope, myFactory) {
  console.log("DirectiveCtrl");
  $scope.goBack = function () {
    history.back();
  };

  $scope.pieces = ["Fish & Chips","Potato & Salad"];
  $scope.type = "[I am value of type]";
});
