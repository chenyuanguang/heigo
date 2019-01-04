module.exports = {
    //设置样式
    css: function(option) {
        if (option) {
            if (typeof option != "string") {
                option = Object.prototype.toString.apply(option)
            }
            this.el.forEach((i) => {
                i.style.cssText += option
            });
        } else {
            let resultArr = []
            if (this.el.length == 1) {
                return this.el[0].style.cssText
            } else {
                this.el.forEach((i) => {
                    resultArr.push(i.style.cssText)
                });
            }
            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },
    height(option) {
        if (option) {
            if (typeof option != "string") {
                option = Object.prototype.toString.apply(option)
            }
            if (!/\d+px$/.test(option)) {
                option += "px"
            }
            this.el.forEach((i) => {
                i.style.height = option
            });
        } else {
            let resultArr = this.el.map((i) => {
                return i.style.height
            });

            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },
    width(option) {
        if (option) {
            if (typeof option != "string") {
                option = Object.prototype.toString.apply(option)
            }
            this.el.forEach((i) => {
                i.style.width = option
            });
        } else {
            let resultArr = this.el.map((i) => {
                return i.style.width
            });

            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },
    offset(option) {
        if (option && $.istype(option, "object") && option.top && option.left) {
            var top = option.top
            var left = option.left
            this.el.forEach((el) => {
                el.style.cssText = `position:relative;margin:0;padding:0;top:${top}px;left:${left}px`
            })

        } else {
            function offset(curEle) {      
                var totalLeft = null,
                    totalTop = null,
                    par = curEle.offsetParent;      
                //首先加自己本身的左偏移和上偏移
                      
                totalLeft += curEle.offsetLeft;      
                totalTop += curEle.offsetTop      
                    //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加
                          
                while (par) {        
                    //累加父级参照物本身的偏移
                            
                    totalLeft += par.offsetLeft;        
                    totalTop += par.offsetTop;        
                    par = par.offsetParent;      
                }       
                return {        
                    left: totalLeft,
                    top: totalTop      
                }    
            }
            let resultArr = this.el.map((i) => {
                return offset(i)
            });

            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },
    //offsetParent() 方法返回最近的祖先定位元素。
    offsetParent() {
        function offsetParent(curEle) {      
            var totalLeft = null,
                totalTop = null,
                par = curEle.parentNode,
                postionState = window.getComputedStyle(par, null).getPropertyValue("position")
            if (!par || par.tagName == "HTML") {
                return null
            }
            if (postionState == "relative" || postionState == "absolute" || postionState == "fixed") {
                return par
            } else {
                return offsetParent(par)
            }         
        }

        var resultArr = this.el.map((i) => {
            return offsetParent(i)
        })
        return resultArr.length == 1 ? resultArr[0] : resultArr
    }
}