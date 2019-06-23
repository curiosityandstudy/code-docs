(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{88:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[a._v("#")]),a._v(" Redis")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Redis"),e("OutboundLink")],1),a._v("是一个key-value数据库，用于做分布式缓存。")]),a._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),e("h3",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos","aria-hidden":"true"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" redis\n")])])]),e("h3",{attrs:{id:"amazon-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-linux","aria-hidden":"true"}},[a._v("#")]),a._v(" Amazon Linux")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://download.redis.io/redis-stable.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" xvzf redis-stable.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" redis-stable\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" distclean\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" src/redis-server src/redis-cli /usr/bin\nredis-server --daemonize "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yes")]),a._v(" --bind 0.0.0.0\n")])])]),e("h2",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("redis-server "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行Redis Server")]),a._v("\n\nredis-cli "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 连接本地Redis Server")]),a._v("\n\nredis-cli -h "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote-host"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p 6379 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 连接远程Redis Server")]),a._v("\n")])])]),e("h2",{attrs:{id:"操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 操作")]),a._v(" "),e("h3",{attrs:{id:"auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth","aria-hidden":"true"}},[a._v("#")]),a._v(" AUTH")]),a._v(" "),e("p",[e("code",[a._v("CONFIG SET requirepass <password>")]),a._v(" 使用密码来保护Redis服务器。之后需要 "),e("code",[a._v("AUTH <password>")]),a._v(" 才能使用其他命令。")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("127.0.0.1:6379"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CONFIG SET requirepass 123456 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置密码")]),a._v("\n127.0.0.1:6379"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" AUTH 123456\n")])])]),e("p",[e("code",[a._v('CONFIG SET requirepass ""')]),a._v(" 可以清除密码。")]),a._v(" "),e("h3",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),e("p",[e("code",[a._v("PING")]),a._v(" "),e("code",[a._v("SET")]),a._v(" "),e("code",[a._v("GET")]),a._v(" "),e("code",[a._v("DEL")]),a._v(" "),e("code",[a._v("KEYS")]),a._v(" "),e("code",[a._v("MONITOR")]),a._v(" "),e("code",[a._v("EXPIRE")]),a._v(" "),e("code",[a._v("EXPIREAT")]),a._v(" "),e("code",[a._v("RPUSH")]),a._v(" "),e("code",[a._v("HGET")]),a._v(" "),e("code",[a._v("HSET")]),a._v("...")]),a._v(" "),e("p",[a._v("命令都很简单, 具体见 "),e("a",{attrs:{href:"https://redis.io/commands",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://redis.io/commands"),e("OutboundLink")],1)]),a._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),e("p",[e("code",[a._v("LIST")]),a._v(" 和 "),e("code",[a._v("HASH")]),a._v(" 上面的item是不能单独设置过期时间的，但是可以利用 "),e("code",[a._v("EXPIRE")]),a._v(" 或 "),e("code",[a._v("EXPIREAT")]),a._v(" 给 "),e("code",[a._v("LIST")]),a._v(" 和 "),e("code",[a._v("HASH")]),a._v(" 设置过期时间。")])])])},[],!1,null,null,null);s.default=r.exports}}]);