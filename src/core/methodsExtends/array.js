module.exports = {
    /*数组*/

    //数组去重
    removeRepeatArray: function(arr, key) {
        var arrResult = []
        if(this.istype(arr[0],"object")&&this.istype(key,"string")){
            for (let i = 0; i < arr.length; i++) {
                let state=true
               for (let j = 0; j < arrResult.length; j++) {
                  if(arr[i][key]==arrResult[j][key]){
                    state=false
                  }
               }
               if(state){
                arrResult.push(arr[i])
               }
            }
        }else{
                arrResult=arr.filter((item, index, self)=> {
                    return self.indexOf(item) === index;
                });
        }
  
        return arrResult

    },
    //数组顺序打乱
    upsetArr: function(arr) {
        return arr.sort(function() {
            return Math.random() - 0.5
        });
    },

    //数组最大值
    maxArr: function(arr) {
        return Math.max.apply(null, arr);
    },
    //数组最小值
    minArr: function(arr) {
        return Math.min.apply(null, arr);
    },

    //数组求和
    sumArr: function(arr) {
        return arr.reduce(function(pre, cur) {
           
            return pre + cur
        })
    },

    //数组平均值
    covArr: function(arr) {
        return this.sumArr(arr) / arr.length;
    },
    //从数组中随机获取元素
    randomOne: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    //回数组（字符串）一个元素出现的次数

    getEleCount: function(obj, ele) {
        var num = 0;
        for (var i = 0, len = obj.length; i < len; i++) {
            if (ele === obj[i]) {
                num++;
            }
        }
        return num;
    },

    //删除数组

    removeArrayForValue: function(arr, val, type) {
        return arr.filter(function(item) {
            return type ? item.indexOf(val) === -1 : item !== val
        })
    },
    //获取对象数组某些项

    getOptionArray: function(arr, keys, val) {
        var newArr = []
        if (!keys) {
            return arr
        }
        var _keys = keys.split(',')
        if (val) {
            var _vals = val
            newArr = arr.filter((i) => {
             
                let state = _keys.every((j, index) => {
                
                    if (i[j] == _vals[index]) {
                        return true
                    } else {
                        return false
                    }
                })
                return state
            })
            return newArr
        }

        if (_keys.length === 1) {
            for (var i = 0, len = arr.length; i < len; i++) {
                newArr.push(arr[i][keys])
            }
            return newArr;
        }
        var newArrOne = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            newArrOne = {};
            for (var j = 0, len1 = _keys.length; j < len1; j++) {
                newArrOne[_keys[j]] = arr[i][_keys[j]]
            }
            newArr.push(newArrOne);
        }
        return newArr
    },



    //排除数组某些项
    //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    //filterOptionArray(arr,'a')
    //result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
    //filterOptionArray(arr,'a,c')
    //result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
    filterOptionArray: function(arr, keys) {
        var newArr = []
        var _keys = keys.split(','),
            newArrOne = {};
        for (var i = 0, len = arr.length; i < len; i++) {
            newArrOne = {};
            for (var key in arr[i]) {
                //如果key不存在排除keys里面,添加数据
                if (_keys.indexOf(key) === -1) {
                    newArrOne[key] = arr[i][key];
                }
            }
            newArr.push(newArrOne);
        }
        return newArr
    },


    //对象数组的排序
    arraySort: function(arr, key, type) {
        var _arr = arr.slice(0);
        if (!key) {
            _arr.sort((a, b) => {
                if (type) {
                    return a - b
                } else {
                    return b - a
                }
            })
        } else {
            _arr.sort(function(n1, n2) {
                if (type) {
                    return n1[key] - n2[key]
                } else {
                    return n2[key] - n1[key]
                }

            })
        }
        return _arr;
    },
    //数组扁平化
    steamroller: function(arr) {
        var newArr = [],
            _this = this;
        for (var i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // 如果是数组，调用(递归)steamroller 将其扁平化
                // 然后再 push 到 newArr 中
                newArr.push.apply(newArr, _this.steamroller(arr[i]));
            } else {
                // 不是数组直接 push 到 newArr 中
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
}