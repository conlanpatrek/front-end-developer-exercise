use("https://code.jquery.com/jquery-1.11.3.min.js","eventemitter.js",function(){"use strict";function a(){c.on("init",function(a){a.init=!0}),$(".steps__step").each(function(a,b){c.steps[a+1]={link:b,detail:document.getElementById(b.href.replace(/^.*#/,"")),friends:[]}}),$.get("/app/assets/javascripts/baby-steps.json",function(a){for(var b=0;b<a.friends.length;b++){var e=a.friends[b];c.steps[e.babyStep].friends.push(e)}d.trigger("init",c)})}function b(a){if(c.activeStep!==a&&"undefined"!=typeof c.steps[a]){var b=c.activeStep;c.activeStep=a,d.trigger("change",c.steps[c.activeStep],c.steps[b])}}var c={init:!1,activeStep:1,steps:[],selectStep:b,on:function(){d.on.apply(d,arguments)}},d=new EventEmitter("init","change");window.model=c,a()});