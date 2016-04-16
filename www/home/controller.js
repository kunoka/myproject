/**
 * Created by A on 2016/4/7.
 */

app.controller('DashCtrl', function($scope,getAll) {
    getAll.all().then(function success(resp){
        console.log(resp);
        $scope.items = resp;
    },function error(error){
        alert(error);
    })

})