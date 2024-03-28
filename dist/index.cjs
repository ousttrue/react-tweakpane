"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const R=require("@tweakpane/core"),u=require("react"),x=require("tweakpane");function E(r,e,l){const[d,i]=u.useState(e.value),c=u.useRef(null),s=u.useRef(l);s.current=l,u.useEffect(()=>{const t=c.current;t&&(t.disabled=!!e.disabled,t.hidden=!!e.hidden,t.label=e.label,t.value=e.value)},[e.disabled,e.hidden,e.label,e.value]),u.useEffect(()=>{const t=c.current;t!=null&&(t.options=R.normalizeListOptions(e.options))},[JSON.stringify(e.options)]);const f=u.useCallback(t=>{c.current.value=t},[]),n=l?t=>s.current(t):t=>i(t.value);return u.useLayoutEffect(()=>{const t=r.current.instance;if(t==null)return;e.view=e.view||"list";const a=t.addBlade(e);return a.on("change",n),c.current=a,()=>{a.element&&a.dispose()}},[]),[l?void 0:d,f,c]}function w(r,e,l){const[d,i]=u.useState(e.value),c=u.useRef(null),s=u.useRef(l);s.current=l,u.useEffect(()=>{const n=c.current;n!=null&&(n.disabled=!!e.disabled,n.hidden=!!e.hidden,n.label=e.label,n.value=e.value,n.formatter=e.format)},[e.disabled,e.hidden,e.label,e.value]);const f=u.useCallback(n=>{c.current.value=n},[]);return u.useLayoutEffect(()=>{const n=r.current.instance;if(n==null)return;e.view=e.view||"text";const t=n.addBlade(e),a=l?o=>s.current(o):o=>i(o.value);return t.on("change",a),c.current=t,()=>{t.element&&t.dispose()}},[]),[l?void 0:d,f,c]}function k(r,e,l){const[d,i]=u.useState(e.value||0),c=u.useRef(null),s=u.useRef(l);s.current=l,u.useEffect(()=>{const n=c.current;n!=null&&(n.disabled=!!e.disabled,n.hidden=!!e.hidden,n.label=e.label,n.max=e.max,n.min=e.min,n.value=e.value||0)},[e.disabled,e.hidden,e.label,e.value,e.max,e.min]);const f=u.useCallback(n=>{c.current.value=n},[]);return u.useLayoutEffect(()=>{const n=r.current.instance;if(n==null)return;e.view=e.view||"slider";const t=n.addBlade(e),a=l?o=>s.current(o):o=>i(o.value);return t.on("change",a),c.current=t,()=>{t.element&&t.dispose()}},[]),[l?void 0:d,f,c]}function y(r,e){var d;const l=u.useRef({instance:null,params:((d=r.current)==null?void 0:d.params)||{}});return u.useEffect(()=>{const i=l.current.instance;i!=null&&(i.title=e.title,i.expanded=e.expanded??!0,i.disabled=!!e.disabled,i.hidden=!!e.hidden)},[e.disabled,e.expanded,e.title,e.hidden]),u.useLayoutEffect(()=>{var s,f;const i=(s=r.current)==null?void 0:s.instance;if(i==null)return;const c=i.addFolder(e);return l.current.instance=c,l.current.params=((f=r.current)==null?void 0:f.params)||{},()=>{c.element&&c.dispose()}},[]),l}function L(r,e,l={},d=void 0){const i=typeof l=="function"?{}:l,c=typeof l=="function"?l:d,[s,f]=u.useState(r.current.params[e]),n=u.useRef(null),t=u.useRef(c);t.current=c;const a=u.useCallback(o=>{n.current.controller_.binding.target.write(o),n.current.refresh()},[]);return n.current&&(n.current.hidden=!!i.hidden,n.current.disabled=!!i.disabled),u.useLayoutEffect(()=>{var B;const o=(B=r.current)==null?void 0:B.instance;if(o==null)return;const h=c?v=>t.current(v):v=>f(v.value),b=o.addBinding(r.current.params,e,i).on("change",h);return n.current=b,()=>{b.element&&b.dispose()}},[e,c]),[c==null?s:void 0,a,n]}function S(r={},e={}){const l=u.useRef({instance:null,params:r});return u.useEffect(()=>{const d=l.current.instance;d!=null&&(d.title=e.title,d.expanded=e.expanded??!0,d.refresh())},[e.expanded,e.title]),u.useLayoutEffect(()=>{const d=new x.Pane(e);return l.current.instance=d,()=>{l.current.instance=null,d.dispose()}},[]),l}exports.useListBlade=E;exports.usePaneFolder=y;exports.usePaneInput=L;exports.useSliderBlade=k;exports.useTextBlade=w;exports.useTweakpane=S;
