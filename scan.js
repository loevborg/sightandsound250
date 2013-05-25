// javascript for nodejs

var fs = require("fs");
var $ = require("jquery").create();

require("./list");

console.log("ranking\ttitle\tdirector\tdescription\tlink");

$.each(ls, function(index,value) {
    rank = $("span.rank", value).html();
    rank = rank.replace("=","").trim();
    title = $(".sas-top-film-title a", value).html();
    link = $(".sas-top-film-title a", value).attr("href");
    director = $(".sas-top-film-director", value).html();
    text = $(".sas-top-film-text p", value);
    if (!text.length) {
        text = $(".sas-top-film-text", value);
    }
    text = text.html();
    text = text.replace(/[\n\r]/gm,"").replace(/[\t]/gm," ").trim();
    console.log(rank + "\t" + title + "\t" + director + "\t" + text + "\t" + link);
});
