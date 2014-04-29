ui-router-and-ng-route-comparison
=================================

a comparison of how soon the information from the url bar becomes available from the $route service (in the ng-route module) vs. the $stateParams service (in the angular-ui-router module) when the controller in question is outside the routing system

This repo contains two projects created by yeoman.

## Installation

1. If you haven't already, globally install node, npm, the grunt command line tools, and bower.
2. In each of the two project directories in this repo, do the following:
    npm install
    bower install
    grunt server
3. Go to the websites that have opened up, and look at the console. Then go to the url bar and add the following to the end of the url: "/#/stuff/42"
4. Observe the results, and check out index.html code and the javascript code in each of the projects to see what's going on.
