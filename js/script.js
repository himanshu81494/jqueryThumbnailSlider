
$(document).ready(function(){
	$.getJSON( "data.json", function( data ) {Ready("embedGalleryHere", data);});

});
Ready = function(I, GalleryData){
	var Name = GalleryData.Name;
	var mediaList = GalleryData.mediaList;
	var leftImg = GalleryData.leftImg;
	var rightImg = GalleryData.rightImg;
	var Parent = $("#"+I);
	initialize = function(Parent, Name){
		var Data = "<div class='"+Name+"-wrap'>\
		<div class='"+Name+" clearfix'></div>\
		<div class='"+Name+"__controls clearfix'>\
		<div href='#' class='"+Name+"__controls-prev'>\
		<img src='"+leftImg+"' alt='' />\
		</div>\
		<div href='#' class='"+Name+"__controls-next'>\
		<img src='"+rightImg+"' alt='' />\
		</div>\
		</div>\
		</div>";
		Parent.append(Data);
	};
	appendSingle = function(singleImageData, Name){
		var Data = "<div class='"+Name+"__item' > \
		<img  src='"+singleImageData.imagePath+"' \
		class='"+Name+"__img ' title='"+singleImageData.imageTitle+"' alt='"+singleImageData.imageTitle+"' /></div>";
		$("."+Name).append(Data);
	};
	addMedia = function(Name, mediaList){
		for(var i=0;i<mediaList.length;++i){
			appendSingle(mediaList[i], Name)
		}
	};
	addCss = function(Name){
		$("."+Name+"-wrap").css({ "margin": "0 auto", "overflow": "hidden", "width": "70%"});
		$("."+Name) .css({"position": "relative", "left": "0", "top": "0"});
		$("."+Name+"__item") .css({"float": "left", "list-style": "none"});
		$("."+Name+"__img").css({"display": "block","width": "214px","height": "150px","margin-right": "5px"});
		$("."+Name+"__controls") .css({ "margin-top": "10px" });
		$("."+Name+"__controls-prev") .css({ "cursor": "pointer", "float": "left" });
		$("."+Name+"__controls-next") .css({ "cursor": "pointer", "float": "right" });
	};
	initialize(Parent, Name);
	addMedia(Name, mediaList);
	addCss(Name);
	Run(Name);
};
Run = function(Item){
	$("."+Item+"__item:first").addClass(Item+"__item__active");

	var totalWidth = 0;
	$("."+Item+"__item").each(function(){
		totalWidth = totalWidth + $(this).outerWidth(true);
	});
	var maxScrollPosition = totalWidth - $("."+Item+"-wrap").outerWidth();
	function toGalleryItem(targetItem){
		if(targetItem.length){
			var newPosition = targetItem.position().left;
			if(newPosition <= maxScrollPosition){
				targetItem.addClass(Item+"__item__active");
				targetItem.siblings().removeClass(Item+"__item__active");
				$("."+Item).animate({
					left : - newPosition
				});
			}else{
				$("."+Item).animate({
					left : - maxScrollPosition
				});
			}/*end else*/
		}/*end if*/
	}/* end toGalleryItem*/
	$("."+Item).width(totalWidth);
	$("."+Item+"__controls-prev").click(function(){
		var targetItem = $("."+Item+"__item__active").prev();
		toGalleryItem(targetItem);
	});
	$("."+Item+"__controls-next").click(function(){
		var targetItem = $("."+Item+"__item__active").next();
		toGalleryItem(targetItem);
	});

};
