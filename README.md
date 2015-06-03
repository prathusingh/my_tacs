MyTacks Project
===============

This webapp will let the users tack images or other resources on the web to one of the several boards. The users can tack to any of the boards using the URL of the resource.

# Installation Instructions


## PreRequisites
This project is based on the [MEAN Stack](http://mean.io/). To install the stack, do:

    $ sudo npm install -g meanio@latest  // Get the mean cmdline
    $ mean init myApp                    // create your first app
    $ cd myApp && npm install            // Install dependencies
    $ grunt                              // Launch mean

MEAN is an acronym for MongoDb, Express, Angular and Node.js . The stack uses mongodb as the database, node.js for server side coding while using Express to implement the routing using MVC. Angular is used to write client side code.

We recomment installing Bower which is a good web package manager and yeoman which is a scaffolding tool for webapps. To install do:
    $ npm install -g bower
    $ npm install -g yo


## Quick Start
Once you are done with installing pre-requisites, first do:

* Start mongodb.

```
    $ bin/mongod
```

* Start the server at port 3000.

```
    $ node server.js
```

* Navigate to [here](http://localhost:3000) in your browser. Enjoy!
