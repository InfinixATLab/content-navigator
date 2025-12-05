/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}/user-details/[id]` | `/user-details/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(home)'}/user-details/[id]` | `/user-details/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(home)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(home)'}` | `/`; params?: Router.UnknownInputParams; } | `${'/(home)'}/user-details/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | `/user-details/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | { pathname: `${'/(home)'}/user-details/[id]` | `/user-details/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
