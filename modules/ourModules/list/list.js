/* Global Module */

/* Magic Mirror
 * Module: List
 *
 * By Ryan Lawler, Jeffrey Chen, and Ethan Chan
 * http://github.com/ryanlawler
 * MIT Licensed.
 */

Module.register("list",{

	// Default module config.
	defaults: {
	    maximumEntries: 6,
		title: "To-Do List<br>",
	},

	getScripts: function() {
        return [
            'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
        ]
    },

  start: function() {
      var self = this;
      setInterval(function() {
          self.updateDom(); // no speed defined, so it updates instantly.
      }, 1000); //perform every 1000 milliseconds.
  },

	// Override dom generator.
	getDom: function() {
        if (this.lastTable === undefined) {
          this.lastTable = document.createElement("table");
          this.lastTable.style.lineHeight = '25px';
          this.lastTable.style.fontSize = "large";
        }

        if (!this.requesting) {
            $.get("https://mms.kirbi.es/post-it", (function(data) {
                this.posts = data.posts;
                this.requesting = true;
                this.updateDom();
            }).bind(this));
        } else {
            var table = document.createElement("table");
            table.style.lineHeight = '25px';
            table.style.fontSize = "large";
            var header = table.createTHead();
            var row = header.insertRow(-1);
            var cell = row.insertCell(-1);
            cell.innerHTML = 'To-Do List' + '<br>';

            var count = 0;
            this.posts.slice(0, this.config.maximumEntries).map(function(post) {
              if (post.list) {
                count++;
              }
            });
            if (count == 0) {
                row = table.insertRow(-1);
                cell = row.insertCell(-1);
                cell.innerHTML = "Add Something to Do!";
            } else {
                this.posts.slice(0, this.config.maximumEntries).map(function(post) {
                    if (post.list) {
                      row = table.insertRow(-1);
                      cell = row.insertCell(-1);
                      cell.innerHTML = post.title;
                      cell = row.insertCell(-1);
                      cell.innerHTML = post.body;
                    }
                });
            }
            this.lastTable = table;
            this.requesting = false;
        }
        return this.lastTable;
    }
});