module.exports = {


    //图片没加载出来时用一张图片代替
    aftLoadImg: function(obj, url, errorUrl, cb) {
        var oImg = new Image()

        oImg.src = url;
        oImg.onload = function() {
            obj.src = oImg.src;
            if (cb && $.istype(cb, 'function')) {
                cb(obj);
            }
        }
        oImg.onerror = function() {
            obj.src = errorUrl;
            if (cb && $.istype(cb, 'function')) {
                cb(obj);
            }
        }
    },
    //图片滚动懒加载
    //@className {string} 要遍历图片的类名
    //@num {number} 距离多少的时候开始加载 默认 0
    //比如，一张图片距离文档顶部3000，num参数设置200，那么在页面滚动到2800的时候，图片加载。不传num参数就滚动，num默认是0，页面滚动到3000就加载
    //html代码
    //<p><img data-src="lawyerOtherImg.jpg" class="load-img" width='528' height='304' /></p>
    //<p><img data-src="lawyerOtherImg.jpg" class="load-img" width='528' height='304' /></p>
    //<p><img data-src="lawyerOtherImg.jpg" class="load-img" width='528' height='304' /></p>....
    //data-src储存src的数据，到需要加载的时候把data-src的值赋值给src属性，图片就会加载。
    //详细可以查看testLoadImg.html

    //window.onload = function() {
    //  loadImg('load-img',100);
    //  window.onscroll = function() {
    //      loadImg('load-img',100);
    //      }
    //}
    loadImg: function(num, errorUrl) {
        var
            _num = num || 0,
            _errorUrl = errorUrl || null;
        var oImgLoad = this.el
        for (var i = 0, len = oImgLoad.length; i < len; i++) {
            if (document.documentElement.clientHeight + document.documentElement.scrollTop > oImgLoad[i].offsetTop - _num && !oImgLoad[i].isLoad) {
                //记录图片是否已经加载
                oImgLoad[i].isLoad = true;

                if (oImgLoad[i].dataset) {
                    this.aftLoadImg(oImgLoad[i], oImgLoad[i].dataset.src, _errorUrl, function(o) {
                        console.log(o, "加载完毕")
                    });
                } else {
                    this.aftLoadImg(oImgLoad[i], oImgLoad[i].getAttribute("data-src"), _errorUrl, function(o) {
                        console.log(o, "加载完毕")
                    });
                }

            }
        }
        return this
    },
    //函数节流

    delayFn: function(fn, delay, mustDelay) {
        var timer = null;
        var t_start;
        return function() {
            var context = this,
                args = arguments,
                t_cur = +new Date();
            //先清理上一次的调用触发（上一次调用触发事件不执行）
            clearTimeout(timer);
            //如果不存触发时间，那么当前的时间就是触发时间
            if (!t_start) {
                t_start = t_cur;
            }
            //如果当前时间-触发时间大于最大的间隔时间（mustDelay），触发一次函数运行函数
            if (t_cur - t_start >= mustDelay) {
                fn.apply(context, args);
                t_start = t_cur;
            }
            //否则延迟执行
            else {
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        };
    }

}