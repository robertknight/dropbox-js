var Dropbox = require("../../lib/dropbox.js");
var client = new Dropbox.Client({ key: "your-key-here" });

// If executing the above did not throw exceptions, then browserify worked!