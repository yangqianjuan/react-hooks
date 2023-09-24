(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{MZF8:function(e,n,t){"use strict";var r=t("ogwx");t.d(n,"a",(function(){return r["b"]}));t("VCU9")},OYlG:function(e,n,t){"use strict";t.r(n);var r=t("mn0l"),o=t("ahKI"),s=t.n(o),a=t("RGYn"),u=t("DBVu"),i=t("GAyR"),c=t("7JWa"),l="import React from 'react';\nimport { useBoolean } from 'reactHooks';\n\nexport default function () {\n  const [state, { setFalse, setTrue, toggle }] = useBoolean(false);\n\n  return (\n    <div>\n      <p>state\u7684\u503c\uff1a{`${state}`}</p>\n      <div>\n        <button onClick={setTrue}>setTrue</button>\n      </div>\n      <div>\n        <button onClick={setFalse}>setFalse</button>\n      </div>\n      <div>\n        <button onClick={toggle}>toggle</button>\n      </div>\n    </div>\n  );\n}",d="import React, { useState } from 'react';\nimport { useDebounce } from 'reactHooks';\n\nexport default () => {\n  const [value, setValue] = useState();\n  const debounceValue = useDebounce(value, 200);\n\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={value}\n        onChange={(e) => {\n          setValue(e.target.value);\n        }}\n      />\n      <p>debounceValue:{debounceValue}</p>\n    </div>\n  );\n};",m="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'reactHooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const latestCountRef = useLatest(count);\n  useEffect(() => {\n    const intervel = setInterval(() => {\n      console.log(count); //\u6b64\u5904\u7684count\u662f\u95ed\u5305\uff0c\u662f\u5916\u90e8count\u7684\u521d\u59cb\u503c0\n      console.log(latestCountRef.current);\n      setCount(latestCountRef.current + 1);\n    }, 1000);\n    return () => clearInterval(intervel);\n  }, []);\n  return <div>{count}</div>;\n};",p="import React, { useRef, useEffect } from 'react';\nimport Mock from 'mockjs';\nimport { useRequest, useMemorizedFn } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  // \u6d4b\u8bd5\n  // function a() {\n  //   console.log('a');\n  // }\n  // const aFn = useMemorizedFn(a);\n  // const bFn = useMemorizedFn(a);\n  // const cFn = useMemorizedFn(a);\n  // console.log(aFn == bFn, bFn === cFn);\n  // console.log('\u8bf7\u6c42\u7ed3\u679c----', data, error, loading);\n  // \u6d4b\u8bd5\n\n  const { error, loading, data } = useRequest(getUserName);\n  if (error) {\n    return <p>\u6709\u9519\u8bef\uff1a{JSON.stringify(error)}</p>;\n  }\n  if (loading) {\n    return <p>\u52a0\u8f7d\u4e2d...</p>;\n  }\n  if (data) {\n    return <p>useName\u662f:{data}</p>;\n  }\n};",f="import React, { useRef, useEffect } from 'react';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  const { error, loading, data } = useRequest(getUserName);\n  if (error) {\n    return <p>\u6709\u9519\u8bef\uff1a{JSON.stringify(error)}</p>;\n  }\n  if (loading) {\n    return <p>\u52a0\u8f7d\u4e2d...</p>;\n  }\n  if (data) {\n    return <p>useName\u662f:{data}</p>;\n  }\n};",g="import React, { useRef, useEffect, useState } from 'react';\nimport { message } from 'antd';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  const [state, setState] = useState('');\n  const options = {\n    onBefore(params) {\n      console.log('\u8bf7\u6c42\u524d\u3002\u3002\u3002\u3002\u3002', params);\n    },\n    manual: true,\n    onSuccess: (result, params) => {\n      setState('');\n      message.success(`The username was changed to \"${params[0]}\" !`);\n    },\n    onError: (error) => {\n      message.error(error.message);\n    },\n  };\n  const { loading, run, runAsync } = useRequest(getUserName, options);\n  return (\n    <div>\n      <input\n        onChange={(e) => setState(e.target.value)}\n        value={state}\n        placeholder=\"Please enter username\"\n        style={{ width: 240, marginRight: 16 }}\n      />\n      <button\n        disabled={loading}\n        type=\"button\"\n        onClick={() => {\n          run(state);\n        }}\n      >\n        {loading ? 'Loading' : 'Edit'}\n      </button>\n    </div>\n  );\n};",v="import React, { useRef, useEffect, useState } from 'react';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  const [state, setState] = useState('');\n  const options = {\n    onBefore(params) {},\n    defaultParams: ['1'],\n  };\n  const { error, loading, data, run, params } = useRequest(\n    getUserName,\n    options,\n  );\n  console.log(params, loading);\n  return (\n    <div>\n      <input\n        type=\"text\"\n        style={{ width: 240, marginRight: 16 }}\n        value={state}\n        onChange={(e) => {\n          setState(e.target.value);\n        }}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          run(state);\n        }}\n      >\n        \u6539\u53d8userId\n      </button>\n      <p>useId\u662f:{params[0]}</p>\n      <p>useName\u662f:{data}</p>\n    </div>\n  );\n};",b="import Mock from 'mockjs';\nimport React, { useEffect } from 'react';\nimport { useRequest } from 'reactHooks';\n\nfunction getUsername(...arg): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const { data, loading, run, refresh } = useRequest(\n    (...arg: any[]): Promise<string> => getUsername(...arg),\n    {\n      manual: true,\n    },\n  );\n\n  useEffect(() => {\n    run(1);\n  }, []);\n\n  if (loading) {\n    return <div>loading...</div>;\n  }\n  return (\n    <div>\n      <p>Username: {data}</p>\n      <button onClick={refresh} type=\"button\">\n        Refresh\n      </button>\n    </div>\n  );\n};",h="import { message } from 'antd';\nimport React, { useState, useRef } from 'react';\nimport { useRequest } from 'reactHooks';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n}\n\nfunction editUsername(username: string): Promise<void> {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve();\n      } else {\n        reject(new Error('Failed to modify username'));\n      }\n    }, 1000);\n  });\n}\n\nexport default () => {\n  // store last username\n  const lastRef = useRef<string>();\n\n  const [state, setState] = useState('');\n\n  // get username\n  const { data: username, mutate } = useRequest(getUsername);\n\n  // edit username\n  const { run: edit } = useRequest(editUsername, {\n    manual: true,\n    onSuccess: (result, params) => {\n      setState('');\n      message.success(`The username was changed to \"${params[0]}\" !`);\n    },\n    onError: (error) => {\n      message.error(error.message);\n      mutate(lastRef.current);\n    },\n  });\n\n  const onChange = () => {\n    lastRef.current = username;\n    mutate(state);\n    edit(state);\n  };\n\n  return (\n    <div>\n      <p>Username: {username}</p>\n      <input\n        onChange={(e) => setState(e.target.value)}\n        value={state}\n        placeholder=\"Please enter username\"\n        style={{ width: 240, marginRight: 16 }}\n      />\n      <button type=\"button\" onClick={onChange}>\n        Edit\n      </button>\n    </div>\n  );\n};",k="import { message } from 'antd';\nimport React, { useState } from 'react';\nimport { useRequest } from 'reactHooks';\n\nfunction editUsername(username: string): Promise<void> {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve();\n      } else {\n        reject(new Error('Failed to modify username'));\n      }\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const [state, setState] = useState('');\n\n  const { loading, run } = useRequest(editUsername, {\n    manual: true,\n    onBefore: (params) => {\n      message.info(`Start Request: ${params[0]}`);\n    },\n    onSuccess: (result, params) => {\n      setState('');\n      message.success(`The username was changed to \"${params[0]}\" !`);\n    },\n    onError: (error) => {\n      message.error(error.message);\n    },\n    onFinally: (params, result, error) => {\n      message.info(`Request finish`);\n    },\n  });\n\n  return (\n    <div>\n      <input\n        onChange={(e) => setState(e.target.value)}\n        value={state}\n        placeholder=\"Please enter username\"\n        style={{ width: 240, marginRight: 16 }}\n      />\n      <button disabled={loading} type=\"button\" onClick={() => run(state)}>\n        {loading ? 'Loading' : 'Edit'}\n      </button>\n    </div>\n  );\n};",w="import React, { useRef, useEffect } from 'react';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  const { error, loading, data } = useRequest(getUserName);\n  if (error) {\n    return <p>\u6709\u9519\u8bef\uff1a{JSON.stringify(error)}</p>;\n  }\n  if (loading) {\n    return <p>\u52a0\u8f7d\u4e2d...</p>;\n  }\n  if (data) {\n    return <p>useName\u662f:{data}</p>;\n  }\n};",j="import React, { useRef, useEffect, useState } from 'react';\nimport { message } from 'antd';\nimport Mock from 'mockjs';\nimport { useRequest } from 'reactHooks';\nconst getUserName = (): Promise<string> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 1000);\n  });\n};\nexport default () => {\n  const [state, setState] = useState('');\n  const options = {\n    manual: true,\n    onSuccess: (result, params) => {\n      setState('');\n      message.success(`The username was changed to \"${params[0]}\" !`);\n    },\n    onError: (error) => {\n      message.error(error.message);\n    },\n  };\n  const { loading, run, runAsync } = useRequest(getUserName, options);\n  return (\n    <div>\n      <input\n        onChange={(e) => setState(e.target.value)}\n        value={state}\n        placeholder=\"Please enter username\"\n        style={{ width: 240, marginRight: 16 }}\n      />\n      <button\n        disabled={loading}\n        type=\"button\"\n        onClick={() => {\n          run(state);\n        }}\n      >\n        {loading ? 'Loading' : 'Edit'}\n      </button>\n    </div>\n  );\n};",x="import { useRequest } from 'reactHooks';\nimport React from 'react';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name'));\n    }, 200);\n  });\n}\n\nexport default () => {\n  const action = useRequest(getUsername);\n\n  const withLoadingDelayAction = useRequest(getUsername, {\n    loadingDelay: 300,\n  });\n\n  const trigger = () => {\n    action.run();\n    withLoadingDelayAction.run();\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={trigger}>\n        run\n      </button>\n\n      <div style={{ margin: '24px 0', width: 300 }}>\n        Username: {action.loading ? 'Loading...' : action.data}\n      </div>\n      <div>\n        Username:{' '}\n        {withLoadingDelayAction.loading\n          ? 'Loading...'\n          : withLoadingDelayAction.data}\n      </div>\n    </div>\n  );\n};",y="import React from 'react';\nimport { useTitle } from 'reactHooks';\n\nexport default () => {\n  useTitle('\u524d\u5a1f\u81ea\u5b9a\u4e49\u6807\u9898');\n  return <div>\u80fd\u591f\u4fee\u6539\u9875\u9762\u6807\u9898</div>;\n};",O='import React from \'react\';\nimport { useToggle } from \'reactHooks\';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>\u5f53\u524d\u7684state\u7684\u503c\u4e3a\uff1a{`${state}`}</p>\n      <p>\n        <button type="button" onClick={toggle}>\n          toggle \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type="button" onClick={setLeft}>\n          setLeft \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type="button" onClick={setRight}>\n          setRight \u5207\u6362\n        </button>\n      </p>\n    </div>\n  );\n};',R="import React from 'react';\nimport { useToggle } from 'reactHooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle('left', 'right');\n\n  return (\n    <div>\n      <p>\u5f53\u524d\u7684state\u7684\u503c\u4e3a\uff1a{`${state}`}</p>\n      <p>\n        <button type=\"button\" onClick={toggle}>\n          toggle \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type=\"button\" onClick={setLeft}>\n          setLeft \u5207\u6362\n        </button>\n      </p>\n      <p>\n        <button type=\"button\" onClick={setRight}>\n          setRight \u5207\u6362\n        </button>\n      </p>\n    </div>\n  );\n};",P="import React from 'react';\nimport { useUpdate } from 'reactHooks';\n\nexport default () => {\n  const update = useUpdate();\n\n  return (\n    <div>\n      <div>\u66f4\u65b0\u65f6\u95f4\uff1a{Date.now()}</div>\n      <button onClick={update}>\u66f4\u65b0</button>\n    </div>\n  );\n};",S={"useboolean-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"yoie"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"18.2.0"}},identifier:"useboolean-demo1"}},"usedebounce-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"eWij"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"18.2.0"}},identifier:"usedebounce-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"18.2.0"}},identifier:"uselatest-demo1"}},"userequest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"DB9a"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"userequest-demo1"}},"default-default":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"L0V+"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"default-default"}},"default-manual-run":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"13j3"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:">=16.9.0"},antd:{version:"5.2.1"},mockjs:{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"default-manual-run"}},"default-params":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"eaWa"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"default-params"}},"default-refresh":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"aunI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{mockjs:{version:"1.1.0"},react:{version:"18.2.0"}},title:"\u5237\u65b0\u7528\u6237\u540d\u79f0",identifier:"default-refresh"}},"default-mutate":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"q3ZD"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{antd:{version:"5.2.1"},react:{version:">=16.9.0"},mockjs:{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},title:"\u4fee\u6539\u7528\u6237\u540d",identifier:"default-mutate"}},"default-lifecycle":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"oXC0"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{antd:{version:"5.2.1"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"default-lifecycle"}},"index-default":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"CgOj"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"index-default"}},"index-manual":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"TtH1"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:j}},dependencies:{react:{version:">=16.9.0"},antd:{version:"5.2.1"},mockjs:{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"index-manual"}},"loadingdelay-loadingdelay":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"f90P"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x}},dependencies:{react:{version:"18.2.0"},mockjs:{version:"1.1.0"}},identifier:"loadingdelay-loadingdelay"}},"usetitle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"dA01"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:"18.2.0"}},identifier:"usetitle-demo1"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:O}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:R}},dependencies:{react:{version:"18.2.0"}},identifier:"usetoggle-demo2"}},"useupdate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(18),t.e(3)]).then(t.bind(null,"INwW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:P}},dependencies:{react:{version:"18.2.0"}},identifier:"useupdate-demo1"}}},U=t("Zs1V"),C=t("HvXX"),q=t.n(C);n["default"]=e=>s.a.createElement(q.a,Object(r["a"])({},e,{config:a,demos:S,apis:U}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle"},{"path":"/hooks/use-boolean","title":"useBoolean"},{"path":"/hooks/use-latest","title":"useLatest"},{"path":"/hooks/use-update","title":"useUpdate"}]},{"title":"\u8bf7\u6c42","children":[{"path":"/hooks/use-request","title":"useRequest"}]},{"title":"DOM","children":[{"path":"/hooks/use-title","title":"useTitle"},{"path":"/hooks/use-debounce","title":"useDebounce"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"}]},"title":"encode react hooks","logo":"/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);