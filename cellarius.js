class Notifier {
    constructor() {
        this.subArr = [];
        this.logArr = [];
    }
    // Should log event data
    log(eventData) {
        this.logArr.push(eventData);
    }
  
    // Should emit event
    emit(eventName, eventData) {
        for(var i=0; i<this.subArr.length; i++) {
            if(this.subArr[i].name === eventName) {
                this.subArr[i].fn(eventData);
            }
        }
        var emitData = {
            name: eventName,
            data: eventData
        }
        this.log(emitData);
    }
  
    // Should subscribe to events
    subscribe(eventName, callback) {
        var obj = {
            name: eventName,
            fn: callback
        }
        this.subArr.push(obj);
  
    }
  }
  
  /* Should display event hello world 
     Event Count: 1,  Event Name: "hello world" , Count: 0 
     Event Count: 2,  Event Name: "hello world" , Count: 1 
     Event Count: 3,  Event Name: "hello world" , Count: 2 
     Event Count: 4,  Event Name: "hello world" , Count: 3 
     Event Count: 5,  Event Name: "hello world" , Count: 4 
     Error: Count: 6, Event Name: "error", Error: bad access
  */
  const displayLog = (arr) => {
    // for(var i=0; i<this.logArr.length; i++) {
    //     console.log(`Event Count: ${i+1}, `);
    // }
    console.log(arr);
  }
  
  // Example usage
  const notifier = new Notifier()
  notifier.subscribe("hello world", dummy_callback)
  notifier.subscribe("error", dummy_callback)
  notifier.emit("hello world", {count: 1})
  notifier.emit("error", {error: "bad access"})

  function dummy_callback(logData) {
    console.log(logData);
  }

  displayLog(notifier.logArr);