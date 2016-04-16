var app = angular.module('starter.controllers', []);

app
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ChartCtrl', function($scope) {
   console.log("chartCtrl");
        $scope.name = new Date();
        var ctx = new Chart(document.getElementById("canvas").getContext("2d"));
        var options = {scaleFontSize: 13, scaleFontColor: "#ffa45e"};

        // 线型图
        var LineChart = {
            labels: ["Ruby", "jQuery", "Java", "ASP.Net", "PHP"],
            datasets: [{
                fillColor: "rgba(151,249,190,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [10, 20, 30, 40, 50]
            }, {
                fillColor: "rgba(252,147,65,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                pointColor: "rgba(173,173,173,1)",
                pointStrokeColor: "#fff",
                data: [28, 68, 40, 19, 96]
            }]
        };
        // var myLineChart = ctx.Line(LineChart, options);

        // 条形图
        var BarChart = {
            labels: ["Ruby", "jQuery", "Java", "ASP.Net", "PHP"],
            datasets: [{
                fillColor: "rgba(151,249,190,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                data: [13, 20, 30, 40, 50]
            }, {
                fillColor: "rgba(252,147,65,0.5)",
                strokeColor: "rgba(255,255,255,1)",
                data: [28, 68, 40, 19, 96]
            }]
        };
        //var myBarChart = ctx.Bar(BarChart, options);


        // 饼状图
        var pieChart = [
            {value: 40, color: "#fcc79c"},
            {value: 30, color: "#beefd2"},
            {value: 90, color: "#ffddfb"},
        ];
        //var myPieChart = ctx.Pie(pieChart);


        // 环状图
        var doughnutChart = [
            {
                value: 30,
                color:"#F7464A"
            },
            {
                value : 50,
                color : "#E2EAE9"
            },
            {
                value : 100,
                color : "#D4CCC5"
            },
            {
                value : 40,
                color : "#949FB1"
            },
            {
                value : 120,
                color : "#4D5360"
            }

        ]
        /*
        var doughnutChart = [
            {value: 60, color: "#fcc79e"},
            {value: 30, color: "#beefd2"},
            {value: 50, color: "#ffddfb"},
            {value: 120, color: "#cdecff"},
            {value: 90, color: "#fff5bc"}
        ];
        */
        var myRingChart = ctx.Doughnut(doughnutChart);
})
.controller("ValidationCtrl",function($scope){
    console.log("ValidationCtrl");
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

