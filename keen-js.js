// Write your package code here!
keen = new Keen({
  projectId: Meteor.settings.public.keen.projectId, // String (required always)
  writeKey: Meteor.settings.public.keen.writeKey, // String (required for sending data)
  readKey: Meteor.settings.public.keen.readKey // String (required for querying data)

  // protocol: "https",         // String (optional: https | http | auto)
  // host: "api.keen.io/3.0",   // String (optional)
  // requestType: "jsonp"       // String (optional: jsonp, xhr, beacon)
});
