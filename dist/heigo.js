"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") { _typeof = function (_typeof2) { function _typeof(_x) { return _typeof2.apply(this, arguments); } _typeof.toString = function () { return _typeof2.toString(); }; return _typeof; }(function (obj) { return typeof obj === "undefined" ? "undefined" : _typeof(obj); }); } else { _typeof = function (_typeof3) { function _typeof(_x2) { return _typeof3.apply(this, arguments); } _typeof.toString = function () { return _typeof3.toString(); }; return _typeof; }(function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj); }); } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
    module.exports = {
      //适配rem
      getFontSize: function getFontSize(psdW) {
        var doc = document,
            win = window;

        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function recalc() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;

          if (clientWidth > psdW) {
            clientWidth = psdW;
          } //设置根元素font-size大小


          docEl.style.fontSize = 100 * (clientWidth / psdW) + 'px';
        }; //屏幕大小改变，或者横竖屏切换时，触发函数


        win.addEventListener(resizeEvt, recalc, false); //文档加载完成时，触发函数

        doc.addEventListener('DOMContentLoaded', recalc, false);
      },
      //cookie
      //设置cookie
      setCookie: function setCookie(name, value, iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
      },
      //获取cookie
      getCookie: function getCookie(name) {
        var arr = document.cookie.split('; ');

        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=');

          if (arr2[0] == name) {
            return arr2[1];
          }
        }

        return '';
      },
      //删除cookie
      removeCookie: function removeCookie(name) {
        this.setCookie(name, 1, -1);
      },
      //手机类型判断
      browserInfo: function browserInfo(type) {
        switch (type) {
          case 'android':
            return navigator.userAgent.toLowerCase().indexOf('android') !== -1;

          case 'iphone':
            return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1;

          case 'ipad':
            return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;

          case 'weixin':
            return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;

          default:
            return navigator.userAgent.toLowerCase();
        }
      }
    };
  }, {}],
  2: [function (require, module, exports) {// module.exports = {
    //     ajax(option) {
    //         var type=option.type,
    //             url=option.url,
    //             data=option.data
    //         return new Promise((resolve, reject) => {
    //             let xhr = new XMLHttpRequest()
    //             if (type == "get") {
    //                 if (data) {
    //                     let dataArr = Object.entries(data)
    //                     dataArr.forEach((i, index) => {
    //                         if (index == 0) {
    //                             url += "?" + i[0] + "=" + i[1]
    //                         } else {
    //                             url += "&" + i[0] + "=" + i[1]
    //                         }
    //                     })
    //                 }
    //                 xhr.open(type, url)
    //                 xhr.send()
    //             } else {
    //                 xhr.open(type, url)
    //                 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    //                 let str = ""
    //                 if (data) {
    //                     let dataArr = Object.entries(data)
    //                     dataArr.forEach((i, index) => {
    //                         if (index == 0) {
    //                             str += i[0] + "=" + i[1]
    //                         } else {
    //                             str += "&" + i[0] + "=" + i[1]
    //                         }
    //                     })
    //                 }
    //                 xhr.send(str)
    //             }
    //             xhr.onreadystatechange = function() {
    //                 if (xhr.readyState == 4) {
    //                     if (xhr.status == 200) {
    //                         resolve(JSON.parse(xhr.responseText))
    //                     } else {
    //                         reject("err")
    //                     }
    //                 }
    //             }
    //         })
    //     }
    // }
  }, {}],
  3: [function (require, module, exports) {
    module.exports = {
      //设置样式
      css: function css(option) {
        if (option) {
          if (typeof option != "string") {
            option = Object.prototype.toString.apply(option);
          }

          this.el.forEach(function (i) {
            i.style.cssText += option;
          });
        } else {
          var resultArr = [];

          if (this.el.length == 1) {
            return this.el[0].style.cssText;
          } else {
            this.el.forEach(function (i) {
              resultArr.push(i.style.cssText);
            });
          }

          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      height: function height(option) {
        if (option) {
          if (typeof option != "string") {
            option = Object.prototype.toString.apply(option);
          }

          if (!/\d+px$/.test(option)) {
            option += "px";
          }

          this.el.forEach(function (i) {
            i.style.height = option;
          });
        } else {
          var resultArr = this.el.map(function (i) {
            return i.style.height;
          });
          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      width: function width(option) {
        if (option) {
          if (typeof option != "string") {
            option = Object.prototype.toString.apply(option);
          }

          this.el.forEach(function (i) {
            i.style.width = option;
          });
        } else {
          var resultArr = this.el.map(function (i) {
            return i.style.width;
          });
          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      offset: function offset(option) {
        if (option && $.istype(option, "object") && option.top && option.left) {
          var top = option.top;
          var left = option.left;
          this.el.forEach(function (el) {
            el.style.cssText = "position:relative;margin:0;padding:0;top:".concat(top, "px;left:").concat(left, "px");
          });
        } else {
          var offset = function offset(curEle) {
            var totalLeft = null,
                totalTop = null,
                par = curEle.offsetParent; //首先加自己本身的左偏移和上偏移

            totalLeft += curEle.offsetLeft;
            totalTop += curEle.offsetTop; //只要没有找到body，我们就把父级参照物的边框和偏移也进行累加

            while (par) {
              //累加父级参照物本身的偏移
              totalLeft += par.offsetLeft;
              totalTop += par.offsetTop;
              par = par.offsetParent;
            }

            return {
              left: totalLeft,
              top: totalTop
            };
          };

          var resultArr = this.el.map(function (i) {
            return offset(i);
          });
          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      //offsetParent() 方法返回最近的祖先定位元素。
      offsetParent: function offsetParent() {
        function offsetParent(curEle) {
          var totalLeft = null,
              totalTop = null,
              par = curEle.parentNode,
              postionState = window.getComputedStyle(par, null).getPropertyValue("position");

          if (!par || par.tagName == "HTML") {
            return null;
          }

          if (postionState == "relative" || postionState == "absolute" || postionState == "fixed") {
            return par;
          } else {
            return offsetParent(par);
          }
        }

        var resultArr = this.el.map(function (i) {
          return offsetParent(i);
        });
        return resultArr.length == 1 ? resultArr[0] : resultArr;
      }
    };
  }, {}],
  4: [function (require, module, exports) {
    module.exports = {
      cacheStatus: {
        msf: {},
        set: function set(preEl, currentEl) {
          this.msf[(Math.random() * 1000000).toString()] = [preEl, currentEl];
        },
        get: function get(currentEl) {
          var result = null;

          for (var key in this.msf) {
            if (this.msf.hasOwnProperty(key)) {
              var currentElMSF = this.msf[key][1];

              if (currentEl == currentElMSF) {
                result = this.msf[key][0];
              }
            }
          }

          return result;
        },
        remove: function remove(currentEl) {
          for (var key in this.msf) {
            if (this.msf.hasOwnProperty(key)) {
              var currentElMSF = this.msf[key][1];

              if (currentEl == currentElMSF) {
                delete this.msf[key];
              }
            }
          }
        }
      },
      add: function add(el) {
        var _this2 = this;

        var arrResult = [];
        this.el.forEach(function (i) {
          arrResult.push(i);
        });

        if ($.istype(el, "elements")) {
          arrResult.push(el);
        } else if ($.istype(el, "string")) {
          this.el.forEach(function (i) {
            var arr = _this2.init(document, el);

            arr.forEach(function (i) {
              arrResult.push(i);
            });
          });
        } else if (el.el && el.el.length > 0) {
          el.el.forEach(function (i) {
            arrResult.push(i);
          });
        }

        if (arrResult.length > 0) {
          this.cacheStatus.set(this.el, arrResult);
          this.el = arrResult;
        }

        return this;
      },
      children: function children() {
        var childrenArr = [];
        this.el.forEach(function (j) {
          console.log(i);

          if (j.children.length <= 0) {
            return;
          }

          for (var i = 0; i < j.children.length; i++) {
            var element = j.children[i];
            childrenArr.push(element);
          }
        });
        this.cacheStatus.set(this.el, childrenArr);
        this.el = childrenArr;
        return this;
      },
      find: function find(select) {
        var _this3 = this;

        var childrenArr = [];

        if ($.istype(select, "string")) {
          this.el.forEach(function (i) {
            var arr = _this3.init(i, select);

            arr.forEach(function (j) {
              childrenArr.push(j);
            });
          });
        } else if (select == undefined) {
          this.el.forEach(function (i) {
            var arr = _this3.init(i, "*");

            arr.forEach(function (j) {
              childrenArr.push(j);
            });
          });
        }

        this.cacheStatus.set(this.el, childrenArr);
        this.el = childrenArr;
        return this;
      },
      parent: function parent() {
        var arr = [];
        this.el.forEach(function (i) {
          arr.push(i.parentNode);
        });
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      parents: function parents() {
        var arr = [];
        var everyArr = [];

        function findParent(dom) {
          var parent = dom.parentNode;
          everyArr.push(parent);

          if (parent != document) {
            return findParent(parent);
          } else {
            return parent;
          }
        }

        this.el.forEach(function (i) {
          everyArr = [];
          findParent(i);
          arr.push(everyArr);
        });
        arr = arr.length == 1 ? arr[0] : arr;
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      each: function each(cb) {
        var _this4 = this;

        this.el.forEach(function (i, index) {
          cb.call(_this4, i, index);
        });
        return this;
      },
      filter: function filter(cb) {
        var arr = [];
        this.el.forEach(function (i, index) {
          if (cb(i, index)) {
            arr.push(i);
          }
        });
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      map: function map(cb) {
        var arr = [];
        this.el.forEach(function (i, index) {
          var res = cb(i, index);

          if ($.istype(res, "elements")) {
            arr.push(res);
          }
        });
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      slice: function slice(startIndex, endIndex) {
        var arr = [];

        if ($.istype(startIndex, "number") && $.istype(endIndex, "number")) {
          arr = this.el.slice(startIndex, endIndex);
        }

        this.cacheStatus.set(this.el, arr);
        return this;
      },
      first: function first() {
        var arr = [];

        if (this.el.length > 0) {
          arr = this.el[0];
        }

        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      last: function last() {
        var arr = [];

        if (this.el.length > 0) {
          arr = this.el[this.el.length - 1];
        }

        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      end: function end() {
        var currentEl = this.el;
        this.el = this.cacheStatus.get(currentEl);
        this.cacheStatus.remove(currentEl);
        return this;
      },
      is: function is() {
        if (this.el.length > 0) {
          return true;
        } else {
          return false;
        }
      },
      prev: function prev() {
        var arr = [];
        this.el.forEach(function (i) {
          if (i.previousElementSibling) {
            arr.push(i.previousElementSibling);
          }
        });
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      prevAll: function prevAll() {
        var arr = [];
        this.el.forEach(function (i) {
          var allNodes = i.parentNode.children;
          var index = Array.prototype.indexOf.call(allNodes, i);
          arr.push(Array.prototype.slice.call(allNodes, 0, index));
        });
        arr = arr.length == 1 ? arr[0] : arr;
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      next: function next() {
        var arr = [];
        this.el.forEach(function (i) {
          if (i.nextElementSibling) {
            arr.push(i.nextElementSibling);
          }
        });
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      nextAll: function nextAll() {
        var arr = [];
        this.el.forEach(function (i) {
          var allNodes = i.parentNode.children;
          var index = Array.prototype.indexOf.call(allNodes, i);
          arr.push(Array.prototype.slice.call(allNodes, index + 1));
        });
        arr = arr.length == 1 ? arr[0] : arr;
        this.cacheStatus.set(this.el, arr);
        this.el = arr;
        return this;
      },
      //获取索引或根据索引找出节点
      eq: function eq(option) {
        var _this5 = this;

        if (option == 0 || option) {
          if (typeof option != "number") {
            return this;
          }

          var arr = this.el.slice(option, option + 1);
          this.cacheStatus.set(this.el, arr);
          this.el = arr;
          return this;
        } else if (this.el.length == 1) {
          var parentNode = this.el[0].parentNode;

          var _arr2 = Array.prototype.slice.apply(parentNode.children);

          _arr2.filter(function (i) {
            if (_this5.el[0].tagName == i.tagName) {
              return true;
            } else {
              return false;
            }
          });

          var index = _arr2.indexOf(this.el[0]);

          return index;
        }

        return this;
      },
      size: function size() {
        return this.el.length;
      },
      siblings: function siblings(str) {
        var _this6 = this;

        str = $.istype(str, "string") ? str : "*";

        if ($.istype(str, "string")) {
          var arr = [];
          this.el.forEach(function (i, index) {
            var el = _this6.init(i.parentNode, str);

            var everyArr = el.filter(function (j) {
              if (j.tagName == i.tagName) {
                return true;
              } else {
                return false;
              }
            });
            arr.push(everyArr);
          });
          arr = arr.length == 1 ? arr[0] : arr;
          this.cacheStatus.set(this.el, arr);
          this.el = arr;
        }

        return this;
      }
    };
  }, {}],
  5: [function (require, module, exports) {
    module.exports = {
      //显示隐藏
      show: function show() {
        var blockArr = ['div', 'li', 'ul', 'ol', 'dl', 'table', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'header', 'footer', 'details', 'summary', 'section', 'aside', ''];
        this.el.forEach(function (i) {
          if (blockArr.indexOf(i.tagName.toLocaleLowerCase()) === -1) {
            i.style.display = 'inline';
          } else {
            i.style.display = 'block';
          }
        });
      },
      hide: function hide(obj) {
        this.el.forEach(function (i) {
          i.style.display = "none";
        });
      },
      toggle: function toggle() {
        this.el.forEach(function (i) {
          if (i.style.display == "none") {
            $(i).show();
          } else {
            $(i).hide();
          }
        });
      },
      visible: function visible() {
        this.el.forEach(function (i) {
          i.style.visibility = "visible";
        });
      },
      hidden: function hidden() {
        this.el.forEach(function (i) {
          i.style.visibility = "hidden";
        });
      }
    };
  }, {}],
  6: [function (require, module, exports) {
    var eventType = {
      caches: {
        msf: {},
        set: function set(cb, proxyFn) {
          this.msf[(Math.random() * 1000000).toString()] = [cb, proxyFn];
        },
        get: function get(cb) {
          var result = null;

          for (var key in this.msf) {
            if (this.msf.hasOwnProperty(key)) {
              var val = this.msf[key][0];

              if (val == cb) {
                result = val;
              }
            }
          }

          return result;
        },
        remove: function remove(ele, e, cb) {
          var result = null;

          for (var key in this.msf) {
            if (this.msf.hasOwnProperty(key)) {
              var val = this.msf[key];

              if (val[0] == cb) {
                delete this.msf[key];
                ele.removeEventListener(e, val[1]);
              }
            }
          }
        }
      },
      bind: function bind(types, data, cb) {
        var _this7 = this;

        if (typeof types != "string") {
          return this;
        }

        if (data instanceof Function) {
          cb = data;
          data = undefined;
        }

        var proxyFn = function proxyFn(e) {
          if (_this7.caches.get(cb)) {
            cb(e, data);
          }
        }; //使用代理缓存事件监听函数函数


        this.caches.set(cb, proxyFn);
        this.el.forEach(function (ele) {
          ele.addEventListener(types, proxyFn);
        });
        return this;
      },
      unbind: function unbind(types, cb) {
        var _this8 = this;

        if (typeof types == "string" && cb instanceof Function) {
          this.el.forEach(function (ele) {
            //移除缓存的监听函数
            _this8.caches.remove(ele, types, cb);
          });
        }

        return this;
      },
      on: function on(types, selector, data, fn) {
        var _this9 = this;

        if (typeof types != "string") {
          return this;
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
            this.el.forEach(function (i) {
              i.addEventListener(types, function (e) {
                fn(e, data);
              });
            });
          } else {
            var strArr = selector.split(" ");
            var elArr = [];
            strArr.forEach(function (i) {
              var _elArr;

              (_elArr = elArr).push.apply(_elArr, _toConsumableArray(_this9.getDom(_this9.el, i, 0, [i])));
            });
            elArr.forEach(function (ele) {
              ele.addEventListener(types, function (e) {
                fn(e, data);
              });
            });

            var runListen = function runListen() {
              requestAnimationFrame(function () {
                setTimeout(function () {
                  var elArrNew = [];
                  strArr.forEach(function (i) {
                    elArrNew.push.apply(elArrNew, _toConsumableArray(_this9.getDom(_this9.el, i, 0, [i])));
                  });
                  elArrNew.forEach(function (j) {
                    if (!elArr.includes(j)) {
                      j.addEventListener(types, function (e) {
                        fn(e, data);
                      });
                    }
                  });
                  elArr = elArrNew;
                  runListen();
                }, 1000);
              });
            };

            runListen();
          }
        }

        return this;
      },
      one: function one(types, data, fn) {
        if (typeof types != "string") {
          return this;
        }

        if (data instanceof Function) {
          fn = data;
          data = undefined;
        }

        this.el.forEach(function (ele) {
          var proxyFn = function proxyFn(e) {
            fn(e, data);
            ele.removeEventListener(types, proxyFn);
          };

          ele.addEventListener(types, proxyFn);
        });
        return this;
      },
      toggleFn: function toggleFn(fn1, fn2) {
        this.el.forEach(function (ele) {
          var state = true;
          ele.addEventListener("click", function (e) {
            if (state) {
              fn1();
            } else {
              fn2();
            }

            state = !state;
          });
        });
        return this;
      }
    };
    var eventList = ["click", "blur", "change", "focus", "blur", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mouseover", "mouseup", "resize", "scroll"];
    eventList.forEach(function (e) {
      eventType[e] = function (cb) {
        if (cb instanceof Function) {
          this.el.forEach(function (ele) {
            ele.addEventListener(e, cb);
          });
        }

        return this;
      };
    });
    module.exports = eventType;
  }, {}],
  7: [function (require, module, exports) {
    module.exports = {
      /**
       *
       *
       * @param {string} classStr 
       * @returns this
       */
      addClass: function addClass(classStr) {
        if (!$.istype(classStr, "string")) {
          return this;
        }

        this.el.forEach(function (i) {
          if (!$(i).hasClass(classStr)) {
            if (i.className) {
              i.className += " " + classStr;
            } else {
              i.className = classStr;
            }
          }
        });
        return this;
      },
      //检测对象是否有哪个类名
      hasClass: function hasClass(classStr) {
        if (!$.istype(classStr, "string")) {
          return this;
        }

        if (this.el.length == 1) {
          var el = this.el[0];

          if (el.className && $.trim(el.className, 1) !== "") {
            var arr = el.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含

            return arr.indexOf(classStr) == -1 ? false : true;
          } else {
            return false;
          }
        } else {
          var elArr = this.el.filter(function (i) {
            if (i.className && $.trim(i.className, 1) !== "") {
              var arr = i.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含

              return arr.indexOf(classStr) == -1 ? false : true;
            } else {
              return false;
            }
          });
          return elArr;
        }
      },
      removeClass: function removeClass(classStr) {
        if (!$.istype(classStr, "string")) {
          return this;
        }

        this.el.forEach(function (i) {
          if ($(i).hasClass(classStr)) {
            var reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)');
            i.className = i.className.replace(reg, '');
          }
        });
        return this;
      },
      getClass: function getClass() {
        var arr = [];
        this.el.forEach(function (el) {
          if (el.className && $.trim(el.className, 1) !== "") {
            arr.push(el.className);
          }
        });
        return arr.length == 1 ? arr[0] : arr;
      },
      replaceClass: function replaceClass(newName, oldName) {
        if (!$.istype(classStr, "string")) {
          return this;
        }

        this.el.forEach(function (i) {
          $(i).removeClass(oldName);
          $(i).addClass(newName);
        });
        return this;
      },
      toggleClass: function toggleClass(classStr) {
        if (!$.istype(classStr, "string")) {
          return this;
        }

        this.el.forEach(function (i) {
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
        return this;
      },
      after: function after(str) {
        if ($.istype(str, "elements")) {
          this.el.forEach(function (i) {
            var parent = i.parentNode;
            var node = str.cloneNode(true);

            if (parent.lastChild == i) {
              parent.appendChild(node);
            } else {
              parent.insertBefore(node, i.nextSibling);
            }
          });
        } else if ($.istype(str, "string")) {
          this.el.forEach(function (i) {
            var el = document.createElement("div");
            el.innerHTML = str;
            var node = el.firstElementChild;
            var parent = i.parentNode;

            if (parent.lastChild == i) {
              parent.appendChild(node);
            } else {
              parent.insertBefore(node, i.nextSibling);
            }
          });
        }

        return this;
      },
      before: function before(str) {
        if ($.istype(str, "elements")) {
          this.el.forEach(function (i) {
            var node = str.cloneNode(true);
            var parent = i.parentNode;
            parent.insertBefore(node, i);
          });
        } else if ($.istype(str, "string")) {
          this.el.forEach(function (i) {
            var el = document.createElement("div");
            el.innerHTML = str;
            var node = el.firstElementChild;
            var parent = i.parentNode;

            if (parent.lastChild == i) {
              parent.appendChild(node);
            } else {
              parent.insertBefore(node, i);
            }
          });
        }

        return this;
      },
      append: function append(str) {
        if ($.istype(str, "elements")) {
          this.el.forEach(function (i) {
            var node = str.cloneNode(true);
            i.appendChild(node);
          });
        } else if ($.istype(str, "string")) {
          this.el.forEach(function (i) {
            var el = document.createElement("div");
            el.innerHTML = str;
            var node = el.firstElementChild;
            i.appendChild(node);
          });
        }

        return this;
      },
      prepend: function prepend(str) {
        if ($.istype(str, "elements")) {
          this.el.forEach(function (i) {
            var node = str.cloneNode(true);
            i.insertBefore(node, i.firstElementChild);
          });
        } else if ($.istype(str, "string")) {
          this.el.forEach(function (i) {
            var el = document.createElement("div");
            el.innerHTML = str;
            var node = el.firstElementChild;
            i.insertBefore(node, i.firstElementChild);
          });
        }

        return this;
      },
      empty: function empty() {
        this.el.forEach(function (i) {
          i.innerHTML = "";
        });
        return this;
      },
      remove: function remove() {
        this.el.forEach(function (i) {
          i.parentNode.removeChild(i);
        });
        return this;
      },
      clone: function clone() {
        if (this.el.length == 1) {
          return this.el[0].cloneNode(true);
        } else {
          return this.el.map(function (i) {
            return i.cloneNode(true);
          });
        }
      },
      attr: function attr(_attr, val) {
        if (_attr && $.istype(_attr, "string") && val && $.istype(val, "string")) {
          this.el.forEach(function (i) {
            i.setAttribute(_attr, val);
          });
          return this;
        } else if (_attr && $.istype(_attr, "string")) {
          var arr = [];
          this.el.forEach(function (i) {
            arr.push(i.getAttribute(_attr));
          });
          return arr.length == 1 ? arr[0] : arr;
        } else {
          var arr = [];
          this.el.forEach(function (i) {
            var keyArr = [];

            for (var key in i) {
              if (i[key]) {
                keyArr.push(_defineProperty({}, key, i[key]));
              }
            }

            arr.push(keyArr);
          });
          return arr.length == 1 ? arr[0] : arr;
        }
      },
      removeAttr: function removeAttr(attr) {
        if ($.istype(attr, "string")) {
          this.el.forEach(function (i) {
            i.removeAttribute(attr);
          });
        }

        return this;
      },
      //设置HTML内容
      html: function html(option) {
        if (option) {
          if (_typeof(option) == "object") {
            option = Object.prototype.toString.apply(option);
          }

          this.el.forEach(function (i) {
            i.innerHTML = option;
          });
          return this;
        } else {
          var resultArr = [];

          if (this.el.length == 1) {
            return this.el[0].innerHTML;
          } else {
            this.el.forEach(function (i) {
              resultArr.push(i.innerHTML);
            });
          }

          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }
      },
      //设置text内容
      text: function text(option) {
        if (_typeof(option) == "object") {
          option = Object.prototype.toString.apply(option);
        }

        if (option) {
          this.el.forEach(function (i) {
            i.innerHTML = option;
          });
        } else {
          var resultArr = [];
          this.el.forEach(function (i) {
            resultArr.push(i.innerHTML);
          });
          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      val: function val(option) {
        if (_typeof(option) == "object") {
          option = Object.prototype.toString.apply(option);
        }

        if (option) {
          this.el.forEach(function (i) {
            i.value = option;
          });
        } else {
          var resultArr = [];
          this.el.forEach(function (i) {
            resultArr.push(i.value);
          });
          return resultArr.length == 1 ? resultArr[0] : resultArr;
        }

        return this;
      },
      wrap: function wrap(str) {
        if ($.istype(str, "string")) {
          this.el.forEach(function (i) {
            var parentNode = i.parentNode;
            var el = document.createElement("div");
            el.innerHTML = str;
            var contentNode = el.firstElementChild;
            contentNode.appendChild(i);
            console.log(parentNode, contentNode);
            parentNode.appendChild(contentNode);
          });
        }

        return this;
      }
    };
  }, {}],
  8: [function (require, module, exports) {
    module.exports = {
      tap: function tap(cb) {
        var start = void 0,
            end = void 0,
            state = true;
        this.el.forEach(function (element) {
          element.addEventListener("touchstart", handle);
          element.addEventListener("touchmove", handle);
          element.addEventListener("touchend", handle);
        });

        function handle(e) {
          switch (e.type) {
            case "touchstart":
              {
                start = new Date().getTime();
                state = true;
              }
              break;

            case "touchmove":
              {
                state = false;
              }
              break;

            case "touchend":
              {
                end = new Date().getTime();

                if (end - start <= 300 && state) {
                  cb(e);
                }
              }
              break;
          }
        }
      },
      longtap: function longtap(cb) {
        var time = void 0;
        this.el.forEach(function (element) {
          element.addEventListener("touchstart", handle);
          element.addEventListener("touchmove", handle);
          element.addEventListener("touchend", handle);
        });

        function handle(e) {
          switch (e.type) {
            case "touchstart":
              {
                time = setTimeout(cb, 300);
              }
              break;

            case "touchmove":
              {
                clearTimeout(time);
              }
              break;

            case "touchend":
              {
                clearTimeout(time);
              }
              break;
          }
        }
      },
      move: function move(type, cb) {
        var startX = void 0,
            endX = void 0,
            startY = void 0,
            endY = void 0;
        this.el.forEach(function (element) {
          element.addEventListener("touchstart", handle);
          element.addEventListener("touchend", handle);
        });

        function handle(e) {
          switch (e.type) {
            case "touchstart":
              {
                startX = e.changedTouches[0].pageX;
                startY = e.changedTouches[0].pageY;
              }
              break;

            case "touchend":
              {
                endX = e.changedTouches[0].pageX;
                endY = e.changedTouches[0].pageY;

                switch (type) {
                  case "moveLeft":
                    {
                      if (startX - endX > 25) {
                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {
                          cb(e);
                        }
                      }
                    }
                    break;

                  case "moveRight":
                    {
                      if (endX - startX > 25) {
                        if (Math.abs(startY - endY) < Math.abs(startX - endX)) {
                          cb(e);
                        }
                      }
                    }
                    break;

                  case "moveTop":
                    {
                      if (startY - endY > 25) {
                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                          cb(e);
                        }
                      }
                    }
                    break;

                  case "moveBottom":
                    {
                      if (endY - startY > 25) {
                        if (Math.abs(startY - endY) > Math.abs(startX - endX)) {
                          cb(e);
                        }
                      }
                    }
                    break;

                  default:
                    {
                      var y = endY - startY;
                      var x = endX - startX;
                      cb(e, x, y);
                    }
                }
              }
              break;
          }
        }
      },
      moveLeft: function moveLeft(cb) {
        this.move("moveLeft", cb);
        return this;
      },
      moveRight: function moveRight(cb) {
        this.move("moveRight", cb);
        return this;
      },
      moveTop: function moveTop(cb) {
        this.move("moveTop", cb);
        return this;
      },
      moveBottom: function moveBottom(cb) {
        this.move("moveBottom", cb);
        return this;
      }
    };
  }, {}],
  9: [function (require, module, exports) {
    module.exports = {
      //图片没加载出来时用一张图片代替
      aftLoadImg: function aftLoadImg(obj, url, errorUrl, cb) {
        var oImg = new Image();
        oImg.src = url;

        oImg.onload = function () {
          obj.src = oImg.src;

          if (cb && $.istype(cb, 'function')) {
            cb(obj);
          }
        };

        oImg.onerror = function () {
          obj.src = errorUrl;

          if (cb && $.istype(cb, 'function')) {
            cb(obj);
          }
        };
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
      loadImg: function loadImg(num, errorUrl) {
        var _num = num || 0,
            _errorUrl = errorUrl || null;

        var oImgLoad = this.el;

        for (var i = 0, len = oImgLoad.length; i < len; i++) {
          if (document.documentElement.clientHeight + document.documentElement.scrollTop > oImgLoad[i].offsetTop - _num && !oImgLoad[i].isLoad) {
            //记录图片是否已经加载
            oImgLoad[i].isLoad = true;

            if (oImgLoad[i].dataset) {
              this.aftLoadImg(oImgLoad[i], oImgLoad[i].dataset.src, _errorUrl, function (o) {
                console.log(o, "加载完毕");
              });
            } else {
              this.aftLoadImg(oImgLoad[i], oImgLoad[i].getAttribute("data-src"), _errorUrl, function (o) {
                console.log(o, "加载完毕");
              });
            }
          }
        }

        return this;
      },
      //函数节流
      delayFn: function delayFn(fn, delay, mustDelay) {
        var timer = null;
        var t_start;
        return function () {
          var context = this,
              args = arguments,
              t_cur = +new Date(); //先清理上一次的调用触发（上一次调用触发事件不执行）

          clearTimeout(timer); //如果不存触发时间，那么当前的时间就是触发时间

          if (!t_start) {
            t_start = t_cur;
          } //如果当前时间-触发时间大于最大的间隔时间（mustDelay），触发一次函数运行函数


          if (t_cur - t_start >= mustDelay) {
            fn.apply(context, args);
            t_start = t_cur;
          } //否则延迟执行
          else {
              timer = setTimeout(function () {
                fn.apply(context, args);
              }, delay);
            }
        };
      }
    };
  }, {}],
  10: [function (require, module, exports) {
    function IndexHandle(domArr, strOrigin) {
      //针对索引操作
      //获取：后的值
      var eArgReg = function eArgReg(type) {
        return new RegExp("(?<=:)".concat(type, "\\(\\d+\\)"), "g");
      }; //获取index索引


      var indexArgReg = function indexArgReg(type) {
        return new RegExp("(?<=".concat(type, "\\()\\d+(?=\\))"), "g");
      };

      if (eArgReg("eq").test(strOrigin)) {
        var eArg = eArgReg("eq").exec(strOrigin);
        var eeArg = eArg ? eArg[0] : "";
        var indexObj = indexArgReg("eq").exec(eeArg);
        var index = indexObj[0];
        var lastIndex = parseInt(index) + 1; // console.log(domArr.slice(index, lastIndex))

        return domArr.slice(index, lastIndex);
      } else if (eArgReg("gt").test(strOrigin)) {
        var eArg = eArgReg("gt").exec(strOrigin);
        var eeArg = eArg ? eArg[0] : "";
        var indexObj = indexArgReg("gt").exec(eeArg);
        var index = indexObj[0];
        return domArr.slice(index);
      } else if (eArgReg("lt").test(strOrigin)) {
        var eArg = eArgReg("lt").exec(strOrigin);
        var eeArg = eArg ? eArg[0] : "";
        var indexObj = indexArgReg("lt").exec(eeArg);
        var index = indexObj[0];
        return domArr.slice(0, index);
      } else {
        return domArr;
      }
    } //非索引dom


    function normalHandle(domArr, arg) {
      switch (arg) {
        case "even":
          {
            return domArr.filter(function (i, index) {
              if (index % 2 == 0) {
                return true;
              } else {
                return false;
              }
            });
          }

        case "odd":
          {
            return domArr.filter(function (i, index) {
              if (index % 2 !== 0) {
                return true;
              } else {
                return false;
              }
            });
          }

        case "last":
          {
            return domArr.slice(domArr.length - 1, domArr.length);
          }

        case "first":
          {
            return domArr.slice(0, 1);
          }

        case "hidden":
          {
            return domArr.filter(function (i) {
              if (i.style.visibility == "hidden") {
                return true;
              } else {
                return false;
              }
            });
          }

        case "visible":
          {
            return domArr.filter(function (i) {
              if (i.style.visibility == "visible") {
                return true;
              } else {
                return false;
              }
            });
          }

        case "show":
          {
            return domArr.filter(function (i) {
              if (i.style.display == "block" || i.style.display == "inline-block") {
                return true;
              } else {
                return false;
              }
            });
          }

        case "hide":
          {
            return domArr.filter(function (i) {
              if (i.style.display == "none") {
                return true;
              } else {
                return false;
              }
            });
          }

        case "empty":
          {
            return domArr.filter(function (i) {
              if (i.innerHTML == "") {
                return true;
              } else {
                return false;
              }
            });
          }
      }
    } //非索引input操作


    function inputType(domArr, arg) {
      return domArr.filter(function (i) {
        if (i.tagName == "INPUT" && i.type == arg || i.tagName == "INPUT" && i[arg]) {
          return true;
        } else {
          return false;
        }
      });
    } //获取dom


    function getDom(rootEl, el, num, strArr) {
      if (num == strArr.length - 1) {
        var everyRootArr = [];
        rootEl.forEach(function (element) {
          everyRootArr = [].concat(_toConsumableArray(everyRootArr), _toConsumableArray(element.querySelectorAll(el)));
        });
        return _toConsumableArray(everyRootArr);
      } else {
        var _everyRootArr = [];
        rootEl.forEach(function (element) {
          _everyRootArr = [].concat(_toConsumableArray(_everyRootArr), _toConsumableArray(element.querySelectorAll(el)));
        });
        num++;
        return getDom(_everyRootArr, strArr[num], num, strArr);
      }
    } //属性选择器操作


    function AttrHandle(domArr, strOrigin) {
      //针对索引操作
      //获取：后的值
      var eArgReg = function eArgReg(type) {
        return new RegExp("(?<=\\[)\\w+".concat(type, "\\w+(?=\\])"), "g");
      };

      if (eArgReg("=").test(strOrigin)) {
        var eArg = eArgReg("=").exec(strOrigin);
        var eeArg = eArg ? eArg[0] : "";
        var valArr = eeArg.split("=");
        return domArr.filter(function (i, index) {
          if (i[valArr[0] == "class" ? "className" : valArr[0]] == valArr[1]) {
            return true;
          } else {
            return false;
          }
        });
      } else if (eArgReg("!=").test(strOrigin)) {
        var eArg = eArgReg("!=").exec(strOrigin);
        var eeArg = eArg ? eArg[0] : "";
        var valArr = eeArg.split("!=");
        return domArr.filter(function (i, index) {
          if (i[valArr[0] == "class" ? "className" : valArr[0]] != valArr[1]) {
            return true;
          } else {
            return false;
          }
        });
      } else {
        return domArr;
      }
    }

    module.exports = {
      getDom: getDom,
      init: function init(root, strOrigin) {
        //判断传入的是dom节点还是字符串
        if (strOrigin && strOrigin.constructor == String) {
          //判断是否是索引选择器
          var reg = /\(\d+\)/g; //匹配是否是属性选择器

          var attrReg = /\[\S*\]/g; //匹配伪类选择器

          var replaceReg = /:\w+/g;

          if (attrReg.test(strOrigin)) {
            var str = strOrigin.replace(attrReg, "");
            var strArr = str.split(" "); //获取所有的dom集合

            var domArr = getDom([root], strArr[0], 0, strArr);
            return AttrHandle(domArr, strOrigin); // console.log(domArr)
          } else if (reg.test(strOrigin)) {
            var replaceReg = /:\S*/g;
            var str = strOrigin.replace(replaceReg, "");
            var strArr = str.split(" "); //获取所有的dom集合

            var domArr = getDom([root], strArr[0], 0, strArr);
            return IndexHandle(domArr, strOrigin);
          } else if (replaceReg.test(strOrigin)) {
            var argReg = /(?<=:)\w+/g;
            var str = strOrigin.replace(replaceReg, "");
            var arg = argReg.exec(strOrigin)[0];
            var strArr = str.split(" "); //获取所有的dom集合

            var domArr = getDom([root], strArr[0], 0, strArr); //区分input类型

            var typeArray = ["input", "text", "password", "radio", "checkbox", "submit", "reset", "button", "image", "file", "enabled", "disabled", "selected", "checked"];

            if (typeArray.includes(arg)) {
              return inputType(domArr, arg);
            } else {
              return normalHandle(domArr, arg);
            }
          } else {
            var strArr = strOrigin.split(" "); //获取所有的dom集合

            return getDom([root], strArr[0], 0, strArr);
          }
        } else if (Object.prototype.toString.call(strOrigin).indexOf('HTML') !== -1) {
          return [strOrigin];
        } else {
          return [root];
        }
      }
    };
  }, {}],
  11: [function (require, module, exports) {
    module.exports = {
      /*数组*/
      //数组去重
      removeRepeatArray: function removeRepeatArray(arr, key) {
        var arrResult = [];

        if (this.istype(arr[0], "object") && this.istype(key, "string")) {
          for (var i = 0; i < arr.length; i++) {
            var state = true;

            for (var j = 0; j < arrResult.length; j++) {
              if (arr[i][key] == arrResult[j][key]) {
                state = false;
              }
            }

            if (state) {
              arrResult.push(arr[i]);
            }
          }
        } else {
          arrResult = arr.filter(function (item, index, self) {
            return self.indexOf(item) === index;
          });
        }

        return arrResult;
      },
      //数组顺序打乱
      upsetArr: function upsetArr(arr) {
        return arr.sort(function () {
          return Math.random() - 0.5;
        });
      },
      //数组最大值
      maxArr: function maxArr(arr) {
        return Math.max.apply(null, arr);
      },
      //数组最小值
      minArr: function minArr(arr) {
        return Math.min.apply(null, arr);
      },
      //数组求和
      sumArr: function sumArr(arr) {
        return arr.reduce(function (pre, cur) {
          return pre + cur;
        });
      },
      //数组平均值
      covArr: function covArr(arr) {
        return this.sumArr(arr) / arr.length;
      },
      //从数组中随机获取元素
      randomOne: function randomOne(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      },
      //回数组（字符串）一个元素出现的次数
      getEleCount: function getEleCount(obj, ele) {
        var num = 0;

        for (var i = 0, len = obj.length; i < len; i++) {
          if (ele === obj[i]) {
            num++;
          }
        }

        return num;
      },
      //删除数组
      removeArrayForValue: function removeArrayForValue(arr, val, type) {
        return arr.filter(function (item) {
          return type ? item.indexOf(val) === -1 : item !== val;
        });
      },
      //获取对象数组某些项
      getOptionArray: function getOptionArray(arr, keys, val) {
        var newArr = [];

        if (!keys) {
          return arr;
        }

        var _keys = keys.split(',');

        if (val) {
          var _vals = val;
          newArr = arr.filter(function (i) {
            var state = _keys.every(function (j, index) {
              if (i[j] == _vals[index]) {
                return true;
              } else {
                return false;
              }
            });

            return state;
          });
          return newArr;
        }

        if (_keys.length === 1) {
          for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i][keys]);
          }

          return newArr;
        }

        var newArrOne = {};

        for (var i = 0, len = arr.length; i < len; i++) {
          newArrOne = {};

          for (var j = 0, len1 = _keys.length; j < len1; j++) {
            newArrOne[_keys[j]] = arr[i][_keys[j]];
          }

          newArr.push(newArrOne);
        }

        return newArr;
      },
      //排除数组某些项
      //var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
      //filterOptionArray(arr,'a')
      //result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
      //filterOptionArray(arr,'a,c')
      //result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
      filterOptionArray: function filterOptionArray(arr, keys) {
        var newArr = [];

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

        return newArr;
      },
      //对象数组的排序
      arraySort: function arraySort(arr, key, type) {
        var _arr = arr.slice(0);

        if (!key) {
          _arr.sort(function (a, b) {
            if (type) {
              return a - b;
            } else {
              return b - a;
            }
          });
        } else {
          _arr.sort(function (n1, n2) {
            if (type) {
              return n1[key] - n2[key];
            } else {
              return n2[key] - n1[key];
            }
          });
        }

        return _arr;
      },
      //数组扁平化
      steamroller: function steamroller(arr) {
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
    };
  }, {}],
  12: [function (require, module, exports) {
    module.exports = {
      //清除对象中值为空的属性
      //filterParams({a:"",b:null,c:"010",d:123})
      //Object {c: "010", d: 123}
      filterParams: function filterParams(obj) {
        var _newPar = {};

        for (var key in obj) {
          if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
            _newPar[key] = obj[key];
          }
        }

        return _newPar;
      },
      //对象的扁平化处理
      steamObject: function steamObject(obj) {
        var newObj = {},
            _this = this;

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            var element = obj[key];

            if (_this.istype(element, "object")) {
              var secObj = this.steamObject(element);

              for (var keys in secObj) {
                if (secObj.hasOwnProperty(keys)) {
                  newObj[keys] = secObj[keys];
                }
              }
            } else {
              newObj[key] = element;
            }
          }
        }

        return newObj;
      }
    };
  }, {}],
  13: [function (require, module, exports) {
    module.exports = {
      istype: function istype(o, type) {
        if (type) {
          var _type = type.toLowerCase();
        }

        switch (_type) {
          case 'string':
            return Object.prototype.toString.call(o) === '[object String]';

          case 'number':
            return Object.prototype.toString.call(o) === '[object Number]';

          case 'boolean':
            return Object.prototype.toString.call(o) === '[object Boolean]';

          case 'undefined':
            return Object.prototype.toString.call(o) === '[object Undefined]';

          case 'null':
            return Object.prototype.toString.call(o) === '[object Null]';

          case 'function':
            return Object.prototype.toString.call(o) === '[object Function]';

          case 'array':
            return Object.prototype.toString.call(o) === '[object Array]';

          case 'object':
            return Object.prototype.toString.call(o) === '[object Object]';

          case 'nan':
            return isNaN(o);

          case 'elements':
            return Object.prototype.toString.call(o).indexOf('HTML') !== -1;

          default:
            // return Object.prototype.toString.call(o)
            return false;
        }
      }
    };
  }, {}],
  14: [function (require, module, exports) {
    module.exports = {
      trim: function trim(str, type) {
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
      changeCase: function changeCase(str, type) {
        function ToggleCase(str) {
          var itemText = "";
          str.split("").forEach(function (item) {
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
            return str.replace(/\b\w+\b/g, function (word) {
              return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });

          case 2:
            return str.replace(/\b\w+\b/g, function (word) {
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
      repeatStr: function repeatStr(str, count) {
        var text = '';

        for (var i = 0; i < count; i++) {
          text += str;
        }

        return text;
      },
      replaceAll: function replaceAll(str, AFindText, ARepText) {
        var raRegExp = new RegExp(AFindText, "g");
        return str.replace(raRegExp, ARepText);
      },
      //字符替换*
      replaceStr: function replaceStr(str, regArr, type, ARepText) {
        var regtext = '',
            Reg = null,
            replaceText = ARepText || '*'; //replaceStr('18819322663',[3,5,3],0)
        //result：188*****663

        if (regArr.length === 3 && type === 0) {
          regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})';
          Reg = new RegExp(regtext);
          var replaceCount = this.repeatStr(replaceText, regArr[1]);
          return str.replace(Reg, '$1' + replaceCount + '$2');
        } //replaceStr('asdasdasdaa',[3,5,3],1)
        //result：***asdas***
        else if (regArr.length === 3 && type === 1) {
            regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}';
            Reg = new RegExp(regtext);
            var replaceCount1 = this.repeatStr(replaceText, regArr[0]);
            var replaceCount2 = this.repeatStr(replaceText, regArr[2]);
            return str.replace(Reg, replaceCount1 + '$1' + replaceCount2);
          } //replaceStr('1asd88465asdwqe3',[5],0)
          //result：*****8465asdwqe3
          else if (regArr.length === 1 && type === 0) {
              regtext = '(^\\w{' + regArr[0] + '})';
              Reg = new RegExp(regtext);
              var replaceCount = this.repeatStr(replaceText, regArr[0]);
              return str.replace(Reg, replaceCount);
            } //replaceStr('1asd88465asdwqe3',[5],1,'+')
            //result："1asd88465as+++++"
            else if (regArr.length === 1 && type === 1) {
                regtext = '(\\w{' + regArr[0] + '}$)';
                Reg = new RegExp(regtext);
                var replaceCount = this.repeatStr(replaceText, regArr[0]);
                return str.replace(Reg, replaceCount);
              }
      },
      checkType: function checkType(str, type) {
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
      checkPwd: function checkPwd(str) {
        var nowLv = 0;

        if (str.length < 6) {
          return nowLv;
        }

        if (/[0-9]/.test(str)) {
          nowLv++;
        }

        if (/[a-z]/.test(str)) {
          nowLv++;
        }

        if (/[A-Z]/.test(str)) {
          nowLv++;
        }

        if (/[\.|-|_]/.test(str)) {
          nowLv++;
        }

        return nowLv;
      },
      randomWord: function randomWord(count) {
        return Math.random().toString(count).substring(2);
      },
      countStr: function countStr(str, strSplit) {
        return str.split(strSplit).length - 1;
      },
      filterStr: function filterStr(str, type, restr, spstr) {
        var typeArr = type.split(','),
            _str = str;

        for (var i = 0, len = typeArr.length; i < len; i++) {
          //是否是过滤特殊符号
          if (typeArr[i] === 'special') {
            var pattern,
                regText = '$()[]{}?\|^*+./\"\'+'; //是否有哪些特殊符号需要保留

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

              _regText += ']';
              pattern = new RegExp(_regText, 'g');
            } else {
              pattern = new RegExp("[^0-9A-Za-z\\s]", 'g');
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
      formatText: function formatText(str, size, delimiter) {
        var _size = size || 3,
            _delimiter = delimiter || ',';

        var regText = '\\B(?=(\\w{' + _size + '})+(?!\\w))';
        var reg = new RegExp(regText, 'g');
        return str.replace(reg, _delimiter);
      },
      longestWord: function longestWord(str, splitType) {
        var _splitType = splitType || /\s+/g,
            _max = 0,
            result = null;

        var strArr = str.split(_splitType);
        strArr.forEach(function (item) {
          if (_max < item.length) {
            _max = item.length;
            result = item;
          }
        });
        return result;
      },
      titleCaseUp: function titleCaseUp(str, splitType) {
        var _splitType = splitType || /\s+/g;

        var strArr = str.split(_splitType),
            result = "",
            _this = this;

        strArr.forEach(function (item) {
          result += _this.changeCase(item, 1) + ' ';
        });
        return this.trim(result, 4);
      },
      // 原生 JavaScript 实现字符串长度截取
      cutstr: function cutstr(str, len) {
        var temp;
        var icount = 0;
        var patrn = /[^\x00-\xff]/;
        var strre = "";

        for (var i = 0; i < str.length; i++) {
          if (icount < len - 1) {
            temp = str.substr(i, 1);

            if (patrn.exec(temp) == null) {
              icount = icount + 1;
            } else {
              icount = icount + 2;
            }

            strre += temp;
          } else {
            break;
          }
        }

        return strre + "...";
      },
      //创建正则字符
      createKeyExp: function createKeyExp(strArr) {
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
      findKey: function findKey(str, key, el) {
        var arr = null,
            regStr = null,
            content = null,
            Reg = null,
            _el = el || 'span';

        arr = key.split(/\s+/); //alert(regStr); //    如：(前端|过来)

        regStr = this.createKeyExp(arr);
        content = str; //alert(Reg);//        /如：(前端|过来)/g

        Reg = new RegExp(regStr, "g"); //过滤html标签 替换标签，往关键字前后加上标签

        content = content.replace(/<\/?[^>]*>/g, '');
        return content.replace(Reg, "<" + _el + ">$1</" + _el + ">");
      },
      // 转码表
      table: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'],
      UTF16ToUTF8: function UTF16ToUTF8(str) {
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
            var byte1 = 0xC0 | code >> 6 & 0x1F; // 10xxxxxx

            var byte2 = 0x80 | code & 0x3F;
            res.push(String.fromCharCode(byte1), String.fromCharCode(byte2));
          } else if (code >= 0x0800 && code <= 0xFFFF) {
            // 三字节
            // U+00000800 – U+0000FFFF  1110xxxx 10xxxxxx 10xxxxxx
            // 1110xxxx
            var byte1 = 0xE0 | code >> 12 & 0x0F; // 10xxxxxx

            var byte2 = 0x80 | code >> 6 & 0x3F; // 10xxxxxx

            var byte3 = 0x80 | code & 0x3F;
            res.push(String.fromCharCode(byte1), String.fromCharCode(byte2), String.fromCharCode(byte3));
          } else if (code >= 0x00010000 && code <= 0x001FFFFF) {// 四字节
            // U+00010000 – U+001FFFFF  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
          } else if (code >= 0x00200000 && code <= 0x03FFFFFF) {// 五字节
            // U+00200000 – U+03FFFFFF  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
          } else
            /** if (code >= 0x04000000 && code <= 0x7FFFFFFF)*/
            {// 六字节
              // U+04000000 – U+7FFFFFFF  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            }
        }

        return res.join('');
      },
      UTF8ToUTF16: function UTF8ToUTF16(str) {
        var res = [],
            len = str.length;
        var i = 0;

        for (var i = 0; i < len; i++) {
          var code = str.charCodeAt(i); // 对第一个字节进行判断

          if ((code >> 7 & 0xFF) == 0x0) {
            // 单字节
            // 0xxxxxxx
            res.push(str.charAt(i));
          } else if ((code >> 5 & 0xFF) == 0x6) {
            // 双字节
            // 110xxxxx 10xxxxxx
            var code2 = str.charCodeAt(++i);
            var byte1 = (code & 0x1F) << 6;
            var byte2 = code2 & 0x3F;
            var utf16 = byte1 | byte2;
            res.push(Sting.fromCharCode(utf16));
          } else if ((code >> 4 & 0xFF) == 0xE) {
            // 三字节
            // 1110xxxx 10xxxxxx 10xxxxxx
            var code2 = str.charCodeAt(++i);
            var code3 = str.charCodeAt(++i);
            var byte1 = code << 4 | code2 >> 2 & 0x0F;
            var byte2 = (code2 & 0x03) << 6 | code3 & 0x3F;
            utf16 = (byte1 & 0x00FF) << 8 | byte2;
            res.push(String.fromCharCode(utf16));
          } else if ((code >> 3 & 0xFF) == 0x1E) {// 四字节
            // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
          } else if ((code >> 2 & 0xFF) == 0x3E) {// 五字节
            // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
          } else
            /** if (((code >> 1) & 0xFF) == 0x7E)*/
            {// 六字节
              // 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
            }
        }

        return res.join('');
      },
      encode: function encode(str) {
        if (!str) {
          return '';
        }

        var utf8 = this.UTF16ToUTF8(str); // 转成UTF8

        var i = 0; // 遍历索引

        var len = utf8.length;
        var res = [];

        while (i < len) {
          var c1 = utf8.charCodeAt(i++) & 0xFF;
          res.push(this.table[c1 >> 2]); // 需要补2个=

          if (i == len) {
            res.push(this.table[(c1 & 0x3) << 4]);
            res.push('==');
            break;
          }

          var c2 = utf8.charCodeAt(i++); // 需要补1个=

          if (i == len) {
            res.push(this.table[(c1 & 0x3) << 4 | c2 >> 4 & 0x0F]);
            res.push(this.table[(c2 & 0x0F) << 2]);
            res.push('=');
            break;
          }

          var c3 = utf8.charCodeAt(i++);
          res.push(this.table[(c1 & 0x3) << 4 | c2 >> 4 & 0x0F]);
          res.push(this.table[(c2 & 0x0F) << 2 | (c3 & 0xC0) >> 6]);
          res.push(this.table[c3 & 0x3F]);
        }

        return res.join('');
      },
      decode: function decode(str) {
        if (!str) {
          return '';
        }

        var len = str.length;
        var i = 0;
        var res = [];

        while (i < len) {
          var code1 = this.table.indexOf(str.charAt(i++));
          var code2 = this.table.indexOf(str.charAt(i++));
          var code3 = this.table.indexOf(str.charAt(i++));
          var code4 = this.table.indexOf(str.charAt(i++));
          var c1 = code1 << 2 | code2 >> 4;
          var c2 = (code2 & 0xF) << 4 | code3 >> 2;
          var c3 = (code3 & 0x3) << 6 | code4;
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
    };
  }, {}],
  15: [function (require, module, exports) {
    module.exports = {
      //到某一个时间的倒计时
      getEndTime: function getEndTime(endTime) {
        var startDate = new Date(); //开始时间，当前时间

        var endDate = new Date(endTime); //结束时间，需传入时间参数

        var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数

        var d = 0,
            h = 0,
            m = 0,
            s = 0;

        if (t >= 0) {
          d = Math.floor(t / 1000 / 3600 / 24);
          h = Math.floor(t / 1000 / 60 / 60 % 24);
          m = Math.floor(t / 1000 / 60 % 60);
          s = Math.floor(t / 1000 % 60);
          return [d, h, m, s];
        } else {
          return [];
        }
      },
      //获取当前时间
      getFormetTime: function getFormetTime(fmt, time) {
        //author: meizz
        var date = time ? new Date(time) : new Date();
        var o = {
          "M+": date.getMonth() + 1,
          //月份 
          "d+": date.getDate(),
          //日 
          "h+": date.getHours(),
          //小时 
          "m+": date.getMinutes(),
          //分 
          "s+": date.getSeconds(),
          //秒 
          "q+": Math.floor((date.getMonth() + 3) / 3),
          //季度 
          "S": date.getMilliseconds() //毫秒 

        };

        if (/(y+)/.test(fmt)) {
          //RegExp.$1返回上一次正则匹配结果中的子表达式结果，这里是yyyy
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
          if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
          }
        }

        return fmt;
      },
      //生成唯一数
      generateUUID: function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return this.encode(uuid);
      },
      //随进产生颜色
      randomColor: function randomColor() {
        //randomNumber是下面定义的函数
        //写法1
        //return 'rgb(' + this.randomNumber(255) + ',' + this.randomNumber(255) + ',' + this.randomNumber(255) + ')';
        //写法2
        return '#' + Math.random().toString(16).substring(2).substr(0, 6); //写法3
        //var color='#',_index=this.randomNumber(15);
        //for(var i=0;i<6;i++){
        //color+='0123456789abcdef'[_index];
        //}
        //return color;
      },
      //随机返回一个范围的数字
      randomNumber: function randomNumber(n1, n2) {
        //randomNumber(5,10)
        //返回5-10的随机整数，包括5，10
        if (arguments.length === 2) {
          return Math.round(n1 + Math.random() * (n2 - n1));
        } //randomNumber(10)
        //返回0-10的随机整数，包括0，10
        else if (arguments.length === 1) {
            return Math.round(Math.random() * n1);
          } //randomNumber()
          //返回0-255的随机整数，包括0，255
          else {
              return Math.round(Math.random() * 255);
            }
      },
      //获取url参数
      setUrlPrmt: function setUrlPrmt(obj) {
        var _rs = [];

        for (var p in obj) {
          if (obj[p] != null && obj[p] != '') {
            _rs.push(p + '=' + obj[p]);
          }
        }

        return _rs.join('&');
      },
      getUrlPrmt: function getUrlPrmt(url) {
        url = url ? url : "";

        var _pa = url.substring(url.indexOf('?') + 1),
            _arrS = _pa.split('&'),
            _rs = {};

        for (var i = 0, _len = _arrS.length; i < _len; i++) {
          var pos = _arrS[i].indexOf('=');

          if (pos == -1) {
            continue;
          }

          var name = _arrS[i].substring(0, pos); // value = window.decodeURIComponent(_arrS[i].substring(pos + 1));


          _rs[name] = _arrS[i].substring(pos + 1);
        }

        return _rs;
      },
      //
      upDigit: function upDigit(n) {
        var fraction = ['角', '分', '厘'];
        var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
        var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
        var head = n < 0 ? '欠人民币' : '人民币';
        n = Math.abs(n);
        var s = '';

        for (var i = 0; i < fraction.length; i++) {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }

        s = s || '整';
        n = Math.floor(n);

        for (var i = 0; i < unit[0].length && n > 0; i++) {
          var p = '';

          for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }

          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s; //s = p + unit[0][i] + s;
        }

        return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
      }
    };
  }, {}],
  16: [function (require, module, exports) {
    (function (factory) {
      // var root = typeof self == 'object' && self.self === self && self ||
      // typeof global == 'object' && global.global === global && global ||this||global;
      // root.$=factory()
      // console.log(Object.prototype.toString.call(self)=="[object Window]")
      // console.log(self.self === self)
      //浏览器环境
      // console.log(Object.prototype.toString.call(global))
      try {
        if (Object.prototype.toString.call(self) == "[object Window]") {
          window.$ = factory();
        }
      } catch (error) {}
    })(function () {
      // dom操作相关
      var d_selector = require("./core/dom/d_selector"); //选择器


      var d_event = require("./core/dom/d_event"); //dom事件监听


      var d_html = require("./core/dom/d_html"); //dom文本操作


      var d_css = require("./core/dom/d_css"); //dom文本操作


      var d_effect = require("./core/dom/d_effect");

      var d_phoneEvent = require("./core/dom/d_phoneEvent"); //dom移动端投产事件


      var d_each = require("./core/dom/d_each"); //dom遍历相关事件


      var d_ajax = require("./core/dom/d_ajax"); //ajax的使用


      var d_plugin = require("./core/dom/d_plugin"); //dom相关插件
      // //methodsExtents


      var arrayMethods = require("./core/methodsExtends/array");

      var stringMethods = require("./core/methodsExtends/string");

      var objectMethods = require("./core/methodsExtends/object");

      var pluginMethods = require("./core/methodsExtends/plugin"); // //bom


      var bomMethods = require("./core/bom/bom"); // //other


      var otherMethods = require("./core/other");

      function heiGo(elStr) {
        this.el = heiGo.prototype.init(document, elStr); // console.log(this.el)
      } //实例方法


      heiGo.prototype = Object.assign(d_selector, d_event, d_phoneEvent, d_html, d_effect, d_css, d_each, d_ajax, d_plugin);

      function $(str) {
        return new heiGo(str);
      } //静态方法挂载


      Object.assign($, pluginMethods, arrayMethods, objectMethods, stringMethods, bomMethods, otherMethods, stringMethods);
      return $;
    });
  }, {
    "./core/bom/bom": 1,
    "./core/dom/d_ajax": 2,
    "./core/dom/d_css": 3,
    "./core/dom/d_each": 4,
    "./core/dom/d_effect": 5,
    "./core/dom/d_event": 6,
    "./core/dom/d_html": 7,
    "./core/dom/d_phoneEvent": 8,
    "./core/dom/d_plugin": 9,
    "./core/dom/d_selector": 10,
    "./core/methodsExtends/array": 11,
    "./core/methodsExtends/object": 12,
    "./core/methodsExtends/plugin": 13,
    "./core/methodsExtends/string": 14,
    "./core/other": 15
  }]
}, {}, [16]);