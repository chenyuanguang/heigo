// module.exports = {
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