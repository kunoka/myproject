/**
 * Created by A on 2016/4/19.
 */

app.controller("ChromeCtrl", function($scope,back_button) {
    console.log("ChromeCtrl");
    back_button.goBack();
});