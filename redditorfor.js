// ==UserScript==
// @name        Redditages
// @namespace   rages
// @include     https://www.reddit.com/r/*
// @version     1
// @grant       none
// ==/UserScript==
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
$("a").each(function(){
   if(/https:\/\/www\.reddit\.com\/user\/.*/.test($(this).attr("href"))){
     var theelement = $(this);
     $.get($(this).attr("href")).done(function(resp){
       var found = resp.match(/redditor for.*?<\/time>/);
       found.forEach(function(element){
         var StrippedString = element.replace(/(<([^>]+)>)/ig,"");
         StrippedString = StrippedString.replace(/&#[0-9]+;/," ")
         theelement.text(theelement.text() + ' ' + StrippedString);
       })
     });
   }
});