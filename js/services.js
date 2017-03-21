(function () {
   'use strict';
   angular
      .module("demoApp")
      .service('userService', userService);

   function userService(){
      var collection = [
        {firstName: 'Johan', lastName: 'Schantz'},
        {firstName: 'Felix', lastName: 'Ottander'},
        {firstName: 'Casper', lastName: 'Jureskog'}
      ];
      return {
        users: function(){
          return collection;
        },
        add: function(object) {
          collection.push(object);
        }
      }
    }
})();
