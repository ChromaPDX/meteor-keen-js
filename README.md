## keen-js

Send event tracking to Keen.io

## Setup
```
In your Meteor settings.json

"public":{
  "keen": {
    "projectId": "required",
    "writeKey": "required",
    "readKey": "optional"
  }
}
```
## Track Events

#js
```
// Send it to the "purchases" collection
keen.addEvent("purchases", purchaseEvent, function(err, res){
  if (err) {
    // there was an error!
  }
  else {
    // see sample response below
  }
});
```
