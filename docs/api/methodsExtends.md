---
sidebar: auto
---

# API 参考

## 数组方法

### $.removeRepeatArray()
> 数组去重
* <font size="3">**参数：**</font>

  - `arr:Array`
  - `key:string（可选）`

* <font size="3">**返回值：去重后的新数组**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要去重的原数组
  - 第二个参数key为选填项，如果数组的元素为对象时，根据key进行去重

```javascript
    //demo1:
    var arr=[1,2,3,1,1,2,4]
    $.removeRepeatArray(arr)
    //[1,2,3,4]

    //demo2:
    var arr=[
        {id:1,name:"zhangsan"},
        {id:2,name:"wangwu"},
        {id:1,name:"lisi"},
        {id:3,name:"maliu"}
    ]
    $.removeRepeatArray(arr,"id")
    //[ {id:1,name:"zhangsan"}
        // {id:2,name:"wangwu"}
        // {id:3,name:"maliu"}]
    
```

### $.upsetArr()
> 数组打乱顺序
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：乱序后的新数组**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要进行乱序的原数组

```javascript
     //demo1:
    var arr=[1,2,3,4]
    $.upsetArr(arr)
    //[3,1,2,4]
```

### $.randomOne()
> 数组中随机获取一个值
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：数组中的某一项**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript
    //demo1:
    var arr=[1,2,3,4]
    $.randomOne(arr)
    //2
```

### $.getEleCount()
> 数组中一个元素出现的次数
* <font size="3">**参数：**</font>

  - `arr:Array`
  - `item:any(任意类型)`

* <font size="3">**返回值：数值**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组
  - 第二个参数为查找的元素

```javascript
    //demo1:
    var arr=[1,2,3,2,3,3,3,4]
    $.getEleCount(arr,3)
    //4
```

### $.removeArrayForValue()
> 删除数组中一个元素
* <font size="3">**参数：**</font>

  - `arr:Array`
  - `item:string`
  - `type:%|无`

* <font size="3">**返回值：Array[any]**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组
  - 第二个参数为删除元素的匹配内容
  - 第三个参数为是否进行全字段匹配（可选），为%时进行全字段匹配删除

```javascript
    //demo1:
   $.removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
    //result：["aaa"]   带有'test'的都删除


    //demo2:
   $.removeArrayForValue(['test','test1','test2','test','aaa'],'test')
    //result：['test1','test2',"aaa"]   只有'test'删除
```

### $.getOptionArray()
> 获取对象数组中的某些属性值
* <font size="3">**参数：**</font>

  - `arr:Array`
  - `key:string`
  - `val:any`

* <font size="3">**返回值：Array[any]**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组
  - 第二个参数为将要匹配的属性
  - 第三个参数（可选），为空时返回的数组的值为属性值，不为对象；不为空时，返回属性值与之匹配的对象；

```javascript

    //demo1:
    var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    $.getOptionArray(arr,'a,c')
    //result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]  

    //demo2:
    $.getOptionArray(arr,'b')
    //result：[2, 3, 9, 2, 5]

     //demo3:
    $.getOptionArray(arr,'b',2)
    //result：[{a:1,b:2,c:9}, {a: 4, b: 2, c: 5}]
```

### $.arraySort()
> 根据数组对象中的某个字段进行升降序
* <font size="3">**参数：**</font>

  - `arr:Array`
  - `key:string`
  - `type:true|false`

* <font size="3">**返回值：Array[any]**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组
  - 第二个参数为将要匹配的属性
  - 第三个参数true时为升序；false时为降序；

```javascript

   //demo1:
    var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
    $.arraySort(arr,'a',true)//true为升序
    //result：[{"a":1,"b":2,"c":9},{"a":2,"b":3,"c":5},{"a":4,"b":2,"c":5},{"a":4,"b":5,"c":7},{"a":5,"b":9}]
```

### $.steamroller()
> 多维数组对进行扁平化处理
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：Array[any]**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript

  //demo1:
    var arr=[[1,2,[3,4]],5,3,2]
    $.steamroller(arr)
```


### $.maxArr()
> 数组最大值(针对数值)
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript

  //demo1:
    var arr=[1,2,3,4]
    $.maxArr(arr)
    //4
```


### $.minArr()
> 数组最小值(针对数值)
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript

  //demo1:
    var arr=[1,2,3,4]
    $.minArr(arr)
    //1
```
### $.sumArr()
> 数组最小值(针对数值)
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript

    //demo1:
    var arr = [1, 2, 3, 4]
    $.sumArr(arr)
    //10
```
### $.covArr()
> 数组最大值(针对数值)
* <font size="3">**参数：**</font>

  - `arr:Array`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arr为必填项，为将要处理的原数组

```javascript

    //demo1:
    var arr = [1, 2, 3, 4]
    $.covArr(arr)
    //2.5
```
## 字符串方法

### $.trim()
> 去除字符串空格
* <font size="3">**参数：**</font>

  - `str:String`
  - `type:number`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数type为必填项， 1-所有空格  2-前后空格  3-前空格 4-后空格

```javascript

    //demo1:
    $.trim('  1235asd',1)
    //result：1235asd
```
### $.changeCase()
> 去除字符串空格
* <font size="3">**参数：**</font>

  - `str:String`
  - `type:number`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数type为必填项:
     1- 首字母大写
     2- 首字母小写
     3- 大小写转换
     4- 全部大写
     5- 全部小写

```javascript

    //demo1:
    $.changeCase('asdasd',1)
    //result：Asdasd
```

### $.repeatStr()
> 字符串循环复制
* <font size="3">**参数：**</font>

  - `str:String`
  - `type:number`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数type为必填项,为复制几次

```javascript

    //demo1:
    $.repeatStr('123',3)
    //"result：123123123"
```

### $.replaceAll()
> 字符串替换进行全局替换
* <font size="3">**参数：**</font>

  - `str:String`
  - `AFindText:string | RegExp`
  - `ARepText:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数AFindText为必填项,为查找的字符串或者正则（正则不能加g）
  - 第三个参数ARepText为必填项,为即将被替换的字符串

```javascript

    //demo1:
   $.replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州')
    //result："这里是广州，中国第三大城市，广东省省会，简称穗，"
```

### $.replaceStr()
> 字符替换，使用某个字符替换相应的文字，或者某部分的文字
* <font size="3">**参数：**</font>

  - `str:String`
  - `regArr:Array[number]`
  - `type:number`
  - `ARepText:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数regArr为必填项,为查找的模式，有两种模式，一种是数组长度为1，从前或后进行连续的一部分替换，一种是数组长度为3，从前或后进行连续的多段替换
  - 第三个参数type为必填项, 0.依次从前面开始替换的个数  1.从最后一个开始替换的个数
  - 第四个参数为将要替换的字符；

```javascript

    //demo1:
    $.replaceStr('18819322663',[3,5,3],0)
    //result：188*****663
    //demo2:
    $.replaceStr('asdasdasdaa',[3,5,3],1)
    //result：***asdas***
    //demo3:
    $.replaceStr('1asd88465asdwqe3',[5],0)
    //result：*****8465asdwqe3
    //demo4:
    $.replaceStr('1asd88465asdwqe3',[5],1,'+')
    //result："1asd88465as+++++"
```

### $.checkType()
> 检测字符串是否符合类型
* <font size="3">**参数：**</font>

  - `str:String`
  - `type:string`

* <font size="3">**返回值：true | false**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 第二个参数为检验的类型：
    + email ：邮箱
    + phone ：手机号
    + tel   ：电话号
    + number ：数值
    + english ：英文
    + text ：文本
    + chinese ：中文
    + lower ：小写
    + upper ：大写

```javascript

    //demo:
    $.checkType('18813322663',"phone")
    //result：true
    
```

### $.checkPwd()
> 检测密码强度
* <font size="3">**参数：**</font>

  - `str:String`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为将要处理的字符串
  - 返回值：
   + 0：密码小于6位
   + 1：密码为纯数字
   + 2：密码为数字加小写或者大写字母
   + 3：密码为数字，大小写字母
   + 4：密码为数字，大小写字母，.-_等

```javascript

    //demo:
    $.checkPwd('12asdASAD')
    //result：3(强度等级为3)
    
```

### $.randomWord()
> 检测密码强度
* <font size="3">**参数：**</font>

  - `arg：number`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，为随机码的进制，取值范围为2-36

```javascript

    //demo:
    $.randomWord(10)
    //result："2584316588472575"

    $.randomWord(14)
    //result："9b405070dd00122640c192caab84537"

    $.randomWord(36)
    //result："83vhdx10rmjkyb9"
    
```
### $.countStr()
> 查找字符串，出现在原字符串里的次数
* <font size="3">**参数：**</font>

  - `str：string`
  - `strSplit：string`

* <font size="3">**返回值：number**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数strSplit为必填项，为将要查找的字符串

```javascript

     var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
    $.countStr(strTest,'blog')
    //result：6
    
```

### $.filterStr()
> 过滤字符串(html标签，表情，特殊字符)
* <font size="3">**参数：**</font>

  - `str：string`
  - `type:string`
  - `restr:string`
  - `spstr:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，替换哪些类型的字符，替换内容（special-特殊字符,html-html标签,emjoy-emjoy表情,word-小写字母，WORD-大写字母，number-数字,chinese-中文），要替换成什么，默认''，如果需要过滤多种字符，type参数使用,分割，
  - 第三个参数为必填项，用什么字符进行替换，常用*；
  - 第四个参数为必填项，保留哪些特殊字符；

```javascript

    var str='asd    654a大蠢sasdasdASDQWEXZC6d5#%^*^&*^%^&*$\\"\'#@!()*/-())_\'":"{}?<div></div><img src=""/>啊实打实大蠢猪自行车这些课程';
    $.filterStr(str,'html,WORD,chinese,special','*','%?')
    //result："asd    654a**sasdasd*********6d5#%^*^&*^%^&*$\"'#@!()*/-())_'":"{}?*****************"
    
```

### $.formatText()
> 格式化处理字符串
* <font size="3">**参数：**</font>

  - `str：string`
  - `size:number`
  - `delimiter:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，为数字
  - 第三个参数为必填项，用什么字符进行替换，默认为"，";可以为" "；

```javascript

    $.formatText('1234asda567asd890')
    //result："12,34a,sda,567,asd,890"
     $.formatText('1234asda567asd890',4,' ')
    //result："1 234a sda5 67as d890"
```

### $.longestWord()
> 找出最长单词
* <font size="3">**参数：**</font>

  - `str：string`
  - `splitType:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，字符串单词是以什么字符进行分割的；

```javascript
  $.longestWord('Find the Longest word in a String')
    //result：Longest
  $.longestWord('Find|the|Longest|word|in|a|String','|')
    //result：Longest
```

### $.titleCaseUp()
> 句中单词首字母大写
* <font size="3">**参数：**</font>

  - `str：string`
  - `splitType:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，字符串单词是以什么字符进行分割的；

```javascript
  $.titleCaseUp('this is a title')
    //result：This Is A Title
```
### $.cutstr()
> 实现字符串长度截取，并添加省略符
* <font size="3">**参数：**</font>

  - `str：string`
  - `len:number`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，为截取的长度；

```javascript
  $.cutstr('天气很好，一起出去玩',4)
    //result：天气很好...
```
### $.findKey()
> 关键字加标签（多个关键词用空格隔开）
* <font size="3">**参数：**</font>

  - `str：string`
  - `key:string`
  - `el:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str为必填项，为原字符串
  - 第二个参数为必填项，添加标签关键字字符串，多个关键词用空格隔开；
  - 第三个参数为必填项，添加的标签；

```javascript
  $.findKey('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯','守侯 开','i')
  //result:"<i>守侯</i>我oaks接到了来自下次你离<i>开</i>快乐吉祥留在<i>开</i>城侯"
```


### $.UTF16ToUTF8()
> 将utf-16转码为uft-8
* <font size="3">**参数：**</font>

  - `str:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str,为字符串

```javascript
  $.UTF16ToUTF8('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯-23')
 
```

### $.UTF8ToUTF16()
> 将utf-8转码为uft-16
* <font size="3">**参数：**</font>

  - `str:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str,为字符串

```javascript
  $.UTF8ToUTF16(str)
```

### $.encode()
> 根据编码表进行解码
* <font size="3">**参数：**</font>

  - `str:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>
  - 第一个参数str,为字符串

```javascript
  $.encode('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯')
```
### $.decode()
> 根据编码表进行编码
* <font size="3">**参数：**</font>

  - `str:string`

* <font size="3">**返回值：string**</font>

* <font size="3">**用法：**</font>

  - 第一个参数str,为字符串

```javascript
  $.decode('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯')
```





## 对象方法
### $.filterParams()
> 清除对象中值为空的属性
* <font size="3">**参数：**</font>

  - `arg：object`

* <font size="3">**返回值：Object**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为将要处理的对象

```javascript
    //清除对象中值为空的属性
    $.filterParams({a:"",b:null,c:"010",d:123})
    //Object {c: "010", d: 123}
```
### $.steamObject()
> 对象扁平化处理
* <font size="3">**参数：**</font>

  - `arg：object`

* <font size="3">**返回值：Object**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为将要处理的对象

```javascript
   var obj = {
            a: {
                aa: 1,
                b: {
                    bb: 2,
                    c: 3
                }
            }
        }
    $.steamObject(obj)

    //{aa: 1, bb: 2, c: 3}
```

## 工具函数
### $.istype()
> 关键字加标签（多个关键词用空格隔开）
* <font size="3">**参数：**</font>

  - `arg：any`
  - `type:string`

* <font size="3">**返回值：Boolen**</font>

* <font size="3">**用法：**</font>
  - 第一个参数arg为必填项，为将要检测的数据类型
  - 第二个参数为必填项，为数据类型的字符串，如："string","number","boolean","undefined","null","function","array","object","nan","elements"

```javascript
  // demo:1
  $.istype({a:1},"string")
  //result:false
  // demo2:
   $.istype({a:1},"object")
  //result:true
```
