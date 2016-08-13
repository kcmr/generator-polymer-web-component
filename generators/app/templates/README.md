# <%= props.name %>

<%= props.description %>

## Build and serve

Component source files are located inside the `src` folder. Run `gulp` to build and serve the component demo:

    cd <component-path> && gulp

### Code coverage through Web Component Tester

You need [web-component-tester](https://github.com/Polymer/web-component-tester) installed globally:

    npm install -g web-component-tester

Then, you can run your tests on the specified local browsers (Chrome by default) in `wct.conf.js`:

    cd <component-path> && wct

Code coverage is done with [Istanbul](https://github.com/gotwarlost/istanbul). By default, the coverage thresholds for statements, branches, functions and lines are set to 70%. You can change this thresholds in `wct.conf.js`.

