/**
 * Created by A on 2016/4/7.
 */

app.controller("PopupCtrl", function($scope,  $ionicPopup, $timeout, history){
    console.log("popup controller");
    $scope.goBack = function(){
        history.back();
    };
    // 触发一个按钮点击，或一些其他目标
    $scope.showPopup = function() {
        $scope.data = {}

        // 一个精心制作的自定义弹窗
        var myPopup = $ionicPopup.show({
            template: '<input type="password" ng-model="data.wifi">',
            title: 'Enter Wi-Fi Password',
            subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [
                { text: 'Cancel' },
                {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //不允许用户关闭，除非他键入wifi密码
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                },
            ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //由于某种原因3秒后关闭弹出
        }, 3000);
    };
        // 一个确认对话框
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };
    // 一个提示对话框
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: 'It might taste good'
            });
            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
});