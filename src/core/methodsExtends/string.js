module.exports = {

    trim: function(str, type) {
        switch (type) {
            case 1:
                return str.replace(/\s+/g, "");
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return str.replace(/(^\s*)/g, "");
            case 4:
                return str.replace(/(\s*$)/g, "");
            default:
                return str;
        }
    },

    changeCase: function(str, type) {
        function ToggleCase(str) {
            var itemText = ""
            str.split("").forEach(
                function(item) {
                    if (/^([a-z]+)/.test(item)) {
                        itemText += item.toUpperCase();
                    } else if (/^([A-Z]+)/.test(item)) {
                        itemText += item.toLowerCase();
                    } else {
                        itemText += item;
                    }
                });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function(word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

                });
            case 2:
                return str.replace(/\b\w+\b/g, function(word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    },
    repeatStr: function(str, count) {
        var text = '';
        for (var i = 0; i < count; i++) {
            text += str;
        }
        return text;
    },
    replaceAll: function(str, AFindText, ARepText) {
        var raRegExp = new RegExp(AFindText, "g");
        return str.replace(raRegExp, ARepText);
    },
    //字符替换*

    replaceStr: function(str, regArr, type, ARepText) {
        var regtext = '',
            Reg = null,
            replaceText = ARepText || '*';
        //replaceStr('18819322663',[3,5,3],0)
        //result：188*****663

        if (regArr.length === 3 && type === 0) {
            regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[1]);
            return str.replace(Reg, '$1' + replaceCount + '$2')
        }
        //replaceStr('asdasdasdaa',[3,5,3],1)
        //result：***asdas***
        else if (regArr.length === 3 && type === 1) {
            regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}'
            Reg = new RegExp(regtext);
            var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
            var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
            return str.replace(Reg, replaceCount1 + '$1' + replaceCount2)
        }
        //replaceStr('1asd88465asdwqe3',[5],0)
        //result：*****8465asdwqe3
        else if (regArr.length === 1 && type === 0) {
            regtext = '(^\\w{' + regArr[0] + '})'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[0]);
            return str.replace(Reg, replaceCount)
        }
        //replaceStr('1asd88465asdwqe3',[5],1,'+')
        //result："1asd88465as+++++"
        else if (regArr.length === 1 && type === 1) {
            regtext = '(\\w{' + regArr[0] + '}$)'
            Reg = new RegExp(regtext);
            var replaceCount = this.repeatStr(replaceText, regArr[0]);
            return str.replace(Reg, replaceCount)
        }
    },

    checkType: function(str, type) {
        switch (type) {
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'number':
                return /^[0-9]$/.test(str);
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'text':
                return /^\w+$/.test(str);
            case 'chinese':
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower':
                return /^[a-z]+$/.test(str);
            case 'upper':
                return /^[A-Z]+$/.test(str);
            default:
                return true;
        }
    },

    checkPwd: function(str) {
        var nowLv = 0;
        if (str.length < 6) {
            return nowLv
        }
        if (/[0-9]/.test(str)) {
            nowLv++
        }
        if (/[a-z]/.test(str)) {
            nowLv++
        }
        if (/[A-Z]/.test(str)) {
            nowLv++
        }
        if (/[\.|-|_]/.test(str)) {
            nowLv++
        }
        return nowLv;
    },


    randomWord: function(count) {
        return Math.random().toString(count).substring(2);
    },


    countStr: function(str, strSplit) {
        return str.split(strSplit).length - 1
    },

    filterStr: function(str, type, restr, spstr) {
        var typeArr = type.split(','),
            _str = str;
        for (var i = 0, len = typeArr.length; i < len; i++) {
            //是否是过滤特殊符号
            if (typeArr[i] === 'special') {
                var pattern, regText = '$()[]{}?\|^*+./\"\'+';
                //是否有哪些特殊符号需要保留
                if (2) {
                    var _spstr = spstr.split(""),
                        _regText = "[^0-9A-Za-z\\s";
                    for (var j = 0, len1 = _spstr.length; j < len1; j++) {
                        if (regText.indexOf(_spstr[j]) === -1) {
                            _regText += _spstr[j];
                        } else {
                            _regText += '\\' + _spstr[j];
                        }
                    }
                    _regText += ']'
                    pattern = new RegExp(_regText, 'g');
                } else {
                    pattern = new RegExp("[^0-9A-Za-z\\s]", 'g')
                }

            }
            var _restr = restr || '';
            switch (typeArr[i]) {
                case 'special':
                    _str = _str.replace(pattern, _restr);
                    break;
                case 'html':
                    _str = _str.replace(/<\/?[^>]*>/g, _restr);
                    break;
                case 'emjoy':
                    _str = _str.replace(/[^\u4e00-\u9fa5|\u0000-\u00ff|\u3002|\uFF1F|\uFF01|\uff0c|\u3001|\uff1b|\uff1a|\u3008-\u300f|\u2018|\u2019|\u201c|\u201d|\uff08|\uff09|\u2014|\u2026|\u2013|\uff0e]/g, _restr);
                    break;
                case 'word':
                    _str = _str.replace(/[a-z]/g, _restr);
                    break;
                case 'WORD':
                    _str = _str.replace(/[A-Z]/g, _restr);
                    break;
                case 'number':
                    _str = _str.replace(/[0-9]/g, _restr);
                    break;
                case 'chinese':
                    _str = _str.replace(/[\u4E00-\u9FA5]/g, _restr);
                    break;
            }
        }
        return _str;
    },

    formatText: function(str, size, delimiter) {
        var _size = size || 3,
            _delimiter = delimiter || ',';
        var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
        var reg = new RegExp(regText, 'g');
        return str.replace(reg, _delimiter);
    },

    longestWord: function(str, splitType) {
        var _splitType = splitType || /\s+/g,
            _max = 0,
            result = null
        var strArr = str.split(_splitType);
        strArr.forEach(function(item) {
            if (_max < item.length) {
                _max = item.length
                result = item
            }
        })
        return result;
    },

    titleCaseUp: function(str, splitType) {
        var _splitType = splitType || /\s+/g;
        var strArr = str.split(_splitType),
            result = "",
            _this = this
        strArr.forEach(function(item) {
            result += _this.changeCase(item, 1) + ' ';
        })
        return this.trim(result, 4)
    },
    // 原生 JavaScript 实现字符串长度截取
    cutstr: function(str, len) {
        var temp;
        var icount = 0;
        var patrn = /[^\x00-\xff]/;
        var strre = "";
        for (var i = 0; i < str.length; i++) {
            if (icount < len - 1) {
                temp = str.substr(i, 1);
                if (patrn.exec(temp) == null) {
                    icount = icount + 1
                } else {
                    icount = icount + 2
                }
                strre += temp
            } else {
                break
            }
        }
        return strre + "..."
    },
    //创建正则字符
    createKeyExp: function(strArr) {
        var str = "";
        for (var i = 0; i < strArr.length; i++) {
            if (i != strArr.length - 1) {
                str = str + strArr[i] + "|";
            } else {
                str = str + strArr[i];
            }
        }
        return "(" + str + ")";
    },

    findKey: function(str, key, el) {
        var arr = null,
            regStr = null,
            content = null,
            Reg = null,
            _el = el || 'span';
        arr = key.split(/\s+/);
        //alert(regStr); //    如：(前端|过来)
        regStr = this.createKeyExp(arr);
        content = str;
        //alert(Reg);//        /如：(前端|过来)/g
        Reg = new RegExp(regStr, "g");
        //过滤html标签 替换标签，往关键字前后加上标签
        content = content.replace(/<\/?[^>]*>/g, '')
        return content.replace(Reg, "<" + _el + ">$1</" + _el + ">");
    },
    // 转码表
    table: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '+', '/'
    ],
    UTF16ToUTF8: function(str) {
        var res = [],
            len = str.length;
        for (var i = 0; i < len; i++) {
            var code = str.charCodeAt(i);
            if (code > 0x0000 && code <= 0x007F) {
                // 单字节，这里并不考虑0x0000，因为它是空字节
                // U+00000000 – U+0000007F  0xxxxxxx
                res.push(str.charAt(i));
            } else if (code >= 0x0080 && code <= 0x07FF) {
                // 双字节
                // U+00000080 – U+000007FF  110xxxxx 10xxxxxx
                // 110xxxxx
                var byte1 = 0xC0 | ((code >> 6) & 0x1F);
                // 10xxxxxx
                var byte2 = 0x80 | (code & 0x3F);
                res.push(
                    String.fromCharCode(byte1),
                    String.fromCharCode(byte2)
                );
            } else if (code >= 0x0800 && code <= 0xFFFF) {
                // 三字节
                // U+00000800 – U+0000FFFF  1110xxxx 10xxxxxx 10xxxxxx
                // 1110xxxx
                var byte1 = 0xE0 | ((code >> 12) & 0x0F);
                // 10xxxxxx
                var byte2 = 0x80 | ((code >> 6) & 0x3F);
                // 10xxxxxx
                var byte3 = 0x80 | (code & 0x3F);
                res.push(
                    String.fromCharCode(byte1),
                    String.fromCharCode(byte2),
                    String.fromCharCode(byte3)
                );
            } else if (code >= 0x00010000 && code <= 0x001FFFFF) {
                // 四字节
                // U+00010000 – U+001FFFFF  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            } else if (code >= 0x00200000 && code <= 0x03FFFFFF) {
                // 五字节
                // U+00200000 – U+03FFFFFF  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            } else /** if (code >= 0x04000000 && code <= 0x7FFFFFFF)*/ {
                // 六字节
                // U+04000000 – U+7FFFFFFF  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            }
        }

        return res.join('');
    },
    UTF8ToUTF16: function(str) {
        var res = [],
            len = str.length;
        var i = 0;
        for (var i = 0; i < len; i++) {
            var code = str.charCodeAt(i);
            // 对第一个字节进行判断
            if (((code >> 7) & 0xFF) == 0x0) {
                // 单字节
                // 0xxxxxxx
                res.push(str.charAt(i));
            } else if (((code >> 5) & 0xFF) == 0x6) {
                // 双字节
                // 110xxxxx 10xxxxxx
                var code2 = str.charCodeAt(++i);
                var byte1 = (code & 0x1F) << 6;
                var byte2 = code2 & 0x3F;
                var utf16 = byte1 | byte2;
                res.push(Sting.fromCharCode(utf16));
            } else if (((code >> 4) & 0xFF) == 0xE) {
                // 三字节
                // 1110xxxx 10xxxxxx 10xxxxxx
                var code2 = str.charCodeAt(++i);
                var code3 = str.charCodeAt(++i);
                var byte1 = (code << 4) | ((code2 >> 2) & 0x0F);
                var byte2 = ((code2 & 0x03) << 6) | (code3 & 0x3F);
                utf16 = ((byte1 & 0x00FF) << 8) | byte2
                res.push(String.fromCharCode(utf16));
            } else if (((code >> 3) & 0xFF) == 0x1E) {
                // 四字节
                // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            } else if (((code >> 2) & 0xFF) == 0x3E) {
                // 五字节
                // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            } else /** if (((code >> 1) & 0xFF) == 0x7E)*/ {
                // 六字节
                // 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            }
        }
        return res.join('');
    },
    encode: function(str) {
        if (!str) {
            return '';
        }
        var utf8 = this.UTF16ToUTF8(str); // 转成UTF8
        var i = 0; // 遍历索引
        var len = utf8.length;
        var res = [];
        while (i < len) {
            var c1 = utf8.charCodeAt(i++) & 0xFF;
            res.push(this.table[c1 >> 2]);
            // 需要补2个=
            if (i == len) {
                res.push(this.table[(c1 & 0x3) << 4]);
                res.push('==');
                break;
            }
            var c2 = utf8.charCodeAt(i++);
            // 需要补1个=
            if (i == len) {
                res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
                res.push(this.table[(c2 & 0x0F) << 2]);
                res.push('=');
                break;
            }
            var c3 = utf8.charCodeAt(i++);
            res.push(this.table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
            res.push(this.table[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)]);
            res.push(this.table[c3 & 0x3F]);
        }

        return res.join('');
    },
    decode: function(str) {
        if (!str) {
            return '';
        }
        var len = str.length;
        var i = 0;
        var res = [];
        while (i < len) {
          var  code1 = this.table.indexOf(str.charAt(i++));
          var  code2 = this.table.indexOf(str.charAt(i++));
          var  code3 = this.table.indexOf(str.charAt(i++));
          var  code4 = this.table.indexOf(str.charAt(i++));

          var  c1 = (code1 << 2) | (code2 >> 4);
          var  c2 = ((code2 & 0xF) << 4) | (code3 >> 2);
          var  c3 = ((code3 & 0x3) << 6) | code4;

            res.push(String.fromCharCode(c1));

            if (code3 != 64) {
                res.push(String.fromCharCode(c2));
            }
            if (code4 != 64) {
                res.push(String.fromCharCode(c3));
            }
        }

        return this.UTF8ToUTF16(res.join(''));
    }

}