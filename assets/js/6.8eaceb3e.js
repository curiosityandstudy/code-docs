(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{42:function(t,r,e){"use strict";e.r(r);var a=e(0),_=Object(a.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("在这个信息过载的互联网时代，大部分文章和文档都是冗余繁杂的。虽然开发场景总是相似的，但是开发人员通常需要花费大量的时间去筛选出那20%有价值的信息。")]),t._v(" "),e("p",[t._v("本文档列出了一个开发人员可能需要知道的内容来帮助他们避免花费大量时间从头开始踩坑，加快学习进程，增强自身综合能力，规范自己的代码，避免给他人造成麻烦和困扰。")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("完成一件事情可能有多种代码写法，本文档一般情况下只列出本人认为的最佳写法。水平有限，文档有错误在所难免。")])]),t._v(" "),e("h2",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),e("h3",{attrs:{id:"存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储","aria-hidden":"true"}},[t._v("#")]),t._v(" 存储")]),t._v(" "),e("p",[t._v("1TB=1024GB 1GB=1024MB 1MB=1024KB 1KB=1024Byte。Byte是字节。一个汉字占两个字节。一个英文字母占一个字节。")]),t._v(" "),e("h3",{attrs:{id:"时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间","aria-hidden":"true"}},[t._v("#")]),t._v(" 时间")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("不同的应用程序接口之间通讯应统一采用 "),e("code",[t._v("UTC")]),t._v(" 时间格式。比如API返回给APP端或Web端的时间格式应为 "),e("code",[t._v("UTC")]),t._v(" 格式。")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("UTC")]),t._v(" 时间格式为 "),e("code",[t._v("2018-08-22T06:53:54Z")]),t._v("。这是 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 8601"),e("OutboundLink")],1),t._v(" 规范。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Unix Timestamp")]),t._v(" 是指UTC时间 "),e("code",[t._v("1970-01-01T00:00:00Z")]),t._v(" 到现在的 "),e("code",[t._v("秒数")]),t._v("。例如: "),e("code",[t._v("1534930509")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("本地时间格式为 "),e("code",[t._v("2018-08-02T22:57:16+08:00")]),t._v("。表示东8区（北京时间）此时的时间。"),e("code",[t._v("T")]),t._v(" 前面是日期后面是时间。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://www.w3.org/TR/NOTE-datetime",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3C NOTE datetime"),e("OutboundLink")],1),t._v(" 对于时间这块做了约定，在 "),e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 8601"),e("OutboundLink")],1),t._v(" 规范上增加了秒是可以带小数的，例如 "),e("code",[t._v(t._s((new Date).toISOString()))]),t._v("。")])])]),t._v(" "),e("h3",{attrs:{id:"常用命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用命名")]),t._v(" "),e("p",[e("code",[t._v("display_order")]),t._v("（排序号），"),e("code",[t._v("first_name")]),t._v("（名），"),e("code",[t._v("last_name")]),t._v("（姓），"),e("code",[t._v("nickname")]),t._v("（昵称），"),e("code",[t._v("sex")]),t._v("（性别），"),e("code",[t._v("date_of_birth")]),t._v("（生日），"),e("code",[t._v("status")]),t._v("（状态）。")]),t._v(" "),e("p",[t._v("命名神器："),e("a",{attrs:{href:"https://unbug.github.io/codelf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unbug.github.io/codelf"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语言","aria-hidden":"true"}},[t._v("#")]),t._v(" 语言")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/zh/go/"}},[t._v("Go")]),t._v(" "),e("router-link",{attrs:{to:"/zh/php/"}},[t._v("PHP")]),t._v(" "),e("router-link",{attrs:{to:"/zh/bash.html"}},[t._v("Bash")])],1),t._v(" "),e("h2",{attrs:{id:"工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具","aria-hidden":"true"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/zh/tools/proxy.html"}},[t._v("代理抓包")])],1),t._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("p",[e("router-link",{attrs:{to:"/zh/mysql.html"}},[t._v("MySQL")]),t._v(" "),e("router-link",{attrs:{to:"/zh/ssh.html"}},[t._v("SSH")]),t._v(" "),e("router-link",{attrs:{to:"/zh/git.html"}},[t._v("Git")]),t._v(" "),e("router-link",{attrs:{to:"/zh/redis.html"}},[t._v("Redis")]),t._v(" "),e("router-link",{attrs:{to:"/zh/docker.html"}},[t._v("Docker")]),t._v(" "),e("router-link",{attrs:{to:"/zh/vpn.html"}},[t._v("VPN")]),t._v(" "),e("router-link",{attrs:{to:"/zh/nginx.html"}},[t._v("Nginx")]),t._v(" "),e("router-link",{attrs:{to:"/zh/aws.html"}},[t._v("AWS")])],1),t._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo","aria-hidden":"true"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),e("p",[t._v("Python，Kotlin，Javascript，C#，RESTful API，Elasticsearch，Rabbitmq，Exception，Regex")])])},[],!1,null,null,null);r.default=_.exports}}]);