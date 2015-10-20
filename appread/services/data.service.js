(function(){
  'use strict';

  angular.module('officeAddin')
         .service('dataService', ['$q', dataService]);

  /**
   * Custom Angular service.
   */
  function dataService($q){

    // public signature of the service
    return {
      getErrorFix: getErrorFix
    };

    /** *********************************************************** */

    function getErrorFix(errorCode){

      console.log('service', errorCode);
      var deferred = $q.defer();

      deferred.resolve({
        solution: 'Here is the solution'
      });

      return deferred.promise;
    }

  }
})();
