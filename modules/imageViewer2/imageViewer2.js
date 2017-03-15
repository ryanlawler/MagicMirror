/* Global Module */

/* Magic Mirror
 * Module: Image Viewer
 *
 * By Ryan Lawler, Jeffrey Chen, and Ethan Chan
 * http://github.com/ryanlawler
 * MIT Licensed.
 */

Module.register("imageViewer2",{

	// Default module config. Change the imagesrc to the URL of the image you would like.
	defaults: {
        imgsrc: "http://rs839.pbsrc.com/albums/zz313/galacutie_bucket/2-8668.gif~c200",
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