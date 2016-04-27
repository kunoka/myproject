// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.factories','starter.services','starter.homeService','my.new.module','ngMessages','myApp.filters', 'filter.factory'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        /*
         $ionicConfigProvider.platform.ios.tabs.style('standard');
         $ionicConfigProvider.platform.ios.tabs.position('bottom');
         $ionicConfigProvider.platform.android.tabs.style('standard');
         $ionicConfigProvider.platform.android.tabs.position('bottom');

         $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
         $ionicConfigProvider.platform.android.navBar.alignTitle('center');

         $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
         $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

         $ionicConfigProvider.platform.ios.views.transition('ios');
         $ionicConfigProvider.platform.android.views.transition('android');
         */
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })
            // Each tab has its own nav history stack:
            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'home/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('tab.chats', {
                url: '/chats',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/tab-chats.html',
                        controller: 'ChatsCtrl'
                    }
                }
            })
            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })
            .state('tab.chart', {
                url: '/chart',
                views: {
                    'tab-chart': {
                        templateUrl: 'templates/tab-chart.html',
                        controller: 'ChartCtrl'
                    }
                }
            })
            .state('tab.validation', {
                url: '/validation',
                views: {
                    'tab-validation': {
                        templateUrl: 'practice/ionic/validation/FormValidation.html',
                        controller: 'ValidationCtrl'
                    }
                }
            })
            .state('layout', {
                url: '/layout',
                templateUrl: 'practice/ionic/layout/index.html',
                controller: "LayoutCtrl"
            })
            .state('popup', {
                url: '/popup',
                templateUrl: 'practice/ionic/popup/index.html',
                controller: "PopupCtrl"
            })
            .state('element', {
                url: '/element',
                templateUrl: 'practice/ionic/element/index.html',
                controller: "ElementCtrl"
            })
            .state('timeout', {
                url: '/timeout',
                templateUrl: 'practice/ionic/timeout/index.html',
                controller: "TimeoutCtrl"
            })
            .state('filter', {
                url: '/filter',
                templateUrl: 'practice/ionic/filter/index.html',
                controller: "FilterCtrl"
            })
            .state('chrome', {
                url: '/chrome',
                templateUrl: 'practice/ionic/chrome_developer_tools/index.html',
                controller: "ChromeCtrl"
            })
            .state('event', {
                url: '/event',
                templateUrl: 'practice/ionic/event/index.html',
                controller: "EventCtrl"
            })
            .state('directive', {
                url: '/directive',
                templateUrl: 'practice/ionic/directive/index.html',
                controller: "DirectiveCtrl"
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');
    });
