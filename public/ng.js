(function() {
    angular.module('app', ['ngMaterial'])
    .component('navMenu', {
        controller() {
            console.log('nav-menu')
        },
        templateUrl: './templates/nav-menu.html'
    })
    .component('projects', {
      controller() {
        console.log('projects')
      },
      templateUrl: './templates/projects.html'
    })
    .component('thoughts', {
        controller() {
            console.log('thoughts')
        },
        templateUrl: './templates/thoughts.html'
    })
    .component('cv', {
        controller() {
            console.log('cv')
        },
        templateUrl: './templates/cv.html'
    })
    .component('holla', {
        controller() {
            console.log('holla')
        },
        templateUrl: './templates/holla.html'
    })
})();
