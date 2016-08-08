# readingProgress
##### Reading progress bar for long form articles.

readingProgress.js will track your scroll progress through an article (or a whole page) and display a progress bar.

Start with
```
npm install
```
to get the appropriate dependances, then
```
grunt
```
to start the livereload & builder task.


The progress bar is a couple of simple nested divs.
```html
<div class="progress-box">
    <div class="progress"></div>
</div>
```
To change the tracked content container, edit the config object in readingProgress.js. If you'd like to track the full page, change ".content" to "body".
```javascript
var config = {
    content_container: ".content",
}
```
