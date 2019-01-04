module.exports = {

    /**
     *
     *
     * @param {string} classStr 
     * @returns this
     */
    addClass(classStr) {
        if (!$.istype(classStr, "string")) {
            return this
        }
        this.el.forEach((i) => {
            if (!$(i).hasClass(classStr)) {
                if (i.className) {
                    i.className += " " + classStr;
                } else {
                    i.className = classStr;
                }

            }
        });
        return this
    },
    //检测对象是否有哪个类名
    hasClass: function(classStr) {
        if (!$.istype(classStr, "string")) {
            return this
        }
        if (this.el.length == 1) {
            var el = this.el[0]
            if (el.className && $.trim(el.className, 1) !== "") {
                var arr = el.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含
                return (arr.indexOf(classStr) == -1) ? false : true;
            } else {
                return false;
            }
        } else {
            var elArr = this.el.filter((i) => {
                if (i.className && $.trim(i.className, 1) !== "") {
                    var arr = i.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含

                    return (arr.indexOf(classStr) == -1) ? false : true;
                } else {
                    return false;
                }
            });
            return elArr
        }
    },
    removeClass(classStr) {
        if (!$.istype(classStr, "string")) {
            return this
        }
        this.el.forEach((i) => {
            if ($(i).hasClass(classStr)) {
                var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
                i.className = i.className.replace(reg, '');
            }
        });
        return this
    },
    getClass() {
        let arr = []
        this.el.forEach((el) => {
            if (el.className && $.trim(el.className, 1) !== "") {
                arr.push(el.className)
            }
        });
        return arr.length == 1 ? arr[0] : arr
    },
    replaceClass: function(newName, oldName) {
        if (!$.istype(classStr, "string")) {
            return this
        }
        this.el.forEach((i) => {
            $(i).removeClass(oldName);
            $(i).addClass(newName);
        })
        return this
    },
    toggleClass(classStr) {
        if (!$.istype(classStr, "string")) {
            return this
        }
        this.el.forEach((i) => {
            if (!$(i).hasClass(classStr)) {
                if (i.className) {
                    i.className += " " + classStr;
                } else {
                    i.className = classStr;
                }

            } else {
                var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
                i.className = i.className.replace(reg, '');
            }
        });
        return this
    },
    after(str) {
        if ($.istype(str, "elements")) {
            this.el.forEach((i) => {
                var parent = i.parentNode;
                var node = str.cloneNode(true)
                if (parent.lastChild == i) {
                    parent.appendChild(node);
                } else {
                    parent.insertBefore(node, i.nextSibling);
                }
            });
        } else if ($.istype(str, "string")) {

            this.el.forEach((i) => {
                var el = document.createElement("div")
                el.innerHTML = str
                var node = el.firstElementChild
                var parent = i.parentNode;
                if (parent.lastChild == i) {
                    parent.appendChild(node);
                } else {
                    parent.insertBefore(node, i.nextSibling);
                }
            });
        }
        return this
    },
    before(str) {
        if ($.istype(str, "elements")) {
            this.el.forEach((i) => {
                var node = str.cloneNode(true)
                var parent = i.parentNode;
                parent.insertBefore(node, i);
            });
        } else if ($.istype(str, "string")) {

            this.el.forEach((i) => {
                var el = document.createElement("div")
                el.innerHTML = str
                var node = el.firstElementChild
                var parent = i.parentNode;
                if (parent.lastChild == i) {
                    parent.appendChild(node);
                } else {
                    parent.insertBefore(node, i);
                }
            });
        }
        return this
    },
    append(str) {
        if ($.istype(str, "elements")) {
            this.el.forEach((i) => {
                var node = str.cloneNode(true)
                i.appendChild(node);
            });
        } else if ($.istype(str, "string")) {

            this.el.forEach((i) => {
                var el = document.createElement("div")
                el.innerHTML = str
                var node = el.firstElementChild
                i.appendChild(node);
            });
        }
        return this
    },
    prepend(str) {
        if ($.istype(str, "elements")) {
            this.el.forEach((i) => {
                var node = str.cloneNode(true)
                i.insertBefore(node, i.firstElementChild);
            });
        } else if ($.istype(str, "string")) {

            this.el.forEach((i) => {
                var el = document.createElement("div")
                el.innerHTML = str
                var node = el.firstElementChild
                i.insertBefore(node, i.firstElementChild);
            });
        }
        return this
    },

    empty() {
        this.el.forEach((i) => {
            i.innerHTML = ""
        });
        return this
    },
    remove() {
        this.el.forEach((i) => {
            i.parentNode.removeChild(i)
        });
        return this
    },
    clone() {
        if (this.el.length == 1) {
            return this.el[0].cloneNode(true)
        } else {
            return this.el.map((i) => {
                return i.cloneNode(true)
            })
        }
    },
    attr(attr, val) {
        if ((attr && $.istype(attr, "string")) && (val && $.istype(val, "string"))) {
            this.el.forEach((i) => {
                i.setAttribute(attr, val)
            })
            return this
        } else if (attr && $.istype(attr, "string")) {
            var arr = []
            this.el.forEach((i) => {
                arr.push(i.getAttribute(attr))
            })
            return arr.length == 1 ? arr[0] : arr
        } else {
            var arr = []
            this.el.forEach((i) => {
                var keyArr = []
                for (var key in i) {
                    if (i[key]) {
                        keyArr.push({
                            [key]: i[key]
                        })
                    }
                }
                arr.push(keyArr)
            })
            return arr.length == 1 ? arr[0] : arr
        }

    },
    removeAttr(attr) {
        if ($.istype(attr, "string")) {
            this.el.forEach((i) => {
                i.removeAttribute(attr)
            })
        }
        return this
    },

    //设置HTML内容
    html: function(option) {
        if (option) {
            if (typeof option == "object") {
                option = Object.prototype.toString.apply(option)
            }
            this.el.forEach((i) => {
                i.innerHTML = option
            });
            return this
        } else {
            let resultArr = []
            if (this.el.length == 1) {
                return this.el[0].innerHTML
            } else {
                this.el.forEach((i) => {
                    resultArr.push(i.innerHTML)
                });
            }
            return resultArr.length == 1 ? resultArr[0] : resultArr
        }

    },
    //设置text内容
    text: function(option) {
        if (typeof option == "object") {
            option = Object.prototype.toString.apply(option)
        }
        if (option) {
            this.el.forEach((i) => {
                i.innerHTML = option
            });
        } else {
            let resultArr = []

            this.el.forEach((i) => {
                resultArr.push(i.innerHTML)
            });

            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },

    val(option) {
        if (typeof option == "object") {
            option = Object.prototype.toString.apply(option)
        }
        if (option) {
            this.el.forEach((i) => {
                i.value = option
            });
        } else {
            let resultArr = []
            this.el.forEach((i) => {
                resultArr.push(i.value)
            });
            return resultArr.length == 1 ? resultArr[0] : resultArr
        }
        return this
    },
    wrap(str) {
        if ($.istype(str, "string")) {
            this.el.forEach((i) => {
                var parentNode = i.parentNode
                var el = document.createElement("div")
                el.innerHTML = str
                var contentNode = el.firstElementChild
                contentNode.appendChild(i)
                console.log(parentNode, contentNode)
                parentNode.appendChild(contentNode)
            })
        }
        return this
    }

}