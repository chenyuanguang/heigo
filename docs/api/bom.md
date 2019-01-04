---
sidebar: auto
---

# API 参考

## 浏览器bom相关的方法

### $.getFontSize()
> 根据设计图计算rem值
* <font size="3">**参数：**</font>

  - `arg:Number`

* <font size="3">**返回值：无**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，传入的值为设计图的宽度，如设计图为750px宽度，传入750，后续设计图中100px等于1rem;

```javascript
    //demo1:
    $.getFontSize(750)
    //参数为设计图的宽度
```

### $.setCookie()
> 设置cookie
* <font size="3">**参数：**</font>

  - `name:string`
  - `value:string`
  - `day:Number`

* <font size="3">**返回值：无**</font>

* <font size="3">**用法：**</font>
  - 第一个参数为cookie的键名
  - 第二个参数为cookie的键值
  - 第三个参数为cookie的生效时间

```javascript
    //demo1:
    $.setCookie("id","123",20)
    //设置id为123，有效期为20天
```

### $.getCookie()
> 获取cookie的值
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，传入的值为cookie的键名

```javascript
    //demo1:
    $.getCookie("id")
    //返回id的value值
```

### $.removeCookie()
> 删除cookie的值
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：无**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，传入的值为cookie的键名

```javascript
    //demo1:
    $.removeCookie("id")
    //参数为设计图的宽度
```


### $.browserInfo()
> 删除cookie的值
* <font size="3">**参数：**</font>

  - `arg:string`

* <font size="3">**返回值：Boolen || Object**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为选填项，传入的值为将要检测的手机类型

```javascript
    //demo1:
    $.browserInfo("android")
    //false
```

