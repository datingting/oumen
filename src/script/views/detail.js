var detailTpl = require("../tpls/detail.string");

SPA.defineView("detail", {
    html: detailTpl,
    init: {
        // getItem: function (id, res) {
        //   for (var i = 0; i < res.data.length; i++) {
        //     if(res.data[i].id == id) {
        //       return res.data[i];
        //     }
        //   }
        // }
    },
    plugins: [
        "delegated", {
            name: "avalon",
            options: function (vm) {
                vm.detail = {};
            }
        }
    ],
    bindActions: {
        "back": function () {
            this.hide();
        }
    },
    bindEvents: {
        "show": function () {
            var that = this;
            var vm = this.getVM();
            $.ajax({
                url: "/oumen/mock/detail.json",
                type: "get",
                data: {
                    id: that.param.id
                },
                success: function (res) {
                    vm.detail = res.data[that.param.id-1];
                    /*console.log(res.data)*/
                }
            });

        }
    }
});
