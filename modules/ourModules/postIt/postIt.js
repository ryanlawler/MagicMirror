/* Global Module */

/* Magic Mirror
 * Module: List
 *
 * By Ryan Lawler, Jeffrey Chen, and Ethan Chan
 * http://github.com/ryanlawler
 * MIT Licensed.
 */

function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

Module.register("postIt",{

	// Default module config.
	defaults: {
	    maximumEntries: 6,
		title: "postIt<br>",
		line: "___________<br>",
	},

	getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    },
  getStyles: function() {
    return [
      'postIt.css',
    ]
  },

  start: function() {
      var self = this;
      setInterval(function() {
          self.updateDom(); // no speed defined, so it updates instantly.
      }, 900); //perform every 1000 milliseconds.
  },

	// Override dom generator.
	getDom: function() {
        if (this.lastWrapper === undefined)
          this.lastWrapper = document.createElement("div");

        if (!this.requesting) {
            $.get("https://mms.kirbi.es/post-it", (function(data) {
                this.posts = data.posts;
                this.requesting = true;
                this.updateDom();
            }).bind(this));
        } else {
            var wrapper = document.createElement("div");
            var count = 0;
            this.posts.slice(0, this.config.maximumEntries).map(function(post) {
              if (!post.list) {
                count++;
              }
            });
            if (count == 0) {
                wrapper.innerHTML = "Add a Post-It!";
            } else {
                this.posts.slice(0, this.config.maximumEntries).map(function(post) {
                    if (!post.list) {
                      var postIt = document.createElement("div");
                      postIt.className = 'post-it';
                      wrapper.appendChild(postIt);
                      var postItTitle = document.createElement("div");
                      postItTitle.className = 'post-it-title';
                      postItTitle.innerHTML = nl2br(post.title);
                      postIt.appendChild(postItTitle);
                      postIt.innerHTML += nl2br(post.body);
                    }
                });
            }
            this.lastWrapper = wrapper;
            this.requesting = false;
        }
        return this.lastWrapper;
    }
});