var module = angular.module('starter.services', []);
module.service('back_button',function(){
        var service ={
            goBack : function(){
                alert(123);
              //  history.back();
            }
        }
        return service;
    })
