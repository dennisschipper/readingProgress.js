document.addEventListener('DOMContentLoaded', function(){

  (function startScroller(){
    // Edit .content to your content container's class (or body to track the page)
    var config = {
      content_container: ".content",
    }

    var content = document.querySelector(config.content_container)
    var progress = document.querySelector('.progress')// The progress bar)

    // Measure on scroll
    document.addEventListener('scroll', function(){
      var top = content.offsetTop
      var bottom = content.offsetTop + content.offsetHeight
      var scroll = window.scrollY + window.innerHeight
      var percentage = Math.round((scroll - top) / (bottom - top) * 100)

      if (percentage < 0) {
        progress.style.width = "0"
      } else if (percentage > 0 && percentage < 100) {
        progress.style.width = percentage + "%"
      } else if (percentage > 100) {
        progress.style.width = "100%"
      }
    })

  })();

})
