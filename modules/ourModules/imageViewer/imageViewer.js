/* Global Module */

/* Magic Mirror
 * Module: Image Viewer
 *
 * By Ryan Lawler, Jeffrey Chen, and Ethan Chan
 * http://github.com/ryanlawler
 * MIT Licensed.
 */

Module.register("imageViewer",{

	// Default module config. Change the imagesrc to the URL of the image you would like.
	defaults: {
		text: "Hello World!",
        imgsrc: "https://s-media-cache-ak0.pinimg.com/originals/14/e5/c7/14e5c7dc2caf9024a8662b3e08845d85.gif",
        imgsrc2: "http://66.media.tumblr.com/tumblr_lr2ysgGcMX1qhz1tdo3_r3_250.gif",
        imgsrc3: "http://67.media.tumblr.com/c501c17987afa726df6936464d5da3e7/tumblr_n8i1jcXggZ1sqtzdpo2_r1_500.gif"
	},

	// Override dom generator.
	getDom: function() {
        var elem = document.createElement("img");
        elem.src = this.config.imgsrc;
        elem.height = 200;
        elem.width = 200;

	    return elem;
	}
});