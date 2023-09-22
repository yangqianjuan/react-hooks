(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},OYlG:function(e,t,n){"use strict";n.r(t);var r=n("mn0l"),o=n("ahKI"),s=n.n(o),u=n("RGYn"),a=n("DBVu"),i=n("GAyR"),c=n("7JWa"),l="import React from 'react';\nimport { useBoolean } from 'reactHooks';\n\nexport default function () {\n  const [state, { setFalse, setTrue, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <p>state\u7684\u503c\uff1a{`${state}`}</p>\n      <div>\n        <button onClick={setTrue}>setTrue</button>\n      </div>\n      <div>\n        <button onClick={setFalse}>setFalse</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",p="import React, { useState } from 'react';\nimport { useDebounce } from 'reactHooks';\n\nexport default () => {\n  const [value, setValue] = useState();\n  const debounceValue = useDebounce(value, 200);\n\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={value}\n        onChange={(e) => {\n          setValue(e.target.value);\n        }}\n      />\n      <p>debounceValue:{debounceValue}</p>\n    </div>\n  );\n};",d="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'reactHooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const latestCountRef = useLatest(count);\n  useEffect(() => {\n    const intervel = setInterval(() => {\n      console.log(count); //\u6b64\u5904\u7684count\u662f\u95ed\u5305\uff0c\u662f\u5916\u90e8count\u7684\u521d\u59cb\u503c0\n      console.log(latestCountRef.current);\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(intervel);\n  }, []);\n  return <div>{count}</div>;\n};",m="import React, { useRef, useEffect } from 'react';\nimport Mock from 'mockjs';\nimport { useRequest, useMemorizedFn } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  // \u6d4b\u8bd5\n  // function a() {\n  //   console.log('a');\n  // }\n  // const aFn = useMemorizedFn(a);\n  // const bFn = useMemorizedFn(a);\n  // const cFn = useMemorizedFn(a);\n  // console.log(aFn == bFn, bFn === cFn);\n  // console.log('\u8bf7\u6c42\u7ed3\u679c----', data, error, loading);\n  // \u6d4b\u8bd5\n\n  const { error, loading, data } = useRequest(getUserName);\n  if (error) {\n    return <p>\u6709\u9519\u8bef\uff1a{JSON.stringify(error)}</p>;\n  }\n  if (loading) {\n    return <p>\u52a0\u8f7d\u4e2d...</p>;\n  }\n  if (data) {\n    return <p>useName\u662f:{data}</p>;\n  }\n};",f="import React from 'react';\nimport { useTitle } from 'reactHooks';\n\nexport default () => {\n  useTitle('\u524d\u5a1f\u81ea\u5b9a\u4e49\u6807\u9898');\n  return <div>\u80fd\u591f\u4fee\u6539\u9875\u9762\u6807\u9898</div>;\n};",b='import React from \'react\';\nimport { useToggle } from \'reactHooks\';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>\u5f53\u524d\u7684state\u7684\u503c\u4e3a\uff1a{`${state}`}</p>\n      <p>\n        <button type="button" onClick={toggle}>\n          toggle \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type="button" onClick={setLeft}>\n          setLeft \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type="button" onClick={setRight}>\n          setRight \u5207\u6362\n        </button>\n      </p>\n    </div>\n  );\n};',g="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle('left', 'right');\n\n  return (\n    <div>\n      <p>\u5f53\u524d\u7684state\u7684\u503c\u4e3a\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          toggle \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type=\"button\" onClick={setLeft}>\n          setLeft \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type=\"button\" onClick={setRight}>\n          setRight \u5207\u6362\n        </button>\n      </p>\n    </div>\n  );\n};",h="import React from 'react';\nimport { useUpdate } from 'reactHooks';\n\nexport default () => {\n  const update = useUpdate();\n\n  return (\n    <div>\n      <div>\u66f4\u65b0\u65f6\u95f4\uff1a{Date.now()}</div>\n      <button onClick={update}>\u66f4\u65b0</button>\n    </div>\n  );\n};",v={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"}},identifier:"usedebounce-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.2.0"}},identifier:"uselatest-demo1"}},"userequest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"DB9a"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"userequest-demo1"}},"usetitle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.2.0"}},identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo2"}},"useupdate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(a["a"])().mark((function e(){return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(15),n.e(3)]).then(n.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:"18.2.0"}},identifier:"useupdate-demo1"}}},k=n("Zs1V"),w=n("HvXX"),O=n.n(w);t["default"]=e=>s.a.createElement(O.a,Object(r["a"])({},e,{config:u,demos:v,apis:k}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-latest","title":"useLatest"},{"path":"/hooks/use-update","title":"useUpdate"}]},{"title":"\u8bf7\u6c42","children":[{"path":"/hooks/use-request","title":"useRequest"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"},{"path":"/hooks/use-debounce","title":"useDebounce"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"encode react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);