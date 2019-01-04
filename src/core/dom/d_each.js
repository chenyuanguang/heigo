module.exports = {
    cacheStatus: {
        msf: {},
        set(preEl, currentEl) {
            this.msf[(Math.random() * 1000000).toString()] = [preEl, currentEl]
        },
        get(currentEl) {
            var result = null
            for (var key in this.msf) {
                if (this.msf.hasOwnProperty(key)) {
                    var currentElMSF = this.msf[key][1];
                    if (currentEl == currentElMSF) {
                        result = this.msf[key][0]
                    }
                }
            }
            return result
        },
        remove(currentEl) {
            for (var key in this.msf) {
                if (this.msf.hasOwnProperty(key)) {
                    var currentElMSF = this.msf[key][1];
                    if (currentEl == currentElMSF) {
                        delete this.msf[key]
                    }
                }
            }
        }
    },
    add(el) {
        var arrResult = []
        this.el.forEach((i) => {
            arrResult.push(i)
        })
        if ($.istype(el, "elements")) {
            arrResult.push(el)
        } else if ($.istype(el, "string")) {

            this.el.forEach((i) => {
                var arr = this.init(document, el)
                arr.forEach((i) => {
                    arrResult.push(i)
                })
            });
        } else if (el.el && el.el.length > 0) {
            el.el.forEach((i) => {
                arrResult.push(i)
            })
        }
        if (arrResult.length > 0) {
            this.cacheStatus.set(this.el, arrResult)
            this.el = arrResult
        }
        return this
    },
    children() {
        var childrenArr = []
        this.el.forEach((j) => {
            console.log(i)
            if (j.children.length <= 0) {
                return
            }
            for (var i = 0; i < j.children.length; i++) {
                const element = j.children[i];
                childrenArr.push(element)
            }
        })
        this.cacheStatus.set(this.el, childrenArr)
        this.el = childrenArr
        return this
    },
    find(select) {
        var childrenArr = []
        if ($.istype(select, "string")) {

            this.el.forEach((i) => {
                var arr = this.init(i, select)
                arr.forEach((j) => {
                    childrenArr.push(j)
                })
            });
        } else if (select == undefined) {
            this.el.forEach((i) => {
                var arr = this.init(i, "*")
                arr.forEach((j) => {
                    childrenArr.push(j)
                })
            });
        }
        this.cacheStatus.set(this.el, childrenArr)
        this.el = childrenArr
        return this
    },
    parent() {
        var arr = []
        this.el.forEach((i) => {
            arr.push(i.parentNode)
        });
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    parents() {
        var arr = []
        var everyArr = []

        function findParent(dom) {
            var parent = dom.parentNode
            everyArr.push(parent)
            if (parent != document) {
                return findParent(parent)
            } else {
                return parent
            }
        }
        this.el.forEach((i) => {
            everyArr = []
            findParent(i)
            arr.push(everyArr)
        });
        arr = arr.length == 1 ? arr[0] : arr
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    each(cb) {
        this.el.forEach((i, index) => {
            cb.call(this, i, index)
        })
        return this
    },
    filter(cb) {
        var arr = []
        this.el.forEach((i, index) => {
            if (cb(i, index)) {
                arr.push(i)
            }
        })
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    map(cb) {
        var arr = []
        this.el.forEach((i, index) => {
            var res = cb(i, index)
            if ($.istype(res, "elements")) {
                arr.push(res)
            }
        })
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    slice(startIndex, endIndex) {
        var arr = []
        if ($.istype(startIndex, "number") && $.istype(endIndex, "number")) {
            arr = this.el.slice(startIndex, endIndex)
        }
        this.cacheStatus.set(this.el, arr)
        return this
    },
    first() {
        var arr = []
        if (this.el.length > 0) {
            arr = this.el[0]
        }
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this

    },
    last() {
        var arr = []
        if (this.el.length > 0) {
            arr = this.el[this.el.length - 1]
        }
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    end() {
        var currentEl = this.el
        this.el = this.cacheStatus.get(currentEl)
        this.cacheStatus.remove(currentEl)
        return this
    },
    is() {
        if (this.el.length > 0) {
            return true
        } else {
            return false
        }
    },
    prev() {
        var arr = []
        this.el.forEach((i) => {
            if (i.previousElementSibling) {
                arr.push(i.previousElementSibling)
            }
        })
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    prevAll() {
        var arr = []
        this.el.forEach((i) => {
            var allNodes = i.parentNode.children
            var index = Array.prototype.indexOf.call(allNodes, i)
            arr.push(Array.prototype.slice.call(allNodes, 0, index))
        })
        arr = arr.length == 1 ? arr[0] : arr
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    next() {
        var arr = []
        this.el.forEach((i) => {
            if (i.nextElementSibling) {
                arr.push(i.nextElementSibling)
            }
        })
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },
    nextAll() {
        var arr = []
        this.el.forEach((i) => {
            var allNodes = i.parentNode.children
            var index = Array.prototype.indexOf.call(allNodes, i)
            arr.push(Array.prototype.slice.call(allNodes, index + 1))
        })
        arr = arr.length == 1 ? arr[0] : arr
        this.cacheStatus.set(this.el, arr)
        this.el = arr
        return this
    },

    //获取索引或根据索引找出节点
    eq: function(option) {

        if (option == 0 || option) {
            if (typeof option != "number") {
                return this
            }
            var arr = this.el.slice(option, option + 1)
            this.cacheStatus.set(this.el, arr)
            this.el = arr
            return this
        } else if (this.el.length == 1) {
            let parentNode = this.el[0].parentNode
            let arr = Array.prototype.slice.apply(parentNode.children)
            arr.filter((i) => {
                if (this.el[0].tagName == i.tagName) {
                    return true
                } else {
                    return false
                }
            })
            let index = arr.indexOf(this.el[0])
            return index
        }
        return this

    },
    size() {
        return this.el.length
    },
    siblings(str) {
        str = $.istype(str, "string") ? str : "*"
        if ($.istype(str, "string")) {
            var arr = []
            this.el.forEach((i, index) => {
                var el = this.init(i.parentNode, str)
                var everyArr = el.filter((j) => {
                    if (j.tagName == i.tagName) {
                        return true
                    } else {
                        return false
                    }
                })
                arr.push(everyArr)
            })
            arr = arr.length == 1 ? arr[0] : arr
            this.cacheStatus.set(this.el, arr)
            this.el = arr
        }
        return this
    }
}