# jqueryThumbnailSlider
A very simple Thumbnail Slider in jquery

## Initialize
```javascript
$.getJSON( "<JSON FILE HAVING DATA>", function( data ) {Ready("<ID TO WHICH GALLERY TO EMBED>", data);});
```
example:
```javascript
$.getJSON( "data.json", function( data ) {Ready("embedGalleryHere", data);});
```


## Give data as json array
```json
{
			"Name": "fistGallery",
			"mediaList": [{
				"imagePath": "https://robohash.org/1",
				"imageTitle": "1",
				"imageDesc": "desc 1"
			}, {
				"imagePath": "https://robohash.org/2",
				"imageTitle": "other title",
				"imageDesc": "some Desc"
			}],

			"leftImg": "https://raw.githubusercontent.com/stephenhutchings/typicons.font/master/src/png-48px/arrow-left-outline.png",
			"rightImg": "https://raw.githubusercontent.com/stephenhutchings/typicons.font/master/src/png-48px/arrow-right-outline.png"
		}
```
