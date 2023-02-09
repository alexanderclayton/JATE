# Just Another Alex Clayton Text Editor

## Introduction
This project was developed by Alex Clayton as part of the KU Coding Bootcampt 19-PWA Challenge.  This is just another text editor.

## What's in the project?
The acceptance criteria for this project are as follows:

1.  WHEN I open my application in my editor
    THEN I should see a client server folder structure

    Both folders exist in the editor.

2.  WHEN I run `npm run start` from the root directory
    THEN I find that my application should start up the backend and serve the client

    running `npm run start` sparks this application up.

3.  WHEN I run the text editor application from my terminal
    THEN I find that my JavaScript files have been bundled using webpack

    I had no issues with this on my local machine, but faced a few issues related to the webpack when deploying to Heroku

4.  WHEN I run my webpack plugins
    THEN I find that I have a generated HTML file, service worker, and a manifest file

    All 3 are present in the application.

5.  WHEN I use next-gen JavaScript in my application
    THEN I find that the text editor still functions in the browser without errors

    Application seems to function in the browser without issues.

6.  WHEN I open the text editor
    THEN I find that IndexedDB has immediately created a database storage

    IndexedDB database storage is present.

7.  WHEN I enter content and subsequently click off of the DOM window
    THEN I find that the content in the text editor has been saved with IndexedDB

    Having issues with this.  I think it has to do with my known storage names...

8.  WHEN I reopen the text editor after closing it
    THEN I find that the content in the text editor has been retrieved from our IndexedDB

    Having issues with this... see above for troubleshooting ideas.

9.  WHEN I click on the Install button
    THEN I download my web application as an icon on my desktop

    Install button does not yet work.

10. WHEN I load my web application
    THEN I should have a registered service worker using workbox

    Registered service worker present in current deployement.

11. WHEN I register a service worker
    THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets

    Present in current deployment.

12. WHEN I deploy to Heroku
    THEN I should have proper build scripts for a webpack application

    I faced a series of issues when attempting to deploy to Heroku.  My deployment had trouble finding the webpack.  I ended up working around this by turning off the pruning of devDependencies using the command `$ heroku config:set NPM_CONFIG_PRODUCTION=false`
