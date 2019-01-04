module.exports = {
    //适配rem
    getFontSize: function(psdW) {
        var doc = document,
            win = window;
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth > psdW) {
                    clientWidth = psdW
                }
                //设置根元素font-size大小
                docEl.style.fontSize = 100 * (clientWidth / psdW) + 'px';
            };

        //屏幕大小改变，或者横竖屏切换时，触发函数
        win.addEventListener(resizeEvt, recalc, false);

        //文档加载完成时，触发函数
        doc.addEventListener('DOMContentLoaded', recalc, false);
    },

  
    //cookie
    //设置cookie
    setCookie: function(name, value, iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },
    //获取cookie
    getCookie: function(name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    },
    //删除cookie
    removeCookie: function(name) {
        this.setCookie(name, 1, -1);
    },

    //手机类型判断
    browserInfo: function(type) {
        switch (type) {
            case 'android':
                return navigator.userAgent.toLowerCase().indexOf('android') !== -1
            case 'iphone':
                return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
            case 'ipad':
                return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
            case 'weixin':
                return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
            default:
                return navigator.userAgent.toLowerCase()
        }
    },
}