// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import routeProps from './routeProps';

if (process.env.NODE_ENV === 'development') {
  Object.entries(routeProps).forEach(([key, value]) => {
    const internalProps = ['path', 'id', 'parentId', 'isLayout', 'isWrapper', 'layout', 'clientLoader'];
    Object.keys(value).forEach((prop) => {
      if (internalProps.includes(prop)) {
        throw new Error(
          `[UmiJS] route '${key}' should not have '${prop}' prop, please remove this property in 'routeProps'.`
        )
      }
    })
  })
}

import React from 'react';

export async function getRoutes() {
  const routes = {"assets":{"path":"assets","id":"assets","parentId":"@@/global-layout"},"index":{"path":"/","id":"index","parentId":"@@/global-layout"},"docs":{"path":"docs","id":"docs","parentId":"@@/global-layout"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'assets': React.lazy(() => import(/* webpackChunkName: "src__pages__assets" */'../../../src/pages/assets.tsx')),
'index': React.lazy(() => import(/* webpackChunkName: "src__pages__index" */'../../../src/pages/index.tsx')),
'docs': React.lazy(() => import(/* webpackChunkName: "src__pages__docs" */'../../../src/pages/docs.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/home/hanif/project/annotate_image/src/layouts/index.tsx')),
},
  };
}
