// ==UserScript==
// @name         成贤课表显示优化脚本
// @namespace    https://github.com/Truraly
// @version      1.0
// @description  优化成贤课表的显示，
// @author       https://github.com/Truraly
// @license      AGPL-3.0
// @icon         data:image/png;base64,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
// @match        http://jwfw.cxxy.seu.edu.cn/ssfw/*
// @grant        none
// ==/UserScript==


// 内层的iframe对象
let iframe_n_Document = null
let captionStr = ''
// 定时器，每秒扫描一次iframe
let timer = setInterval(() => {
    // console.log("扫描iframe...")
    let iframe = document.querySelectorAll("iframe")
    if (iframe.length == 0) return
    // console.log("iframe", iframe)
    let ifkb = false
    // 用来判断是否是课表页面
    for (let i = 0; i < iframe.length; i++) {
        const item = iframe[i]
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
                    iframe_n_Document = iframeDocument
                    captionStr = str.replace(/\<span.*\<\/span\>/g, '').replace(/&nbsp;/g, '').replace(/ /g, "_")
                    ifkb = true
                    break
                }
            }
        } catch (e) {
            console.log("err")
        }
    }

    // 如果是课表页面，就显示优化按钮
    if (ifkb) {
        // 如果已经有按钮了，就不添加了
        if (document.querySelector(".iframe_n_ty")) return
        console.log("课表页面")
        // 创建一个按钮
        let btn = document.createElement("button")
        btn.innerHTML = "课表显示优化"
        btn.style = "position: fixed; top: 0; right: 0; z-index: 9999;"

        // 给按钮添加点击事件
        btn.onclick = optimize
        // id="iframe_n"
        btn.setAttribute("class", "iframe_n_ty")
        document.body.appendChild(btn)

        // 下载按钮
        let btn2 = document.createElement("button")
        btn.setAttribute("class", "iframe_n_ty")
        btn2.innerHTML = "下载当前课表"
        btn2.style = "position: fixed; top: 0; right: 100px; z-index: 9999;"
        btn2.onclick = download
        document.body.appendChild(btn2)
    } else {
        // 删除class = iframe_n_ty的按钮
        let btns = document.querySelectorAll(".iframe_n_ty")
        for (let i = 0; i < btns.length; i++) {
            btns[i].remove()
        }
    }
}, 1000)

// 优化显示
function optimize() {
    // iframe_n 
    // 获取table
    let table = iframe_n_Document.querySelector("table")
    // 保留第一个table，在下面添加19个周的课表，里面的caption不要
    let tableCopy = table.cloneNode(true)
    tableCopy.querySelector("caption").remove()
    // console.log(table2.innerHTML)
    // 删除前8个td/th
    let trs = tableCopy.querySelectorAll("tr")
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

    // 创建19个课表数组
    let courseL = []
    for (let i = 0; i < 19; i++) {
        // courseL.push(`<table border="1">${table2.innerHTML}</table>`)
        // 创建一个table
        let table3 = document.createElement("table")
        table3.setAttribute("border", "1")
        table3.innerHTML = tableCopy.innerHTML
        courseL.push(table3)
    }

    // 对于每周的课表，删除当前周不上的课
    for (let i = 0; i < courseL.length; i++) {
        // console.log("courseL[i]", courseL[i])
        let divs = courseL[i].querySelectorAll("div")
        for (let j = 0; j < divs.length; j++) {
            let div = divs[j]
            let str = div.innerHTML
            let strArr = str.split("<hr>")
            let strArr2 = []
            for (let k = 0; k < strArr.length; k++) {
                const str2 = strArr[k]
                if (ifthisweek(str2, i + 1)) {
                    strArr2.push(str2)
                }
            }
            // console.log("strArr2", strArr2)
            div.innerHTML = strArr2.join("<hr>")
            // console.log("div", div)
        }
        // courseL[i] = doc.querySelector("table").outerHTML
        // courseL[i] = courseL[i].outerHTML
    }
    // console.log("courseL", courseL)
    // 将这些课表显示在原来课表的下面
    // 获取table
    let table4 = iframe_n_Document.querySelector("table")
    // 如果原来这个课表后面就有table，就删除
    let tables = iframe_n_Document.querySelectorAll("table")
    for (let i = 1; i < tables.length; i++) { tables[i].remove() }
    // console.log("table4", table4)
    courseL.forEach((item, index) => {
        // 标题
        let H1 = document.createElement("h1")
        H1.innerHTML = `第${index + 1}周`
        item.insertBefore(H1, item.firstChild)
        // console.log("item", item)
        table4.parentNode.appendChild(item)
    })

}


// 判断是否是本周的课
function ifthisweek(courseStr, week) {
    // console.log("courseStr", courseStr)
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
        // 第一个需要额外添加
        if (i == 0) tables[i].setAttribute("border", "1")
        const table = tables[i]
        console.log("table", table)
        str_all += `${table.outerHTML}<br>`
    }
    // 在web中生成可供下载的文件   
    const fname = `${captionStr}${new Date().valueOf()}.html`
    const file = new File([getHtmlStr(str_all)], fname, {
        type: "text/plain",
    })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(file)
    a.download = fname
    a.click()
}

function getHtmlStr(str) {
    return `<!DOCTYPE html>
    <html lang="zn-ch">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- 图标 -->
        <link rel="shortcut icon" href="data:image/png;base64,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"
            type="image/x-icon">
    </head>
    <body>
        ${str}
    </body>
    </html>`
}