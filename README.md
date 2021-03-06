# ember-cli-less

Use LESS to preprocess your ember-cli app CSS.  
***This is copied from https://github.com/aexmachina/ember-cli-sass. All credits to the author.***

## Installation

```
npm install --save-dev ember-cli-less
```

## Usage

By default, this addon will compile `app/styles/app.less` into `dist/assets/app.css`.  
In your development environment, a source map will be automatically be generated.  

Additional options can be specified using the `lessOptions` config property in Brocfile.js:

```javascript
var app = new EmberApp({
  lessOptions: {...}
  ...
});
```

**Options:**  
- `inputFile`: the input LESS file (defaults to `app.less`)
- `outputFile`: the output CSS file (defaults to `app.css`)
- `paths`: an array of include paths
- `sourceMap`: whether to generate source maps. Defaults to `true` in development.

## Example

Using Bootstrap LESS source in your app and create a shortcut path:

Install Bootstrap source:  
```
bower install --save bootstrap
```

Specify the include paths in Brocfile.js:  
```javascript
var app = new EmberApp({
  lessOptions: {
    paths: [
      'bower_components/bootstrap/less'
    ]
  }
});
```

Import into app.less:  
```less
@import 'bootstrap';
```

## Linking source maps

When setting `sourceMap: true`, a source map will be generated inline in the compiled css file.
When inspecting elements in dev tools (Chrome), you'll see the correct references to the original less files and their corresponding line numbers.
However, if you would like to click into the less source files directly, you have to link them to your local filesystem:

1. Open dev tools > Sources tab
2. Expand the sources pane on the left if it's not open
3. Right-click anywhere, _Add folder to workspace_, add your project's folder
4. Locate any less source file in the tree, right-click, _Map to Network Resource..._ to create the mapping

## References

- [broccoli-less-single](https://github.com/gabrielgrant/broccoli-less-single)

