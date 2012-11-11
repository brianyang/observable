OBSERVABLE = (function(){

  var o = []
  console.log('init observable')
  pubsub.subscribe()

  o.subscribe = {
    init: function(){
      console.log('subscribe.init')
    }
  }
, o.publish = {
    init: function(){
      console.log('publish.init')
    }
  }
, o.unsubscribe = {
    init: function(){
      console.log('unsubscribe.init')
    }
  }
  return o

}())

