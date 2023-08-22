// ==UserScript==
// @name         成贤课表显示优化脚本
// @namespace    https://github.com/Truraly
// @version      1.0
// @description  优化成贤课表的显示，
// @author       https://github.com/Truraly
// @license      GPL 2.0
// @icon         data:image/png;base64,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
// @match        http://jwfw.cxxy.seu.edu.cn/ssfw/*
// @grant        none
// ==/UserScript==


// 内层的iframe对象
let iframe_n_Document = null
// 定时器，每秒扫描一次iframe
let timer = setInterval(() => {
    console.log("扫描iframe...")
    let iframe = document.querySelectorAll("iframe")
    iframe.forEach((item, index) => {
        try {
            let iframeDocument = (item.contentWindow || item.contentDocument);
            if (iframeDocument.document) iframeDocument = iframeDocument.document;
            let caption = iframeDocument.querySelector("caption")
            //  2023-2024 第一学期 xxx 同学课表
            // 查询是否存在这样的字段，如果存在，就是课表页面，显示优化按钮
            // 如果不存在，就是其他页面，不做处理
            if (caption) {
                let str = caption.innerHTML
                if (str.includes("课表")) {
                    // 如果已经存在，就仅修改iframe_n_Document = iframeDocument
                    iframe_n_Document = iframeDocument
                    if (document.querySelector("#iframe_n")) return
                    // iframe_n_Document = iframeDocument
                    console.log("课表页面")
                    // 创建一个按钮
                    let btn = document.createElement("button")
                    btn.innerHTML = "显示优化"
                    btn.style = "position: fixed; top: 0; right: 0; z-index: 9999;"

                    // 给按钮添加点击事件
                    btn.onclick = optimize
                    // id="iframe_n"
                    btn.setAttribute("id", "iframe_n")
                    document.body.appendChild(btn)

                    // 下载按钮
                    let btn2 = document.createElement("button")
                    btn2.innerHTML = "下载课表"
                    btn2.style = "position: fixed; top: 0; right: 100px; z-index: 9999;"
                    btn2.onclick = download
                    document.body.appendChild(btn2)

                }
            }
        }
        catch (e) {
            console.log("err")
        }
    })

}, 1000)

// 优化显示
function optimize() {
    // iframe_n 
    // 获取table
    let table = iframe_n_Document.querySelector("table")
    // 删除里面的caption

    // 保留第一个table，在下面添加19个周的课表，里面的caption不要
    let table2 = table.cloneNode(true)
    table2.querySelector("caption").remove()
    // console.log(table2.innerHTML)
    // 删除前8个td
    let trs = table2.querySelectorAll("tr")
    for (let i = 0; i < trs.length; i++) {
        const tr = trs[i]
        let tds = tr.querySelectorAll("td")
        if (tds.length === 0) {
            tds = tr.querySelectorAll("th")
        }
        for (let j = 0; j < 8; j++) {
            tds[j].remove()
        }
    }
    // console.log(table2.innerHTML)

    let courseL = []
    for (let i = 0; i < 19; i++) {
        // courseL.push(`<table border="1">${table2.innerHTML}</table>`)
        // 创建一个table
        let table3 = document.createElement("table")
        table3.setAttribute("border", "1")
        table3.innerHTML = table2.innerHTML
        courseL.push(table3)
    }


    // 对于每周的课表，删除当前周不上的课，然后存到html字符串里，最后一起写入文件
    for (let i = 0; i < courseL.length; i++) {
        // let doc = new JSDOM(courseL[i]).window.document
        console.log("courseL[i]", courseL[i])
        // let divs = doc.querySelectorAll("div")
        let divs = courseL[i].querySelectorAll("div")

        for (let j = 0; j < divs.length; j++) {
            let div = divs[j]
            // let str = div.textContent
            let str = div.innerHTML

            let strArr = str.split("<hr>")
            let strArr2 = []
            for (let k = 0; k < strArr.length; k++) {
                const str2 = strArr[k]
                if (ifthisweek(str2, i + 1)) {
                    strArr2.push(str2)
                }
            }
            console.log("strArr2", strArr2)
            div.innerHTML = strArr2.join("<hr>")
            console.log("div.innerHTML", div.innerHTML)
        }
        // courseL[i] = doc.querySelector("table").outerHTML
        // courseL[i] = courseL[i].outerHTML
    }
    console.log("courseL", courseL)
    // 将这些课表显示在原来课表的下面
    // 获取table
    let table4 = iframe_n_Document.querySelector("table")
    console.log("table4", table4)
    courseL.forEach((item, index) => {
        // 创建一个table
        let table5 = document.createElement("table")
        table5.setAttribute("border", "1")
        // 标题
        let H1 = document.createElement("h1")
        H1.innerHTML = `第${index + 1}周`
        table5.appendChild(H1)
        console.log("item", item)
        // 添加table
        table5.appendChild(item)
        table4.parentNode.appendChild(table5)
    })

}



// // 判断是否是本周的课
function ifthisweek(courseStr, week) {
    console.log("courseStr", courseStr)
    // 7-14周(双) 
    let weekStr = courseStr.match(/\d+\-\d+周 *[\(\)单双]*/g)[0]
    // console.log("weekStr", weekStr)
    let startWeek = parseInt(weekStr.match(/\d+/g)[0])
    let endWeek = parseInt(weekStr.match(/\d+/g)[1])
    let isSingle = weekStr.includes("单") ? 1 : weekStr.includes("双") ? 0 : -1
    // console.log("startWeek", startWeek, "endWeek", endWeek, "isSingle", isSingle)
    // console.log("week", week)
    // 如果不是当前周，就删除
    if (week < startWeek || week > endWeek) {
        return false
    }
    // 如果是单双周，就判断是否是单双周
    if (isSingle !== -1) {
        if (isSingle === 0 && (week) % 2 !== 0) {
            return false
        }
        if (isSingle === 1 && (week) % 2 === 0) {
            return false
        }
    }
    return true
}


// 下载课表
function download() {
    let tables = iframe_n_Document.querySelectorAll("table")
    let str_all = ""
    for (let i = 0; i < tables.length; i++) {
        const table = tables[i]
        console.log("table", table)
        str_all += `<table border="1">${table.innerHTML}</table><br>`
    }
    // 在web中生成可供下载的文件   
    // let str_all = ""
    // for (let i = 0; i < courseL.length; i++) {
    //     str_all += `<h1>第${i + 1}周</h1>` + courseL[i].innerHTML + `<br>`
    // }
    const file = new File([str_all], "课表.html", {
        type: "text/plain",
    })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(file)
    a.download = "课表.html"
    a.click()
}