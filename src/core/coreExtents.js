//数组方法扩展

var ArrayExtends = {

    forEach: function(cb) {
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {
                cb(this[i], i, this)
            }
        }
    },
    map: function(cb) {
        var newArr = []
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {
                newArr.push(cb(this[i], i, this))
            }
        }
        return newArr
    },
    filter: function(cb) {
        var newArr = []
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {
                if (cb(this[i], i, this)) {
                    newArr.push(i)
                }
            }
        }
        return newArr
    },
    some: function(cb) {
        var state = false
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {
                if (cb(this[i], i, this)) {
                    state = true;
                    break;
                }
            }
        }
        return state
    },
    every: function(cb) {
        var state = true
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {
                if (!cb(this[i], i, this)) {
                    state = false;
                    break;
                }
            }
        }
        return state
    },
    sort: function(cb) {
        if (istype(this, "array") && istype(cb, "function")) {
            for (var i = 0; i < this.length; i++) {

            }
        }
    }
}