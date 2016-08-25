/**
 * Created by Administrator on 2016/8/20.
 */
var indexHome = require("../tpls/home.string");
SPA.defineView("home",{
    html:indexHome,
    plugins: [
        "delegated", {
            name: "avalon",
            options: function (vm) {
                vm.homeList = [];
              /*  vm.isShowLoading = true;*/
            }
        }
    ],
    // 绑定tap
    bindActions: {
        "goto.detail": function (el,data) {
            SPA.open("detail", {
                param: {
                    id: data.id
                }
            });
          /*  console.log(data.id);*/
        }
    },
    bindEvents: {
        "show": function () {
            // 获得vm
            var vm = this.getVM();
            // ajax拉取数据
            $.ajax({
                url: "/oumen/mock/home.json",
                type: "get",
                success: function (res) {
                    setTimeout(function () {
                        vm.homeList = res.data;
                    }, 1000);
                }
            });
            var mySwiper = new Swiper("#home-swiper", {
                autoplay:5000,//可选选项，自动滑动
                loop: true,
                pagination : ".swiper-pagination",
            })
        }
    }
});

