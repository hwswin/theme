/*! customizer.js - v0.1.1 - 2014-1-04
* http://admindesigns.com/
* Copyright (c) 2013 Admin Designs;*/
;var Customizer=function(){var a=function(){jQuery.expr[":"].parents=function(h,j,g){return jQuery(h).parents(g[3]).length<1};var d=function(i){var h="";for(var g in i){h+=g+": "+i[g]+";"}return h};$("body").on("click",".skin-modal-open",function(){var g={};$("#skinGenerate textarea").empty();$.each(c,function(h,j){if(g[j.ele]==undefined){g[j.ele]=[];g[j.ele].push(j.p)}else{g[j.ele].push(j.p)}});$.each(g,function(h,j){arr=j.join("");$("#skinGenerate textarea").append(h+"{"+arr+"} \n")})});$("body").on("click",".skin-menu .panel-body input:checkbox",function(j){var g=$(this).data("modify").selector;var i=$(this).data("modify").style;var k=$(this);if(!$(this).data("modify").dataid){$(this).data("modify").dataid="change-"+b++}var h=$(this).data("modify").dataid;if(i=="gradient"){if($(g).hasClass("skin-gradient")){$(g).removeClass("skin-gradient").children().each(function(l,m){$(this).removeClass("btn-gradient")})}else{$(g).addClass("skin-gradient").children().each(function(l,m){$(this).addClass("btn-gradient")})}return}if(g==".navbar-logo img"){if($(k).prop("checked")){$(".navbar-logo").html('<img src="img/logo-white.png" class="img-responsive"/>')}else{$(".navbar-logo").html('<img src="img/logos/logo-red.png" class="img-responsive" alt="logo"/>')}return}if($.type(i)==="number"){if($(k).prop("checked")){c[h]={ele:g,p:d(cssStyles.modified[i])};if($(g).hasClass("panel")){var g=$(".panel").filter(":parents(.panel-group)")}$(g).css(cssStyles.modified[i])}else{$(g).css(cssStyles.original[i]);delete c[h]}}});$("body").on("click",".skin-menu .panel-body .form-group input.radio",function(j){var g=$(this).data("modify").selector;var i=$(this).data("modify").style;var k=$(this);if(!$(this).parents(".form-group").data("radio-count")){$(this).parents(".form-group").data("radio-count","radio-"+b++)}var h=$(this).parents(".form-group").data("radio-count");if($.type(i)==="number"){c[h]={ele:g,p:d(cssStyles.modified[i])};if($(g).hasClass("panel-heading")){var g=$(".panel-heading").filter(":parents(.panel-group)")}if($(g).hasClass("panel")){var g=$(".panel").filter(":parents(.panel-group)")}$(g).css(cssStyles.modified[i])}});$("body").on("change",".skin-menu .panel-body select",function(k){var g=$(this).data("modify").selector;var j=$(this).data("modify").style;var m=$(this).val();var l=$(this);if(!$(this).data("modify").dataid){$(this).data("modify").dataid="change-"+b++}var h=$(this).data("modify").dataid;if($.type(j)==="string"){var i=function(r){var q="";for(var n in r){if(typeof r[n]=="string"){q+=n+r[n]}else{q+=i(r[n])+"\n"}}return q};$(g).css(j,m);c[h]={ele:g,p:j+":"+m+";"}}});$("body").on("click",".skin-menu .panel-body .skin-items > div",function(l){var o=$(this).parents(".skin-items");var j=$(o).data("modify").selector;var i=$(o).data("modify").style;var k=$(this).css("background-color");var m=$(this).data("pattern");var h=$(this);if(!$(o).data("modify").dataid){$(o).data("modify").dataid="change-"+b++}var n=$(o).data("modify").dataid;var g=$(h).parents(".popover").find(".popover-title b").text();if(g==" Caret"||g==" Active Caret"){$("ul.sidebar-nav span.caret").toggle().toggle()}if(j=="#sidebar_left"){$(j).css(i,k);c[n]={ele:j,p:i+":"+k+";background-image:none;"};c[n+"before"]={ele:"#sidebar_left:before",p:i+":"+k+";"}}if(j==".navbar"&&i=="background-color"){if(!$(this).is(".bg-light,.bg-light2,.bg-light3,.bg-light4,.bg-light5,.bg-light6,.bg-light7")){$(".navbar-brand img").attr("src","img/logos/header-logo_light.png");$(".navbar-brand, #toggle_sidemenu_l").css("color","#FFF")}else{$(".navbar-brand img").attr("src","img/logos/header-logo.png");$(".navbar-brand, #toggle_sidemenu_l").css("color","#666")}}if($(o).hasClass("skin-gradient")){c[n]={ele:j,p:e(h)+";"};if($(j).hasClass("panel-heading")){var j=$(".panel-heading").filter(":parents(.panel-group)")}if($(j).hasClass("panel")){var j=$(".panel").filter(":parents(.panel-group)")}$(j).css(e(h,"css"))}else{if(j=="#content_wrapper"){$(j).css(i,k);$(j).css("box-shadow","0 -1px 3px 0 rgba(0, 0, 0, 0.33) inset");var j="#content_wrapper:after";c[n]={ele:j,p:i+":"+k+";background-image:none;"}}else{if($(o).hasClass("pattern-popover")){c.breadcrumb={ele:j,p:"background: url(../img/patterns/"+m+".png) repeat top left;"};$(j).css("background","url(img/patterns/"+m+".png) repeat top left")}else{if($(o).hasClass("breadcrumb-bg")){c.breadcrumb={ele:j,p:i+":"+k+";background-image:none;"};$(j).css(i,k);if(i=="background-color"){$(j).css("background-image","none")}}else{if(i=="background-color"){$(j).css("background-image","none");c[n]={ele:j,p:i+":"+k+";background-image:none;"}}else{c[n]={ele:j,p:i+":"+k+";"}}if($(j).hasClass("panel-heading")){var j=$(".panel-heading").filter(":parents(.panel-group)")}if($(j).hasClass("panel")){var j=$(".panel").filter(":parents(.panel-group)")}$(j).css(i,k)}}}}});var c={};var b=0;var f=0;function e(j,i){var h=$(j).attr("class");function g(){$(j).removeClass("btn-gradient");var l=$(j).css("background-color");$(j).addClass("btn-gradient");return l}if(i=="css"){if($(j).is(".bg-light,.bg-light2,.bg-light3,.bg-light4,.bg-light5,.bg-light6,.bg-light7")){var k={"background-color":g(),"background-repeat":"repeat-x","background-image":"-webkit-linear-gradient(top, rgba(255,255,255, 0.9) 50%,rgba(255,255,255,0.10) 100%)","background-image":"linear-gradient(to bottom, rgba(255,255,255, 0.9) 10%,rgba(255,255,255,0.10) 100%)",filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr="#80ffffff",endColorstr="#00ffffff",GradientType=0)'};return k}else{var k={"background-color":g(),"background-repeat":"repeat-x","background-image":"-webkit-linear-gradient(top, rgba(255, 255, 255, 0.15) 35%,rgba(0, 0, 0, 0.12) 100%)","background-image":"linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 35%,rgba(0, 0, 0, 0.12) 100%)",filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr="#80ffffff",endColorstr="#00ffffff",GradientType=0)'};return k}}else{if($(j).is(".bg-light,.bg-light2,.bg-light3,.bg-light4,.bg-light5,.bg-light6,.bg-light7")){var k="background-color: "+g()+';\nbackground-image:-webkit-linear-gradient(top, rgba(255,255,255, 0.9) 50%,rgba(255,255,255,0.1) 100%);background-image: linear-gradient(to bottom, rgba(255,255,255, 0.9) 10%,rgba(255,255,255,0.1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#80ffffff",endColorstr="#00ffffff",GradientType=0);background-repeat:repeat-x';return k}else{var k="background-color: "+g()+'; background-image:-webkit-linear-gradient(top, rgba(255, 255, 255, 0.15) 35%,rgba(0, 0, 0, 0.12) 100%);background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 35%,rgba(0, 0, 0, 0.12) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#80ffffff",endColorstr="#00ffffff",GradientType=0);background-repeat:repeat-x';return k}}}cssStyles={original:{"1":{"box-shadow":"none"},"2":{"border-width":"1px"},"3":{"text-shadow":"0 1px #FFF"},"4":{background:""},"5":{"border-bottom-width":"1px"},"6":{"box-shadow":"0 1px 3px rgba(0, 0, 0, 0.15),0 -1px 1px rgba(0, 0, 0, 0.05)"},"7":{"border-bottom":"1px solid #FFF"},"8":{"vertical-align":"middle",width:"45px"},"9":{"border-right-width":"1px"},"10":{"border-bottom-style":"dashed"},"11":{display:"block"}},modified:{"1":{"box-shadow":"0 0 1px rgba(0, 0, 0, 0.15)"},"2":{"border-width":"0"},"3":{"text-shadow":"none"},"4":{background:"none"},"5":{"border-bottom-width":"0"},"6":{"box-shadow":"0 1px 3px rgba(0, 0, 0, 0.15),0 -1px 1px rgba(0, 0, 0, 0.05)"},"7":{"box-shadow":"0 1px 1px rgba(255, 255, 255, 8),0 -1px 1px rgba(255, 255, 255, 0.05)"},"8":{"vertical-align":"middle",width:"45px"},"9":{"border-right-width":"0"},"10":{"border-bottom-style":"solid"},"11":{display:"none"}}};popOptions={html:true,trigger:"manual",title:function(){var i=$(this).data("modify").popover;var g=$(this).data("modify").selector;var k=$(this).text();var h=$(this).data("popover-id");var j=$(this).data("modify").style;if($(this).data("help-text")){modTitle="<span><b>"+$(this).data("help-text")+"</b></span>";return modTitle}if(i=="gradient"){modTitle="<div class='cBox cBox-inline'><input type='checkbox' data-modify='{\"selector\": \"."+h+'", "style": "gradient"}\' id=\''+h+"' ><label for='"+h+"'>Toggle <b>Gradient</b></label></div>";return modTitle}if(i=="icon-border"){modTitle="<div class='cBox cBox-inline'><input type='checkbox' id='"+h+'\' data-modify=\'{"selector": "ul.sidebar-nav > li > a span.glyphicon", "style": 9}\'><label for=\''+h+"'>Toggle Icon <b>Border</b></label></div>";return modTitle}if(i=="border"){modTitle="<div class='cBox cBox-inline'><input type='checkbox' id='"+h+'\' data-modify=\'{"selector": "'+g+'", "style": 2}\'><label for=\''+h+"'>Toggle <b>Border</b></label></div>";return modTitle}if(i=="text-shadow"){modTitle="<div class='cBox cBox-inline'><input type='checkbox' id='"+h+'\' data-modify=\'{"selector": "'+g+'", "style": 3}\' checked><label for=\''+h+"'>Toggle <b>Text Shadow</b></label></div>";return modTitle}else{modTitle="<span><b>"+k+"</b></span>";return modTitle}},placement:"top",content:function(){var g=$(this).data("modify").selector;var k=$(this).data("modify").style;var i=$(this).data("modify").popover;if(i=="gradient"){var h=$(this).data("popover-id")}else{if(i=="breadcrumb-bg"){var h="breadcrumb-bg"}else{var h=""}}var j="<div class='skin-items skin-popover skin-sm "+h+'\' data-modify=\'{"selector": "'+g+'", "style": "'+k+"\"}'> <div class='bg-blue-alt'></div> <div class='bg-blue2-alt'></div> <div class='bg-blue3-alt'></div> <div class='bg-blue4-alt'></div> <div class='bg-blue5-alt'></div> <div class='bg-blue6-alt'></div> <div class='bg-blue7-alt'></div> <div class='bg-purple3'></div> <div class='bg-purple2'></div> <div class='bg-purple'></div> <div class='bg-purple-alt'></div> <div class='bg-green-alt'></div> <div class='bg-green2-alt'></div> <div class='bg-green3-alt'></div><div class='bg-green4-alt'></div><div class='bg-green5-alt'></div> <div class='bg-red-alt'></div> <div class='bg-red2-alt'></div> <div class='bg-red3-alt'></div> <div class='bg-red4-alt'></div> <div class='bg-orange-alt'></div> <div class='bg-orange2-alt'></div> <div class='bg-yellow-alt'></div> <div class='bg-yellow2-alt'></div> <div class='bg-creme-alt'></div> <div class='bg-creme2-alt'></div> <div class='bg-brown-alt'></div> <div class='bg-brown2-alt'></div> <div class='bg-brown3-alt'></div><div class='bg-dark5'></div> <div class='bg-dark4'></div><div class='bg-dark2'></div> <div class='bg-dark'></div> <div class='bg-light7'></div> <div class='bg-light6'></div> <div class='bg-light5'></div> <div class='bg-light4'></div> <div class='bg-light3'></div> <div class='bg-light2'></div><div class='bg-light'></div><div class='bg-transparent'></div></div><div class='clearfix'></div>";if(i=="breadcrumb-patterns"){var j="<div class='skin-items pattern-popover skin-sm "+h+'\' data-modify=\'{"selector": "'+g+'", "style": "'+k+"\"}'><div class='pattern1' data-pattern='1'></div><div class='pattern2' data-pattern='2'></div><div class='pattern3' data-pattern='3'></div><div class='pattern4' data-pattern='4'></div><div class='pattern5' data-pattern='5'></div><div class='pattern6' data-pattern='6'></div><div class='pattern7' data-pattern='7'></div><div class='pattern8' data-pattern='8'></div></div><div class='clearfix'></div>"}return j}};$("[data-toggle=popover]").popover(popOptions);$(document).on("click","[data-toggle=popover]",function(){if(!$(this).data("popover-id")){$(this).data("popover-id","popcount-"+f++).popover("show")}else{$(this).next(".popover").css("display","block")}});$("body").on("click",function(g){$('[data-toggle="popover"]').each(function(){if(!$(this).is(g.target)&&$(this).has(g.target).length===0&&$(".popover").has(g.target).length===0){$(this).next(".popover").css("display","none")}})})};return{init:function(){a()}}}();


	
	
		