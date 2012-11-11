/*!
* Pub/Sub implementation
* http://brianyang.com
* Licensed under the GPL
*/

// prevent function from becoming an argument
MYAPP = (function () {

    var topics = {}
      , subUid = -1
      ,  pubsub = {}
      , user = {}
      , myapp = {}

    myapp.pubsub = {}

    myapp.pubsub.testSubscriber = function(topics, data){
      console.log(topics + " - " + data)
    }

    myapp.pubsub.publish = function ( topic, args ) {
//{{{
        if (!topics[topic]) {
            return false
        }

        setTimeout(function () {
            var subscribers = topics[topic],
                len = subscribers ? subscribers.length : 0

            while (len--) {
                subscribers[len].func(topic, args)
            }
        }, 0)

        return true
//}}}
    }

    myapp.pubsub.subscribe = function ( topic, func ) {
//{{{
        if (!topics[topic]) {
            topics[topic] = []
        }

        var token = (++subUid).toString()
        topics[topic].push({
            token: token,
            func: func
        })
        return token//}}}
    }

    myapp.pubsub.unsubscribe = function ( token ) {
        for (var m in topics) {//{{{
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1)
                        return token
                    }
                }
            }
        }
        return false//}}}
    }

    // event names organized in a hierarchical way using namespaces
    myapp.user = {

      init: function(){
        myapp.user.accounts()
        myapp.pubsub.publish('login')
      }
    , accounts: function(){
        myapp.pubsub.subscribe('login', myapp.user.assets.cash)
        myapp.pubsub.subscribe('login', myapp.user.holdings.equities)
        myapp.pubsub.subscribe('login', myapp.user.holdings.funds)
      }
    , assets: {
        cash: function(){
          console.log('user.assets.cash')
        }
    }
    , holdings: {

        equities: function(){
          console.log('user.holdings.equities')
          // code here
        }
      , funds: function(){
          console.log('user.funds.equities')
          // code here
        }

      }

    }

    myapp.user.init()
    return myapp

}())
