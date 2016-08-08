# readingProgress.js
##### Reading progress bar for long form articles.

![readingProgress.js](http://www.designfordetails.com/images/readingProgress.gif)

readingProgress.js will track your scroll progress through an article and display a progress bar. It can be configured to only track the article part, or the full page.

Start with
```
npm install
```
to get the appropriate package dependances, then
```
grunt
```
to start the livereload & builder task. Files are automaticaly saved in the /build directory.

The progress bar is a couple of nested divs.
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
