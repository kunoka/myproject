/**
 * Created by A on 2016/4/18.
 */

angular.module('filter.factory', [])
    .factory("myFactory", function(){
        var value;
        return {
            set : function(newValue){
                value = newValue;
            },
            get : function(){
                return value;
            },
            clear : function(){
                value = "";
            }
        }
    })
/* factory 的第一种写法
.factory("myFilter", function(){
        var service = {};
        var _artist = '';

        service.setArtist = function(artist){
            _artist = artist;
        }

        service.getArtist = function(){
            return _artist;
        }

        service.clearArtist = function(){
            _artist = "";
            return _artist;
        }

        return service;
    })
 */