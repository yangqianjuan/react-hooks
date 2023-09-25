// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react-router@6.4.2_react@18.2.0_typescript@4.3.2_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1694946596000,
          "title": "首页",
          "hero": {
            "image": "/short-logo.png",
            "desc": "<div class=\"markdown\"><p>印客学院 React 业务 Hooks</p></div>",
            "actions": [
              {
                "text": "指南",
                "link": "/guide"
              },
              {
                "text": "Hooks 列表",
                "link": "/hooks"
              }
            ]
          },
          "footer": "<div class=\"markdown\"><p>Copyright (c) © 2023 by encode studio, All Rights Reserved</p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "✨ 特性",
              "heading": "-特性"
            },
            {
              "depth": 2,
              "value": "📦 安装",
              "heading": "-安装"
            },
            {
              "depth": 2,
              "value": "🔨 使用",
              "heading": "-使用"
            }
          ]
        },
        "title": "首页 - encode react hooks"
      },
      {
        "path": "/guide",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/docs/guide/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/index.md",
          "updatedTime": 1694946596000,
          "slugs": [
            {
              "depth": 1,
              "value": "encode-hooks",
              "heading": "encode-hooks"
            },
            {
              "depth": 2,
              "value": "⛰️ 能力支持",
              "heading": "️-能力支持"
            },
            {
              "depth": 3,
              "value": "1. 可靠的代码健壮",
              "heading": "1-可靠的代码健壮"
            },
            {
              "depth": 3,
              "value": "2. 完善的文档能力",
              "heading": "2-完善的文档能力"
            },
            {
              "depth": 3,
              "value": "3. 完整的测试用例",
              "heading": "3-完整的测试用例"
            },
            {
              "depth": 2,
              "value": "🌟 设计目的",
              "heading": "-设计目的"
            },
            {
              "depth": 2,
              "value": "⚒️ 技术选型",
              "heading": "️-技术选型"
            },
            {
              "depth": 3,
              "value": "包管理工具 -- pnpm",
              "heading": "包管理工具----pnpm"
            },
            {
              "depth": 3,
              "value": "构建工具 -- webpack & gulp",
              "heading": "构建工具----webpack--gulp"
            },
            {
              "depth": 3,
              "value": "静态文件打包工具 -- dumi",
              "heading": "静态文件打包工具----dumi"
            },
            {
              "depth": 3,
              "value": "测试工具 -- jest",
              "heading": "测试工具----jest"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "生成CHANGELOG",
              "heading": "生成changelog"
            },
            {
              "depth": 2,
              "value": "📧 联系",
              "heading": "-联系"
            }
          ],
          "title": "encode-hooks",
          "nav": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "encode-hooks - encode react hooks"
      },
      {
        "path": "/hooks/use-boolean",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useBoolean__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useBoolean/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useBoolean/index.md",
          "updatedTime": 1695027869000,
          "nav": {
            "path": "/hooks",
            "title": "UseBoolean"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useBoolean",
              "heading": "useboolean"
            }
          ],
          "title": "useBoolean",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-boolean",
            "title": "UseBoolean"
          }
        },
        "title": "useBoolean - encode react hooks"
      },
      {
        "path": "/hooks/use-debounce",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useDebounce__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useDebounce/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useDebounce/index.md",
          "updatedTime": 1695206336000,
          "nav": {
            "path": "/hooks",
            "title": "UseDebounce"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useDebounce",
              "heading": "usedebounce"
            }
          ],
          "title": "useDebounce",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-debounce",
            "title": "UseDebounce"
          }
        },
        "title": "useDebounce - encode react hooks"
      },
      {
        "path": "/hooks/use-latest",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useLatest__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useLatest/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useLatest/index.md",
          "updatedTime": 1695206336000,
          "nav": {
            "path": "/hooks",
            "title": "UseLatest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useLatest",
              "heading": "uselatest"
            }
          ],
          "title": "useLatest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-latest",
            "title": "UseLatest"
          }
        },
        "title": "useLatest - encode react hooks"
      },
      {
        "path": "/hooks/use-request",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useRequest/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/index.md",
          "updatedTime": 1695387595000,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useRequest",
              "heading": "userequest"
            }
          ],
          "title": "useRequest",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-request",
            "title": "UseRequest"
          }
        },
        "title": "useRequest - encode react hooks"
      },
      {
        "path": "/hooks/use-request/default",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__default__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useRequest/doc/default/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/default/index.md",
          "updatedTime": 1695551586000,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "默认请求",
              "heading": "默认请求"
            },
            {
              "depth": 2,
              "value": "手动触发",
              "heading": "手动触发"
            },
            {
              "depth": 2,
              "value": "参数管理",
              "heading": "参数管理"
            },
            {
              "depth": 2,
              "value": "刷新（重复上一次请求）",
              "heading": "刷新重复上一次请求"
            },
            {
              "depth": 2,
              "value": "立即变更数据",
              "heading": "立即变更数据"
            },
            {
              "depth": 2,
              "value": "生命周期",
              "heading": "生命周期"
            },
            {
              "depth": 2,
              "value": "取消响应",
              "heading": "取消响应"
            },
            {
              "depth": 3,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 3,
              "value": "Options",
              "heading": "options"
            }
          ],
          "title": "基础用法",
          "hasPreviewer": true
        },
        "title": "基础用法 - encode react hooks"
      },
      {
        "path": "/hooks/use-request/index",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__index__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useRequest/doc/index/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/index/index.md",
          "updatedTime": 1695551586000,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "默认用法",
              "heading": "默认用法"
            },
            {
              "depth": 2,
              "value": "手动触发",
              "heading": "手动触发"
            }
          ],
          "title": "快速上手",
          "hasPreviewer": true
        },
        "title": "快速上手 - encode react hooks"
      },
      {
        "path": "/hooks/use-request/loading-delay",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useRequest__doc__loadingDelay__loadingDelay.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useRequest/doc/loadingDelay/loadingDelay.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useRequest/doc/loadingDelay/loadingDelay.md",
          "updatedTime": 1695551586000,
          "nav": {
            "path": "/hooks",
            "title": "UseRequest"
          },
          "group": {
            "path": "/hooks/use-request",
            "title": "Doc"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Loading Delay",
              "heading": "loading-delay"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 2,
              "value": "备注",
              "heading": "备注"
            }
          ],
          "title": "Loading Delay",
          "hasPreviewer": true
        },
        "title": "Loading Delay - encode react hooks"
      },
      {
        "path": "/hooks/use-title",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useTitle__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useTitle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useTitle/index.md",
          "updatedTime": 1695206336000,
          "nav": {
            "path": "/hooks",
            "title": "UseTitle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useTitle",
              "heading": "usetitle"
            }
          ],
          "title": "useTitle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-title",
            "title": "UseTitle"
          }
        },
        "title": "useTitle - encode react hooks"
      },
      {
        "path": "/hooks/use-toggle",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useToggle__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useToggle/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useToggle/index.md",
          "updatedTime": 1694946596000,
          "nav": {
            "path": "/hooks",
            "title": "UseToggle"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useToggle",
              "heading": "usetoggle"
            }
          ],
          "title": "useToggle",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-toggle",
            "title": "UseToggle"
          }
        },
        "title": "useToggle - encode react hooks"
      },
      {
        "path": "/hooks/use-update",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'packages__hooks__src__useUpdate__index.md' */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useUpdate/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "packages/hooks/src/useUpdate/index.md",
          "updatedTime": 1695387595000,
          "nav": {
            "path": "/hooks",
            "title": "UseUpdate"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "useUpdate",
              "heading": "useupdate"
            }
          ],
          "title": "useUpdate",
          "hasPreviewer": true,
          "group": {
            "path": "/hooks/use-update",
            "title": "UseUpdate"
          }
        },
        "title": "useUpdate - encode react hooks"
      },
      {
        "path": "/hooks",
        "meta": {},
        "exact": true,
        "redirect": "/hooks/use-toggle"
      }
    ],
    "title": "encode react hooks",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
