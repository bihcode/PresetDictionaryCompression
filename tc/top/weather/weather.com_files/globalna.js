hbBMDefault='';hbBMOver='';hbBSMOver='';hbBTMOver='';atencion=false;nothugged=false;var defaultnum=0;var zipsearch=false;var width=0;if(getUserPreferences("11")&&getUserPreferences("11").length>1){nothugged=true;}
function hbBMIOver(dn){hbBTMOver='';if(hbBMOver!=''){hbBSMIOut(hbBMOver);}else if(hbBSMOver!=''){hbBSMIOut(hbBSMOver);}
hbBMOver=dn;hbBSMOver=dn;if(dn!=hbBMDefault){document.getElementById(dn).className='hbBannerMenuItemHover';document.getElementById(dn+"S").className='hbBannerMenuSelectedItem';var tab1=(parseFloat(hbBMDefault.substr(5,5)));tab1=tab1-1;var tab2=parseFloat(dn.substr(5,5));if(tab1==tab2){document.getElementById(dn).className='hbBannerMenuItemHoverLEFTside';}}else{document.getElementById(dn).className='hbBannerMenuItemSelectedHover';document.getElementById(dn+"S").className='hbBannerMenuSelectedItem';}}
function hbBMIOut(dn){hbBMOver='';if(hbBSMOver==''){if(dn!=hbBMDefault){document.getElementById(dn).className='hbBannerMenuItem';var tab1=(parseFloat(hbBMDefault.substr(5,5)));tab1=tab1-1;var tab2=parseFloat(dn.substr(5,5));if(tab1==tab2){document.getElementById(dn).className='hbBannerMenuItemLEFTside';}}else{document.getElementById(dn).className='hbBannerMenuItemSelected';document.getElementById(dn+"S").className='hbBannerMenuSelectedItemDefault';}
document.getElementById(dn+"S").className='hbBannerMenuSelectedItem';}}
function hbBSMIOver(dn){hbBSMOver=dn;}
function hbBSMIOut(dn){hbBSMOver='';if(hbBMOver==''&&hbBTMOver==''){if(dn!=hbBMDefault){document.getElementById(dn).className='hbBannerMenuItem';var tab1=(parseFloat(hbBMDefault.substr(5,5)));tab1=tab1-1;var tab2=parseFloat(dn.substr(5,5));if(tab1==tab2){document.getElementById(dn).className='hbBannerMenuItemLEFTside';}}else{document.getElementById(dn).className='hbBannerMenuItemSelected';}}else{hbBTMOver='';}}
function hbBSMICloseAll(){hbBMOver='';hbBSMOver='';hbBTMOver='';for(n=1;n<=8;n++){var dn="hbBMI"+n;if(dn!=hbBMDefault){var tab1=(parseFloat(hbBMDefault.substr(5,5)));tab1=tab1-1;var tab2=parseFloat(dn.substr(5,5));if(tab1==tab2){document.getElementById(dn).className='hbBannerMenuItemLEFTside';}else{document.getElementById(dn).className='hbBannerMenuItem';}
for(var a=0;MenuArray[a];a++){MenuArray[a].hideMe();}}else{document.getElementById(dn).className='hbBannerMenuItemSelected';for(var a=0;MenuArray[a];a++){MenuArray[a].hideMe();}}}}
function siMouseDown(dn){if(dn=="snPanell"){document.getElementById('snPanellSignIn').style.display='inline';document.getElementById('hbHat').style.display='none';}else if(dn=="snClosePanell"){document.getElementById('snPanellSignIn').style.display='none';document.getElementById('hbHat').style.display='inline';}else if(dn=="HideMyProducts"){setUserPreferences('20','hide');document.getElementById("snPanellSignedIn").className='snPanellSignedInHidden';document.getElementById("snPanellSmallRightBoxes").className='snPanellSmallRightBoxesClassHidden';document.getElementById("snShowSmallRightBoxes").className='snPanellSmallRightBoxesClass';if(isMinIE5){document.getElementById('hatMakeHome').style.visibility="visible";}}else if(dn=="ShowMyProducts"){setUserPreferences('20','show');document.getElementById("snPanellSignedIn").className='snPanellSignedIn';document.getElementById("snPanellSmallRightBoxes").className='snPanellSmallRightBoxesClass';document.getElementById("snShowSmallRightBoxes").className='snPanellSmallRightBoxesClassHidden';if(isMinIE5){document.getElementById('hatMakeHome').style.visibility="hidden";}}}
function MyLocation(){if(zipsearch){MyLocationClose("whatwhere");}else{document.whatwhereform.whatwhere.value='';document.getElementById("whatwherezip").className='whatwhereZipClass';zipsearch=true;}}
function MyLocationClose(dn){document.getElementById(dn+"zip").className='whatwhereZipClassHidden';}
var hatPromoTextUserHugged = "Put this on my desktop";// THIS IS ORCA
var hatPromoTextUserNotHugged = "Put weather on my desktop";// THIS IS ORCA
var hatPromoURL = "http://www.weather.com/services/downloads/?cm_ven=MKTG&cm_cat=HousePromo&cm_pla=hugme&cm_ite=downloads&from=dt_header&refer=dt_header";// THIS IS ORCA