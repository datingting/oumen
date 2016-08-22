/**
 * Created by Administrator on 2016/8/20.
 */
var indexHome = require("../tpls/home.string");

SPA.defineView("home",{
    html:indexHome,
    bindEvents: {
        'show': function () {
            var mySwiper = new Swiper("#home-swiper", {
                autoplay:5000,//可选选项，自动滑动
                loop: true,
                pagination : '.swiper-pagination',
            })
        }
    }
})

