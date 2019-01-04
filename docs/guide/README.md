# 开始

此框架综合了公司项目开发过程中常用方法及插件；

1. jquery常用dom操作，事件监听，ajax等常用api。

2. 封装移动端的touch事件，且提供了像tap，longtap等常用事件。

3. 扩展了字符串，数组，对象方法

4. 封装了bom相关的一系列函数

5. 集成了一系列常用插件


### 快速使用

> **提示:** heigo框架未对ie浏览器做兼容，所以此框架更适合用于移动项目，不过，如果pc端项目不考虑ie浏览器，也是完全可以使用的

[安装](../installation.md) heigo 之后，让我们来简单的使用一下；

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


