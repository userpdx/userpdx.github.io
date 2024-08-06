/// <reference types="vite/client" />
declare interface ImportMetaEnv {
	readonly VITE_RUN_ENV: string;
}
declare type AnyObject = Record<string, any>;
declare interface Window {
	chaosWebViewGoBackEnable: Record<boolean, any>;
	JS_BRIDGE_PLUGINS: any;
	_nativeWindow: any;
}

declare module '@vueuse/core';
declare module 'qs';
declare module 'thinkingdata-browser';
