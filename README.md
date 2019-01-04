# heigo 
> 版本 `@heigo` 1.0.4.

## 介绍：
> 集成jquery所有的常用方法,封装bom相关的一系列函数
> 封装常用的移动端事件
> 集成前端开发过程中常用的插件
> 针对字符串，数组，对象进行了方法的扩展，在项目开发可以更加专注业务

## 作者：

>陈元广


## 下载安装

```bash

    npm install -g heigo

```

## 安装

### 直接下载 / CDN 引用

[https://unpkg.com/heigo](https://unpkg.com/heigo)


``` html
<script src="/path/to/heigo.js"></script>
```

### NPM

``` bash

npm install heigo --save

```

### Yarn

``` bash
yarn add heigo
```



## 使用

### 快速使用

> **提示:** heigo框架未对ie浏览器做兼容，所以此框架更适合用于移动项目，不过，如果pc端项目不考虑ie浏览器，也是完全可以使用的

[安装] heigo 之后，让我们来简单的使用一下；

``` html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        ul li {
            color: red;
            font-size: 20px
        }
    </style>
</head>

<body>
    <ul>
        <li>
            <p style="background: lightcoral">你好heigo</p>
        </li>
        <li>
            <p style="background: lightblue"></p>
        </li>
        <p></p>
        <li><button >切换</button></li>
    </ul>
    <script src="/heigo.js"></script>
    <script>
      //dom操作
      $("ul li").eq(1).html("在未来遇见你").css("color:red")
      //bom操作
      $.getFontSize(750) //设计图为750宽的移动端项目设置rem
      //移动端事件
      $("button").tap(()=>{
        console.log("点击事件")
      })
      //方法扩展
      var arr=[1,2,3,1,1,2,4]
      $.removeRepeatArray(arr)
      //数组去重[1,2,3,4]
    </script>
</body>

</html>
```

### 基于项目自动化使用

#### 基于es6模块使用

``` js
import $ from 'heigo'
var arr=[1,2,3,1,1,2,4]
$.removeRepeatArray(arr)
```
#### 基于common模块使用
``` js
var $=require("heigo")
var arr=[1,2,3,1,1,2,4]
$.removeRepeatArray(arr)
```