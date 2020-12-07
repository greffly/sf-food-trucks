# Food Trucks of San Francisco
There are hundreds of food trucks in San Francisco, and this handy one-page map app helps you look through them all. Just click on a marker on the map to see the name of the food truck, the address, what kinds of items you can expect to find on the menu, and a link to their hours. While most maps give you the standard google color scheme, this one adds some beauty to your food truck finding experience with a custom color scheme.

## Architecture
This is a React based app that utilizes two external APIs - [Mobile Food Facility Permits](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat) from DataSF and [Google Maps API](https://cloud.google.com/maps-platform/). For the custom styling, I was able to build the design of the map via [Snazzy Maps](https://snazzymaps.com/) and incorporate the json file into my app.

## Planned Upgrades
**Search By Food Type**
A feature I would love to add to this app would be a series of icons (either food or national flag icons) that could be clicked and would display only food trucks of that food type. This could help users more easily find food trucks for pizza, burritos, or whatever they're in the mood for. However, since not all of the data in the Mobile Food Facility API includes food types, this would ultimately leave some trucks out.

**Autocomplete Search Feature**
In the future, a search bar could be added at the bottom of the map that could help users search by truck name. This could be helpful for users who have heard of a specific truck but aren't sure where to find it, or are looking to see if a truck has multiple locations.

**Available for Mobile**
Currently the app is only designed with desktop and tablet in mind, but for the app to be useful to more users, I would make it mobile friendly. I would also add a geolocator so the user could see where they are in relation to food trucks.

## Resources
Food Trucks of San Francisco hosted on Netlify
My portfolio site
My resume
A lightning talk I did on AWS
