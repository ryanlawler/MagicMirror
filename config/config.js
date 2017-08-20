/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
	    {
            module: 'alert',
        },
        {
            module: 'clock',
            position: 'top_left'
        },
		{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					},
					{
						symbol: "calendar",
						url: "https://calendar.google.com/calendar/ical/courtneylawler11%40gmail.com/private-489770cacebb966d3a1d13f79f2cdcf6/basic.ics",
					},
					{
						symbol: "calendar-o"
						url: "https://outlook.office365.com/owa/calendar/b4508fba927b49e7b38fc821a4ef79fd@yum.com/46e1a5e8f2e64dcd9e2165273d53faa616049492060532477113/calendar.ics",
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Berkeley',
				locationID: '5327684',  //ID from http://www.openweathermap.org
				appid: 'fb48fecfe81fedbf19d33b77871698c9'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Berkeley',
				locationID: '5327684',  //ID from http://www.openweathermap.org
			appid: 'fb48fecfe81fedbf19d33b77871698c9'
			}
		},
		{
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
