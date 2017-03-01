# thetunesquad
##CodeFellows 301 group project

##General Information
---
* Team Name: The Tune Squad
* Team Members: Alex Cahn, Allie Grampa, Christina Lee, and Kyle Hillman
* Project Concept: Application that takes two musical artists, and creates a playlist based on top songs by similar artists.

###Project Domain Model:
---
Our original idea for this app was centered around 2 people going on a road trip. These people had different tastes in music, and needed a way to easily create a playlist that both would enjoy. After much deliberation, we came up with The Tune Squad: a mobile first application using responsive web design and the Spotify API. We use jQuery AJAX calls to the API and return data asynchronously to keep our app on a single page. In order to tap into the API and create a playlist, the user has to login with their Spotify username and password. After that, they are free to play around and make as many playlists as they choose.  We manipulate the data that comes back so that there will be no repeat artists in the playlist. The artists, related artists, and most popular songs are updated with the API, which means the playlist you get back one day will be different the next, even if you input the same artists.

## Minimum Viable Product
---
### User stories:
* As a user, I want to be able to navigate from page to page using a navigation bar, links in the footer, and links/buttons included in the body.
* As a user, I want my experience to be fun, and as intuitive as possible.
* As a user, I want to be able to see the songs show up on the page quickly, and be able to play snippets to see if I like them.
* As a user, I want to have this work first and foremost on my phone, because I will need to use it in the car(road trip).
* As a user, I want to learn more about the developers of the website in an engaging manner.

* As a developer, I want the user to have a very smooth, intuitive experience.
* As a developer, I want to make a mobile first, dynamic layout single page application.
* As a developer, I want the results of the query to load as quickly as possible.
* As a developer, I want the results to satisfy the user, and for them to want to come back for more/tell their friends.

### Stretch Goals:
---
* Ability for the user to save the playlist on their Spotify account.
* Add a third artist input field.
* Embed a player on our page when the results come back for the user to play around with.
* Ability for the user to choose the size of their playlist.

### Scope:
---
* Mobile first/dynamic page layout
* Single Page application using an API and AJAX
* Home, login, input, results, about

### Technology Use:
---
* Dropbox for live group collaboration and file sharing.
* Github for agile
* Github for repo development
* Slack utilized for instant communication and links sharing
* Heroku for deployment
* Wireframe (pictures separate in dropbox):
