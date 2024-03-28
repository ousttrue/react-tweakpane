import { normalizeListOptions as V } from "@tweakpane/core";
import { useState as B, useRef as f, useEffect as a, useCallback as h, useLayoutEffect as v } from "react";
import { Pane as L } from "tweakpane";
function F(i, e, l) {
  const [c, d] = B(e.value), u = f(null), r = f(l);
  r.current = l, a(() => {
    const t = u.current;
    t && (t.disabled = !!e.disabled, t.hidden = !!e.hidden, t.label = e.label, t.value = e.value);
  }, [e.disabled, e.hidden, e.label, e.value]), a(() => {
    const t = u.current;
    t != null && (t.options = V(e.options));
  }, [JSON.stringify(e.options)]);
  const s = h((t) => {
    u.current.value = t;
  }, []), n = l ? (t) => r.current(t) : (t) => d(t.value);
  return v(() => {
    const t = i.current.instance;
    if (t == null)
      return;
    e.view = e.view || "list";
    const b = t.addBlade(e);
    return b.on("change", n), u.current = b, () => {
      b.element && b.dispose();
    };
  }, []), [l ? void 0 : c, s, u];
}
function O(i, e, l) {
  const [c, d] = B(e.value), u = f(null), r = f(l);
  r.current = l, a(() => {
    const n = u.current;
    n != null && (n.disabled = !!e.disabled, n.hidden = !!e.hidden, n.label = e.label, n.value = e.value, n.formatter = e.format);
  }, [e.disabled, e.hidden, e.label, e.value]);
  const s = h((n) => {
    u.current.value = n;
  }, []);
  return v(() => {
    const n = i.current.instance;
    if (n == null)
      return;
    e.view = e.view || "text";
    const t = n.addBlade(e), b = l ? (o) => r.current(o) : (o) => d(o.value);
    return t.on("change", b), u.current = t, () => {
      t.element && t.dispose();
    };
  }, []), [l ? void 0 : c, s, u];
}
function T(i, e, l) {
  const [c, d] = B(e.value || 0), u = f(null), r = f(l);
  r.current = l, a(() => {
    const n = u.current;
    n != null && (n.disabled = !!e.disabled, n.hidden = !!e.hidden, n.label = e.label, n.max = e.max, n.min = e.min, n.value = e.value || 0);
  }, [
    e.disabled,
    e.hidden,
    e.label,
    e.value,
    e.max,
    e.min
  ]);
  const s = h((n) => {
    u.current.value = n;
  }, []);
  return v(() => {
    const n = i.current.instance;
    if (n == null)
      return;
    e.view = e.view || "slider";
    const t = n.addBlade(e), b = l ? (o) => r.current(o) : (o) => d(o.value);
    return t.on("change", b), u.current = t, () => {
      t.element && t.dispose();
    };
  }, []), [l ? void 0 : c, s, u];
}
function z(i, e) {
  var c;
  const l = f({
    instance: null,
    params: ((c = i.current) == null ? void 0 : c.params) || {}
  });
  return a(() => {
    const d = l.current.instance;
    d != null && (d.title = e.title, d.expanded = e.expanded ?? !0, d.disabled = !!e.disabled, d.hidden = !!e.hidden);
  }, [
    e.disabled,
    e.expanded,
    e.title,
    e.hidden
  ]), v(() => {
    var r, s;
    const d = (r = i.current) == null ? void 0 : r.instance;
    if (d == null)
      return;
    const u = d.addFolder(e);
    return l.current.instance = u, l.current.params = ((s = i.current) == null ? void 0 : s.params) || {}, () => {
      u.element && u.dispose();
    };
  }, []), l;
}
function I(i, e, l = {}, c = void 0) {
  const d = typeof l == "function" ? {} : l, u = typeof l == "function" ? l : c, [r, s] = B(i.current.params[e]), n = f(null), t = f(u);
  t.current = u;
  const b = h((o) => {
    n.current.controller_.binding.target.write(o), n.current.refresh();
  }, []);
  return n.current && (n.current.hidden = !!d.hidden, n.current.disabled = !!d.disabled), v(() => {
    var R;
    const o = (R = i.current) == null ? void 0 : R.instance;
    if (o == null)
      return;
    const k = u ? (w) => t.current(w) : (w) => s(w.value), x = o.addBinding(i.current.params, e, d).on("change", k);
    return n.current = x, () => {
      x.element && x.dispose();
    };
  }, [e, u]), [u == null ? r : void 0, b, n];
}
function J(i = {}, e = {}) {
  const l = f({
    instance: null,
    params: i
  });
  return a(() => {
    const c = l.current.instance;
    c != null && (c.title = e.title, c.expanded = e.expanded ?? !0, c.refresh());
  }, [e.expanded, e.title]), v(() => {
    const c = new L(e);
    return l.current.instance = c, () => {
      l.current.instance = null, c.dispose();
    };
  }, []), l;
}
export {
  F as useListBlade,
  z as usePaneFolder,
  I as usePaneInput,
  T as useSliderBlade,
  O as useTextBlade,
  J as useTweakpane
};
