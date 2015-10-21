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
          solution: 'Reboot the VM. Check state of API. If problem persists use Manager to unassign/re-assign the box.',
          img: '_back_to_the_future_future_day_hoax_today_not_the_date_shown_on_doc_s_delorean/1340833622481.jpg'
      });

      return deferred.promise;
    }

  }
})();
