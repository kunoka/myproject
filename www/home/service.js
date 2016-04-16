/**
 * Created by A on 2016/4/7.
 */

angular.module("starter.homeService",[])
    .factory('getAll', function($q, $http){
        var deferred = $q.defer();
        var promise = deferred.promise;

        return {
            all : function(){
                $http.get("file/config.json")
                    .success(function(data){
                        return deferred.resolve(data);
                    })
                    .error(function(error){
                        return deferred.reject(error);
                    });
                return promise;
            }
        }

    })
