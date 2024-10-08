/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutDiscoverEventsImport } from './routes/_layout/discover-events'
import { Route as LayoutEventIndexImport } from './routes/_layout/$event/index'
import { Route as LayoutEventLayoutImport } from './routes/_layout/$event/_layout'
import { Route as LayoutEventLayoutTicketsImport } from './routes/_layout/$event/_layout/tickets'
import { Route as LayoutEventLayoutPaymentImport } from './routes/_layout/$event/_layout/payment'
import { Route as LayoutEventLayoutContactImport } from './routes/_layout/$event/_layout/contact'

// Create Virtual Routes

const LayoutEventImport = createFileRoute('/_layout/$event')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutEventRoute = LayoutEventImport.update({
  path: '/$event',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutDiscoverEventsRoute = LayoutDiscoverEventsImport.update({
  path: '/discover-events',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutEventIndexRoute = LayoutEventIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutEventRoute,
} as any)

const LayoutEventLayoutRoute = LayoutEventLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => LayoutEventRoute,
} as any)

const LayoutEventLayoutTicketsRoute = LayoutEventLayoutTicketsImport.update({
  path: '/tickets',
  getParentRoute: () => LayoutEventLayoutRoute,
} as any)

const LayoutEventLayoutPaymentRoute = LayoutEventLayoutPaymentImport.update({
  path: '/payment',
  getParentRoute: () => LayoutEventLayoutRoute,
} as any)

const LayoutEventLayoutContactRoute = LayoutEventLayoutContactImport.update({
  path: '/contact',
  getParentRoute: () => LayoutEventLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/discover-events': {
      id: '/_layout/discover-events'
      path: '/discover-events'
      fullPath: '/discover-events'
      preLoaderRoute: typeof LayoutDiscoverEventsImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/$event': {
      id: '/_layout/$event'
      path: '/$event'
      fullPath: '/$event'
      preLoaderRoute: typeof LayoutEventImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/$event/_layout': {
      id: '/_layout/$event/_layout'
      path: '/$event'
      fullPath: '/$event'
      preLoaderRoute: typeof LayoutEventLayoutImport
      parentRoute: typeof LayoutEventRoute
    }
    '/_layout/$event/': {
      id: '/_layout/$event/'
      path: '/'
      fullPath: '/$event/'
      preLoaderRoute: typeof LayoutEventIndexImport
      parentRoute: typeof LayoutEventImport
    }
    '/_layout/$event/_layout/contact': {
      id: '/_layout/$event/_layout/contact'
      path: '/contact'
      fullPath: '/$event/contact'
      preLoaderRoute: typeof LayoutEventLayoutContactImport
      parentRoute: typeof LayoutEventLayoutImport
    }
    '/_layout/$event/_layout/payment': {
      id: '/_layout/$event/_layout/payment'
      path: '/payment'
      fullPath: '/$event/payment'
      preLoaderRoute: typeof LayoutEventLayoutPaymentImport
      parentRoute: typeof LayoutEventLayoutImport
    }
    '/_layout/$event/_layout/tickets': {
      id: '/_layout/$event/_layout/tickets'
      path: '/tickets'
      fullPath: '/$event/tickets'
      preLoaderRoute: typeof LayoutEventLayoutTicketsImport
      parentRoute: typeof LayoutEventLayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutEventLayoutRouteChildren {
  LayoutEventLayoutContactRoute: typeof LayoutEventLayoutContactRoute
  LayoutEventLayoutPaymentRoute: typeof LayoutEventLayoutPaymentRoute
  LayoutEventLayoutTicketsRoute: typeof LayoutEventLayoutTicketsRoute
}

const LayoutEventLayoutRouteChildren: LayoutEventLayoutRouteChildren = {
  LayoutEventLayoutContactRoute: LayoutEventLayoutContactRoute,
  LayoutEventLayoutPaymentRoute: LayoutEventLayoutPaymentRoute,
  LayoutEventLayoutTicketsRoute: LayoutEventLayoutTicketsRoute,
}

const LayoutEventLayoutRouteWithChildren =
  LayoutEventLayoutRoute._addFileChildren(LayoutEventLayoutRouteChildren)

interface LayoutEventRouteChildren {
  LayoutEventLayoutRoute: typeof LayoutEventLayoutRouteWithChildren
  LayoutEventIndexRoute: typeof LayoutEventIndexRoute
}

const LayoutEventRouteChildren: LayoutEventRouteChildren = {
  LayoutEventLayoutRoute: LayoutEventLayoutRouteWithChildren,
  LayoutEventIndexRoute: LayoutEventIndexRoute,
}

const LayoutEventRouteWithChildren = LayoutEventRoute._addFileChildren(
  LayoutEventRouteChildren,
)

interface LayoutRouteChildren {
  LayoutDiscoverEventsRoute: typeof LayoutDiscoverEventsRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutEventRoute: typeof LayoutEventRouteWithChildren
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutDiscoverEventsRoute: LayoutDiscoverEventsRoute,
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutEventRoute: LayoutEventRouteWithChildren,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/discover-events': typeof LayoutDiscoverEventsRoute
  '/': typeof LayoutIndexRoute
  '/$event': typeof LayoutEventLayoutRouteWithChildren
  '/$event/': typeof LayoutEventIndexRoute
  '/$event/contact': typeof LayoutEventLayoutContactRoute
  '/$event/payment': typeof LayoutEventLayoutPaymentRoute
  '/$event/tickets': typeof LayoutEventLayoutTicketsRoute
}

export interface FileRoutesByTo {
  '/discover-events': typeof LayoutDiscoverEventsRoute
  '/': typeof LayoutIndexRoute
  '/$event': typeof LayoutEventIndexRoute
  '/$event/contact': typeof LayoutEventLayoutContactRoute
  '/$event/payment': typeof LayoutEventLayoutPaymentRoute
  '/$event/tickets': typeof LayoutEventLayoutTicketsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/discover-events': typeof LayoutDiscoverEventsRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/$event': typeof LayoutEventRouteWithChildren
  '/_layout/$event/_layout': typeof LayoutEventLayoutRouteWithChildren
  '/_layout/$event/': typeof LayoutEventIndexRoute
  '/_layout/$event/_layout/contact': typeof LayoutEventLayoutContactRoute
  '/_layout/$event/_layout/payment': typeof LayoutEventLayoutPaymentRoute
  '/_layout/$event/_layout/tickets': typeof LayoutEventLayoutTicketsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/discover-events'
    | '/'
    | '/$event'
    | '/$event/'
    | '/$event/contact'
    | '/$event/payment'
    | '/$event/tickets'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/discover-events'
    | '/'
    | '/$event'
    | '/$event/contact'
    | '/$event/payment'
    | '/$event/tickets'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/discover-events'
    | '/_layout/'
    | '/_layout/$event'
    | '/_layout/$event/_layout'
    | '/_layout/$event/'
    | '/_layout/$event/_layout/contact'
    | '/_layout/$event/_layout/payment'
    | '/_layout/$event/_layout/tickets'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/discover-events",
        "/_layout/",
        "/_layout/$event"
      ]
    },
    "/_layout/discover-events": {
      "filePath": "_layout/discover-events.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/$event": {
      "filePath": "_layout/$event",
      "parent": "/_layout",
      "children": [
        "/_layout/$event/_layout",
        "/_layout/$event/"
      ]
    },
    "/_layout/$event/_layout": {
      "filePath": "_layout/$event/_layout.tsx",
      "parent": "/_layout/$event",
      "children": [
        "/_layout/$event/_layout/contact",
        "/_layout/$event/_layout/payment",
        "/_layout/$event/_layout/tickets"
      ]
    },
    "/_layout/$event/": {
      "filePath": "_layout/$event/index.tsx",
      "parent": "/_layout/$event"
    },
    "/_layout/$event/_layout/contact": {
      "filePath": "_layout/$event/_layout/contact.tsx",
      "parent": "/_layout/$event/_layout"
    },
    "/_layout/$event/_layout/payment": {
      "filePath": "_layout/$event/_layout/payment.tsx",
      "parent": "/_layout/$event/_layout"
    },
    "/_layout/$event/_layout/tickets": {
      "filePath": "_layout/$event/_layout/tickets.tsx",
      "parent": "/_layout/$event/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
