/**
 * Created by Administrator on 2016/8/20.
 */
var indexMy = require("../tpls/my.string");

SPA.defineView("my", {
    html: indexMy
});
var myscroll = new iScroll('wrapper',{
	checkDOMChanges:true,
	vScrollbar:false,
	hideScrollbar:true
})