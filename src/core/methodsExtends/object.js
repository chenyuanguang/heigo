module.exports = {
    //清除对象中值为空的属性
    //filterParams({a:"",b:null,c:"010",d:123})
    //Object {c: "010", d: 123}
    filterParams: function(obj) {
        var _newPar = {};
        for (var key in obj) {
            if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
                _newPar[key] = obj[key];
            }
        }
        return _newPar;
    },
    //对象的扁平化处理
    steamObject: function(obj) {
        var newObj = {},
            _this = this;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const element = obj[key];
                if (_this.istype(element, "object")) {
                    let secObj = this.steamObject(element)
                    for (const keys in secObj) {
                        if (secObj.hasOwnProperty(keys)) {
                            newObj[keys] = secObj[keys]
                        }
                    }
                } else {
                    newObj[key] = element
                }
            }
        }
        return newObj
    }
}