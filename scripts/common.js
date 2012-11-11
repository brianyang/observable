OBSERVABLE = (function(){

  var o = []
  console.log('init observable')

  o.subscribe = function(event, method){
    pubsub.subscribe(event, method)
  }
, o.publish = function(event, method){
    pubsub.publish(event, method)
  }
, o.unsubscribe = function(event){
    pubsub.unsubscribe(event)
  }
, o.otherEvents = {
    init: function(){
      var events = ["onclick", "onsubmit", "onfocus", "onblur"];
      var elems = document.getElementsByTagName("*"), item;
      for (var i = 0; i < elems.length; i++) {
        item = elems[i];
        for (var j = 0; j < events.length; j++) {
          if (item[events[j]]) {
            console.log("event handler for " + events[j]);
          }
        }
      }
    }
  }


  return o

}())


// OBSERVABLE.subscribe(eventName, method)
// OBSERVABLE.unsubscribe(eventName)
// OBSERVABLE.publish(eventName, method)
/*
OBSERVABLE.subscribe('userSignup',sendConfirmation())
OBSERVABLE.unsubscribe('userSignup')
OBSERVABLE.publish('userSignup', sendConfirmation())
*/
