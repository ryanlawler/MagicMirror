/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
    port: 8080,

    language: "en",
    timeFormat: 12,
    units: "imperial",

    modules: [{
            module: 'alert',
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "calendar",
            header: "Courtney's Events",
            position: "top_left",
            config: {
                calendars: [{
                        symbol: 'calendar-check-o ',
                        url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
                    },
                    {
                        symbol: "calendar",
                        url: "https://calendar.google.com/calendar/ical/courtneylawler11%40gmail.com/private-489770cacebb966d3a1d13f79f2cdcf6/basic.ics",
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
                location: 'Aliso Viejo',
                locationID: '5323163', //ID from http://www.openweathermap.org
                appid: 'fb48fecfe81fedbf19d33b77871698c9'
            }
        },
        {
            module: 'weatherforecast',
            position: 'top_right',
            header: 'Weather Forecast',
            config: {
                location: 'Aliso Viejo',
                locationID: '5323163', //ID from http://www.openweathermap.org
                appid: 'fb48fecfe81fedbf19d33b77871698c9'
            }
        },
        {
            module: 'newsfeed',
            position: 'bottom_bar',
            config: {
                feeds: [{
                    title: "New York Times",
                    url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                }],
                showSourceTitle: true,
                showPublishDate: true
            }

        }
    ]
}

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }