// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useBoolean/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useLatest/demo/demo1.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useTitle/demo/demo1.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useDebounce/demo/demo1.tsx?dumi-raw-code';

export default {
  'useboolean-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useBoolean/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"useboolean-demo1"},
  },
  'uselatest-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useLatest/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"uselatest-demo1"},
  },
  'usetitle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useTitle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode3}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetitle-demo1"},
  },
  'usetoggle-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode4}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usetoggle-demo2"},
  },
  'usedebounce-demo1': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'/Users/yangqianlu/Desktop/hooks实战练习/reactDemoHooks/packages/hooks/src/useDebounce/demo/demo1.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"usedebounce-demo1"},
  },
};
