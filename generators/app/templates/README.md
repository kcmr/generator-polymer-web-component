# <%= props.name %>

<%= props.description %>

## Install

Install the component using [Bower](http://bower.io/):

```bash
$ bower install <%= props.name %> --save
```

## Usage

Import Web Components polyfill:

```js
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
```

Import Custom Element:

```html
<link rel="import" href="bower_components/<%= props.name %>/<%= props.name %>.html"> 
```

Use it!:

```html
<<%= props.name %>></<%= props.name %>>
```
