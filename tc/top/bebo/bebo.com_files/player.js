(function(){var L=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var H=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var J=(navigator.userAgent.toLowerCase().indexOf("linux")!=-1)?true:false;var R=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;function B(){var V;var W;var X;try{W=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");V=W.GetVariable("$version")}catch(X){}if(!V){try{W=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");V="WIN 6,0,21,0";W.AllowScriptAccess="always";V=W.GetVariable("$version")}catch(X){}}if(!V){try{W=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");V=W.GetVariable("$version")}catch(X){}}if(!V){try{W=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");V="WIN 3,0,18,0"}catch(X){}}if(!V){try{W=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");V="WIN 2,0,0,11"}catch(X){V=-1}}return V}function C(){var b=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var a=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var V=navigator.plugins["Shockwave Flash"+a].description;var Z=V.split(" ");var X=Z[2].split(".");var c=X[0];var W=X[1];if(Z[3]!=""){tempArrayMinor=Z[3].split("r")}else{tempArrayMinor=Z[4].split("r")}var Y=tempArrayMinor[1]>0?tempArrayMinor[1]:0;var b=c+"."+W+"."+Y}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){b=4}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){b=3}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){b=2}else{if(L&&H&&!R){b=B()}}}}}return b}function U(a,Y,X){versionStr=C();if(versionStr==-1){return false}else{if(versionStr!=0){if(L&&H&&!R){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",")}else{versionArray=versionStr.split(".")}var Z=versionArray[0];var V=versionArray[1];var W=versionArray[2];if(Z>parseFloat(a)){return true}else{if(Z==parseFloat(a)){if(V>parseFloat(Y)){return true}else{if(V==parseFloat(Y)){if(W>=parseFloat(X)){return true}}}}}return false}}}function E(W,V){if(W.indexOf("?")!=-1){return W.replace(/\?/,V+"?")}else{return W+V}}function A(Z,Y,V){var X="";if(L&&H&&!R){X+="<object ";for(var W in Z){X+=W+'="'+Z[W]+'" '}for(var W in Y){X+='><param name="'+W+'" value="'+Y[W]+'" /> '}X+="></object>"}else{X+="<embed ";for(var W in V){X+=W+'="'+V[W]+'" '}X+="> </embed>"}return X}function N(){var V=S(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");return A(V.objAttrs,V.params,V.embedAttrs)}function S(W,Z,b,Y,c){var V=new Object();V.embedAttrs=new Object();V.params=new Object();V.objAttrs=new Object();for(var X=0;X<W.length;X=X+2){var a=W[X].toLowerCase();switch(a){case"classid":break;case"pluginspage":V.embedAttrs[W[X]]=W[X+1];break;case"src":case"movie":W[X+1]=E(W[X+1],Z);V.embedAttrs.src=W[X+1];V.params[b]=W[X+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":V.objAttrs[W[X]]=W[X+1];break;case"id":case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":V.embedAttrs[W[X]]=V.objAttrs[W[X]]=W[X+1];break;default:V.embedAttrs[W[X]]=V.params[W[X]]=W[X+1]}}V.objAttrs.classid=Y;if(c){V.embedAttrs.type=c}return V}var T=parseInt;var D="ooyalaPlayer63665867_v1t86l";var M=T("296");var K=T("165");if((J&&U(9,0,115))||(!J&&U(9,0,28))){var I="<div style='width:"+M+"px; height: "+K+"; overflow: hidden'>";var P="";if(P){P+=Math.floor(Math.random()*268435456).toString(32)}I+=N("src","operatest","width",M,"height",K,"align","middle","id",D,"quality","high","bgcolor","#000000","wmode","opaque","name",D,"flashvars",("me="+D+"&embedCode=JraHUxOjfEDlOkZT5JOL9cfn8YNLSSkG&autoplay=1&hide=sharing,endscreen&preload=eNqFzkkOgjAAQNGrcAGpYBRs4kZxCFNlMAK7WkYpFMsQenuXroj795NPOOv7lDW4ag_lMHQQALqRicyYwBTLhDWA_Ig8N1SqGlxkcAErKjK8nfVxQ3E3ntHJ48dhtR6j12jpoC8zmivSlGY94VU3MA4nFWJocnx7zOidnw2K6iTcmsjek7zVY9cOgvq6dPavA0w4oSC-E7pYi7S2upSzWdgJ0nA8er7QvmkoV8M*&preload0=500aaf8ff8b2c94b29c83b056c455ae741bb96cbc0a5254e8ba8fb3a76e3f718&text=qmUMtPln0UU85G71n635m86ZfJ9c4c7GSDkSwF_twBqh3JsZ8zRlwqVa1ijHXjtASUe1YzAlp5spUgXi-oDAa_fW5y5ekU7ZAVZOEnJkuZNilP1mGyki12ijYEemckwdYtSjijbTcL-ZnP_E8r1IuQkJhIkNSnEMNbNivjXPg3AKeJJD39qEfvd0tYDlfyEOldH2d-cXB3XT7se1aV29IDI1X0OXhOEbXERaCjBKqcTt4bZ5TcYSZiTsVefO64NTuExJ205jm5qBfoS5xXqY6d6hKx2njV4hQ9VeadP4_PWN3E93J01gryv7VeZN_3FF9wBh3G0mcdyMRqi4-sky7qgn57kPK4q2tgALLH0sPoaxy626W2FbclHmuOlm_Cc-lupb5ZCSftecOJZzPSx8TXRclOM52-Me5_f6WxAbj5E5HoLuQozltBsJD-ks7XYOiRs_xgrubyBT3cUzori63ZBlg7_tCWKKqKD8jq7odltylwNv2EnrE_UqlLolAp2Gu_pKyK0MP1HFcu6PVv_LNCSUgMFWYvwhLXQjhS23NT82oYajnh95Gu7kVgjDeKNn5gSY9Z83EU2Rh94B6sCOAq-PwIoI7jfBSl5620HpWPjFVO3PrE0nKAIllztcmlfqbtEvL_H_ix6VbjIaHqHVoxCoiDii2r1xvcUxZh2A_z94kvEwvyNhWZRjdBv8A0-pUbVNSj90iBlob64pnC520gKjWJNesorQeaTGOaABAvOALjiAbcBRgtyzsJnmZFJAxXS6NaVot_QE0rEHhYHxSMRrdk17-mIRt5gnfbSqcEaKAB2t0d68KekmLce1pQRGM_wK2US4iIuhdjQGk9WCboi6wMj16IRUoCF9WsbPrJfzK2NXz_192YDRxFrQdoJtRMVfIZ9eCrbYNDKp5p4i6gxv0ckWFADyFDcbZZdZPXT7fRe8l6K0A1zkuLqsi7cb22gXTGx69NyN8IM_nY2atKTepS34Rmzk0Q1BVdB6-NBylXsMMzwBVtFTvlxKjZzrSKHY47L6QMdTeObBVPRpzpuu-l79-o2Y4nQZZ4MQTWrkc0knztZ62qL_obBn-S_YglmMmNZLeoud0uOpPYuDEYSy60DqUeEgJdG_peEXp20C0IPXPWQGa0AK8mkzZYcIjHsyrvQa6hCmILxQD6l5CMdvYw87VIAfhggMJwaoAWnDKngmxVF2Z7P1_k22wBWGKko57FiTeABM2juuTI4vrXCQKIBWZbBWSKMtnC4zR_2vt6I9OiYiMXpcvgdyBGMh"+(P?"&i2k="+P:"")),"allowScriptAccess","always","type","application/x-shockwave-flash","pluginspage","http://www.adobe.com/go/getflashplayer","allowFullScreen","true");I+="</div>";document.write(I)}else{if(!J&&U(6,0,65)){var O=(L==true)?"ActiveX":"PlugIn";var F=window.location;document.title=document.title.slice(0,47)+" - Flash Player Installation";var G=document.title;document.write(N("src","http://www.ooyala.com/playerProductInstall","FlashVars","MMredirectURL="+F+"&MMplayerType="+O+"&MMdoctitle="+G+"","width",M,"height",K,"align","middle","id",D,"quality","high","bgcolor","#000000","wmode","opaque","name",D,"allowScriptAccess","always","type","application/x-shockwave-flash","pluginspage","http://www.adobe.com/go/getflashplayer","allowFullScreen","true"))}else{document.write('<table width="'+M+'" height="'+K+'" bgcolor="black" style="background-color:black"><tr><td align="center"><a href="http://www.adobe.com/go/getflash/" style="color:white"><span style="font-size:12px">You need to have the Adobe Flash Player 9'+(J?".0.115":"")+" to view this content. Please click here to continue.</span></a></td></tr></table>")}}if(L){document.write('<input id="h_'+D+'" name="h_'+D+'" type="hidden" >');if(!window[D]){var Q=document.getElementById("h_"+D).form;if(Q&&Q[D]){window[D]=Q[D]}}}})();