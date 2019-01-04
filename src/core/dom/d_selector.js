function IndexHandle(domArr, strOrigin) {
    //针对索引操作
    //获取：后的值
    var eArgReg = function(type) {
            return new RegExp(`(?<=:)${type}\\(\\d+\\)`, "g")
        }
        //获取index索引
    var indexArgReg = function(type) {

        return new RegExp(`(?<=${type}\\()\\d+(?=\\))`, "g")
    }


    if (eArgReg("eq").test(strOrigin)) {
        var eArg = eArgReg("eq").exec(strOrigin)
        var eeArg = eArg ? eArg[0] : ""
        var indexObj = indexArgReg("eq").exec(eeArg)
        var index = indexObj[0]
        var lastIndex = parseInt(index) + 1
            // console.log(domArr.slice(index, lastIndex))
        return domArr.slice(index, lastIndex)
    } else if (eArgReg("gt").test(strOrigin)) {
        var eArg = eArgReg("gt").exec(strOrigin)
        var eeArg = eArg ? eArg[0] : ""
        var indexObj = indexArgReg("gt").exec(eeArg)
        var index = indexObj[0]
        return domArr.slice(index)
    } else if (eArgReg("lt").test(strOrigin)) {
        var eArg = eArgReg("lt").exec(strOrigin)
        var eeArg = eArg ? eArg[0] : ""
        var indexObj = indexArgReg("lt").exec(eeArg)
        var index = indexObj[0]
        return domArr.slice(0, index)
    } else {
        return domArr
    }
}
//非索引dom
function normalHandle(domArr, arg) {
    switch (arg) {
        case "even":
            {
                return domArr.filter((i, index) => {
                    if (index % 2 == 0) {
                        return true
                    } else {
                        return false
                    }
                })
            }

        case "odd":
            {
                return domArr.filter((i, index) => {
                    if (index % 2 !== 0) {
                        return true
                    } else {
                        return false
                    }
                })
            }

        case "last":
            {
                return domArr.slice(domArr.length - 1, domArr.length)
            }

        case "first":
            {
                return domArr.slice(0, 1)
            }
        case "hidden":
            {
                return domArr.filter((i) => {
                    if (i.style.visibility == "hidden") {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "visible":
            {
                return domArr.filter((i) => {
                    if (i.style.visibility == "visible") {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "show":
            {
                return domArr.filter((i) => {
                    if (i.style.display == "block" || i.style.display == "inline-block") {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "hide":
            {
                return domArr.filter((i) => {
                    if (i.style.display == "none") {
                        return true
                    } else {
                        return false
                    }
                })
            }
        case "empty":
            {
                return domArr.filter((i) => {
                    if (i.innerHTML == "") {
                        return true
                    } else {
                        return false
                    }
                })
            }
    }
}
//非索引input操作
function inputType(domArr, arg) {
    return domArr.filter((i) => {
        if ((i.tagName == "INPUT" && i.type == arg) || (i.tagName == "INPUT" && i[arg])) {
            return true
        } else {
            return false
        }
    })

}

//获取dom
function getDom(rootEl, el, num, strArr) {

    if (num == strArr.length - 1) {
        let everyRootArr = []
        rootEl.forEach((element) => {
            everyRootArr = [...everyRootArr, ...element.querySelectorAll(el)]
        });
        return [...everyRootArr]
    } else {
        let everyRootArr = []
        rootEl.forEach((element) => {
            everyRootArr = [...everyRootArr, ...element.querySelectorAll(el)]
        });
        num++
        return getDom(everyRootArr, strArr[num], num, strArr)
    }
}
//属性选择器操作
function AttrHandle(domArr, strOrigin) {
    //针对索引操作
    //获取：后的值
    var eArgReg = function(type) {

        return new RegExp(`(?<=\\[)\\w+${type}\\w+(?=\\])`, "g")
    }

    if (eArgReg("=").test(strOrigin)) {
        var eArg = eArgReg("=").exec(strOrigin)
        var eeArg = eArg ? eArg[0] : ""
        var valArr = eeArg.split("=")
        return domArr.filter((i, index) => {
            if (i[valArr[0] == "class" ? "className" : valArr[0]] == valArr[1]) {
                return true
            } else {
                return false
            }
        })
    } else if (eArgReg("!=").test(strOrigin)) {
        var eArg = eArgReg("!=").exec(strOrigin)
        var eeArg = eArg ? eArg[0] : ""
        var valArr = eeArg.split("!=")
        return domArr.filter((i, index) => {
            if (i[valArr[0] == "class" ? "className" : valArr[0]] != valArr[1]) {
                return true
            } else {
                return false
            }
        })
    } else {
        return domArr
    }


}

module.exports = {
    getDom: getDom,
    init(root, strOrigin) {
        //判断传入的是dom节点还是字符串
        if (strOrigin && strOrigin.constructor == String) {

            //判断是否是索引选择器
            var reg = /\(\d+\)/g
                //匹配是否是属性选择器
            var attrReg = /\[\S*\]/g
                //匹配伪类选择器
            var replaceReg = /:\w+/g
            if (attrReg.test(strOrigin)) {
                var str = strOrigin.replace(attrReg, "")
                var strArr = str.split(" ")
                    //获取所有的dom集合
                var domArr = getDom([root], strArr[0], 0, strArr)
                return AttrHandle(domArr, strOrigin)
                    // console.log(domArr)
            } else if (reg.test(strOrigin)) {
                var replaceReg = /:\S*/g
                var str = strOrigin.replace(replaceReg, "")
                var strArr = str.split(" ")
                    //获取所有的dom集合
                var domArr = getDom([root], strArr[0], 0, strArr)
                return IndexHandle(domArr, strOrigin)
            } else if (replaceReg.test(strOrigin)) {

                var argReg = /(?<=:)\w+/g
                var str = strOrigin.replace(replaceReg, "")
                var arg = argReg.exec(strOrigin)[0]
                var strArr = str.split(" ")
                    //获取所有的dom集合
                var domArr = getDom([root], strArr[0], 0, strArr)

                //区分input类型
                var typeArray = ["input", "text", "password", "radio", "checkbox", "submit", "reset", "button", "image", "file", "enabled", "disabled", "selected", "checked"]
                if (typeArray.includes(arg)) {
                    return inputType(domArr, arg)
                } else {
                    return normalHandle(domArr, arg)
                }
            } else {
                var strArr = strOrigin.split(" ")
                    //获取所有的dom集合

                return getDom([root], strArr[0], 0, strArr)
            }
        } else if (Object.prototype.toString.call(strOrigin).indexOf('HTML') !== -1) {
            return [strOrigin]
        } else {
            return [root]
        }
    }
}