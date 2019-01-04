let eventType = {
    caches: {
        msf: {},
        set(cb, proxyFn) {
            this.msf[(Math.random() * 1000000).toString()] = [cb, proxyFn]
        },
        get(cb) {
            var result = null
            for (var key in this.msf) {
                if (this.msf.hasOwnProperty(key)) {
                    var val = this.msf[key][0];
                    if (val == cb) {
                        result = val
                    }
                }
            }
            return result
        },
        remove(ele, e, cb) {
            var result = null
            for (var key in this.msf) {
                if (this.msf.hasOwnProperty(key)) {
                    var val = this.msf[key];
                    if (val[0] == cb) {
                        delete this.msf[key]
                        ele.removeEventListener(e, val[1])
                    }
                }
            }
        }
    },

    bind(types, data, cb) {

        if (typeof types != "string") {
            return this
        }
        if (data instanceof Function) {
            cb = data
            data = undefined
        }
        var proxyFn = (e) => {
                if (this.caches.get(cb)) {
                    cb(e, data)
                }
            }
            //使用代理缓存事件监听函数函数
        this.caches.set(cb, proxyFn)
        this.el.forEach((ele) => {
            ele.addEventListener(types, proxyFn)
        });
        return this
    },
    unbind(types, cb) {
        if (typeof types == "string" && cb instanceof Function) {
            this.el.forEach((ele) => {
                //移除缓存的监听函数
                this.caches.remove(ele, types, cb)
            });
        }

        return this
    },
    on(types, selector, data, fn) {
        if (typeof types != "string") {
            return this
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }

        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return this;
        }

        if (fn instanceof Function) {
            if (!selector || typeof selector != "string") {
                this.el.forEach((i) => {
                    i.addEventListener(types, (e) => {
                        fn(e, data)
                    })
                })

            } else {
                var strArr = selector.split(" ")
                var elArr = []
                strArr.forEach((i) => {
                    elArr.push(...this.getDom(this.el, i, 0, [i]))
                })
                elArr.forEach((ele) => {
                    ele.addEventListener(types, (e) => {
                        fn(e, data)
                    })
                });
                var runListen = () => {
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            var elArrNew = []
                            strArr.forEach((i) => {
                                elArrNew.push(...this.getDom(this.el, i, 0, [i]))
                            })
                            elArrNew.forEach((j) => {
                                if (!elArr.includes(j)) {
                                    j.addEventListener(types, (e) => {
                                        fn(e, data)
                                    })
                                }
                            })
                            elArr = elArrNew
                            runListen()
                        }, 1000)
                    })
                }
                runListen()
            }
        }
        return this
    },
    one(types, data, fn) {
        if (typeof types != "string") {
            return this
        }
        if (data instanceof Function) {
            fn = data
            data = undefined
        }
        this.el.forEach((ele) => {
            var proxyFn = (e) => {
                fn(e, data)
                ele.removeEventListener(types, proxyFn)
            }
            ele.addEventListener(types, proxyFn)
        });

        return this
    },
    toggleFn(fn1, fn2) {

        this.el.forEach((ele) => {
            var state = true
            ele.addEventListener("click", (e) => {
                if (state) {
                    fn1()
                } else {
                    fn2()
                }
                state = !state
            })
        });
        return this
    }
}

let eventList = [
    "click",
    "blur",
    "change",
    "focus",
    "blur",
    "keydown",
    "keypress",
    "keyup",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "mouseover",
    "mouseup",
    "resize",
    "scroll",
]

eventList.forEach((e) => {
    eventType[e] = function(cb) {
        if (cb instanceof Function) {
            this.el.forEach((ele) => {
                ele.addEventListener(e, cb)
            });
        }
        return this
    }
})

module.exports = eventType