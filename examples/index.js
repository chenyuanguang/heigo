// var $=require("../src/nodeIndex")
// import "babel-polyfill"
import $ from "../src/nodeIndex.js"

// console.log($)

var arr=[
    {id:1,name:"zhangsan"},
    {id:2,name:"wangwu"},
    {id:1,name:"lisi"},



    {id:3,name:"maliu"}

]


console.log($.removeRepeatArray(arr,"id"))
// console.log($.removeRepeatArray([1,2,3,4,2,3]))

// var arr=[1,2,3,4]
// $.upsetArr(arr)

// var arr=[1,2,3,4]
// $.randomOne(arr)

// var arr=[1,2,3,2,3,3,3,4]
// $.getEleCount(arr,3)

//  //demo1:
//  $.removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
//  //result：["aaa"]   带有'test'的都删除


//  //demo2:
// $.removeArrayForValue(['test','test1','test2','test','aaa'],'test')
//  //result：['test1','test2',"aaa"]   只有'test'删除

//      //demo1:
//      var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//      $.getOptionArray(arr,'a,c')
//      //result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]  
 
//      //demo2:
//      $.getOptionArray(arr,'b')
//      //result：[2, 3, 9, 2, 5]
 
//       //demo3:
//      $.getOptionArray(arr,'b',2)
//      //result：[{a:1,b:2,c:9}, {a: 4, b: 2, c: 5}]


//      var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
//      $.arraySort(arr,'a',true)//true为升序

//      var arr=[[1,2,[3,4]],5,3,2]
//     $.steamroller(arr)

//     var arr=[1,2,3,4]
//     $.maxArr(arr)

//     var arr=[1,2,3,4]
//     $.minArr(arr)

//     var arr = [1, 2, 3, 4]
//     $.sumArr(arr)

//     $.trim('  1235asd',1)
//     $.changeCase('asdasd',1)

//     $.repeatStr('123',3)

//     console.log($.replaceAll('这里是上海，中国第三大城市，广东省省会，简称穗，','上海','广州'))

//       //demo1:
//       $.replaceStr('18819322663',[3,5,3],0)
//       //result：188*****663
//       //demo2:
//       $.replaceStr('asdasdasdaa',[3,5,3],1)
//       //result：***asdas***
//       //demo3:
//       $.replaceStr('1asd88465asdwqe3',[5],0)
//       //result：*****8465asdwqe3
//       //demo4:
//       $.replaceStr('1asd88465asdwqe3',[5],1,'+')

//           //demo:
//     $.checkType('18813322663',"phone")

//         //demo:
//         $.checkPwd('12asdASAD')
//         //result：3(强度等级为3)

//             //demo:
//     $.randomWord(10)
//     //result："2584316588472575"

//     $.randomWord(14)
//     //result："9b405070dd00122640c192caab84537"

//     $.randomWord(36)
//     //result："83vhdx10rmjkyb9"

//     var strTest='sad44654blog5a1sd67as9dablog4s5d16zxc4sdweasjkblogwqepaskdkblogahseiuadbhjcibloguyeajzxkcabloguyiwezxc967'
//     $.countStr(strTest,'blog')

//     var str='asd    654a大蠢sasdasdASDQWEXZC6d5#%^*^&*^%^&*$\\"\'#@!()*/-())_\'":"{}?<div></div><img src=""/>啊实打实大蠢猪自行车这些课程';
//     $.filterStr(str,'html,WORD,chinese,special','*','%?')


//     $.formatText('1234asda567asd890')
//     //result："12,34a,sda,567,asd,890"
//      $.formatText('1234asda567asd890',4,' ')
//     //result："1 234a sda5 67as d890"

//     $.longestWord('Find the Longest word in a String')
//     //result：Longest
//   $.longestWord('Find|the|Longest|word|in|a|String','|')
//     //result：Longest


//     $.titleCaseUp('this is a title')
//     //result：This Is A Title

//     $.cutstr('天气很好，一起出去玩',4)
//     //result：天气很好...

//     $.findKey('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯','守侯 开','i')
//     //result:"<i>守侯</i>我oaks接到了来自下次你离<i>开</i>快乐吉祥留在<i>开</i>城侯"
//     console.log($.UTF16ToUTF8('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯-23'))
//     console.log($.UTF8ToUTF16('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯-23'))
//     console.log(  $.decode($.encode('守侯我oaks接到了来自下次你离开快乐吉祥留在开城侯')))
//    console.log($.filterParams({a:"",b:null,c:"010",d:123})) 

//     var obj = {
//         a: {
//             aa: 1,
//             b: {
//                 bb: 2,
//                 c: 3
//             }
//         }
//     }
// console.log($.steamObject(obj))

// console.log($.istype({a:1},"string"))
// console.log(     $.upDigit(168752632))
    



// "core-util-is": "^1.0.2",
// "ee-first": "^1.1.1",
// "inherits": "^2.0.3",
// "is-extendable": "^1.0.1",
// "isarray": "^2.0.4",
// "mime-db": "^1.37.0",
// "ms": "^2.1.1",
// "readable-stream": "^3.1.1",
// "safe-buffer": "^5.1.2",
// "setprototypeof": "^1.1.0",
// "statuses": "^1.5.0",

// "xtend": "^4.0.1"