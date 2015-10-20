(function(){
  'use strict';

  angular.module('officeAddin')
         .controller('homeController', ['dataService', homeController]);

  /**
   * Controller constructor
   */
  function homeController(dataService){
    var vm = this;  // jshint ignore:line
    var errorCodes = Office.context.mailbox.item.getRegExMatches().LegacyErrorCode;

    console.log(Office.context.mailbox.item);

    dataService.getErrorFix(errorCodes)
      .then(function(repoData) {
        vm.errorCodes = errorCodes;
        vm.solutions = repoData;
      });
  }

})();
