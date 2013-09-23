/*       Source:  Local Cache                                                                 */
/*     Location:  rsrc:120325:nu_ll:/html/js/lib/util/page_transition.js                      */
/*      Machine:  10.16.139.101                                                               */
/*    Generated:  September 13th 2008 1:22:11 AM PDT                                          */
/*    HTTP Host:  static.ak.fbcdn.net                                                         */
/*       Locale:  nu_ll                                                                       */


var HistoryManager={_IFRAME_BASE_URI:'http://static.ak.facebook.com/common/history_manager.html',history:null,current:0,fragment:null,_setIframeSrcFragment:function(src){src=src.toString();var index=HistoryManager.history.length-1;var iframe_uri=env_get('history_manager_disable_cdn')?'/common/history_manager.html':HistoryManager._IFRAME_BASE_URI;HistoryManager.iframe.src=iframe_uri+'?|index='+index+'#'+src;return HistoryManager;},getIframeSrcFragment:function(){return URI(HistoryManager.iframe.contentWindow.document.location.href).getFragment();},nextframe:function(frame){if(frame!==undefined){HistoryManager.iframeQueue.push(frame);}else{HistoryManager.iframeQueue.splice(0,1);HistoryManager.iframeTimeout=null;HistoryManager.checkURI();}
if(HistoryManager.iframeQueue.length&&!HistoryManager.iframeTimeout){var src=HistoryManager.iframeQueue[0];HistoryManager.iframeTimeout=setTimeout(function(){HistoryManager._setIframeSrcFragment(src);},100,false);}},init:function(){if(HistoryManager._initialized){return HistoryManager;}
var uri=URI();var cur_fragment=uri.getFragment()||'';copy_properties(HistoryManager,{_initialized:true,fragment:cur_fragment,orig_fragment:cur_fragment,history:[uri],callbacks:[],lastChanged:new Date().getTime(),canonical:URI('#'),fragmentTimeout:null,user:0,iframeTimeout:null,iframeQueue:[],enabled:true,debug:bagofholding});if(ua.safari()<500||ua.firefox()<2){HistoryManager.enabled=false;return HistoryManager;}
if(ua.ie()){HistoryManager.iframe=document.createElement('iframe');copy_properties(HistoryManager.iframe.style,{width:'1px',height:'1px',left:'-10000px',top:'-10000px',position:'absolute'});onloadRegister(function(){HistoryManager._setIframeSrcFragment(cur_fragment);document.body.insertBefore(HistoryManager.iframe,document.body.firstChild);});}else{setInterval(HistoryManager.checkURI,42,false);}
return HistoryManager;},registerURIHandler:function(callback){HistoryManager.callbacks.push(callback);return HistoryManager;},setCanonicalLocation:function(loc){HistoryManager.canonical=URI(loc);return HistoryManager;},notify:function(uri){if(uri==HistoryManager.orig_fragment){uri=HistoryManager.canonical.getFragment();}
for(var ii=0;ii<HistoryManager.callbacks.length;ii++){try{if(HistoryManager.callbacks[ii](uri)){return true;}}catch(ex){Util.error('Uncaught exception in HistoryManager URI handler callback: %x',ex);}}
return false;},checkURI:function(){if(new Date().getTime()-HistoryManager.lastChanged<400){return;}
if(HistoryManager.iframeQueue.length){return;}
if(ua.safari()&&window.history.length==200){if(!HistoryManager.warned){HistoryManager.warned=true;Util.error('Your history length is over 200 and you are in Safari; things will '+'start behaving oddly now. This is a known bug.');}
return;}
var frag=URI().getFragment();if(ua.ie()){frag=HistoryManager.getIframeSrcFragment();}
if(frag!=HistoryManager.fragment){HistoryManager.debug([frag,' vs ',HistoryManager.fragment,'whl: ',window.history.length,'QHL: ',HistoryManager.history.length].join(' '));for(var ii=HistoryManager.history.length-1;ii>=0;--ii){if(HistoryManager.history[ii].getFragment()==frag){break;}}
++HistoryManager.user;if(ii>=0){HistoryManager.go(ii-HistoryManager.current);}else{HistoryManager.go('#'+frag);}
--HistoryManager.user;}
delete frag;},go:function(href,now,replace){HistoryManager.debug('go: '+href);if(now===undefined){now=true;}
if(!HistoryManager.enabled){if(!now){return false;}}
if(typeof(href)=='number'){if(!href){return false;}
var dst=href+HistoryManager.current;var loc=Math.max(0,Math.min(HistoryManager.history.length-1,dst));HistoryManager.current=loc;dst=HistoryManager.history[loc].getFragment()||HistoryManager.orig_fragment;HistoryManager.fragment=dst;HistoryManager.lastChanged=new Date().getTime();if(ua.ie()){if(HistoryManager.fragmentTimeout){clearTimeout(HistoryManager.fragmentTimeout);}
HistoryManager.fragmentTimeout=setTimeout(function(){window.location.hash='#'+dst;},750,false);if(!HistoryManager.user){HistoryManager.nextframe(dst);}}else if(!HistoryManager.user){go_or_replace(window.location,URI().setFragment(dst),replace);}
if(now){HistoryManager.notify(dst);}
return false;}
href=URI(href);if(href.getDomain()==URI().getDomain()){href=URI('#'+href.getUnqualifiedURI());}
var cur=HistoryManager.history[HistoryManager.current].getFragment();var tgt=href.getFragment();if(tgt==cur||(cur==HistoryManager.orig_fragment&&tgt==HistoryManager.canonical.getFragment())){if(now){HistoryManager.notify(tgt);}
return false;}
if(replace){HistoryManager.current--;}
var wipe=(HistoryManager.history.length-HistoryManager.current)-1;HistoryManager.history.splice(HistoryManager.current+1,wipe);HistoryManager.history.push(URI(href));return HistoryManager.go(1,now,replace);},getCurrentFragment:function(){var cur_fragment=URI.getRequestURI(false).getFragment();return cur_fragment==HistoryManager.orig_fragment?HistoryManager.canonical.getFragment():cur_fragment;}};var PageTransitions={_transition_handlers:[],_scroll_positions:{},_init:function(){if(PageTransitions._initialized){return PageTransitions;}
PageTransitions._initialized=true;var canonical_uri=URI.getRequestURI(false).getUnqualifiedURI();copy_properties(PageTransitions,{_current_uri:canonical_uri,_most_recent_uri:canonical_uri});HistoryManager.init().setCanonicalLocation('#'+canonical_uri).registerURIHandler(PageTransitions._historyManagerHandler);LinkController.registerFallbackHandler(PageTransitions._rewriteHref,LinkController.ALL_TARGETS|LinkController.ALL_KEY_MODIFIERS);LinkController.registerFallbackHandler(PageTransitions._onlinkclick);FormController.registerFallbackHandler(PageTransitions._onformsubmit);window.onscroll=chain(window.onscroll,function(){var frag=HistoryManager.getCurrentFragment();if(PageTransitions._current_uri==frag){PageTransitions._scroll_positions[frag]=Vector2.getScrollPosition();}});return PageTransitions;},registerHandler:function(transition_handler){PageTransitions._init();if(PageTransitions._transition_handlers.contains(transition_handler)){Util.warn('Registering a transition handler that\'s already been '
+'registered.  Ur probably doin it wrong.');}
PageTransitions._transition_handlers.push(transition_handler);},getCurrentURI:function(){if(!PageTransitions._current_uri){Util.warn('You\'ve requested the current URI, but there is no "current" '
+'URI.  This is probably because you\'re in the middle of a '
+'page transition.  That\'s an awkward time to ask for the '
+'current URI, and you should probably avoid this situation.  '
+'For now, I\'m just gonna return the most recent page URI, '
+'since that\'s better than returning null.');return new URI(PageTransitions._most_recent_uri);}
return new URI(PageTransitions._current_uri);},_rewriteHref:function(link){var old_href=link.getAttribute('href');var new_href=_computeRelativeURI(PageTransitions._most_recent_uri.getQualifiedURI(),old_href).toString();if(old_href!=new_href){link.setAttribute('href',new_href);}},_onlinkclick:function(link){_BusyUIManager.lookBusy(link);PageTransitions.go(link.getAttribute('href'));return false;},go:function(uri,replace){var qualified_uri=new URI(uri).removeQueryData('quickling').getQualifiedURI();var unqualified_uri=qualified_uri.getUnqualifiedURI();delete PageTransitions._scroll_positions[unqualified_uri];_BusyUIManager.lookBusy();PageTransitions._loadPage(qualified_uri,function(handled){if(handled){HistoryManager.go(qualified_uri.toString(),false,replace);}else{go_or_replace(window.location,qualified_uri,replace);}});},_historyManagerHandler:function(uri_s){if(uri_s.charAt(0)!='/'){return false;}
PageTransitions._loadPage(new URI(uri_s),function(handled){if(!handled){go_or_replace(window.location,uri_s,true);}});return true;},_loadPage:function(uri,ondone){if(uri.getFragment()&&are_equal(URI(uri).setFragment(null).getQualifiedURI(),URI(PageTransitions._current_uri).setFragment(null).getQualifiedURI())){PageTransitions._current_uri=PageTransitions._most_recent_uri=uri;PageTransitions._adjustScrollForCurrentURI();_BusyUIManager.stopLookingBusy();return;}
var scroll_position=PageTransitions._scroll_positions[PageTransitions._current_uri];PageTransitions._current_uri=null;if(scroll_position){Vector2.scrollTo(scroll_position,false);}
var handle_transition=function(){var handled=PageTransitions._handleTransition(uri);ondone&&ondone(handled);};var beforeleave_warning=_runHooks('onbeforeleavehooks');if(beforeleave_warning){_BusyUIManager.stopLookingBusy();PageTransitions._warnBeforeLeaving(beforeleave_warning,handle_transition);}else{handle_transition();}},_handleTransition:function(uri){window.onbeforeleavehooks=undefined;_BusyUIManager.lookBusy();for(var i=PageTransitions._transition_handlers.length-1;i>=0;--i){if(PageTransitions._transition_handlers[i](uri)===true){var message={sender:this,uri:uri};Arbiter.inform(Arbiter.PAGE_TRANSITION,message);return true;}else{PageTransitions._transition_handlers.splice(i,1);}}
return false;},transitionComplete:function(){_BusyUIManager.stopLookingBusy();PageTransitions._current_uri=PageTransitions._most_recent_uri=URI(HistoryManager.getCurrentFragment());PageTransitions._adjustScrollForCurrentURI();},_warnBeforeLeaving:function(warning_text,continuation){new Dialog().setTitle(tx('ql:leave-warn-title')).setSummary(tx('ql:leave-warn-body',{ok:tx('sh:ok-button'),cancel:tx('sh:cancel-button')})).setBody(htmlize(warning_text)).setButtons(Dialog.OK_AND_CANCEL).setHandler(continuation).setModal().show();},_adjustScrollForCurrentURI:function(){var current_uri=PageTransitions._current_uri;var scroll_position=PageTransitions._scroll_positions[current_uri];if(scroll_position){Vector2.scrollTo(scroll_position,false);return;}
function get_anchor(name){return(name||null)&&($$(sprintf('a[name=%e]',name))[0]||ge(name));}
var anchor=get_anchor(current_uri.getFragment());if(anchor){var anchor_position=Vector2.getElementPosition(anchor);anchor_position.x=0;Vector2.scrollTo(anchor_position);}},_onformsubmit:function(form){var old_action=new URI(form.getAttribute('action')||'');var new_action=_computeRelativeURI(PageTransitions._most_recent_uri,old_action);form.setAttribute('action',new_action.toString());var method=form.method?form.method.toUpperCase():'GET';if(method=='GET'){PageTransitions.go(new_action.addQueryData(serialize_form(form)));return false;}else{}}};function _computeRelativeURI(original,delta){var ret=new URI(),delta_=delta;original=new URI(original);delta=new URI(delta);if(!delta.isFacebookURI()){return delta_;}
var source=original;var components=['Protocol','Domain','Port','Path','QueryData','Fragment'];components.forEach(function(component){var combine_paths=component=='Path'&&source===original;if(combine_paths){ret.setPath(_computeRelativePath(original.getPath(),delta.getPath()));}
if(!is_empty(delta['get'+component]())){source=delta;}
if(!combine_paths){ret['set'+component](source['get'+component]());}});return ret;}
function _computeRelativePath(original,delta){if(!delta){return original;}
if(delta.charAt(0)=='/'){return delta;}
var parts=original.split('/').slice(0,-1);if(parts[0]!==''){Util.warn('Original path is not absolute.');}
delta.split('/').forEach(function(part){if(part=='.'){}else if(part=='..'){if(parts.length>1){parts=parts.slice(0,-1);}}else{parts.push(part);}});return parts.join('/');}
function go_or_replace(location_obj,target_url,replace){target_url=target_url.toString();if(replace&&!ua.ie()){location_obj.replace(target_url);}else if(location_obj.href==target_url){location_obj.reload();}else{location_obj.href=target_url;}}
var _BusyUIManager={_looking_busy:false,_original_cursors:[],lookBusy:function(link_element){if(link_element){_BusyUIManager._giveProgressCursor(link_element);}
if(_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=true;_BusyUIManager._giveProgressCursor(document.body);},stopLookingBusy:function(){if(!_BusyUIManager._looking_busy){return;}
_BusyUIManager._looking_busy=false;while(_BusyUIManager._original_cursors.length){var element_and_cursor=_BusyUIManager._original_cursors.pop();var element=element_and_cursor[0];var cursor=element_and_cursor[1];if(element.style){element.style.cursor=cursor||'';}}},_giveProgressCursor:function(element){if(!ua.safari()){_BusyUIManager._original_cursors.push([element,element.style.cursor]);element.style.cursor='progress';}}};onloadRegister(HistoryManager.init);
if (window.Bootloader) { Bootloader.done(["js\/lib\/util\/page_transition.js"]); }