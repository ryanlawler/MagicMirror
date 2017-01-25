/* Global Module */

/* Magic Mirror
 * Module: List
 *
 * By Ryan Lawler, Jeffrey Chen, and Ethan Chan
 * http://github.com/ryanlawler
 * MIT Licensed.
 */


Module.register("videoViewer",{

	// Default module config.
	defaults: {
		text: "Hello World!",
        videosrc: "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4",
	},

	// Override dom generator.
	/*
	getDom: function() {
        var elem = document.createElement("video");
        console.log("hi");
        if (!this.requesting) {
            $.get("https://mms.kirbi.es/queue", (function(data) {
                this.url = data.url;
                this.requesting = true;
                this.updateDom();
                }).bind(this));
        } else {
                console.log(this.url);
                elem.src = this.url;
                elem.height = 300;
                elem.width = 400;
                elem.style.preload = 'auto';
                elem.play();
                this.requesting = false;
                elem.addEventListener('ended', (function(e){this.updateDom()}).bind(this), false);
        }
		return elem;
	}
	*/

		getDom: function() {
            var elem = document.createElement("iframe");
            elem.height = 300;
            elem.width = 400;
            elem.style.borderWidth = 0;

            if (!this.requesting) {
                $.get("https://mms.kirbi.es/queue", (function(data) {
                    this.url = data.url;

                    this.requesting = true;
                    this.updateDom();
                    }).bind(this));
            } else {
                    console.log(this.url);
                    elem.src = this.url.replace('watch?v=', 'embed/') + '?autoplay=1';

                    this.requesting = false;
                    //elem.addEventListener('ended', (function(e){this.updateDom()}).bind(this), false);
            }

    		return elem;
    	}

});