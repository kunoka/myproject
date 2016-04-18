/**
 * Created by A on 2016/4/9.
 */
app.controller("ElementCtrl", function($scope, myFactory){
    console.log("elementCtrl");
    $scope.goBack = function(){
        history.back();
    };
    $scope.seleted = "";
    $scope.my = {};
    $scope.animals = [
        {
            id: '00001',
            name: '猫',
            sex: '雌',
            food: '鱼',
            favor: '玩球',
            type: '食肉'
        },
        {
            id: '00002',
            name: '狗',
            sex: '雄',
            food: '骨头',
            favor: '接盘子',
            type: '食肉'
        },
        {
            id: '00003',
            name: '兔',
            sex: '雌',
            food: '胡萝卜',
            favor: '刨洞',
            type: '食草'
        },
        {
            id: '00004',
            name: '狮',
            sex: '雄',
            food: '肉',
            favor: '猎物',
            type: '食肉'
        }
    ];
    $scope.name = "Harry Potter";
    $scope.my =  $scope.animals;
    $scope.onChange = function(){
        console.log( $scope.my.id);
    };
    $scope.setValue = function(){
        myFactory.set("Harry Potter2222");

    };
    $scope.getValue = function(){
        $scope.value = myFactory.get();
    };
    $scope.clearValue = function(){
        $scope.value = myFactory.clear();
    };
    //console.log($scope.a.selectValue);
});
