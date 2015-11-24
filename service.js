var app = angular.module('myModule');

app.factory('mainSrv', function() {

  var storedInfo = {
    name: "Looks like you haven't picked anything.",
    instrument: "Looks like you haven't picked anything."
  };

  return {
    save: function(name, instrument){
      storedInfo.name = name;
      storedInfo.instrument = instrument;
    },
    getInfo: function(){
      return storedInfo;
    }
  };

});
