!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    const o = n[r] = { i: r, l: !1, exports: {} };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }
  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r,
    });
  }, t.n = function (e) {
    const n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, 'a', n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = '', t(t.s = 23);
}([
  function (e, t, n) {
    e.exports = n(24);
  },
  function (e, t, n) {
    e.exports = n(40)();
  },
  function (e, t, n) {
    const r = function () {};
    e.exports = r;
  },
  function (e, t, n) {
    const r = function (e, t, n, r, o, a, i, u) {
      if (!e) {
        let l;
        if (void 0 === t)l = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'); else {
          let s = [n, r, o, a, i, u],
            c = 0;
          l = new Error(t.replace(/%s/g, () => s[c++])), l.name = 'Invariant Violation';
        }
        throw l.framesToPop = 1, l;
      }
    };
    e.exports = r;
  },
  function (e, t, n) {
    function r(e, t, n) {
      function o() {
        v === m && (v = m.slice());
      }
      function a() {
        return y;
      }
      function i(e) {
        if (typeof e !== 'function') throw new Error('Expected listener to be a function.');
        let t = !0;
        return o(), v.push(e), function () {
          if (t) {
            t = !1, o();
            const n = v.indexOf(e);
            v.splice(n, 1);
          }
        };
      }
      function u(e) {
        if (!Object(f.a)(e)) throw new Error('Actions must be plain objects. Use custom middleware for async actions.');
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (g) throw new Error('Reducers may not dispatch actions.');
        try {
          g = !0, y = p(y, e);
        } finally {
          g = !1;
        }
        for (let t = m = v, n = 0; n < t.length; n++) {
          (0, t[n])();
        }
        return e;
      }
      function l(e) {
        if (typeof e !== 'function') throw new Error('Expected the nextReducer to be a function.');
        p = e, u({ type: h.INIT });
      }
      function s() {
        let e,
          t = i;
        return e = {
          subscribe(e) {
            function n() {
              e.next && e.next(a());
            }
            if (typeof e !== 'object') throw new TypeError('Expected the observer to be an object.');
            return n(), { unsubscribe: t(n) };
          },
        }, e[d.a] = function () {
          return this;
        }, e;
      }
      let c;
      if (typeof t === 'function' && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if (typeof n !== 'function') throw new Error('Expected the enhancer to be a function.');
        return n(r)(e, t);
      }
      if (typeof e !== 'function') throw new Error('Expected the reducer to be a function.');
      var p = e,
        y = t,
        m = [],
        v = m,
        g = !1;
      return u({
        type: h.INIT,
      }), c = {

        dispatch: u,
        subscribe: i,
        getState: a,
        replaceReducer: l,
      }, c[d.a] = s, c;
    }
    function o(e, t) {
      const n = t && t.type;
      return `Given action ${n && `"${n.toString()}"` || 'an action'}, reducer "${e}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`;
    }
    function a(e) {
      Object.keys(e).forEach((t) => {
        const n = e[t];
        if (void 0 === n(void 0, {
          type: h.INIT,
        })) throw new Error(`Reducer "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        if (void 0 === n(void 0, {

          type: `@@redux/PROBE_UNKNOWN_ACTION_${Math.random().toString(36).substring(7).split('')
            .join('.')}`,
        })) throw new Error(`Reducer "${t}" returned undefined when probed with a random type. Don't try to handle ${h.INIT} or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
      });
    }
    function i(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        const i = t[r];
        typeof e[i] === 'function' && (n[i] = e[i]);
      }
      let u = Object.keys(n),
        l = void 0;
      try {
        a(n);
      } catch (e) {
        l = e;
      }
      return function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1];
        if (l) throw l;
        for (var r = !1, a = {}, i = 0; i < u.length; i++) {
          let s = u[i],
            c = n[s],
            f = e[s],
            p = c(f, t);
          if (void 0 === p) {
            const d = o(s, t);
            throw new Error(d);
          }
          a[s] = p, r = r || p !== f;
        }
        return r ? a : e;
      };
    }
    function u(e, t) {
      return function () {
        return t(e(...arguments));
      };
    }
    function l(e, t) {
      if (typeof e === 'function') return u(e, t);
      if (typeof e !== 'object' || e === null) throw new Error(`bindActionCreators expected an object or a function, instead received ${e === null ? 'null' : typeof e}. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
      for (var n = Object.keys(e), r = {}, o = 0; o < n.length; o++) {
        let a = n[o],
          i = e[a];
        typeof i === 'function' && (r[a] = u(i, t));
      }
      return r;
    }
    function s() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n];
      return t.length === 0 ? function (e) {
        return e;
      } : t.length === 1 ? t[0] : t.reduce((e, t) => function () {
        return e(t(...arguments));
      });
    }
    function c() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n];
      return function (e) {
        return function (n, r, o) {
          let a = e(n, r, o),
            i = a.dispatch,
            u = [],
            l = {
              getState: a.getState,
              dispatch(e) {
                return i(e);
              },
            };
          return u = t.map(e => e(l)), i = s(...u)(a.dispatch), y({}, a, {
            dispatch: i,
          });
        };
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var f = n(9),
      p = n(44),
      d = n.n(p),
      h = { INIT: '@@redux/INIT' },
      y = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    n.d(t, 'createStore', () => r), n.d(t, 'combineReducers', () => i), n.d(t, 'bindActionCreators', () => l), n.d(t, 'applyMiddleware', () => c), n.d(t, 'compose', () => s);
  },
  function (e, t, n) {
    t.__esModule = !0;
    const r = (t.addLeadingSlash = function (e) {
      return e.charAt(0) === '/' ? e : `/${e}`;
    }, t.stripLeadingSlash = function (e) {
        return e.charAt(0) === '/' ? e.substr(1) : e;
      }, t.hasBasename = function (e, t) {
        return new RegExp(`^${t}(\\/|\\?|#|$)`, 'i').test(e);
      });
    t.stripBasename = function (e, t) {
      return r(e, t) ? e.substr(t.length) : e;
    }, t.stripTrailingSlash = function (e) {
      return e.charAt(e.length - 1) === '/' ? e.slice(0, -1) : e;
    }, t.parsePath = function (e) {
      let t = e || '/',
        n = '',
        r = '',
        o = t.indexOf('#');
      o !== -1 && (r = t.substr(o), t = t.substr(0, o));
      const a = t.indexOf('?');
      return a !== -1 && (n = t.substr(a), t = t.substr(0, a)), {
        pathname: t,
        search: n === '?' ? '' : n,
        hash: r === '#' ? '' : r,
      };
    }, t.createPath = function (e) {
      let t = e.pathname,
        n = e.search,
        r = e.hash,
        o = t || '/';
      return n && n !== '?' && (o += n.charAt(0) === '?' ? n : `?${n}`), r && r !== '#' && (o += r.charAt(0) === '#' ? r : `#${r}`), o;
    };
  },
  function (e, t, n) {
    function r(e) {
      return function () {
        return e;
      };
    }
    const o = function () {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
      return this;
    }, o.thatReturnsArgument = function (e) {
      return e;
    }, e.exports = o;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let a = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(0),
      u = r(i),
      l = n(1),
      s = r(l),
      c = function (e, t) {
        let n = e.children,
          r = e.color,
          i = e.size,
          l = e.style,
          s = e.width,
          c = e.height,
          f = o(e, ['children', 'color', 'size', 'style', 'width', 'height']),
          p = t.reactIconBase,
          d = void 0 === p ? {} : p,
          h = i || d.size || '1em';
        return u.default.createElement('svg', a({

          children: n,
          fill: 'currentColor',
          preserveAspectRatio: 'xMidYMid meet',
          height: c || h,
          width: s || h,
        }, d, f, {
          style: a({
            verticalAlign: 'middle',
            color: r || d.color,
          }, d.style || {}, l),
        }));
      };
    c.propTypes = {
      color: s.default.string,
      size: s.default.oneOfType([s.default.string, s.default.number]),
      width: s.default.oneOfType([s.default.string, s.default.number]),
      height: s.default.oneOfType([s.default.string, s.default.number]),
      style: s.default.object,
    }, c.contextTypes = {
      reactIconBase: s.default.shape(c.propTypes),
    }, t.default = c, e.exports = t.default;
  },
  function (e, t, n) {
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function i() {
      let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'store',
        n = arguments[1],
        i = n || `${t}Subscription`,
        u = (function (e) {
          function n(a, i) {
            r(this, n);
            const u = o(this, e.call(this, a, i));
            return u[t] = a.store, u;
          }
          return a(n, e), n.prototype.getChildContext = function () {
            let e;
            return e = {}, e[t] = this[t], e[i] = null, e;
          }, n.prototype.render = function () {
            return I.Children.only(this.props.children);
          }, n;
        }(I.Component));
      return u.propTypes = {
        store: V.isRequired,
        children: H.a.element.isRequired,
      }, u.childContextTypes = (e = {}, e[t] = V.isRequired, e[i] = F, e), u;
    }
    function u(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function l() {
      let e = [],
        t = [];
      return {
        clear() {
          t = G, e = G;
        },
        notify() {
          for (let n = e = t, r = 0; r < n.length; r++)n[r]();
        },
        get() {
          return t;
        },
        subscribe(n) {
          let r = !0;
          return t === e && (t = e.slice()), t.push(n), function () {
            r && e !== G && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1));
          };
        },
      };
    }
    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function c(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function f(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function p(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function d() {}
    function h(e, t) {
      var n = {

        run(r) {
          try {
            const o = e(t.getState(), r);
            (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null);
          } catch (e) {
            n.shouldComponentUpdate = !0, n.error = e;
          }
        },
      };
      return n;
    }
    function y(e) {
      let t,
        n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = r.getDisplayName,
        a = void 0 === o ? function (e) {
          return `ConnectAdvanced(${e})`;
        } : o,
        i = r.methodName,
        u = void 0 === i ? 'connectAdvanced' : i,
        l = r.renderCountProp,
        y = void 0 === l ? void 0 : l,
        m = r.shouldHandleStateChanges,
        v = void 0 === m || m,
        g = r.storeKey,
        b = void 0 === g ? 'store' : g,
        _ = r.withRef,
        O = void 0 !== _ && _,
        w = p(r, [
          'getDisplayName',
          'methodName',
          'renderCountProp',
          'shouldHandleStateChanges',
          'storeKey',
          'withRef',
        ]),
        E = `${b}Subscription`,
        T = X++,
        C = (t = {}, t[b] = V, t[E] = F, t),
        x = (n = {}, n[E] = F, n);
      return function (t) {
        W()(typeof t === 'function', `You must pass a component to the function returned by connect. Instead received ${JSON.stringify(t)}`);
        let n = t.displayName || t.name || 'Component',
          r = a(n),
          o = Q({}, w, {
            getDisplayName: a,
            methodName: u,
            renderCountProp: y,
            shouldHandleStateChanges: v,
            storeKey: b,
            withRef: O,
            displayName: r,
            wrappedComponentName: n,
            WrappedComponent: t,
          }),
          i = (function (n) {
            function a(e, t) {
              s(this, a);
              const o = c(this, n.call(this, e, t));
              return o.version = T, o.state = {}, o.renderCount = 0, o.store = e[b] || t[b], o.propsMode = Boolean(e[b]), o.setWrappedInstance = o.setWrappedInstance.bind(o), W()(o.store, `Could not find "${b}" in either the context or props of "${r}". Either wrap the root component in a <Provider>, or explicitly pass "${b}" as a prop to "${r}".`), o.initSelector(), o.initSubscription(), o;
            }
            return f(a, n), a.prototype.getChildContext = function () {
              let e,
                t = this.propsMode ? null : this.subscription;
              return e = {}, e[E] = t || this.context[E], e;
            }, a.prototype.componentDidMount = function () {
              v && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate());
            }, a.prototype.componentWillReceiveProps = function (e) {
              this.selector.run(e);
            }, a.prototype.shouldComponentUpdate = function () {
              return this.selector.shouldComponentUpdate;
            }, a.prototype.componentWillUnmount = function () {
              this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, this.notifyNestedSubs = d, this.store = null, this.selector.run = d, this.selector.shouldComponentUpdate = !1;
            }, a.prototype.getWrappedInstance = function () {
              return W()(O, `To access the wrapped instance, you need to specify { withRef: true } in the options argument of the ${u}() call.`), this.wrappedInstance;
            }, a.prototype.setWrappedInstance = function (e) {
              this.wrappedInstance = e;
            }, a.prototype.initSelector = function () {
              const t = e(this.store.dispatch, o);
              this.selector = h(t, this.store), this.selector.run(this.props);
            }, a.prototype.initSubscription = function () {
              if (v) {
                const e = (this.propsMode ? this.props : this.context)[E];
                this.subscription = new Y(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
              }
            }, a.prototype.onStateChange = function () {
              this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, this.setState(J)) : this.notifyNestedSubs();
            }, a.prototype.notifyNestedSubsOnComponentDidUpdate = function () {
              this.componentDidUpdate = void 0, this.notifyNestedSubs();
            }, a.prototype.isSubscribed = function () {
              return Boolean(this.subscription) && this.subscription.isSubscribed();
            }, a.prototype.addExtraProps = function (e) {
              if (!(O || y || this.propsMode && this.subscription)) return e;
              const t = Q({}, e);
              return O && (t.ref = this.setWrappedInstance), y && (t[y] = this.renderCount++), this.propsMode && this.subscription && (t[E] = this.subscription), t;
            }, a.prototype.render = function () {
              const e = this.selector;
              if (e.shouldComponentUpdate = !1, e.error) throw e.error;
              return Object(I.createElement)(t, this.addExtraProps(e.props));
            }, a;
          }(I.Component));
        return i.WrappedComponent = t, i.displayName = r, i.childContextTypes = x, i.contextTypes = C, i.propTypes = C, K()(i, t);
      };
    }
    function m(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
    }
    function v(e, t) {
      if (m(e, t)) return !0;
      if (typeof e !== 'object' || e === null || typeof t !== 'object' || t === null) return !1;
      let n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (let o = 0; o < n.length; o++) if (!Z.call(t, n[o]) || !m(e[n[o]], t[n[o]])) return !1;
      return !0;
    }
    function g(e) {
      return function (t, n) {
        function r() {
          return o;
        }
        var o = e(t, n);
        return r.dependsOnOwnProps = !1, r;
      };
    }
    function b(e) {
      return e.dependsOnOwnProps !== null && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : e.length !== 1;
    }
    function _(e, t) {
      return function (t, n) {
        var r = (n.displayName, function (e, t) {
          return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
        });
        return r.dependsOnOwnProps = !0, r.mapToProps = function (t, n) {
          r.mapToProps = e, r.dependsOnOwnProps = b(e);
          let o = r(t, n);
          return typeof o === 'function' && (r.mapToProps = o, r.dependsOnOwnProps = b(o), o = r(t, n)), o;
        }, r;
      };
    }
    function O(e) {
      return typeof e === 'function' ? _(e, 'mapDispatchToProps') : void 0;
    }
    function w(e) {
      return e ? void 0 : g(e => ({ dispatch: e }));
    }
    function E(e) {
      return e && typeof e === 'object' ? g(t => Object(ee.bindActionCreators)(e, t)) : void 0;
    }
    function T(e) {
      return typeof e === 'function' ? _(e, 'mapStateToProps') : void 0;
    }
    function C(e) {
      return e ? void 0 : g(() => ({}));
    }
    function x(e, t, n) {
      return re({}, n, e, t);
    }
    function S(e) {
      return function (t, n) {
        let r = (n.displayName, n.pure),
          o = n.areMergedPropsEqual,
          a = !1,
          i = void 0;
        return function (t, n, u) {
          const l = e(t, n, u);
          return a ? r && o(l, i) || (i = l) : (a = !0, i = l), i;
        };
      };
    }
    function k(e) {
      return typeof e === 'function' ? S(e) : void 0;
    }
    function P(e) {
      return e ? void 0 : function () {
        return x;
      };
    }
    function R(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function j(e, t, n, r) {
      return function (o, a) {
        return n(e(o, a), t(r, a), a);
      };
    }
    function A(e, t, n, r, o) {
      function a(o, a) {
        return h = o, y = a, m = e(h, y), v = t(r, y), g = n(m, v, y), d = !0, g;
      }
      function i() {
        return m = e(h, y), t.dependsOnOwnProps && (v = t(r, y)), g = n(m, v, y);
      }
      function u() {
        return e.dependsOnOwnProps && (m = e(h, y)), t.dependsOnOwnProps && (v = t(r, y)), g = n(m, v, y);
      }
      function l() {
        let t = e(h, y),
          r = !p(t, m);
        return m = t, r && (g = n(m, v, y)), g;
      }
      function s(e, t) {
        let n = !f(t, y),
          r = !c(e, h);
        return h = e, y = t, n && r ? i() : n ? u() : r ? l() : g;
      }
      var c = o.areStatesEqual,
        f = o.areOwnPropsEqual,
        p = o.areStatePropsEqual,
        d = !1,
        h = void 0,
        y = void 0,
        m = void 0,
        v = void 0,
        g = void 0;
      return function (e, t) {
        return d ? s(e, t) : a(e, t);
      };
    }
    function D(e, t) {
      let n = t.initMapStateToProps,
        r = t.initMapDispatchToProps,
        o = t.initMergeProps,
        a = R(t, [
          'initMapStateToProps',
          'initMapDispatchToProps',
          'initMergeProps',
        ]),
        i = n(e, a),
        u = r(e, a),
        l = o(e, a);
      return (a.pure ? A : j)(i, u, l, e, a);
    }
    function L(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function N(e, t, n) {
      for (let r = t.length - 1; r >= 0; r--) {
        const o = t[r](e);
        if (o) return o;
      }
      return function (t, r) {
        throw new Error(`Invalid value of type ${typeof e} for ${n} argument when connecting component ${r.wrappedComponentName}.`);
      };
    }
    function M(e, t) {
      return e === t;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var I = n(0),
      U = n(1),
      H = n.n(U),
      F = H.a.shape({

        trySubscribe: H.a.func.isRequired,
        tryUnsubscribe: H.a.func.isRequired,
        notifyNestedSubs: H.a.func.isRequired,
        isSubscribed: H.a.func.isRequired,
      }),
      V = H.a.shape({
        subscribe: H.a.func.isRequired,
        dispatch: H.a.func.isRequired,
        getState: H.a.func.isRequired,
      }),
      B = i(),
      z = n(17),
      K = n.n(z),
      q = n(3),
      W = n.n(q),
      G = null,
      $ = {
        notify() {},
      },
      Y = (function () {
        function e(t, n, r) {
          u(this, e), this.store = t, this.parentSub = n, this.onStateChange = r, this.unsubscribe = null, this.listeners = $;
        }
        return e.prototype.addNestedSub = function (e) {
          return this.trySubscribe(), this.listeners.subscribe(e);
        }, e.prototype.notifyNestedSubs = function () {
          this.listeners.notify();
        }, e.prototype.isSubscribed = function () {
          return Boolean(this.unsubscribe);
        }, e.prototype.trySubscribe = function () {
          this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), this.listeners = l());
        }, e.prototype.tryUnsubscribe = function () {
          this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = $);
        }, e;
      }()),
      Q = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      X = 0,
      J = {},
      Z = Object.prototype.hasOwnProperty,
      ee = n(4),
      te = (n(9), [O, w, E]),
      ne = [T, C],
      re = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      oe = [k, P],
      ae = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      ie = (function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.connectHOC,
          n = void 0 === t ? y : t,
          r = e.mapStateToPropsFactories,
          o = void 0 === r ? ne : r,
          a = e.mapDispatchToPropsFactories,
          i = void 0 === a ? te : a,
          u = e.mergePropsFactories,
          l = void 0 === u ? oe : u,
          s = e.selectorFactory,
          c = void 0 === s ? D : s;
        return function (e, t, r) {
          let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            u = a.pure,
            s = void 0 === u || u,
            f = a.areStatesEqual,
            p = void 0 === f ? M : f,
            d = a.areOwnPropsEqual,
            h = void 0 === d ? v : d,
            y = a.areStatePropsEqual,
            m = void 0 === y ? v : y,
            g = a.areMergedPropsEqual,
            b = void 0 === g ? v : g,
            _ = L(a, [
              'pure',
              'areStatesEqual',
              'areOwnPropsEqual',
              'areStatePropsEqual',
              'areMergedPropsEqual',
            ]),
            O = N(e, o, 'mapStateToProps'),
            w = N(t, i, 'mapDispatchToProps'),
            E = N(r, l, 'mergeProps');
          return n(c, ae({
            methodName: 'connect',
            getDisplayName(e) {
              return `Connect(${e})`;
            },
            shouldHandleStateChanges: Boolean(e),
            initMapStateToProps: O,
            initMapDispatchToProps: w,
            initMergeProps: E,
            pure: s,
            areStatesEqual: p,
            areOwnPropsEqual: h,
            areStatePropsEqual: m,
            areMergedPropsEqual: b,
          }, _));
        };
      }());
    n.d(t, 'Provider', () => B), n.d(t, 'createProvider', () => i), n.d(t, 'connectAdvanced', () => y), n.d(t, 'connect', () => ie);
  },
  function (e, t, n) {
    function r(e) {
      let t = m.call(e, g),
        n = e[g];
      try {
        e[g] = void 0;
        var r = !0;
      } catch (e) {}
      const o = v.call(e);
      return r && (t ? e[g] = n : delete e[g]), o;
    }
    function o(e) {
      return O.call(e);
    }
    function a(e) {
      return e == null ? void 0 === e ? T : E : C && C in Object(e) ? b(e) : w(e);
    }
    function i(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    function u(e) {
      return e != null && typeof e === 'object';
    }
    function l(e) {
      if (!R(e) || x(e) != j) return !1;
      const t = P(e);
      if (t === null) return !0;
      const n = N.call(t, 'constructor') && t.constructor;
      return typeof n === 'function' && n instanceof n && L.call(n) == M;
    }
    var s = n(43),
      c = typeof self === 'object' && self && self.Object === Object && self,
      f = s.a || c || Function('return this')(),
      p = f,
      d = p.Symbol,
      h = d,
      y = Object.prototype,
      m = y.hasOwnProperty,
      v = y.toString,
      g = h ? h.toStringTag : void 0,
      b = r,
      _ = Object.prototype,
      O = _.toString,
      w = o,
      E = '[object Null]',
      T = '[object Undefined]',
      C = h ? h.toStringTag : void 0,
      x = a,
      S = i,
      k = S(Object.getPrototypeOf, Object),
      P = k,
      R = u,
      j = '[object Object]',
      A = Function.prototype,
      D = Object.prototype,
      L = A.toString,
      N = D.hasOwnProperty,
      M = L.call(Object);
    t.a = l;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', {
      value: !0,
    }), t.toggleTask = t.saveTask = t.editTask = t.deleteTask = t.addTask = t.test = void 0;
    let r = n(19),
      o = t.test = function () {
        return { type: r.TEST };
      },
      a = t.addTask = function (e) {
        return { type: r.ADD_TASK, task: e };
      },
      i = t.deleteTask = function (e) {
        return { type: r.DELETE_TASK, id: e };
      },
      u = t.editTask = function (e) {
        return { type: r.EDIT_TASK, id: e };
      },
      l = t.saveTask = function (e) {
        return { type: r.SAVE_TASK, payload: e };
      },
      s = t.toggleTask = function (e) {
        return { type: r.TOGGLE_TASK, id: e };
      };
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(o, 'test', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'), __REACT_HOT_LOADER__.register(a, 'addTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'), __REACT_HOT_LOADER__.register(i, 'deleteTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'), __REACT_HOT_LOADER__.register(u, 'editTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'), __REACT_HOT_LOADER__.register(l, 'saveTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'), __REACT_HOT_LOADER__.register(s, 'toggleTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/actions/index.js'));
    }());
  },
  function (e, t, n) {
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function u(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function l(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function c(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function f(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function p(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function d(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function h(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function y(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function m(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function v(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function g(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function b(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function _(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function O(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function w(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function E(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function T(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function C(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function x(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function S(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function k(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function P(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    function R(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function j(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function A(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function D(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function L(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function N(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function M(e, t) {
      const n = {};
      for (const r in e)t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let I = n(2),
      U = n.n(I),
      H = n(0),
      F = n.n(H),
      V = n(1),
      B = n.n(V),
      z = n(56),
      K = n.n(z),
      q = n(3),
      W = n.n(q),
      G = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      $ = (function (e) {
        function t() {
          let n,
            a,
            i;
          r(this, t);
          for (var u = arguments.length, l = Array(u), s = 0; s < u; s++)l[s] = arguments[s];
          return n = a = o(this, e.call(...[
            this,
          ].concat(l))), a.state = {
            match: a.computeMatch(a.props.history.location.pathname),
          }, i = n, o(a, i);
        }
        return a(t, e), t.prototype.getChildContext = function () {
          return {
            router: G({}, this.context.router, {
              history: this.props.history,
              route: {
                location: this.props.history.location,
                match: this.state.match,
              },
            }),
          };
        }, t.prototype.computeMatch = function (e) {
          return {
            path: '/',
            url: '/',
            params: {},
            isExact: e === '/',
          };
        }, t.prototype.componentWillMount = function () {
          let e = this,
            t = this.props,
            n = t.children,
            r = t.history;
          W()(n == null || F.a.Children.count(n) === 1, 'A <Router> may have only one child element'), this.unlisten = r.listen(() => {
            e.setState({ match: e.computeMatch(r.location.pathname) });
          });
        }, t.prototype.componentWillReceiveProps = function (e) {
          U()(this.props.history === e.history, 'You cannot change <Router history>');
        }, t.prototype.componentWillUnmount = function () {
          this.unlisten();
        }, t.prototype.render = function () {
          const e = this.props.children;
          return e ? F.a.Children.only(e) : null;
        }, t;
      }(F.a.Component));
    $.propTypes = {
      history: B.a.object.isRequired,
      children: B.a.node,
    }, $.contextTypes = {
      router: B.a.object,
    }, $.childContextTypes = {
      router: B.a.object.isRequired,
    };
    let Y = $,
      Q = Y,
      X = (function (e) {
        function t() {
          let n,
            r,
            o;
          i(this, t);
          for (var a = arguments.length, l = Array(a), s = 0; s < a; s++)l[s] = arguments[s];
          return n = r = u(this, e.call(...[
            this,
          ].concat(l))), r.history = K()(r.props), o = n, u(r, o);
        }
        return l(t, e), t.prototype.componentWillMount = function () {
          U()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.');
        }, t.prototype.render = function () {
          return F.a.createElement(Q, {
            history: this.history,
            children: this.props.children,
          });
        }, t;
      }(F.a.Component));
    X.propTypes = {
      basename: B.a.string,
      forceRefresh: B.a.bool,
      getUserConfirmation: B.a.func,
      keyLength: B.a.number,
      children: B.a.node,
    };
    let J = X,
      Z = n(57),
      ee = n.n(Z),
      te = (function (e) {
        function t() {
          let n,
            r,
            o;
          s(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)i[u] = arguments[u];
          return n = r = c(this, e.call(...[
            this,
          ].concat(i))), r.history = ee()(r.props), o = n, c(r, o);
        }
        return f(t, e), t.prototype.componentWillMount = function () {
          U()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.');
        }, t.prototype.render = function () {
          return F.a.createElement(Q, {
            history: this.history,
            children: this.props.children,
          });
        }, t;
      }(F.a.Component));
    te.propTypes = {

      basename: B.a.string,
      getUserConfirmation: B.a.func,
      hashType: B.a.oneOf(['hashbang', 'noslash', 'slash']),
      children: B.a.node,
    };
    let ne = te,
      re = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      oe = function (e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      },
      ae = (function (e) {
        function t() {
          let n,
            r,
            o;
          d(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)i[u] = arguments[u];
          return n = r = h(this, e.call(...[
            this,
          ].concat(i))), r.handleClick = function (e) {
            if (r.props.onClick && r.props.onClick(e), !e.defaultPrevented && e.button === 0 && !r.props.target && !oe(e)) {
              e.preventDefault();
              let t = r.context.router.history,
                n = r.props,
                o = n.replace,
                a = n.to;
              o ? t.replace(a) : t.push(a);
            }
          }, o = n, h(r, o);
        }
        return y(t, e), t.prototype.render = function () {
          let e = this.props,
            t = (e.replace, e.to),
            n = e.innerRef,
            r = p(e, [
              'replace',
              'to',
              'innerRef',
            ]);
          W()(this.context.router, 'You should not use <Link> outside a <Router>');
          const o = this.context.router.history.createHref(typeof t === 'string' ? {
            pathname: t,
          } : t);
          return F.a.createElement('a', re({}, r, {
            onClick: this.handleClick,
            href: o,
            ref: n,
          }));
        }, t;
      }(F.a.Component));
    ae.propTypes = {

      onClick: B.a.func,
      target: B.a.string,
      replace: B.a.bool,
      to: B.a.oneOfType([B.a.string, B.a.object]).isRequired,
      innerRef: B.a.oneOfType([B.a.string, B.a.func]),
    }, ae.defaultProps = {
      replace: !1,
    }, ae.contextTypes = {
      router: B.a.shape({
        history: B.a.shape({
          push: B.a.func.isRequired,
          replace: B.a.func.isRequired,
          createHref: B.a.func.isRequired,
        }).isRequired,
      }).isRequired,
    };
    let ie = ae,
      ue = n(58),
      le = n.n(ue),
      se = (function (e) {
        function t() {
          let n,
            r,
            o;
          m(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)i[u] = arguments[u];
          return n = r = v(this, e.call(...[
            this,
          ].concat(i))), r.history = le()(r.props), o = n, v(r, o);
        }
        return g(t, e), t.prototype.componentWillMount = function () {
          U()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { MemoryRouter as Router }`.');
        }, t.prototype.render = function () {
          return F.a.createElement(Y, {
            history: this.history,
            children: this.props.children,
          });
        }, t;
      }(F.a.Component));
    se.propTypes = {
      initialEntries: B.a.array,
      initialIndex: B.a.number,
      getUserConfirmation: B.a.func,
      keyLength: B.a.number,
      children: B.a.node,
    };
    let ce = se,
      fe = ce,
      pe = n(59),
      de = n.n(pe),
      he = {},
      ye = 0,
      me = function (e, t) {
        let n = `${t.end}${t.strict}${t.sensitive}`,
          r = he[n] || (he[n] = {});
        if (r[e]) return r[e];
        let o = [],
          a = de()(e, o, t),
          i = { re: a, keys: o };
        return ye < 1e4 && (r[e] = i, ye++), i;
      },
      ve = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        typeof t === 'string' && (t = { path: t });
        let n = t,
          r = n.path,
          o = void 0 === r ? '/' : r,
          a = n.exact,
          i = void 0 !== a && a,
          u = n.strict,
          l = void 0 !== u && u,
          s = n.sensitive,
          c = void 0 !== s && s,
          f = me(o, {
            end: i,
            strict: l,
            sensitive: c,
          }),
          p = f.re,
          d = f.keys,
          h = p.exec(e);
        if (!h) return null;
        let y = h[0],
          m = h.slice(1),
          v = e === y;
        return i && !v ? null : {

          path: o,
          url: o === '/' && y === '' ? '/' : y,
          isExact: v,
          params: d.reduce((e, t, n) => e[t.name] = m[n], e, {}),
        };
      },
      ge = ve,
      be = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      _e = function (e) {
        return F.a.Children.count(e) === 0;
      },
      Oe = (function (e) {
        function t() {
          let n,
            r,
            o;
          b(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)i[u] = arguments[u];
          return n = r = _(this, e.call(...[
            this,
          ].concat(i))), r.state = {
            match: r.computeMatch(r.props, r.context.router),
          }, o = n, _(r, o);
        }
        return O(t, e), t.prototype.getChildContext = function () {
          return {
            router: be({}, this.context.router, {
              route: {
                location: this.props.location || this.context.router.route.location,
                match: this.state.match,
              },
            }),
          };
        }, t.prototype.computeMatch = function (e, t) {
          let n = e.computedMatch,
            r = e.location,
            o = e.path,
            a = e.strict,
            i = e.exact,
            u = e.sensitive;
          if (n) return n;
          W()(t, 'You should not use <Route> or withRouter() outside a <Router>');
          let l = t.route,
            s = (r || l.location).pathname;
          return o ? ge(s, {

            path: o,
            strict: a,
            exact: i,
            sensitive: u,
          }) : l.match;
        }, t.prototype.componentWillMount = function () {
          U()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored'), U()(!(this.props.component && this.props.children && !_e(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored'), U()(!(this.props.render && this.props.children && !_e(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
        }, t.prototype.componentWillReceiveProps = function (e, t) {
          U()(!(e.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), U()(!(!e.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'), this.setState({
            match: this.computeMatch(e, t.router),
          });
        }, t.prototype.render = function () {
          let e = this.state.match,
            t = this.props,
            n = t.children,
            r = t.component,
            o = t.render,
            a = this.context.router,
            i = a.history,
            u = a.route,
            l = a.staticContext,
            s = this.props.location || u.location,
            c = {
              match: e,
              location: s,
              history: i,
              staticContext: l,
            };
          return r ? e ? F.a.createElement(r, c) : null : o ? e ? o(c) : null : n ? typeof n === 'function' ? n(c) : _e(n) ? null : F.a.Children.only(n) : null;
        }, t;
      }(F.a.Component));
    Oe.propTypes = {
      computedMatch: B.a.object,
      path: B.a.string,
      exact: B.a.bool,
      strict: B.a.bool,
      sensitive: B.a.bool,
      component: B.a.func,
      render: B.a.func,
      children: B.a.oneOfType([B.a.func, B.a.node]),
      location: B.a.object,
    }, Oe.contextTypes = {
      router: B.a.shape({
        history: B.a.object.isRequired,
        route: B.a.object.isRequired,
        staticContext: B.a.object,
      }),
    }, Oe.childContextTypes = {
      router: B.a.object.isRequired,
    };
    let we = Oe,
      Ee = we,
      Te = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      Ce = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
        return typeof e;
      } : function (e) {
        return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      },
      xe = function (e) {
        let t = e.to,
          n = e.exact,
          r = e.strict,
          o = e.location,
          a = e.activeClassName,
          i = e.className,
          u = e.activeStyle,
          l = e.style,
          s = e.isActive,
          c = e.ariaCurrent,
          f = w(e, [
            'to',
            'exact',
            'strict',
            'location',
            'activeClassName',
            'className',
            'activeStyle',
            'style',
            'isActive',
            'ariaCurrent',
          ]);
        return F.a.createElement(Ee, {

          path: (void 0 === t ? 'undefined' : Ce(t)) === 'object' ? t.pathname : t,
          exact: n,
          strict: r,
          location: o,
          children(e) {
            let n = e.location,
              r = e.match,
              o = !!(s ? s(r, n) : r);
            return F.a.createElement(ie, Te({
              to: t,
              className: o ? [i, a].filter(e => e).join(' ') : i,
              style: o ? Te({}, l, u) : l,
              'aria-current': o && c,
            }, f));
          },
        });
      };
    xe.propTypes = {
      to: ie.propTypes.to,
      exact: B.a.bool,
      strict: B.a.bool,
      location: B.a.object,
      activeClassName: B.a.string,
      className: B.a.string,
      activeStyle: B.a.object,
      style: B.a.object,
      isActive: B.a.func,
      ariaCurrent: B.a.oneOf([
        'page',
        'step',
        'location',
        'true',
      ]),
    }, xe.defaultProps = {
      activeClassName: 'active',
      ariaCurrent: 'true',
    };
    let Se = xe,
      ke = (function (e) {
        function t() {
          return E(this, t), T(this, e.apply(this, arguments));
        }
        return C(t, e), t.prototype.enable = function (e) {
          this.unblock && this.unblock(), this.unblock = this.context.router.history.block(e);
        }, t.prototype.disable = function () {
          this.unblock && (this.unblock(), this.unblock = null);
        }, t.prototype.componentWillMount = function () {
          W()(this.context.router, 'You should not use <Prompt> outside a <Router>'), this.props.when && this.enable(this.props.message);
        }, t.prototype.componentWillReceiveProps = function (e) {
          e.when ? this.props.when && this.props.message === e.message || this.enable(e.message) : this.disable();
        }, t.prototype.componentWillUnmount = function () {
          this.disable();
        }, t.prototype.render = function () {
          return null;
        }, t;
      }(F.a.Component));
    ke.propTypes = {
      when: B.a.bool,
      message: B.a.oneOfType([B.a.func, B.a.string]).isRequired,
    }, ke.defaultProps = {
      when: !0,
    }, ke.contextTypes = {
      router: B.a.shape({
        history: B.a.shape({ block: B.a.func.isRequired }).isRequired,
      }).isRequired,
    };
    let Pe = ke,
      Re = Pe,
      je = n(20),
      Ae = n(21),
      De = function (e) {
        let t = e || '/',
          n = '',
          r = '',
          o = t.indexOf('#');
        o !== -1 && (r = t.substr(o), t = t.substr(0, o));
        const a = t.indexOf('?');
        return a !== -1 && (n = t.substr(a), t = t.substr(0, a)), {
          pathname: t,
          search: n === '?' ? '' : n,
          hash: r === '#' ? '' : r,
        };
      },
      Le = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      Ne = function (e, t, n, r) {
        let o = void 0;
        typeof e === 'string' ? (o = De(e), o.state = t) : (o = Le({}, e), void 0 === o.pathname && (o.pathname = ''), o.search ? o.search.charAt(0) !== '?' && (o.search = `?${o.search}`) : o.search = '', o.hash ? o.hash.charAt(0) !== '#' && (o.hash = `#${o.hash}`) : o.hash = '', void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (e) {
          throw e instanceof URIError ? new URIError(`Pathname "${o.pathname}" could not be decoded. This is likely caused by an invalid percent-encoding.`) : e;
        }
        return n && (o.key = n), r ? o.pathname ? o.pathname.charAt(0) !== '/' && (o.pathname = Object(je.default)(o.pathname, r.pathname)) : o.pathname = r.pathname : o.pathname || (o.pathname = '/'), o;
      },
      Me = function (e, t) {
        return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && Object(Ae.default)(e.state, t.state);
      },
      Ie = (typeof window === 'undefined' || !window.document || window.document.createElement, typeof Symbol === 'function' && Symbol.iterator, Object.assign, Object.assign, typeof Symbol === 'function' && Symbol.iterator, Object.assign, (function (e) {
        function t() {
          return x(this, t), S(this, e.apply(this, arguments));
        }
        return k(t, e), t.prototype.isStatic = function () {
          return this.context.router && this.context.router.staticContext;
        }, t.prototype.componentWillMount = function () {
          W()(this.context.router, 'You should not use <Redirect> outside a <Router>'), this.isStatic() && this.perform();
        }, t.prototype.componentDidMount = function () {
          this.isStatic() || this.perform();
        }, t.prototype.componentDidUpdate = function (e) {
          let t = Ne(e.to),
            n = Ne(this.props.to);
          if (Me(t, n)) return void U()(!1, `You tried to redirect to the same route you're currently on: "${n.pathname}${n.search}"`);
          this.perform();
        }, t.prototype.perform = function () {
          let e = this.context.router.history,
            t = this.props,
            n = t.push,
            r = t.to;
          n ? e.push(r) : e.replace(r);
        }, t.prototype.render = function () {
          return null;
        }, t;
      }(F.a.Component)));
    Ie.propTypes = {
      push: B.a.bool,
      from: B.a.string,
      to: B.a.oneOfType([B.a.string, B.a.object]).isRequired,
    }, Ie.defaultProps = {
      push: !1,
    }, Ie.contextTypes = {
      router: B.a.shape({
        history: B.a.shape({
          push: B.a.func.isRequired,
          replace: B.a.func.isRequired,
        }).isRequired,
        staticContext: B.a.object,
      }).isRequired,
    };
    let Ue = Ie,
      He = Ue,
      Fe = n(5),
      Ve = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      Be = function (e) {
        let t = e.pathname,
          n = void 0 === t ? '/' : t,
          r = e.search,
          o = void 0 === r ? '' : r,
          a = e.hash,
          i = void 0 === a ? '' : a;
        return {
          pathname: n,
          search: o === '?' ? '' : o,
          hash: i === '#' ? '' : i,
        };
      },
      ze = function (e, t) {
        return e ? Ve({}, t, {
          pathname: Object(Fe.addLeadingSlash)(e) + t.pathname,
        }) : t;
      },
      Ke = function (e, t) {
        if (!e) return t;
        const n = Object(Fe.addLeadingSlash)(e);
        return t.pathname.indexOf(n) !== 0 ? t : Ve({}, t, {
          pathname: t.pathname.substr(n.length),
        });
      },
      qe = function (e) {
        return typeof e === 'string' ? Object(Fe.parsePath)(e) : Be(e);
      },
      We = function (e) {
        return typeof e === 'string' ? e : Object(Fe.createPath)(e);
      },
      Ge = function (e) {
        return function () {
          W()(!1, 'You cannot %s with <StaticRouter>', e);
        };
      },
      $e = function () {},
      Ye = (function (e) {
        function t() {
          let n,
            r,
            o;
          R(this, t);
          for (var a = arguments.length, i = Array(a), u = 0; u < a; u++)i[u] = arguments[u];
          return n = r = j(this, e.call(...[
            this,
          ].concat(i))), r.createHref = function (e) {
            return Object(Fe.addLeadingSlash)(r.props.basename + We(e));
          }, r.handlePush = function (e) {
            let t = r.props,
              n = t.basename,
              o = t.context;
            o.action = 'PUSH', o.location = ze(n, qe(e)), o.url = We(o.location);
          }, r.handleReplace = function (e) {
            let t = r.props,
              n = t.basename,
              o = t.context;
            o.action = 'REPLACE', o.location = ze(n, qe(e)), o.url = We(o.location);
          }, r.handleListen = function () {
            return $e;
          }, r.handleBlock = function () {
            return $e;
          }, o = n, j(r, o);
        }
        return A(t, e), t.prototype.getChildContext = function () {
          return { router: { staticContext: this.props.context } };
        }, t.prototype.componentWillMount = function () {
          U()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { StaticRouter as Router }`.');
        }, t.prototype.render = function () {
          let e = this.props,
            t = e.basename,
            n = (e.context, e.location),
            r = P(e, [
              'basename',
              'context',
              'location',
            ]),
            o = {
              createHref: this.createHref,
              action: 'POP',
              location: Ke(t, qe(n)),
              push: this.handlePush,
              replace: this.handleReplace,
              go: Ge('go'),
              goBack: Ge('goBack'),
              goForward: Ge('goForward'),
              listen: this.handleListen,
              block: this.handleBlock,
            };
          return F.a.createElement(Y, Ve({}, r, { history: o }));
        }, t;
      }(F.a.Component));
    Ye.propTypes = {
      basename: B.a.string,
      context: B.a.object.isRequired,
      location: B.a.oneOfType([B.a.string, B.a.object]),
    }, Ye.defaultProps = {
      basename: '',
      location: '/',
    }, Ye.childContextTypes = {
      router: B.a.object.isRequired,
    };
    let Qe = Ye,
      Xe = Qe,
      Je = (function (e) {
        function t() {
          return D(this, t), L(this, e.apply(this, arguments));
        }
        return N(t, e), t.prototype.componentWillMount = function () {
          W()(this.context.router, 'You should not use <Switch> outside a <Router>');
        }, t.prototype.componentWillReceiveProps = function (e) {
          U()(!(e.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'), U()(!(!e.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
        }, t.prototype.render = function () {
          let e = this.context.router.route,
            t = this.props.children,
            n = this.props.location || e.location,
            r = void 0,
            o = void 0;
          return F.a.Children.forEach(t, (t) => {
            if (F.a.isValidElement(t)) {
              let a = t.props,
                i = a.path,
                u = a.exact,
                l = a.strict,
                s = a.sensitive,
                c = a.from,
                f = i || c;
              r == null && (o = t, r = f ? ge(n.pathname, {
                path: f,
                exact: u,
                strict: l,
                sensitive: s,
              }) : e.match);
            }
          }), r ? F.a.cloneElement(o, {
            location: n,
            computedMatch: r,
          }) : null;
        }, t;
      }(F.a.Component));
    Je.contextTypes = {
      router: B.a.shape({ route: B.a.object.isRequired }).isRequired,
    }, Je.propTypes = {
      children: B.a.node,
      location: B.a.object,
    };
    let Ze = Je,
      et = Ze,
      tt = ge,
      nt = n(17),
      rt = n.n(nt),
      ot = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      at = function (e) {
        const t = function (t) {
          let n = t.wrappedComponentRef,
            r = M(t, ['wrappedComponentRef']);
          return F.a.createElement(we, {

            render(t) {
              return F.a.createElement(e, ot({}, r, t, { ref: n }));
            },
          });
        };
        return t.displayName = `withRouter(${e.displayName || e.name})`, t.WrappedComponent = e, t.propTypes = {
          wrappedComponentRef: B.a.func,
        }, rt()(t, e);
      },
      it = at,
      ut = it;
    n.d(t, 'BrowserRouter', () => J), n.d(t, 'HashRouter', () => ne), n.d(t, 'Link', () => ie), n.d(t, 'MemoryRouter', () => fe), n.d(t, 'NavLink', () => Se), n.d(t, 'Prompt', () => Re), n.d(t, 'Redirect', () => He), n.d(t, 'Route', () => Ee), n.d(t, 'Router', () => Q), n.d(t, 'StaticRouter', () => Xe), n.d(t, 'Switch', () => et), n.d(t, 'matchPath', () => tt), n.d(t, 'withRouter', () => ut);
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0, t.locationsAreEqual = t.createLocation = void 0;
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(20),
      i = r(a),
      u = n(21),
      l = r(u),
      s = n(5);
    t.createLocation = function (e, t, n, r) {
      let a = void 0;
      typeof e === 'string' ? (a = (0, s.parsePath)(e), a.state = t) : (a = o({}, e), void 0 === a.pathname && (a.pathname = ''), a.search ? a.search.charAt(0) !== '?' && (a.search = `?${a.search}`) : a.search = '', a.hash ? a.hash.charAt(0) !== '#' && (a.hash = `#${a.hash}`) : a.hash = '', void 0 !== t && void 0 === a.state && (a.state = t));
      try {
        a.pathname = decodeURI(a.pathname);
      } catch (e) {
        throw e instanceof URIError ? new URIError(`Pathname "${a.pathname}" could not be decoded. This is likely caused by an invalid percent-encoding.`) : e;
      }
      return n && (a.key = n), r ? a.pathname ? a.pathname.charAt(0) !== '/' && (a.pathname = (0, i.default)(a.pathname, r.pathname)) : a.pathname = r.pathname : a.pathname || (a.pathname = '/'), a;
    }, t.locationsAreEqual = function (e, t) {
      return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && (0, l.default)(e.state, t.state);
    };
  },
  function (e, t, n) {
    t.__esModule = !0;
    let r = n(2),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r)),
      a = function () {
        let e = null,
          t = function (t) {
            return (0, o.default)(e == null, 'A history supports only one prompt at a time'), e = t, function () {
              e === t && (e = null);
            };
          },
          n = function (t, n, r, a) {
            if (e != null) {
              const i = typeof e === 'function' ? e(t, n) : e;
              typeof i === 'string' ? typeof r === 'function' ? r(i, a) : ((0, o.default)(!1, 'A history needs a getUserConfirmation function in order to use a prompt message'), a(!0)) : a(!1 !== i);
            } else a(!0);
          },
          r = [];
        return {

          setPrompt: t,
          confirmTransitionTo: n,
          appendListener(e) {
            let t = !0,
              n = function () {
                t && e(...arguments);
              };
            return r.push(n), function () {
              t = !1, r = r.filter(e => e !== n);
            };
          },
          notifyListeners() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)t[n] = arguments[n];
            r.forEach(e => e(...t));
          },
        };
      };
    t.default = a;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    let r = n(8),
      o = n(10),
      a = n(65),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      }(a)),
      u = function (e) {
        return { todoState: e };
      },
      l = function (e) {
        return {
          onTest() {
            e((0, o.test)());
          },
          onDelete(t) {
            e((0, o.deleteTask)(t));
          },
          onEdit(t) {
            e((0, o.editTask)(t));
          },
          onSave(t) {
            e((0, o.saveTask)(t));
          },
          onToggle(t) {
            e((0, o.toggleTask)(t));
          },
        };
      },
      s = (0, r.connect)(u, l)(i.default),
      c = s;
    t.default = c;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(u, 'mapStateToProps', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/ListContainer.jsx'), __REACT_HOT_LOADER__.register(l, 'mapDispatchToProps', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/ListContainer.jsx'), __REACT_HOT_LOADER__.register(s, 'ListContainer', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/ListContainer.jsx'), __REACT_HOT_LOADER__.register(c, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/ListContainer.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      if (e === null || void 0 === e) throw new TypeError('Object.assign cannot be called with null or undefined');
      return Object(e);
    }
    let o = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        const e = new String('abc');
        if (e[5] = 'de', Object.getOwnPropertyNames(e)[0] === '5') return !1;
        for (var t = {}, n = 0; n < 10; n++)t[`_${String.fromCharCode(n)}`] = n;
        if (Object.getOwnPropertyNames(t).map(e => t[e]).join('') !== '0123456789') return !1;
        const r = {};
        return 'abcdefghijklmnopqrst'.split('').forEach((e) => {
          r[e] = e;
        }), Object.keys(Object.assign({}, r)).join('') === 'abcdefghijklmnopqrst';
      } catch (e) {
        return !1;
      }
    }()) ? Object.assign : function (e, t) {
        for (var n, u, l = r(e), s = 1; s < arguments.length; s++) {
          n = Object(arguments[s]);
          for (const c in n)a.call(n, c) && (l[c] = n[c]);
          if (o) {
            u = o(n);
            for (let f = 0; f < u.length; f++)i.call(n, u[f]) && (l[u[f]] = n[u[f]]);
          }
        }
        return l;
      };
  },
  function (e, t, n) {
    const r = {};
    e.exports = r;
  },
  function (e, t, n) {
    let r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = Object.defineProperty,
      i = Object.getOwnPropertyNames,
      u = Object.getOwnPropertySymbols,
      l = Object.getOwnPropertyDescriptor,
      s = Object.getPrototypeOf,
      c = s && s(Object);
    e.exports = function e(t, n, f) {
      if (typeof n !== 'string') {
        if (c) {
          const p = s(n);
          p && p !== c && e(t, p, f);
        }
        let d = i(n);
        u && (d = d.concat(u(n)));
        for (let h = 0; h < d.length; ++h) {
          const y = d[h];
          if (!(r[y] || o[y] || f && f[y])) {
            const m = l(n, y);
            try {
              a(t, y, m);
            } catch (e) {}
          }
        }
        return t;
      }
      return t;
    };
  },
  function (e, t) {
    let n;
    n = (function () {
      return this;
    }());
    try {
      n = n || Function('return this')() || (0, eval)('this');
    } catch (e) {
      typeof window === 'object' && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    let r = t.TEST = 'TEST',
      o = t.ADD_TASK = 'ADD_TASK',
      a = t.DELETE_TASK = 'DELETE_TASK',
      i = t.EDIT_TASK = 'EDIT_TASK',
      u = t.SAVE_TASK = 'SAVE_TASK',
      l = t.TOGGLE_TASK = 'TOGGLE_TASK';
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(r, 'TEST', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'), __REACT_HOT_LOADER__.register(o, 'ADD_TASK', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'), __REACT_HOT_LOADER__.register(a, 'DELETE_TASK', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'), __REACT_HOT_LOADER__.register(i, 'EDIT_TASK', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'), __REACT_HOT_LOADER__.register(u, 'SAVE_TASK', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'), __REACT_HOT_LOADER__.register(l, 'TOGGLE_TASK', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/constants/index.js'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e.charAt(0) === '/';
    }
    function o(e, t) {
      for (let n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)e[n] = e[r];
      e.pop();
    }
    function a(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
        n = e && e.split('/') || [],
        a = t && t.split('/') || [],
        i = e && r(e),
        u = t && r(t),
        l = i || u;
      if (e && r(e) ? a = n : n.length && (a.pop(), a = a.concat(n)), !a.length) return '/';
      let s = void 0;
      if (a.length) {
        const c = a[a.length - 1];
        s = c === '.' || c === '..' || c === '';
      } else s = !1;
      for (var f = 0, p = a.length; p >= 0; p--) {
        const d = a[p];
        d === '.' ? o(a, p) : d === '..' ? (o(a, p), f++) : f && (o(a, p), f--);
      }
      if (!l) for (;f--; f)a.unshift('..');
      !l || a[0] === '' || a[0] && r(a[0]) || a.unshift('');
      let h = a.join('/');
      return s && h.substr(-1) !== '/' && (h += '/'), h;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = a;
  },
  function (e, t, n) {
    function r(e, t) {
      if (e === t) return !0;
      if (e == null || t == null) return !1;
      if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every((e, n) => r(e, t[n]));
      const n = void 0 === e ? 'undefined' : o(e);
      if (n !== (void 0 === t ? 'undefined' : o(t))) return !1;
      if (n === 'object') {
        let a = e.valueOf(),
          i = t.valueOf();
        if (a !== e || i !== t) return r(a, i);
        let u = Object.keys(e),
          l = Object.keys(t);
        return u.length === l.length && u.every(n => r(e[n], t[n]));
      }
      return !1;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    };
    t.default = r;
  },
  function (e, t, n) {
    t.__esModule = !0;
    t.canUseDOM = !(typeof window === 'undefined' || !window.document || !window.document.createElement), t.addEventListener = function (e, t, n) {
      return e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent(`on${t}`, n);
    }, t.removeEventListener = function (e, t, n) {
      return e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent(`on${t}`, n);
    }, t.getConfirmation = function (e, t) {
      return t(window.confirm(e));
    }, t.supportsHistory = function () {
      const e = window.navigator.userAgent;
      return (e.indexOf('Android 2.') === -1 && e.indexOf('Android 4.0') === -1 || e.indexOf('Mobile Safari') === -1 || e.indexOf('Chrome') !== -1 || e.indexOf('Windows Phone') !== -1) && (window.history && 'pushState' in window.history);
    }, t.supportsPopStateOnHashChange = function () {
      return window.navigator.userAgent.indexOf('Trident') === -1;
    }, t.supportsGoWithoutReloadUsingHash = function () {
      return window.navigator.userAgent.indexOf('Firefox') === -1;
    }, t.isExtraneousPopstateEvent = function (e) {
      return void 0 === e.state && navigator.userAgent.indexOf('CriOS') === -1;
    };
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      l.default.render(i.default.createElement(s.AppContainer, null, i.default.createElement(c.Provider, {
        store: p.default,
      }, i.default.createElement(y.BrowserRouter, null, i.default.createElement(e, null)))), document.getElementById('root'));
    }
    var a = n(0),
      i = r(a),
      u = n(25),
      l = r(u),
      s = n(35),
      c = n(8),
      f = (n(4), n(48)),
      p = r(f),
      d = n(55),
      h = r(d),
      y = n(11);
    n(73), o(h.default);
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && __REACT_HOT_LOADER__.register(o, 'render', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/index.jsx');
    }());
  },
  function (e, t, n) {
    function r(e) {
      for (var t = arguments.length - 1, n = `Minified React error #${e}; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=${e}`, r = 0; r < t; r++)n += `&args[]=${encodeURIComponent(arguments[r + 1])}`;
      throw t = Error(`${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`), t.name = 'Invariant Violation', t.framesToPop = 1, t;
    }
    function o(e, t, n) {
      this.props = e, this.context = t, this.refs = b, this.updater = n || O;
    }
    function a(e, t, n) {
      this.props = e, this.context = t, this.refs = b, this.updater = n || O;
    }
    function i() {}
    function u(e, t, n) {
      this.props = e, this.context = t, this.refs = b, this.updater = n || O;
    }
    function l(e, t, n) {
      let r,
        o = {},
        a = null,
        i = null;
      if (t != null) for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (a = `${t.key}`), t)C.call(t, r) && !S.hasOwnProperty(r) && (o[r] = t[r]);
      let u = arguments.length - 2;
      if (u === 1)o.children = n; else if (u > 1) {
        for (var l = Array(u), s = 0; s < u; s++)l[s] = arguments[s + 2];
        o.children = l;
      }
      if (e && e.defaultProps) for (r in u = e.defaultProps) void 0 === o[r] && (o[r] = u[r]);
      return {

        $$typeof: x,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: T.current,
      };
    }
    function s(e) {
      return typeof e === 'object' && e !== null && e.$$typeof === x;
    }
    function c(e) {
      const t = { '=': '=0', ':': '=2' };
      return `$${(`${e}`).replace(/[=:]/g, e => t[e])}`;
    }
    function f(e, t, n, r) {
      if (A.length) {
        const o = A.pop();
        return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o;
      }
      return {
        result: e,
        keyPrefix: t,
        func: n,
        context: r,
        count: 0,
      };
    }
    function p(e) {
      e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, A.length < 10 && A.push(e);
    }
    function d(e, t, n, o) {
      let a = typeof e;
      if (a !== 'undefined' && a !== 'boolean' || (e = null), e === null || a === 'string' || a === 'number' || a === 'object' && e.$$typeof === P || a === 'object' && e.$$typeof === R) return n(o, e, t === '' ? `.${h(e, 0)}` : t), 1;
      let i = 0;
      if (t = t === '' ? '.' : `${t}:`, Array.isArray(e)) {
        for (var u = 0; u < e.length; u++) {
          a = e[u];
          var l = t + h(a, u);
          i += d(a, l, n, o);
        }
      } else if (typeof (l = k && e[k] || e['@@iterator']) === 'function') for (e = l.call(e), u = 0; !(a = e.next()).done;)a = a.value, l = t + h(a, u++), i += d(a, l, n, o); else a === 'object' && (n = `${e}`, r('31', n === '[object Object]' ? `object with keys {${Object.keys(e).join(', ')}}` : n, ''));
      return i;
    }
    function h(e, t) {
      return typeof e === 'object' && e !== null && e.key != null ? c(e.key) : t.toString(36);
    }
    function y(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function m(e, t, n) {
      let r = e.result,
        o = e.keyPrefix;
      e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? v(e, r, n, _.thatReturnsArgument) : e != null && (s(e) && (t = o + (!e.key || t && t.key === e.key ? '' : `${(`${e.key}`).replace(j, '$&/')}/`) + n, e = {
        $$typeof: x,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      }), r.push(e));
    }
    function v(e, t, n, r, o) {
      let a = '';
      n != null && (a = `${(`${n}`).replace(j, '$&/')}/`), t = f(t, a, r, o), e == null || d(e, '', m, t), p(t);
    }
    var g = n(15),
      b = n(16),
      _ = n(6),
      O = {
        isMounted() {
          return !1;
        },
        enqueueForceUpdate() {},
        enqueueReplaceState() {},
        enqueueSetState() {},
      };
    o.prototype.isReactComponent = {}, o.prototype.setState = function (e, t) {
      typeof e !== 'object' && typeof e !== 'function' && e != null && r('85'), this.updater.enqueueSetState(this, e, t, 'setState');
    }, o.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
    }, i.prototype = o.prototype;
    const w = a.prototype = new i();
    w.constructor = a, g(w, o.prototype), w.isPureReactComponent = !0;
    const E = u.prototype = new i();
    E.constructor = u, g(E, o.prototype), E.unstable_isAsyncReactComponent = !0, E.render = function () {
      return this.props.children;
    };
    var T = { current: null },
      C = Object.prototype.hasOwnProperty,
      x = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103,
      S = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0,
      },
      k = typeof Symbol === 'function' && Symbol.iterator,
      P = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 60103,
      R = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.portal') || 60106,
      j = /\/+/g,
      A = [];
    typeof Symbol === 'function' && Symbol.for && Symbol.for('react.fragment');
    let D = {
        Children: {
          map(e, t, n) {
            if (e == null) return e;
            const r = [];
            return v(e, r, null, t, n), r;
          },
          forEach(e, t, n) {
            if (e == null) return e;
            t = f(null, null, t, n), e == null || d(e, '', y, t), p(t);
          },
          count(e) {
            return e == null ? 0 : d(e, '', _.thatReturnsNull, null);
          },
          toArray(e) {
            const t = [];
            return v(e, t, null, _.thatReturnsArgument), t;
          },
          only(e) {
            return s(e) || r('143'), e;
          },
        },
        Component: o,
        PureComponent: a,
        unstable_AsyncComponent: u,
        createElement: l,
        cloneElement(e, t, n) {
          let r = g({}, e.props),
            o = e.key,
            a = e.ref,
            i = e._owner;
          if (t != null) {
            if (void 0 !== t.ref && (a = t.ref, i = T.current), void 0 !== t.key && (o = `${t.key}`), e.type && e.type.defaultProps) var u = e.type.defaultProps;
            for (l in t)C.call(t, l) && !S.hasOwnProperty(l) && (r[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (l === 1)r.children = n; else if (l > 1) {
            u = Array(l);
            for (let s = 0; s < l; s++)u[s] = arguments[s + 2];
            r.children = u;
          }
          return {
            $$typeof: x,
            type: e.type,
            key: o,
            ref: a,
            props: r,
            _owner: i,
          };
        },
        createFactory(e) {
          const t = l.bind(null, e);
          return t.type = e, t;
        },
        isValidElement: s,
        version: '16.1.1',
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: T,
          assign: g,
        },
      },
      L = Object.freeze({ default: D }),
      N = L && D || L;
    e.exports = N.default ? N.default : N;
  },
  function (e, t, n) {
    function r() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE === 'function') {
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
        } catch (e) {
          console.error(e);
        }
      }
    }
    r(), e.exports = n(26);
  },
  function (e, t, n) {
    function r(e) {
      for (var t = arguments.length - 1, n = `Minified React error #${e}; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=${e}`, r = 0; r < t; r++)n += `&args[]=${encodeURIComponent(arguments[r + 1])}`;
      throw t = Error(`${n} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`), t.name = 'Invariant Violation', t.framesToPop = 1, t;
    }
    function o(e, t) {
      return (e & t) === t;
    }
    function a(e, t) {
      if (kn.hasOwnProperty(e) || e.length > 2 && (e[0] === 'o' || e[0] === 'O') && (e[1] === 'n' || e[1] === 'N')) return !1;
      if (t === null) return !0;
      switch (typeof t) {
      case 'boolean': return kn.hasOwnProperty(e) ? e = !0 : (t = i(e)) ? e = t.hasBooleanValue || t.hasStringBooleanValue || t.hasOverloadedBooleanValue : (e = e.toLowerCase().slice(0, 5), e = e === 'data-' || e === 'aria-'), e;
      case 'undefined':
      case 'number':
      case 'string':
      case 'object': return !0;
      default: return !1;
      }
    }
    function i(e) {
      return Rn.hasOwnProperty(e) ? Rn[e] : null;
    }
    function u(e) {
      return e[1].toUpperCase();
    }
    function l(e, t, n, r, o, a, i, u, l) {
      zn._hasCaughtError = !1, zn._caughtError = null;
      const s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        zn._caughtError = e, zn._hasCaughtError = !0;
      }
    }
    function s() {
      if (zn._hasRethrowError) {
        const e = zn._rethrowError;
        throw zn._rethrowError = null, zn._hasRethrowError = !1, e;
      }
    }
    function c() {
      if (Kn) {
        for (const e in qn) {
          let t = qn[e],
            n = Kn.indexOf(e);
          if (n > -1 || r('96', e), !Wn[n]) {
            t.extractEvents || r('97', e), Wn[n] = t, n = t.eventTypes;
            for (const o in n) {
              let a = void 0,
                i = n[o],
                u = t,
                l = o;
              Gn.hasOwnProperty(l) && r('99', l), Gn[l] = i;
              const s = i.phasedRegistrationNames;
              if (s) {
                for (a in s)s.hasOwnProperty(a) && f(s[a], u, l);
                a = !0;
              } else i.registrationName ? (f(i.registrationName, u, l), a = !0) : a = !1;
              a || r('98', o, e);
            }
          }
        }
      }
    }
    function f(e, t, n) {
      $n[e] && r('100', e), $n[e] = t, Yn[e] = t.eventTypes[n].dependencies;
    }
    function p(e) {
      Kn && r('101'), Kn = Array.prototype.slice.call(e), c();
    }
    function d(e) {
      let t,
        n = !1;
      for (t in e) {
        if (e.hasOwnProperty(t)) {
          const o = e[t];
          qn.hasOwnProperty(t) && qn[t] === o || (qn[t] && r('102', t), qn[t] = o, n = !0);
        }
      }
      n && c();
    }
    function h(e, t, n, r) {
      t = e.type || 'unknown-event', e.currentTarget = Zn(r), zn.invokeGuardedCallbackAndCatchFirstError(t, n, void 0, e), e.currentTarget = null;
    }
    function y(e, t) {
      return t == null && r('30'), e == null ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push(...t), e) : (e.push(t), e) : Array.isArray(t) ? [
        e,
      ].concat(t) : [
        e,
        t,
      ];
    }
    function m(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    function v(e, t) {
      if (e) {
        let n = e._dispatchListeners,
          r = e._dispatchInstances;
        if (Array.isArray(n)) for (let o = 0; o < n.length && !e.isPropagationStopped(); o++)h(e, t, n[o], r[o]); else n && h(e, t, n, r);
        e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e);
      }
    }
    function g(e) {
      return v(e, !0);
    }
    function b(e) {
      return v(e, !1);
    }
    function _(e, t) {
      let n = e.stateNode;
      if (!n) return null;
      let o = Xn(n);
      if (!o) return null;
      n = o[t];
      switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture': (o = !o.disabled) || (e = e.type, o = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea')), e = !o; break;
      default: e = !1;
      }
      return e ? null : (n && typeof n !== 'function' && r('231', t, typeof n), n);
    }
    function O(e, t, n, r) {
      for (var o, a = 0; a < Wn.length; a++) {
        let i = Wn[a];
        i && (i = i.extractEvents(e, t, n, r)) && (o = y(o, i));
      }
      return o;
    }
    function w(e) {
      e && (er = y(er, e));
    }
    function E(e) {
      const t = er;
      er = null, e ? m(t, g) : m(t, b), er && r('95'), zn.rethrowCaughtError();
    }
    function T(e) {
      if (e[or]) return e[or];
      for (var t = []; !e[or];) {
        if (t.push(e), !e.parentNode) return null;
        e = e.parentNode;
      }
      let n = void 0,
        r = e[or];
      if (r.tag === 5 || r.tag === 6) return r;
      for (;e && (r = e[or]); e = t.pop())n = r;
      return n;
    }
    function C(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      r('33');
    }
    function x(e) {
      return e[ar] || null;
    }
    function S(e) {
      do {
        e = e.return;
      } while (e && e.tag !== 5);
      return e || null;
    }
    function k(e, t, n) {
      for (var r = []; e;)r.push(e), e = S(e);
      for (e = r.length; e-- > 0;)t(r[e], 'captured', n);
      for (e = 0; e < r.length; e++)t(r[e], 'bubbled', n);
    }
    function P(e, t, n) {
      (t = _(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = y(n._dispatchListeners, t), n._dispatchInstances = y(n._dispatchInstances, e));
    }
    function R(e) {
      e && e.dispatchConfig.phasedRegistrationNames && k(e._targetInst, P, e);
    }
    function j(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        let t = e._targetInst;
        t = t ? S(t) : null, k(t, P, e);
      }
    }
    function A(e, t, n) {
      e && n && n.dispatchConfig.registrationName && (t = _(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = y(n._dispatchListeners, t), n._dispatchInstances = y(n._dispatchInstances, e));
    }
    function D(e) {
      e && e.dispatchConfig.registrationName && A(e._targetInst, null, e);
    }
    function L(e) {
      m(e, R);
    }
    function N(e, t, n, r) {
      if (n && r) {
        e: {
          for (var o = n, a = r, i = 0, u = o; u; u = S(u))i++;
          u = 0;
          for (let l = a; l; l = S(l))u++;
          for (;i - u > 0;)o = S(o), i--;
          for (;u - i > 0;)a = S(a), u--;
          for (;i--;) {
            if (o === a || o === a.alternate) break e;
            o = S(o), a = S(a);
          }
          o = null;
        }
      } else o = null;
      for (a = o, o = []; n && n !== a && ((i = n.alternate) === null || i !== a);)o.push(n), n = S(n);
      for (n = []; r && r !== a && ((i = r.alternate) === null || i !== a);)n.push(r), r = S(r);
      for (r = 0; r < o.length; r++)A(o[r], 'bubbled', e);
      for (e = n.length; e-- > 0;)A(n[e], 'captured', t);
    }
    function M() {
      return !lr && bn.canUseDOM && (lr = 'textContent' in document.documentElement ? 'textContent' : 'innerText'), lr;
    }
    function I() {
      if (sr._fallbackText) return sr._fallbackText;
      let e,
        t,
        n = sr._startText,
        r = n.length,
        o = U(),
        a = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      const i = r - e;
      for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
      return sr._fallbackText = o.slice(e, t > 1 ? 1 - t : void 0), sr._fallbackText;
    }
    function U() {
      return 'value' in sr._root ? sr._root.value : sr._root[M()];
    }
    function H(e, t, n, r) {
      this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface;
      for (const o in e)e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : o === 'target' ? this.target = r : this[o] = n[o]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : !1 === n.returnValue) ? On.thatReturnsTrue : On.thatReturnsFalse, this.isPropagationStopped = On.thatReturnsFalse, this;
    }
    function F(e, t, n, r) {
      if (this.eventPool.length) {
        const o = this.eventPool.pop();
        return this.call(o, e, t, n, r), o;
      }
      return new this(e, t, n, r);
    }
    function V(e) {
      e instanceof this || r('223'), e.destructor(), this.eventPool.length < 10 && this.eventPool.push(e);
    }
    function B(e) {
      e.eventPool = [], e.getPooled = F, e.release = V;
    }
    function z(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function K(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function q(e, t) {
      switch (e) {
      case 'topKeyUp': return pr.indexOf(t.keyCode) !== -1;
      case 'topKeyDown': return t.keyCode !== 229;
      case 'topKeyPress':
      case 'topMouseDown':
      case 'topBlur': return !0;
      default: return !1;
      }
    }
    function W(e) {
      return e = e.detail, typeof e === 'object' && 'data' in e ? e.data : null;
    }
    function G(e, t) {
      switch (e) {
      case 'topCompositionEnd': return W(t);
      case 'topKeyPress': return t.which !== 32 ? null : (wr = !0, _r);
      case 'topTextInput': return e = t.data, e === _r && wr ? null : e;
      default: return null;
      }
    }
    function $(e, t) {
      if (Er) return e === 'topCompositionEnd' || !dr && q(e, t) ? (e = I(), sr._root = null, sr._startText = null, sr._fallbackText = null, Er = !1, e) : null;
      switch (e) {
      case 'topPaste': return null;
      case 'topKeyPress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && t.char.length > 1) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'topCompositionEnd': return br ? null : t.data;
      default: return null;
      }
    }
    function Y(e) {
      if (e = Jn(e)) {
        Cr && typeof Cr.restoreControlledState === 'function' || r('194');
        const t = Xn(e.stateNode);
        Cr.restoreControlledState(e.stateNode, e.type, t);
      }
    }
    function Q(e) {
      xr ? Sr ? Sr.push(e) : Sr = [e] : xr = e;
    }
    function X() {
      if (xr) {
        let e = xr,
          t = Sr;
        if (Sr = xr = null, Y(e), t) for (e = 0; e < t.length; e++)Y(t[e]);
      }
    }
    function J(e, t) {
      return e(t);
    }
    function Z(e, t) {
      if (Rr) return J(e, t);
      Rr = !0;
      try {
        return J(e, t);
      } finally {
        Rr = !1, X();
      }
    }
    function ee(e) {
      const t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === 'input' ? !!jr[e.type] : t === 'textarea';
    }
    function te(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function ne(e, t) {
      if (!bn.canUseDOM || t && !('addEventListener' in document)) return !1;
      t = `on${e}`;
      let n = t in document;
      return n || (n = document.createElement('div'), n.setAttribute(t, 'return;'), n = typeof n[t] === 'function'), !n && vr && e === 'wheel' && (n = document.implementation.hasFeature('Events.wheel', '3.0')), n;
    }
    function re(e) {
      const t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
    }
    function oe(e) {
      let t = re(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `${e[t]}`;
      if (!e.hasOwnProperty(t) && typeof n.get === 'function' && typeof n.set === 'function') {
        return Object.defineProperty(e, t, {
          enumerable: n.enumerable,
          configurable: !0,
          get() {
            return n.get.call(this);
          },
          set(e) {
            r = `${e}`, n.set.call(this, e);
          },
        }), {

          getValue() {
            return r;
          },
          setValue(e) {
            r = `${e}`;
          },
          stopTracking() {
            e._valueTracker = null, delete e[t];
          },
        };
      }
    }
    function ae(e) {
      e._valueTracker || (e._valueTracker = oe(e));
    }
    function ie(e) {
      if (!e) return !1;
      const t = e._valueTracker;
      if (!t) return !0;
      let n = t.getValue(),
        r = '';
      return e && (r = re(e) ? e.checked ? 'true' : 'false' : e.value), (e = r) !== n && (t.setValue(e), !0);
    }
    function ue(e, t, n) {
      return e = H.getPooled(Ar.change, e, t, n), e.type = 'change', Q(n), L(e), e;
    }
    function le(e) {
      w(e), E(!1);
    }
    function se(e) {
      if (ie(C(e))) return e;
    }
    function ce(e, t) {
      if (e === 'topChange') return t;
    }
    function fe() {
      Dr && (Dr.detachEvent('onpropertychange', pe), Lr = Dr = null);
    }
    function pe(e) {
      e.propertyName === 'value' && se(Lr) && (e = ue(Lr, e, te(e)), Z(le, e));
    }
    function de(e, t, n) {
      e === 'topFocus' ? (fe(), Dr = t, Lr = n, Dr.attachEvent('onpropertychange', pe)) : e === 'topBlur' && fe();
    }
    function he(e) {
      if (e === 'topSelectionChange' || e === 'topKeyUp' || e === 'topKeyDown') return se(Lr);
    }
    function ye(e, t) {
      if (e === 'topClick') return se(t);
    }
    function me(e, t) {
      if (e === 'topInput' || e === 'topChange') return se(t);
    }
    function ve(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function ge(e) {
      const t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = Ir[e]) && !!t[e];
    }
    function be() {
      return ge;
    }
    function _e(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function Oe(e) {
      return e = e.type, typeof e === 'string' ? e : typeof e === 'function' ? e.displayName || e.name : null;
    }
    function we(e) {
      let t = e;
      if (e.alternate) for (;t.return;)t = t.return; else {
        if ((2 & t.effectTag) != 0) return 1;
        for (;t.return;) if (t = t.return, (2 & t.effectTag) != 0) return 1;
      }
      return t.tag === 3 ? 2 : 3;
    }
    function Ee(e) {
      return !!(e = e._reactInternalFiber) && we(e) === 2;
    }
    function Te(e) {
      we(e) !== 2 && r('188');
    }
    function Ce(e) {
      let t = e.alternate;
      if (!t) return t = we(e), t === 3 && r('188'), t === 1 ? null : e;
      for (var n = e, o = t; ;) {
        let a = n.return,
          i = a ? a.alternate : null;
        if (!a || !i) break;
        if (a.child === i.child) {
          for (var u = a.child; u;) {
            if (u === n) return Te(a), e;
            if (u === o) return Te(a), t;
            u = u.sibling;
          }
          r('188');
        }
        if (n.return !== o.return)n = a, o = i; else {
          u = !1;
          for (var l = a.child; l;) {
            if (l === n) {
              u = !0, n = a, o = i;
              break;
            }
            if (l === o) {
              u = !0, o = a, n = i;
              break;
            }
            l = l.sibling;
          }
          if (!u) {
            for (l = i.child; l;) {
              if (l === n) {
                u = !0, n = i, o = a;
                break;
              }
              if (l === o) {
                u = !0, o = i, n = a;
                break;
              }
              l = l.sibling;
            }
            u || r('189');
          }
        }
        n.alternate !== o && r('190');
      }
      return n.tag !== 3 && r('188'), n.stateNode.current === n ? e : t;
    }
    function xe(e) {
      if (!(e = Ce(e))) return null;
      for (let t = e; ;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child)t.child.return = t, t = t.child; else {
          if (t === e) break;
          for (;!t.sibling;) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return null;
    }
    function Se(e) {
      if (!(e = Ce(e))) return null;
      for (let t = e; ;) {
        if (t.tag === 5 || t.tag === 6) return t;
        if (t.child && t.tag !== 4)t.child.return = t, t = t.child; else {
          if (t === e) break;
          for (;!t.sibling;) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return null;
    }
    function ke(e) {
      let t = e.targetInst;
      do {
        if (!t) {
          e.ancestors.push(t);
          break;
        }
        var n;
        for (n = t; n.return;)n = n.return;
        if (!(n = n.tag !== 3 ? null : n.stateNode.containerInfo)) break;
        e.ancestors.push(t), t = T(n);
      } while (t);
      for (n = 0; n < e.ancestors.length; n++)t = e.ancestors[n], zr(e.topLevelType, t, e.nativeEvent, te(e.nativeEvent));
    }
    function Pe(e) {
      Br = !!e;
    }
    function Re(e, t, n) {
      return n ? wn.listen(n, t, Ae.bind(null, e)) : null;
    }
    function je(e, t, n) {
      return n ? wn.capture(n, t, Ae.bind(null, e)) : null;
    }
    function Ae(e, t) {
      if (Br) {
        let n = te(t);
        if (n = T(n), n === null || typeof n.tag !== 'number' || we(n) === 2 || (n = null), Vr.length) {
          const r = Vr.pop();
          r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r;
        } else {
          e = {
            topLevelType: e,
            nativeEvent: t,
            targetInst: n,
            ancestors: [],
          };
        }
        try {
          Z(ke, e);
        } finally {
          e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, Vr.length < 10 && Vr.push(e);
        }
      }
    }
    function De(e, t) {
      const n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit${e}`] = `webkit${t}`, n[`Moz${e}`] = `moz${t}`, n[`ms${e}`] = `MS${t}`, n[`O${e}`] = `o${t.toLowerCase()}`, n;
    }
    function Le(e) {
      if (Wr[e]) return Wr[e];
      if (!qr[e]) return e;
      let t,
        n = qr[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Gr) return Wr[e] = n[t];
      return '';
    }
    function Ne(e) {
      return Object.prototype.hasOwnProperty.call(e, Xr) || (e[Xr] = Qr++, Yr[e[Xr]] = {}), Yr[e[Xr]];
    }
    function Me(e) {
      for (;e && e.firstChild;)e = e.firstChild;
      return e;
    }
    function Ie(e, t) {
      let n = Me(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (r = e + n.textContent.length, e <= t && r >= t) {
            return {
              node: n,
              offset: t - e,
            };
          }
          e = r;
        }
        e: {
          for (;n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Me(n);
      }
    }
    function Ue(e) {
      const t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === 'input' && e.type === 'text' || t === 'textarea' || e.contentEditable === 'true');
    }
    function He(e, t) {
      if (ro || eo == null || eo !== En()) return null;
      let n = eo;
      return 'selectionStart' in n && Ue(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd,
      } : window.getSelection ? (n = window.getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset,
      }) : n = void 0, no && Tn(no, n) ? null : (no = n, e = H.getPooled(Zr.select, to, e, t), e.type = 'select', e.target = eo, L(e), e);
    }
    function Fe(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function Ve(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function Be(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function ze(e) {
      const t = e.keyCode;
      return 'charCode' in e ? (e = e.charCode) === 0 && t === 13 && (e = 13) : e = t, e >= 32 || e === 13 ? e : 0;
    }
    function Ke(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function qe(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function We(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function Ge(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function $e(e, t, n, r) {
      return H.call(this, e, t, n, r);
    }
    function Ye(e) {
      fo < 0 || (e.current = co[fo], co[fo] = null, fo--);
    }
    function Qe(e, t) {
      fo++, co[fo] = e.current, e.current = t;
    }
    function Xe(e) {
      return Ze(e) ? bo : vo.current;
    }
    function Je(e, t) {
      const n = e.type.contextTypes;
      if (!n) return Sn;
      const r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      let o,
        a = {};
      for (o in n)a[o] = t[o];
      return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
    }
    function Ze(e) {
      return e.tag === 2 && e.type.childContextTypes != null;
    }
    function et(e) {
      Ze(e) && (Ye(go, e), Ye(vo, e));
    }
    function tt(e, t, n) {
      vo.cursor != null && r('168'), Qe(vo, t, e), Qe(go, n, e);
    }
    function nt(e, t) {
      let n = e.stateNode,
        o = e.type.childContextTypes;
      if (typeof n.getChildContext !== 'function') return t;
      n = n.getChildContext();
      for (const a in n)a in o || r('108', Oe(e) || 'Unknown', a);
      return _n({}, t, n);
    }
    function rt(e) {
      if (!Ze(e)) return !1;
      let t = e.stateNode;
      return t = t && t.__reactInternalMemoizedMergedChildContext || Sn, bo = vo.current, Qe(vo, t, e), Qe(go, go.current, e), !0;
    }
    function ot(e, t) {
      const n = e.stateNode;
      if (n || r('169'), t) {
        const o = nt(e, bo);
        n.__reactInternalMemoizedMergedChildContext = o, Ye(go, e), Ye(vo, e), Qe(vo, o, e);
      } else Ye(go, e);
      Qe(go, t, e);
    }
    function at(e, t, n) {
      this.tag = e, this.key = t, this.stateNode = this.type = null, this.sibling = this.child = this.return = null, this.index = 0, this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null, this.internalContextTag = n, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.expirationTime = 0, this.alternate = null;
    }
    function it(e, t, n) {
      let r = e.alternate;
      return r === null ? (r = new at(e.tag, e.key, e.internalContextTag), r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.effectTag = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.expirationTime = n, r.pendingProps = t, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
    }
    function ut(e, t, n) {
      let o = void 0,
        a = e.type,
        i = e.key;
      return typeof a === 'function' ? (o = a.prototype && a.prototype.isReactComponent ? new at(2, i, t) : new at(0, i, t), o.type = a, o.pendingProps = e.props) : typeof a === 'string' ? (o = new at(5, i, t), o.type = a, o.pendingProps = e.props) : typeof a === 'object' && a !== null && typeof a.tag === 'number' ? (o = a, o.pendingProps = e.props) : r('130', a == null ? a : typeof a, ''), o.expirationTime = n, o;
    }
    function lt(e, t, n, r) {
      return t = new at(10, r, t), t.pendingProps = e, t.expirationTime = n, t;
    }
    function st(e, t, n) {
      return t = new at(6, null, t), t.pendingProps = e, t.expirationTime = n, t;
    }
    function ct(e, t, n) {
      return t = new at(7, e.key, t), t.type = e.handler, t.pendingProps = e, t.expirationTime = n, t;
    }
    function ft(e, t, n) {
      return e = new at(9, null, t), e.expirationTime = n, e;
    }
    function pt(e, t, n) {
      return t = new at(4, e.key, t), t.pendingProps = e.children || [], t.expirationTime = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }, t;
    }
    function dt(e) {
      return function (t) {
        try {
          return e(t);
        } catch (e) {}
      };
    }
    function ht(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') return !1;
      const t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled || !t.supportsFiber) return !0;
      try {
        const n = t.inject(e);
        _o = dt(e => t.onCommitFiberRoot(n, e)), Oo = dt(e => t.onCommitFiberUnmount(n, e));
      } catch (e) {}
      return !0;
    }
    function yt(e) {
      typeof _o === 'function' && _o(e);
    }
    function mt(e) {
      typeof Oo === 'function' && Oo(e);
    }
    function vt(e) {
      return {
        baseState: e,
        expirationTime: 0,
        first: null,
        last: null,
        callbackList: null,
        hasForceUpdate: !1,
        isInitialized: !1,
      };
    }
    function gt(e, t) {
      e.last === null ? e.first = e.last = t : (e.last.next = t, e.last = t), (e.expirationTime === 0 || e.expirationTime > t.expirationTime) && (e.expirationTime = t.expirationTime);
    }
    function bt(e, t) {
      let n = e.alternate,
        r = e.updateQueue;
      r === null && (r = e.updateQueue = vt(null)), n !== null ? (e = n.updateQueue) === null && (e = n.updateQueue = vt(null)) : e = null, e = e !== r ? e : null, e === null ? gt(r, t) : r.last === null || e.last === null ? (gt(r, t), gt(e, t)) : (gt(r, t), e.last = t);
    }
    function _t(e, t, n, r) {
      return e = e.partialState, typeof e === 'function' ? e.call(t, n, r) : e;
    }
    function Ot(e, t, n, r, o, a) {
      e !== null && e.updateQueue === n && (n = t.updateQueue = {
        baseState: n.baseState,
        expirationTime: n.expirationTime,
        first: n.first,
        last: n.last,
        isInitialized: n.isInitialized,
        callbackList: null,
        hasForceUpdate: !1,
      }), n.expirationTime = 0, n.isInitialized ? e = n.baseState : (e = n.baseState = t.memoizedState, n.isInitialized = !0);
      for (var i = !0, u = n.first, l = !1; u !== null;) {
        let s = u.expirationTime;
        if (s > a) {
          const c = n.expirationTime;
          (c === 0 || c > s) && (n.expirationTime = s), l || (l = !0, n.baseState = e);
        } else l || (n.first = u.next, n.first === null && (n.last = null)), u.isReplace ? (e = _t(u, r, e, o), i = !0) : (s = _t(u, r, e, o)) && (e = i ? _n({}, e, s) : _n(e, s), i = !1), u.isForced && (n.hasForceUpdate = !0), u.callback !== null && (s = n.callbackList, s === null && (s = n.callbackList = []), s.push(u));
        u = u.next;
      }
      return n.callbackList !== null ? t.effectTag |= 32 : n.first !== null || n.hasForceUpdate || (t.updateQueue = null), l || (n.baseState = e), e;
    }
    function wt(e, t) {
      const n = e.callbackList;
      if (n !== null) {
        for (e.callbackList = null, e = 0; e < n.length; e++) {
          let o = n[e],
            a = o.callback;
          o.callback = null, typeof a !== 'function' && r('191', a), a.call(t);
        }
      }
    }
    function Et(e, t, n, o) {
      function a(e, t) {
        t.updater = i, e.stateNode = t, t._reactInternalFiber = e;
      }
      var i = {
        isMounted: Ee,
        enqueueSetState(n, r, o) {
          n = n._reactInternalFiber, o = void 0 === o ? null : o;
          const a = t(n);
          bt(n, {
            expirationTime: a,
            partialState: r,
            callback: o,
            isReplace: !1,
            isForced: !1,
            nextCallback: null,
            next: null,
          }), e(n, a);
        },
        enqueueReplaceState(n, r, o) {
          n = n._reactInternalFiber, o = void 0 === o ? null : o;
          const a = t(n);
          bt(n, {
            expirationTime: a,
            partialState: r,
            callback: o,
            isReplace: !0,
            isForced: !1,
            nextCallback: null,
            next: null,
          }), e(n, a);
        },
        enqueueForceUpdate(n, r) {
          n = n._reactInternalFiber, r = void 0 === r ? null : r;
          const o = t(n);
          bt(n, {

            expirationTime: o,
            partialState: null,
            callback: r,
            isReplace: !1,
            isForced: !0,
            nextCallback: null,
            next: null,
          }), e(n, o);
        },
      };
      return {
        adoptClassInstance: a,
        constructClassInstance(e, t) {
          let n = e.type,
            r = Xe(e),
            o = e.tag === 2 && e.type.contextTypes != null,
            i = o ? Je(e, r) : Sn;
          return t = new n(t, i), a(e, t), o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = i), t;
        },
        mountClassInstance(e, t) {
          let n = e.alternate,
            o = e.stateNode,
            a = o.state || null,
            u = e.pendingProps;
          u || r('158');
          const l = Xe(e);
          o.props = u, o.state = e.memoizedState = a, o.refs = Sn, o.context = Je(e, l), e.type != null && e.type.prototype != null && !0 === e.type.prototype.unstable_isAsyncReactComponent && (e.internalContextTag |= 1), typeof o.componentWillMount === 'function' && (a = o.state, o.componentWillMount(), a !== o.state && i.enqueueReplaceState(o, o.state, null), (a = e.updateQueue) !== null && (o.state = Ot(n, e, a, o, u, t))), typeof o.componentDidMount === 'function' && (e.effectTag |= 4);
        },
        updateClassInstance(e, t, a) {
          const u = t.stateNode;
          u.props = t.memoizedProps, u.state = t.memoizedState;
          let l = t.memoizedProps,
            s = t.pendingProps;
          s || (s = l) == null && r('159');
          let c = u.context,
            f = Xe(t);
          if (f = Je(t, f), typeof u.componentWillReceiveProps !== 'function' || l === s && c === f || (c = u.state, u.componentWillReceiveProps(s, f), u.state !== c && i.enqueueReplaceState(u, u.state, null)), c = t.memoizedState, a = t.updateQueue !== null ? Ot(e, t, t.updateQueue, u, s, a) : c, !(l !== s || c !== a || go.current || t.updateQueue !== null && t.updateQueue.hasForceUpdate)) return typeof u.componentDidUpdate !== 'function' || l === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 4), !1;
          let p = s;
          if (l === null || t.updateQueue !== null && t.updateQueue.hasForceUpdate)p = !0; else {
            let d = t.stateNode,
              h = t.type;
            p = typeof d.shouldComponentUpdate === 'function' ? d.shouldComponentUpdate(p, a, f) : !h.prototype || !h.prototype.isPureReactComponent || (!Tn(l, p) || !Tn(c, a));
          }
          return p ? (typeof u.componentWillUpdate === 'function' && u.componentWillUpdate(s, a, f), typeof u.componentDidUpdate === 'function' && (t.effectTag |= 4)) : (typeof u.componentDidUpdate !== 'function' || l === e.memoizedProps && c === e.memoizedState || (t.effectTag |= 4), n(t, s), o(t, a)), u.props = s, u.state = a, u.context = f, p;
        },
      };
    }
    function Tt(e, t, n) {
      const r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: wo,
        key: r == null ? null : `${r}`,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function Ct(e) {
      return e === null || void 0 === e ? null : (e = To && e[To] || e['@@iterator'], typeof e === 'function' ? e : null);
    }
    function xt(e, t) {
      const n = t.ref;
      if (n !== null && typeof n !== 'function') {
        if (t._owner) {
          t = t._owner;
          let o = void 0;
          t && (t.tag !== 2 && r('110'), o = t.stateNode), o || r('147', n);
          const a = `${n}`;
          return e !== null && e.ref !== null && e.ref._stringRef === a ? e.ref : (e = function (e) {
            const t = o.refs === Sn ? o.refs = {} : o.refs;
            e === null ? delete t[a] : t[a] = e;
          }, e._stringRef = a, e);
        }
        typeof n !== 'string' && r('148'), t._owner || r('149', n);
      }
      return n;
    }
    function St(e, t) {
      e.type !== 'textarea' && r('31', Object.prototype.toString.call(t) === '[object Object]' ? `object with keys {${Object.keys(t).join(', ')}}` : t, '');
    }
    function kt(e, t) {
      function n(n, r) {
        if (t) {
          if (!e) {
            if (r.alternate === null) return;
            r = r.alternate;
          }
          const o = n.lastEffect;
          o !== null ? (o.nextEffect = r, n.lastEffect = r) : n.firstEffect = n.lastEffect = r, r.nextEffect = null, r.effectTag = 8;
        }
      }
      function o(e, r) {
        if (!t) return null;
        for (;r !== null;)n(e, r), r = r.sibling;
        return null;
      }
      function a(e, t) {
        for (e = new Map(); t !== null;)t.key !== null ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
        return e;
      }
      function i(t, n, r) {
        return e ? (t = it(t, n, r), t.index = 0, t.sibling = null, t) : (t.expirationTime = r, t.effectTag = 0, t.index = 0, t.sibling = null, t.pendingProps = n, t);
      }
      function u(e, n, r) {
        return e.index = r, t ? (r = e.alternate) !== null ? (r = r.index, r < n ? (e.effectTag = 2, n) : r) : (e.effectTag = 2, n) : n;
      }
      function l(e) {
        return t && e.alternate === null && (e.effectTag = 2), e;
      }
      function s(e, t, n, r) {
        return t === null || t.tag !== 6 ? (t = st(n, e.internalContextTag, r), t.return = e, t) : (t = i(t, n, r), t.return = e, t);
      }
      function c(e, t, n, r) {
        return t !== null && t.type === n.type ? (r = i(t, n.props, r), r.ref = xt(t, n), r.return = e, r) : (r = ut(n, e.internalContextTag, r), r.ref = xt(t, n), r.return = e, r);
      }
      function f(e, t, n, r) {
        return t === null || t.tag !== 7 ? (t = ct(n, e.internalContextTag, r), t.return = e, t) : (t = i(t, n, r), t.return = e, t);
      }
      function p(e, t, n, r) {
        return t === null || t.tag !== 9 ? (t = ft(n, e.internalContextTag, r), t.type = n.value, t.return = e, t) : (t = i(t, null, r), t.type = n.value, t.return = e, t);
      }
      function d(e, t, n, r) {
        return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = pt(n, e.internalContextTag, r), t.return = e, t) : (t = i(t, n.children || [], r), t.return = e, t);
      }
      function h(e, t, n, r, o) {
        return t === null || t.tag !== 10 ? (t = lt(n, e.internalContextTag, r, o), t.return = e, t) : (t = i(t, n, r), t.return = e, t);
      }
      function y(e, t, n) {
        if (typeof t === 'string' || typeof t === 'number') return t = st(`${t}`, e.internalContextTag, n), t.return = e, t;
        if (typeof t === 'object' && t !== null) {
          switch (t.$$typeof) {
          case po: return t.type === mo ? (t = lt(t.props.children, e.internalContextTag, n, t.key), t.return = e, t) : (n = ut(t, e.internalContextTag, n), n.ref = xt(null, t), n.return = e, n);
          case ho: return t = ct(t, e.internalContextTag, n), t.return = e, t;
          case yo: return n = ft(t, e.internalContextTag, n), n.type = t.value, n.return = e, n;
          case wo: return t = pt(t, e.internalContextTag, n), t.return = e, t;
          }
          if (Eo(t) || Ct(t)) return t = lt(t, e.internalContextTag, n, null), t.return = e, t;
          St(e, t);
        }
        return null;
      }
      function m(e, t, n, r) {
        const o = t !== null ? t.key : null;
        if (typeof n === 'string' || typeof n === 'number') return o !== null ? null : s(e, t, `${n}`, r);
        if (typeof n === 'object' && n !== null) {
          switch (n.$$typeof) {
          case po: return n.key === o ? n.type === mo ? h(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
          case ho: return n.key === o ? f(e, t, n, r) : null;
          case yo: return o === null ? p(e, t, n, r) : null;
          case wo: return n.key === o ? d(e, t, n, r) : null;
          }
          if (Eo(n) || Ct(n)) return o !== null ? null : h(e, t, n, r, null);
          St(e, n);
        }
        return null;
      }
      function v(e, t, n, r, o) {
        if (typeof r === 'string' || typeof r === 'number') return e = e.get(n) || null, s(t, e, `${r}`, o);
        if (typeof r === 'object' && r !== null) {
          switch (r.$$typeof) {
          case po: return e = e.get(r.key === null ? n : r.key) || null, r.type === mo ? h(t, e, r.props.children, o, r.key) : c(t, e, r, o);
          case ho: return e = e.get(r.key === null ? n : r.key) || null, f(t, e, r, o);
          case yo: return e = e.get(n) || null, p(t, e, r, o);
          case wo: return e = e.get(r.key === null ? n : r.key) || null, d(t, e, r, o);
          }
          if (Eo(r) || Ct(r)) return e = e.get(n) || null, h(t, e, r, o, null);
          St(t, r);
        }
        return null;
      }
      function g(e, r, i, l) {
        for (var s = null, c = null, f = r, p = r = 0, d = null; f !== null && p < i.length; p++) {
          f.index > p ? (d = f, f = null) : d = f.sibling;
          const h = m(e, f, i[p], l);
          if (h === null) {
            f === null && (f = d);
            break;
          }
          t && f && h.alternate === null && n(e, f), r = u(h, r, p), c === null ? s = h : c.sibling = h, c = h, f = d;
        }
        if (p === i.length) return o(e, f), s;
        if (f === null) {
          for (;p < i.length; p++)(f = y(e, i[p], l)) && (r = u(f, r, p), c === null ? s = f : c.sibling = f, c = f);
          return s;
        }
        for (f = a(e, f); p < i.length; p++)(d = v(f, e, p, i[p], l)) && (t && d.alternate !== null && f.delete(d.key === null ? p : d.key), r = u(d, r, p), c === null ? s = d : c.sibling = d, c = d);
        return t && f.forEach(t => n(e, t)), s;
      }
      function b(e, i, l, s) {
        let c = Ct(l);
        typeof c !== 'function' && r('150'), (l = c.call(l)) == null && r('151');
        for (var f = c = null, p = i, d = i = 0, h = null, g = l.next(); p !== null && !g.done; d++, g = l.next()) {
          p.index > d ? (h = p, p = null) : h = p.sibling;
          const b = m(e, p, g.value, s);
          if (b === null) {
            p || (p = h);
            break;
          }
          t && p && b.alternate === null && n(e, p), i = u(b, i, d), f === null ? c = b : f.sibling = b, f = b, p = h;
        }
        if (g.done) return o(e, p), c;
        if (p === null) {
          for (;!g.done; d++, g = l.next())(g = y(e, g.value, s)) !== null && (i = u(g, i, d), f === null ? c = g : f.sibling = g, f = g);
          return c;
        }
        for (p = a(e, p); !g.done; d++, g = l.next())(g = v(p, e, d, g.value, s)) !== null && (t && g.alternate !== null && p.delete(g.key === null ? d : g.key), i = u(g, i, d), f === null ? c = g : f.sibling = g, f = g);
        return t && p.forEach(t => n(e, t)), c;
      }
      return function (e, t, a, u) {
        let s = typeof a === 'object' && a !== null;
        if (s) {
          switch (a.$$typeof) {
          case po:
            e: {
              const c = a.key;
              for (s = t; s !== null;) {
                if (s.key === c) {
                  if (s.tag === 10 ? a.type === mo : s.type === a.type) {
                    o(e, s.sibling), t = i(s, a.type === mo ? a.props.children : a.props, u), t.ref = xt(s, a), t.return = e, e = t;
                    break e;
                  }
                  o(e, s);
                  break;
                }
                n(e, s), s = s.sibling;
              }
              a.type === mo ? (a = lt(a.props.children, e.internalContextTag, u, a.key), a.return = e, e = a) : (u = ut(a, e.internalContextTag, u), u.ref = xt(t, a), u.return = e, e = u);
            }
            return l(e);
          case ho:
            e: {
              for (s = a.key; t !== null;) {
                if (t.key === s) {
                  if (t.tag === 7) {
                    o(e, t.sibling), a = i(t, a, u), a.return = e, e = a;
                    break e;
                  }
                  o(e, t);
                  break;
                }
                n(e, t), t = t.sibling;
              }
              a = ct(a, e.internalContextTag, u), a.return = e, e = a;
            }
            return l(e);
          case yo:
            e: {
              if (t !== null) {
                if (t.tag === 9) {
                  o(e, t.sibling), t = i(t, null, u), t.type = a.value, t.return = e, e = t;
                  break e;
                }
                o(e, t);
              }
              t = ft(a, e.internalContextTag, u), t.type = a.value, t.return = e, e = t;
            }
            return l(e);
          case wo:
            e: {
              for (s = a.key; t !== null;) {
                if (t.key === s) {
                  if (t.tag === 4 && t.stateNode.containerInfo === a.containerInfo && t.stateNode.implementation === a.implementation) {
                    o(e, t.sibling), a = i(t, a.children || [], u), a.return = e, e = a;
                    break e;
                  }
                  o(e, t);
                  break;
                }
                n(e, t), t = t.sibling;
              }
              a = pt(a, e.internalContextTag, u), a.return = e, e = a;
            }
            return l(e);
          }
        }
        if (typeof a === 'string' || typeof a === 'number') return a = `${a}`, t !== null && t.tag === 6 ? (o(e, t.sibling), a = i(t, a, u)) : (o(e, t), a = st(a, e.internalContextTag, u)), a.return = e, e = a, l(e);
        if (Eo(a)) return g(e, t, a, u);
        if (Ct(a)) return b(e, t, a, u);
        if (s && St(e, a), void 0 === a) {
          switch (e.tag) {
          case 2:
          case 1: a = e.type, r('152', a.displayName || a.name || 'Component');
          }
        }
        return o(e, t);
      };
    }
    function Pt(e, t, n, o, a) {
      function i(e, t, n) {
        u(e, t, n, t.expirationTime);
      }
      function u(e, t, n, r) {
        t.child = e === null ? So(t, t.child, n, r) : e.child === t.child ? Co(t, t.child, n, r) : xo(t, t.child, n, r);
      }
      function l(e, t) {
        const n = t.ref;
        n === null || e && e.ref === n || (t.effectTag |= 128);
      }
      function s(e, t, n, r) {
        if (l(e, t), !n) return r && ot(t, !1), f(e, t);
        n = t.stateNode, Fr.current = t;
        const o = n.render();
        return t.effectTag |= 1, i(e, t, o), t.memoizedState = n.state, t.memoizedProps = n.props, r && ot(t, !0), t.child;
      }
      function c(e) {
        const t = e.stateNode;
        t.pendingContext ? tt(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tt(e, t.context, !1), v(e, t.containerInfo);
      }
      function f(e, t) {
        if (e !== null && t.child !== e.child && r('153'), t.child !== null) {
          e = t.child;
          let n = it(e, e.pendingProps, e.expirationTime);
          for (t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = it(e, e.pendingProps, e.expirationTime), n.return = t;
          n.sibling = null;
        }
        return t.child;
      }
      function p(e, t) {
        switch (t.tag) {
        case 3: c(t); break;
        case 2: rt(t); break;
        case 4: v(t, t.stateNode.containerInfo);
        }
        return null;
      }
      var d = e.shouldSetTextContent,
        h = e.useSyncScheduling,
        y = e.shouldDeprioritizeSubtree,
        m = t.pushHostContext,
        v = t.pushHostContainer,
        g = n.enterHydrationState,
        b = n.resetHydrationState,
        _ = n.tryToClaimNextHydratableInstance;
      e = Et(o, a, (e, t) => {
        e.memoizedProps = t;
      }, (e, t) => {
        e.memoizedState = t;
      });
      let O = e.adoptClassInstance,
        w = e.constructClassInstance,
        E = e.mountClassInstance,
        T = e.updateClassInstance;
      return {
        beginWork(e, t, n) {
          if (t.expirationTime === 0 || t.expirationTime > n) return p(e, t);
          switch (t.tag) {
          case 0:
            e !== null && r('155');
            var o = t.type,
              a = t.pendingProps,
              u = Xe(t);
            return u = Je(t, u), o = o(a, u), t.effectTag |= 1, typeof o === 'object' && o !== null && typeof o.render === 'function' ? (t.tag = 2, a = rt(t), O(t, o), E(t, n), t = s(e, t, !0, a)) : (t.tag = 1, i(e, t, o), t.memoizedProps = a, t = t.child), t;
          case 1:
            e: {
              if (a = t.type, n = t.pendingProps, o = t.memoizedProps, go.current)n === null && (n = o); else if (n === null || o === n) {
                t = f(e, t);
                break e;
              }
              o = Xe(t), o = Je(t, o), a = a(n, o), t.effectTag |= 1, i(e, t, a), t.memoizedProps = n, t = t.child;
            }
            return t;
          case 2: return a = rt(t), o = void 0, e === null ? t.stateNode ? r('153') : (w(t, t.pendingProps), E(t, n), o = !0) : o = T(e, t, n), s(e, t, o, a);
          case 3: return c(t), a = t.updateQueue, a !== null ? (o = t.memoizedState, a = Ot(e, t, a, null, null, n), o === a ? (b(), t = f(e, t)) : (o = a.element, u = t.stateNode, (e === null || e.child === null) && u.hydrate && g(t) ? (t.effectTag |= 2, t.child = So(t, t.child, o, n)) : (b(), i(e, t, o)), t.memoizedState = a, t = t.child)) : (b(), t = f(e, t)), t;
          case 5:
            m(t), e === null && _(t), a = t.type;
            var C = t.memoizedProps;
            return o = t.pendingProps, o === null && (o = C) === null && r('154'), u = e !== null ? e.memoizedProps : null, go.current || o !== null && C !== o ? (C = o.children, d(a, o) ? C = null : u && d(a, u) && (t.effectTag |= 16), l(e, t), n !== 2147483647 && !h && y(a, o) ? (t.expirationTime = 2147483647, t = null) : (i(e, t, C), t.memoizedProps = o, t = t.child)) : t = f(e, t), t;
          case 6: return e === null && _(t), e = t.pendingProps, e === null && (e = t.memoizedProps), t.memoizedProps = e, null;
          case 8: t.tag = 7;
          case 7: return a = t.pendingProps, go.current ? a === null && (a = e && e.memoizedProps) === null && r('154') : a !== null && t.memoizedProps !== a || (a = t.memoizedProps), o = a.children, t.stateNode = e === null ? So(t, t.stateNode, o, n) : e.child === t.child ? Co(t, t.stateNode, o, n) : xo(t, t.stateNode, o, n), t.memoizedProps = a, t.stateNode;
          case 9: return null;
          case 4:
            e: {
              if (v(t, t.stateNode.containerInfo), a = t.pendingProps, go.current)a === null && (a = e && e.memoizedProps) == null && r('154'); else if (a === null || t.memoizedProps === a) {
                t = f(e, t);
                break e;
              }
              e === null ? t.child = xo(t, t.child, a, n) : i(e, t, a), t.memoizedProps = a, t = t.child;
            }
            return t;
          case 10:
            e: {
              if (n = t.pendingProps, go.current)n === null && (n = t.memoizedProps); else if (n === null || t.memoizedProps === n) {
                t = f(e, t);
                break e;
              }
              i(e, t, n), t.memoizedProps = n, t = t.child;
            }
            return t;
          default: r('156');
          }
        },
        beginFailedWork(e, t, n) {
          switch (t.tag) {
          case 2: rt(t); break;
          case 3: c(t); break;
          default: r('157');
          }
          return t.effectTag |= 64, e === null ? t.child = null : t.child !== e.child && (t.child = e.child), t.expirationTime === 0 || t.expirationTime > n ? p(e, t) : (t.firstEffect = null, t.lastEffect = null, u(e, t, null, n), t.tag === 2 && (e = t.stateNode, t.memoizedProps = e.props, t.memoizedState = e.state), t.child);
        },
      };
    }
    function Rt(e, t, n) {
      function o(e) {
        e.effectTag |= 4;
      }
      let a = e.createInstance,
        i = e.createTextInstance,
        u = e.appendInitialChild,
        l = e.finalizeInitialChildren,
        s = e.prepareUpdate,
        c = e.persistence,
        f = t.getRootHostContainer,
        p = t.popHostContext,
        d = t.getHostContext,
        h = t.popHostContainer,
        y = n.prepareToHydrateHostInstance,
        m = n.prepareToHydrateHostTextInstance,
        v = n.popHydrationState,
        g = void 0,
        b = void 0,
        _ = void 0;
      return e.mutation ? (g = function () {}, b = function (e, t, n) {
        (t.updateQueue = n) && o(t);
      }, _ = function (e, t, n, r) {
          n !== r && o(t);
        }) : r(c ? '235' : '236'), {

        completeWork(e, t, n) {
          let c = t.pendingProps;
          switch (c === null ? c = t.memoizedProps : t.expirationTime === 2147483647 && n !== 2147483647 || (t.pendingProps = null), t.tag) {
          case 1: return null;
          case 2: return et(t), null;
          case 3: return h(t), Ye(go, t), Ye(vo, t), c = t.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e !== null && e.child !== null || (v(t), t.effectTag &= -3), g(t), null;
          case 5:
            p(t), n = f();
            var O = t.type;
            if (e !== null && t.stateNode != null) {
              var w = e.memoizedProps,
                E = t.stateNode,
                T = d();
              E = s(E, O, w, c, n, T), b(e, t, E, O, w, c, n), e.ref !== t.ref && (t.effectTag |= 128);
            } else {
              if (!c) return t.stateNode === null && r('166'), null;
              if (e = d(), v(t))y(t, n, e) && o(t); else {
                e = a(O, c, n, e, t);
                e:for (w = t.child; w !== null;) {
                  if (w.tag === 5 || w.tag === 6)u(e, w.stateNode); else if (w.tag !== 4 && w.child !== null) {
                    w.child.return = w, w = w.child;
                    continue;
                  }
                  if (w === t) break;
                  for (;w.sibling === null;) {
                    if (w.return === null || w.return === t) break e;
                    w = w.return;
                  }
                  w.sibling.return = w.return, w = w.sibling;
                }
                l(e, O, c, n) && o(t), t.stateNode = e;
              }
              t.ref !== null && (t.effectTag |= 128);
            }
            return null;
          case 6:
            if (e && t.stateNode != null)_(e, t, e.memoizedProps, c); else {
              if (typeof c !== 'string') return t.stateNode === null && r('166'), null;
              e = f(), n = d(), v(t) ? m(t) && o(t) : t.stateNode = i(c, e, n, t);
            }
            return null;
          case 7:
            (c = t.memoizedProps) || r('165'), t.tag = 8, O = [];
            e:for ((w = t.stateNode) && (w.return = t); w !== null;) {
              if (w.tag === 5 || w.tag === 6 || w.tag === 4)r('247'); else if (w.tag === 9)O.push(w.type); else if (w.child !== null) {
                w.child.return = w, w = w.child;
                continue;
              }
              for (;w.sibling === null;) {
                if (w.return === null || w.return === t) break e;
                w = w.return;
              }
              w.sibling.return = w.return, w = w.sibling;
            }
            return w = c.handler, c = w(c.props, O), t.child = Co(t, e !== null ? e.child : null, c, n), t.child;
          case 8: return t.tag = 7, null;
          case 9:
          case 10: return null;
          case 4: return h(t), g(t), null;
          case 0: r('167');
          default: r('156');
          }
        },
      };
    }
    function jt(e, t) {
      function n(e) {
        const n = e.ref;
        if (n !== null) {
          try {
            n(null);
          } catch (n) {
            t(e, n);
          }
        }
      }
      function o(e) {
        switch (typeof mt === 'function' && mt(e), e.tag) {
        case 2:
          n(e);
          var r = e.stateNode;
          if (typeof r.componentWillUnmount === 'function') {
            try {
              r.props = e.memoizedProps, r.state = e.memoizedState, r.componentWillUnmount();
            } catch (n) {
              t(e, n);
            }
          }
          break;
        case 5: n(e); break;
        case 7: a(e.stateNode); break;
        case 4: s && u(e);
        }
      }
      function a(e) {
        for (let t = e; ;) {
          if (o(t), t.child === null || s && t.tag === 4) {
            if (t === e) break;
            for (;t.sibling === null;) {
              if (t.return === null || t.return === e) return;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          } else t.child.return = t, t = t.child;
        }
      }
      function i(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function u(e) {
        for (let t = e, n = !1, i = void 0, u = void 0; ;) {
          if (!n) {
            n = t.return;
            e:for (;;) {
              switch (n === null && r('160'), n.tag) {
              case 5: i = n.stateNode, u = !1; break e;
              case 3:
              case 4: i = n.stateNode.containerInfo, u = !0; break e;
              }
              n = n.return;
            }
            n = !0;
          }
          if (t.tag === 5 || t.tag === 6)a(t), u ? b(i, t.stateNode) : g(i, t.stateNode); else if (t.tag === 4 ? i = t.stateNode.containerInfo : o(t), t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break;
          for (;t.sibling === null;) {
            if (t.return === null || t.return === e) return;
            t = t.return, t.tag === 4 && (n = !1);
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      var l = e.getPublicInstance,
        s = e.mutation;
      e = e.persistence, s || r(e ? '235' : '236');
      var c = s.commitMount,
        f = s.commitUpdate,
        p = s.resetTextContent,
        d = s.commitTextUpdate,
        h = s.appendChild,
        y = s.appendChildToContainer,
        m = s.insertBefore,
        v = s.insertInContainerBefore,
        g = s.removeChild,
        b = s.removeChildFromContainer;
      return {

        commitResetTextContent(e) {
          p(e.stateNode);
        },
        commitPlacement(e) {
          e: {
            for (var t = e.return; t !== null;) {
              if (i(t)) {
                var n = t;
                break e;
              }
              t = t.return;
            }
            r('160'), n = void 0;
          }
          let o = t = void 0;
          switch (n.tag) {
          case 5: t = n.stateNode, o = !1; break;
          case 3:
          case 4: t = n.stateNode.containerInfo, o = !0; break;
          default: r('161');
          }
          16 & n.effectTag && (p(t), n.effectTag &= -17);
          e:t:for (n = e; ;) {
            for (;n.sibling === null;) {
              if (n.return === null || i(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6;) {
              if (2 & n.effectTag) continue t;
              if (n.child === null || n.tag === 4) continue t;
              n.child.return = n, n = n.child;
            }
            if (!(2 & n.effectTag)) {
              n = n.stateNode;
              break e;
            }
          }
          for (let a = e; ;) {
            if (a.tag === 5 || a.tag === 6)n ? o ? v(t, a.stateNode, n) : m(t, a.stateNode, n) : o ? y(t, a.stateNode) : h(t, a.stateNode); else if (a.tag !== 4 && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === e) break;
            for (;a.sibling === null;) {
              if (a.return === null || a.return === e) return;
              a = a.return;
            }
            a.sibling.return = a.return, a = a.sibling;
          }
        },
        commitDeletion(e) {
          u(e), e.return = null, e.child = null, e.alternate && (e.alternate.child = null, e.alternate.return = null);
        },
        commitWork(e, t) {
          switch (t.tag) {
          case 2: break;
          case 5:
            var n = t.stateNode;
            if (n != null) {
              const o = t.memoizedProps;
              e = e !== null ? e.memoizedProps : o;
              let a = t.type,
                i = t.updateQueue;
              t.updateQueue = null, i !== null && f(n, i, a, e, o, t);
            }
            break;
          case 6: t.stateNode === null && r('162'), n = t.memoizedProps, d(t.stateNode, e !== null ? e.memoizedProps : n, n); break;
          case 3: break;
          default: r('163');
          }
        },
        commitLifeCycles(e, t) {
          switch (t.tag) {
          case 2:
            var n = t.stateNode;
            if (4 & t.effectTag) {
              if (e === null)n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidMount(); else {
                const o = e.memoizedProps;
                e = e.memoizedState, n.props = t.memoizedProps, n.state = t.memoizedState, n.componentDidUpdate(o, e);
              }
            }
            t = t.updateQueue, t !== null && wt(t, n);
            break;
          case 3: n = t.updateQueue, n !== null && wt(n, t.child !== null ? t.child.stateNode : null); break;
          case 5: n = t.stateNode, e === null && 4 & t.effectTag && c(n, t.type, t.memoizedProps, t); break;
          case 6:
          case 4: break;
          default: r('163');
          }
        },
        commitAttachRef(e) {
          const t = e.ref;
          if (t !== null) {
            const n = e.stateNode;
            switch (e.tag) {
            case 5: t(l(n)); break;
            default: t(n);
            }
          }
        },
        commitDetachRef(e) {
          (e = e.ref) !== null && e(null);
        },
      };
    }
    function At(e) {
      function t(e) {
        return e === ko && r('174'), e;
      }
      let n = e.getChildHostContext,
        o = e.getRootHostContext,
        a = { current: ko },
        i = { current: ko },
        u = { current: ko };
      return {
        getHostContext() {
          return t(a.current);
        },
        getRootHostContainer() {
          return t(u.current);
        },
        popHostContainer(e) {
          Ye(a, e), Ye(i, e), Ye(u, e);
        },
        popHostContext(e) {
          i.current === e && (Ye(a, e), Ye(i, e));
        },
        pushHostContainer(e, t) {
          Qe(u, t, e), t = o(t), Qe(i, e, e), Qe(a, t, e);
        },
        pushHostContext(e) {
          let r = t(u.current),
            o = t(a.current);
          r = n(o, e.type, r), o !== r && (Qe(i, e, e), Qe(a, r, e));
        },
        resetHostContainer() {
          a.current = ko, u.current = ko;
        },
      };
    }
    function Dt(e) {
      function t(e, t) {
        const n = new at(5, null, 0);
        n.type = 'DELETED', n.stateNode = t, n.return = e, n.effectTag = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
      }
      function n(e, t) {
        switch (e.tag) {
        case 5: return (t = i(t, e.type, e.pendingProps)) !== null && (e.stateNode = t, !0);
        case 6: return (t = u(t, e.pendingProps)) !== null && (e.stateNode = t, !0);
        default: return !1;
        }
      }
      function o(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3;)e = e.return;
        p = e;
      }
      const a = e.shouldSetTextContent;
      if (!(e = e.hydration)) {
        return {
          enterHydrationState() {
            return !1;
          },
          resetHydrationState() {},
          tryToClaimNextHydratableInstance() {},
          prepareToHydrateHostInstance() {
            r('175');
          },
          prepareToHydrateHostTextInstance() {
            r('176');
          },
          popHydrationState() {
            return !1;
          },
        };
      }
      var i = e.canHydrateInstance,
        u = e.canHydrateTextInstance,
        l = e.getNextHydratableSibling,
        s = e.getFirstHydratableChild,
        c = e.hydrateInstance,
        f = e.hydrateTextInstance,
        p = null,
        d = null,
        h = !1;
      return {
        enterHydrationState(e) {
          return d = s(e.stateNode.containerInfo), p = e, h = !0;
        },
        resetHydrationState() {
          d = p = null, h = !1;
        },
        tryToClaimNextHydratableInstance(e) {
          if (h) {
            let r = d;
            if (r) {
              if (!n(e, r)) {
                if (!(r = l(r)) || !n(e, r)) return e.effectTag |= 2, h = !1, void (p = e);
                t(p, d);
              }
              p = e, d = s(r);
            } else e.effectTag |= 2, h = !1, p = e;
          }
        },
        prepareToHydrateHostInstance(e, t, n) {
          return t = c(e.stateNode, e.type, e.memoizedProps, t, n, e), e.updateQueue = t, t !== null;
        },
        prepareToHydrateHostTextInstance(e) {
          return f(e.stateNode, e.memoizedProps, e);
        },
        popHydrationState(e) {
          if (e !== p) return !1;
          if (!h) return o(e), h = !0, !1;
          let n = e.type;
          if (e.tag !== 5 || n !== 'head' && n !== 'body' && !a(n, e.memoizedProps)) for (n = d; n;)t(e, n), n = l(n);
          return o(e), d = p ? l(e.stateNode) : null, !0;
        },
      };
    }
    function Lt(e) {
      function t(e) {
        re = G = !0;
        let t = e.stateNode;
        if (t.current === e && r('177'), t.isReadyForCommit = !1, Fr.current = null, e.effectTag > 1) {
          if (e.lastEffect !== null) {
            e.lastEffect.nextEffect = e;
            var n = e.firstEffect;
          } else n = e;
        } else n = e.firstEffect;
        for (B(), X = n; X !== null;) {
          var o = !1,
            a = void 0;
          try {
            for (;X !== null;) {
              var i = X.effectTag;
              if (16 & i && A(X), 128 & i) {
                const u = X.alternate;
                u !== null && U(u);
              }
              switch (-242 & i) {
              case 2: D(X), X.effectTag &= -3; break;
              case 6: D(X), X.effectTag &= -3, N(X.alternate, X); break;
              case 4: N(X.alternate, X); break;
              case 8: oe = !0, L(X), oe = !1;
              }
              X = X.nextEffect;
            }
          } catch (e) {
            o = !0, a = e;
          }
          o && (X === null && r('178'), l(X, a), X !== null && (X = X.nextEffect));
        }
        for (z(), t.current = e, X = n; X !== null;) {
          n = !1, o = void 0;
          try {
            for (;X !== null;) {
              const s = X.effectTag;
              if (36 & s && M(X.alternate, X), 128 & s && I(X), 64 & s) {
                switch (a = X, i = void 0, J !== null && (i = J.get(a), J.delete(a), i == null && a.alternate !== null && (a = a.alternate, i = J.get(a), J.delete(a))), i == null && r('184'), a.tag) {
                case 2:
                  a.stateNode.componentDidCatch(i.error, {
                    componentStack: i.componentStack,
                  });
                  break;
                case 3: te === null && (te = i.error); break;
                default: r('157');
                }
              }
              const c = X.nextEffect;
              X.nextEffect = null, X = c;
            }
          } catch (e) {
            n = !0, o = e;
          }
          n && (X === null && r('178'), l(X, o), X !== null && (X = X.nextEffect));
        }
        return G = re = !1, typeof yt === 'function' && yt(e.stateNode), ee && (ee.forEach(y), ee = null), te !== null && (e = te, te = null, w(e)), t = t.current.expirationTime, t === 0 && (Z = J = null), t;
      }
      function n(e) {
        for (;;) {
          let t = j(e.alternate, e, Q),
            n = e.return,
            r = e.sibling,
            o = e;
          if (Q === 2147483647 || o.expirationTime !== 2147483647) {
            if (o.tag !== 2 && o.tag !== 3) var a = 0; else a = o.updateQueue, a = a === null ? 0 : a.expirationTime;
            for (let i = o.child; i !== null;)i.expirationTime !== 0 && (a === 0 || a > i.expirationTime) && (a = i.expirationTime), i = i.sibling;
            o.expirationTime = a;
          }
          if (t !== null) return t;
          if (n !== null && (n.firstEffect === null && (n.firstEffect = e.firstEffect), e.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), e.effectTag > 1 && (n.lastEffect !== null ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e)), r !== null) return r;
          if (n === null) {
            e.stateNode.isReadyForCommit = !0;
            break;
          }
          e = n;
        }
        return null;
      }
      function o(e) {
        let t = P(e.alternate, e, Q);
        return t === null && (t = n(e)), Fr.current = null, t;
      }
      function a(e) {
        let t = R(e.alternate, e, Q);
        return t === null && (t = n(e)), Fr.current = null, t;
      }
      function i(e) {
        if (J !== null) {
          if (!(Q === 0 || Q > e)) if (Q <= q) for (;$ !== null;)$ = s($) ? a($) : o($); else for (;$ !== null && !O();)$ = s($) ? a($) : o($);
        } else if (!(Q === 0 || Q > e)) if (Q <= q) for (;$ !== null;)$ = o($); else for (;$ !== null && !O();)$ = o($);
      }
      function u(e, t) {
        if (G && r('243'), G = !0, e.isReadyForCommit = !1, e !== Y || t !== Q || $ === null) {
          for (;fo > -1;)co[fo] = null, fo--;
          bo = Sn, vo.current = Sn, go.current = !1, S(), Y = e, Q = t, $ = it(Y.current, null, t);
        }
        let n = !1,
          o = null;
        try {
          i(t);
        } catch (e) {
          n = !0, o = e;
        }
        for (;n;) {
          if (ne) {
            te = o;
            break;
          }
          let u = $;
          if (u === null)ne = !0; else {
            let s = l(u, o);
            if (s === null && r('183'), !ne) {
              try {
                for (n = s, o = t, s = n; u !== null;) {
                  switch (u.tag) {
                  case 2: et(u); break;
                  case 5: x(u); break;
                  case 3: C(u); break;
                  case 4: C(u);
                  }
                  if (u === s || u.alternate === s) break;
                  u = u.return;
                }
                $ = a(n), i(o);
              } catch (e) {
                n = !0, o = e;
                continue;
              }
              break;
            }
          }
        }
        return t = te, ne = G = !1, te = null, t !== null && w(t), e.isReadyForCommit ? e.current.alternate : null;
      }
      function l(e, t) {
        let n = Fr.current = null,
          r = !1,
          o = !1,
          a = null;
        if (e.tag === 3)n = e, c(e) && (ne = !0); else {
          for (var i = e.return; i !== null && n === null;) {
            if (i.tag === 2 ? typeof i.stateNode.componentDidCatch === 'function' && (r = !0, a = Oe(i), n = i, o = !0) : i.tag === 3 && (n = i), c(i)) {
              if (oe || ee !== null && (ee.has(i) || i.alternate !== null && ee.has(i.alternate))) return null;
              n = null, o = !1;
            }
            i = i.return;
          }
        }
        if (n !== null) {
          Z === null && (Z = new Set()), Z.add(n);
          let u = '';
          i = e;
          do {
            switch (i.tag) {
            case 0:
            case 1:
            case 2:
            case 5:
              var l = i._debugOwner,
                s = i._debugSource,
                f = Oe(i),
                p = null;
              l && (p = Oe(l)), l = s, f = `\n    in ${f || 'Unknown'}${l ? ` (at ${l.fileName.replace(/^.*[\\\/]/, '')}:${l.lineNumber})` : p ? ` (created by ${p})` : ''}`;
              break;
            default: f = '';
            }
            u += f, i = i.return;
          } while (i);
          i = u, e = Oe(e), J === null && (J = new Map()), t = {
            componentName: e,
            componentStack: i,
            error: t,
            errorBoundary: r ? n.stateNode : null,
            errorBoundaryFound: r,
            errorBoundaryName: a,
            willRetry: o,
          }, J.set(n, t);
          try {
            console.error(t.error);
          } catch (e) {
            console.error(e);
          }
          return re ? (ee === null && (ee = new Set()), ee.add(n)) : y(n), n;
        }
        return te === null && (te = t), null;
      }
      function s(e) {
        return J !== null && (J.has(e) || e.alternate !== null && J.has(e.alternate));
      }
      function c(e) {
        return Z !== null && (Z.has(e) || e.alternate !== null && Z.has(e.alternate));
      }
      function f() {
        return 20 * (1 + ((m() + 100) / 20 | 0));
      }
      function p(e) {
        return W !== 0 ? W : G ? re ? 1 : Q : !V || 1 & e.internalContextTag ? f() : 1;
      }
      function d(e, t) {
        return h(e, t, !1);
      }
      function h(e, t) {
        for (;e !== null;) {
          if ((e.expirationTime === 0 || e.expirationTime > t) && (e.expirationTime = t), e.alternate !== null && (e.alternate.expirationTime === 0 || e.alternate.expirationTime > t) && (e.alternate.expirationTime = t), e.return === null) {
            if (e.tag !== 3) break;
            const n = e.stateNode;
            !G && n === Y && t <= Q && ($ = Y = null, Q = 0);
            const o = t;
            if (ge > ve && r('185'), n.nextScheduledRoot === null)n.remainingExpirationTime = o, ie === null ? (ae = ie = n, n.nextScheduledRoot = n) : (ie = ie.nextScheduledRoot = n, ie.nextScheduledRoot = ae); else {
              const a = n.remainingExpirationTime;
              (a === 0 || o < a) && (n.remainingExpirationTime = o);
            }
            le || (ye ? me && _(n, 1) : o === 1 ? b(1, null) : ue || (ue = !0, F(g)));
          }
          e = e.return;
        }
      }
      function y(e) {
        h(e, 1, !0);
      }
      function m() {
        return q = 2 + ((H() - K) / 10 | 0);
      }
      function v() {
        let e = 0,
          t = null;
        if (ie !== null) {
          for (var n = ie, o = ae; o !== null;) {
            let a = o.remainingExpirationTime;
            if (a === 0) {
              if ((n === null || ie === null) && r('244'), o === o.nextScheduledRoot) {
                ae = ie = o.nextScheduledRoot = null;
                break;
              }
              if (o === ae)ae = a = o.nextScheduledRoot, ie.nextScheduledRoot = a, o.nextScheduledRoot = null; else {
                if (o === ie) {
                  ie = n, ie.nextScheduledRoot = ae, o.nextScheduledRoot = null;
                  break;
                }
                n.nextScheduledRoot = o.nextScheduledRoot, o.nextScheduledRoot = null;
              }
              o = n.nextScheduledRoot;
            } else {
              if ((e === 0 || a < e) && (e = a, t = o), o === ie) break;
              n = o, o = o.nextScheduledRoot;
            }
          }
        }
        n = se, n !== null && n === t ? ge++ : ge = 0, se = t, ce = e;
      }
      function g(e) {
        b(0, e);
      }
      function b(e, t) {
        for (he = t, v(); se !== null && ce !== 0 && (e === 0 || ce <= e) && !fe;)_(se, ce), v();
        if (he !== null && (ue = !1), se === null || ue || (ue = !0, F(g)), he = null, fe = !1, ge = 0, pe) throw e = de, de = null, pe = !1, e;
      }
      function _(e, n) {
        if (le && r('245'), le = !0, n <= m()) {
          var o = e.finishedWork;
          o !== null ? (e.finishedWork = null, e.remainingExpirationTime = t(o)) : (e.finishedWork = null, (o = u(e, n)) !== null && (e.remainingExpirationTime = t(o)));
        } else o = e.finishedWork, o !== null ? (e.finishedWork = null, e.remainingExpirationTime = t(o)) : (e.finishedWork = null, (o = u(e, n)) !== null && (O() ? e.finishedWork = o : e.remainingExpirationTime = t(o)));
        le = !1;
      }
      function O() {
        return !(he === null || he.timeRemaining() > be) && (fe = !0);
      }
      function w(e) {
        se === null && r('246'), se.remainingExpirationTime = 0, pe || (pe = !0, de = e);
      }
      var E = At(e),
        T = Dt(e),
        C = E.popHostContainer,
        x = E.popHostContext,
        S = E.resetHostContainer,
        k = Pt(e, E, T, d, p),
        P = k.beginWork,
        R = k.beginFailedWork,
        j = Rt(e, E, T).completeWork;
      E = jt(e, l);
      var A = E.commitResetTextContent,
        D = E.commitPlacement,
        L = E.commitDeletion,
        N = E.commitWork,
        M = E.commitLifeCycles,
        I = E.commitAttachRef,
        U = E.commitDetachRef,
        H = e.now,
        F = e.scheduleDeferredCallback,
        V = e.useSyncScheduling,
        B = e.prepareForCommit,
        z = e.resetAfterCommit,
        K = H(),
        q = 2,
        W = 0,
        G = !1,
        $ = null,
        Y = null,
        Q = 0,
        X = null,
        J = null,
        Z = null,
        ee = null,
        te = null,
        ne = !1,
        re = !1,
        oe = !1,
        ae = null,
        ie = null,
        ue = !1,
        le = !1,
        se = null,
        ce = 0,
        fe = !1,
        pe = !1,
        de = null,
        he = null,
        ye = !1,
        me = !1,
        ve = 1e3,
        ge = 0,
        be = 1;
      return {
        computeAsyncExpiration: f,
        computeExpirationForFiber: p,
        scheduleWork: d,
        batchedUpdates(e, t) {
          const n = ye;
          ye = !0;
          try {
            return e(t);
          } finally {
            (ye = n) || le || b(1, null);
          }
        },
        unbatchedUpdates(e) {
          if (ye && !me) {
            me = !0;
            try {
              return e();
            } finally {
              me = !1;
            }
          }
          return e();
        },
        flushSync(e) {
          const t = ye;
          ye = !0;
          try {
            e: {
              const n = W;
              W = 1;
              try {
                var o = e();
                break e;
              } finally {
                W = n;
              }
              o = void 0;
            }
            return o;
          } finally {
            ye = t, le && r('187'), b(1, null);
          }
        },
        deferredUpdates(e) {
          const t = W;
          W = f();
          try {
            return e();
          } finally {
            W = t;
          }
        },
      };
    }
    function Nt(e) {
      function t(e) {
        return e = xe(e), e === null ? null : e.stateNode;
      }
      const n = e.getPublicInstance;
      e = Lt(e);
      let o = e.computeAsyncExpiration,
        a = e.computeExpirationForFiber,
        i = e.scheduleWork;
      return {
        createContainer(e, t) {
          const n = new at(3, null, 0);
          return e = {
            current: n,
            containerInfo: e,
            pendingChildren: null,
            remainingExpirationTime: 0,
            isReadyForCommit: !1,
            finishedWork: null,
            context: null,
            pendingContext: null,
            hydrate: t,
            nextScheduledRoot: null,
          }, n.stateNode = e;
        },
        updateContainer(e, t, n, u) {
          const l = t.current;
          if (n) {
            n = n._reactInternalFiber;
            let s;
            e: {
              for (we(n) === 2 && n.tag === 2 || r('170'), s = n; s.tag !== 3;) {
                if (Ze(s)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
                (s = s.return) || r('171');
              }
              s = s.stateNode.context;
            }
            n = Ze(n) ? nt(n, s) : s;
          } else n = Sn;
          t.context === null ? t.context = n : t.pendingContext = n, t = u, t = void 0 === t ? null : t, u = e != null && e.type != null && e.type.prototype != null && !0 === e.type.prototype.unstable_isAsyncReactComponent ? o() : a(l), bt(l, {

            expirationTime: u,
            partialState: { element: e },
            callback: t,
            isReplace: !1,
            isForced: !1,
            nextCallback: null,
            next: null,
          }), i(l, u);
        },
        batchedUpdates: e.batchedUpdates,
        unbatchedUpdates: e.unbatchedUpdates,
        deferredUpdates: e.deferredUpdates,
        flushSync: e.flushSync,
        getPublicRootInstance(e) {
          if (e = e.current, !e.child) return null;
          switch (e.child.tag) {
          case 5: return n(e.child.stateNode);
          default: return e.child.stateNode;
          }
        },
        findHostInstance: t,
        findHostInstanceWithNoPortals(e) {
          return e = Se(e), e === null ? null : e.stateNode;
        },
        injectIntoDevTools(e) {
          const n = e.findFiberByHostInstance;
          return ht(_n({}, e, {

            findHostInstanceByFiber(e) {
              return t(e);
            },
            findFiberByHostInstance(e) {
              return n ? n(e) : null;
            },
          }));
        },
      };
    }
    function Mt(e) {
      return !!Wo.hasOwnProperty(e) || !qo.hasOwnProperty(e) && (Ko.test(e) ? Wo[e] = !0 : (qo[e] = !0, !1));
    }
    function It(e, t, n) {
      const r = i(t);
      if (r && a(t, n)) {
        let o = r.mutationMethod;
        o ? o(e, n) : n == null || r.hasBooleanValue && !n || r.hasNumericValue && isNaN(n) || r.hasPositiveNumericValue && n < 1 || r.hasOverloadedBooleanValue && !1 === n ? Ht(e, t) : r.mustUseProperty ? e[r.propertyName] = n : (t = r.attributeName, (o = r.attributeNamespace) ? e.setAttributeNS(o, t, `${n}`) : r.hasBooleanValue || r.hasOverloadedBooleanValue && !0 === n ? e.setAttribute(t, '') : e.setAttribute(t, `${n}`));
      } else Ut(e, t, a(t, n) ? n : null);
    }
    function Ut(e, t, n) {
      Mt(t) && (n == null ? e.removeAttribute(t) : e.setAttribute(t, `${n}`));
    }
    function Ht(e, t) {
      const n = i(t);
      n ? (t = n.mutationMethod) ? t(e, void 0) : n.mustUseProperty ? e[n.propertyName] = !n.hasBooleanValue && '' : e.removeAttribute(n.attributeName) : e.removeAttribute(t);
    }
    function Ft(e, t) {
      let n = t.value,
        r = t.checked;
      return _n({
        type: void 0,
        step: void 0,
        min: void 0,
        max: void 0,
      }, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: n != null ? n : e._wrapperState.initialValue,
        checked: r != null ? r : e._wrapperState.initialChecked,
      });
    }
    function Vt(e, t) {
      const n = t.defaultValue;
      e._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: t.value != null ? t.value : n,
        controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      };
    }
    function Bt(e, t) {
      let n = t.checked;
      n != null && It(e, 'checked', n || !1), n = t.value, n != null ? n === 0 && e.value === '' ? e.value = '0' : t.type === 'number' ? (t = parseFloat(e.value) || 0, (n != t || n == t && e.value != n) && (e.value = `${n}`)) : e.value !== `${n}` && (e.value = `${n}`) : (t.value == null && t.defaultValue != null && e.defaultValue !== `${t.defaultValue}` && (e.defaultValue = `${t.defaultValue}`), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
    }
    function zt(e, t) {
      switch (t.type) {
      case 'submit':
      case 'reset': break;
      case 'color':
      case 'date':
      case 'datetime':
      case 'datetime-local':
      case 'month':
      case 'time':
      case 'week': e.value = '', e.value = e.defaultValue; break;
      default: e.value = e.value;
      }
      t = e.name, t !== '' && (e.name = ''), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !e.defaultChecked, t !== '' && (e.name = t);
    }
    function Kt(e) {
      let t = '';
      return gn.Children.forEach(e, (e) => {
        e == null || typeof e !== 'string' && typeof e !== 'number' || (t += e);
      }), t;
    }
    function qt(e, t) {
      return e = _n({
        children: void 0,
      }, t), (t = Kt(t.children)) && (e.children = t), e;
    }
    function Wt(e, t, n, r) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++)t[`$${n[o]}`] = !0;
        for (n = 0; n < e.length; n++)o = t.hasOwnProperty(`$${e[n].value}`), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `${n}`, t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Gt(e, t) {
      const n = t.value;
      e._wrapperState = {
        initialValue: n != null ? n : t.defaultValue,
        wasMultiple: !!t.multiple,
      };
    }
    function $t(e, t) {
      return t.dangerouslySetInnerHTML != null && r('91'), _n({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `${e._wrapperState.initialValue}`,
      });
    }
    function Yt(e, t) {
      let n = t.value,
        o = n;
      n == null && (n = t.defaultValue, t = t.children, t != null && (n != null && r('92'), Array.isArray(t) && (t.length <= 1 || r('93'), t = t[0]), n = `${t}`), n == null && (n = ''), o = n), e._wrapperState = {
        initialValue: `${o}`,
      };
    }
    function Qt(e, t) {
      let n = t.value;
      n != null && (n = `${n}`, n !== e.value && (e.value = n), t.defaultValue == null && (e.defaultValue = n)), t.defaultValue != null && (e.defaultValue = t.defaultValue);
    }
    function Xt(e) {
      const t = e.textContent;
      t === e._wrapperState.initialValue && (e.value = t);
    }
    function Jt(e) {
      switch (e) {
      case 'svg': return 'http://www.w3.org/2000/svg';
      case 'math': return 'http://www.w3.org/1998/Math/MathML';
      default: return 'http://www.w3.org/1999/xhtml';
      }
    }
    function Zt(e, t) {
      return e == null || e === 'http://www.w3.org/1999/xhtml' ? Jt(t) : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : e;
    }
    function en(e, t) {
      if (t) {
        const n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function tn(e, t) {
      e = e.style;
      for (let n in t) {
        if (t.hasOwnProperty(n)) {
          let r = n.indexOf('--') === 0,
            o = n,
            a = t[n];
          o = a == null || typeof a === 'boolean' || a === '' ? '' : r || typeof a !== 'number' || a === 0 || Jo.hasOwnProperty(o) && Jo[o] ? (`${a}`).trim() : `${a}px`, n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : e[n] = o;
        }
      }
    }
    function nn(e, t, n) {
      t && (ea[e] && (t.children != null || t.dangerouslySetInnerHTML != null) && r('137', e, n()), t.dangerouslySetInnerHTML != null && (t.children != null && r('60'), typeof t.dangerouslySetInnerHTML === 'object' && '__html' in t.dangerouslySetInnerHTML || r('61')), t.style != null && typeof t.style !== 'object' && r('62', n()));
    }
    function rn(e, t) {
      if (e.indexOf('-') === -1) return typeof t.is === 'string';
      switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph': return !1;
      default: return !0;
      }
    }
    function on(e, t) {
      e = e.nodeType === 9 || e.nodeType === 11 ? e : e.ownerDocument;
      const n = Ne(e);
      t = Yn[t];
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        n.hasOwnProperty(o) && n[o] || (o === 'topWheel' ? ne('wheel') ? Re('topWheel', 'wheel', e) : ne('mousewheel') ? Re('topWheel', 'mousewheel', e) : Re('topWheel', 'DOMMouseScroll', e) : o === 'topScroll' ? je('topScroll', 'scroll', e) : o === 'topFocus' || o === 'topBlur' ? (je('topFocus', 'focus', e), je('topBlur', 'blur', e), n.topBlur = !0, n.topFocus = !0) : o === 'topCancel' ? (ne('cancel', !0) && je('topCancel', 'cancel', e), n.topCancel = !0) : o === 'topClose' ? (ne('close', !0) && je('topClose', 'close', e), n.topClose = !0) : $r.hasOwnProperty(o) && Re(o, $r[o], e), n[o] = !0);
      }
    }
    function an(e, t, n, r) {
      return n = n.nodeType === 9 ? n : n.ownerDocument, r === ta && (r = Jt(e)), r === ta ? e === 'script' ? (e = n.createElement('div'), e.innerHTML = '<script><\/script>', e = e.removeChild(e.firstChild)) : e = typeof t.is === 'string' ? n.createElement(e, {
        is: t.is,
      }) : n.createElement(e) : e = n.createElementNS(r, e), e;
    }
    function un(e, t) {
      return (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(e);
    }
    function ln(e, t, n, r) {
      const o = rn(t, n);
      switch (t) {
      case 'iframe':
      case 'object':
        Re('topLoad', 'load', e);
        var a = n;
        break;
      case 'video':
      case 'audio':
        for (a in ra)ra.hasOwnProperty(a) && Re(a, ra[a], e);
        a = n;
        break;
      case 'source': Re('topError', 'error', e), a = n; break;
      case 'img':
      case 'image': Re('topError', 'error', e), Re('topLoad', 'load', e), a = n; break;
      case 'form': Re('topReset', 'reset', e), Re('topSubmit', 'submit', e), a = n; break;
      case 'details': Re('topToggle', 'toggle', e), a = n; break;
      case 'input': Vt(e, n), a = Ft(e, n), Re('topInvalid', 'invalid', e), on(r, 'onChange'); break;
      case 'option': a = qt(e, n); break;
      case 'select':
        Gt(e, n), a = _n({}, n, {
          value: void 0,
        }), Re('topInvalid', 'invalid', e), on(r, 'onChange');
        break;
      case 'textarea': Yt(e, n), a = $t(e, n), Re('topInvalid', 'invalid', e), on(r, 'onChange'); break;
      default: a = n;
      }
      nn(t, a, na);
      let i,
        u = a;
      for (i in u) {
        if (u.hasOwnProperty(i)) {
          let l = u[i];
          i === 'style' ? tn(e, l, na) : i === 'dangerouslySetInnerHTML' ? (l = l ? l.__html : void 0) != null && Yo(e, l) : i === 'children' ? typeof l === 'string' ? (t !== 'textarea' || l !== '') && Xo(e, l) : typeof l === 'number' && Xo(e, `${l}`) : i !== 'suppressContentEditableWarning' && i !== 'suppressHydrationWarning' && i !== 'autoFocus' && ($n.hasOwnProperty(i) ? l != null && on(r, i) : o ? Ut(e, i, l) : l != null && It(e, i, l));
        }
      }
      switch (t) {
      case 'input': ae(e), zt(e, n); break;
      case 'textarea': ae(e), Xt(e, n); break;
      case 'option': n.value != null && e.setAttribute('value', n.value); break;
      case 'select': e.multiple = !!n.multiple, t = n.value, t != null ? Wt(e, !!n.multiple, t, !1) : n.defaultValue != null && Wt(e, !!n.multiple, n.defaultValue, !0); break;
      default: typeof a.onClick === 'function' && (e.onclick = On);
      }
    }
    function sn(e, t, n, r, o) {
      let a = null;
      switch (t) {
      case 'input': n = Ft(e, n), r = Ft(e, r), a = []; break;
      case 'option': n = qt(e, n), r = qt(e, r), a = []; break;
      case 'select':
        n = _n({}, n, {
          value: void 0,
        }), r = _n({}, r, {
          value: void 0,
        }), a = [];
        break;
      case 'textarea': n = $t(e, n), r = $t(e, r), a = []; break;
      default: typeof n.onClick !== 'function' && typeof r.onClick === 'function' && (e.onclick = On);
      }
      nn(t, r, na);
      let i,
        u;
      e = null;
      for (i in n) if (!r.hasOwnProperty(i) && n.hasOwnProperty(i) && n[i] != null) if (i === 'style') for (u in t = n[i])t.hasOwnProperty(u) && (e || (e = {}), e[u] = ''); else i !== 'dangerouslySetInnerHTML' && i !== 'children' && i !== 'suppressContentEditableWarning' && i !== 'suppressHydrationWarning' && i !== 'autoFocus' && ($n.hasOwnProperty(i) ? a || (a = []) : (a = a || []).push(i, null));
      for (i in r) {
        let l = r[i];
        if (t = n != null ? n[i] : void 0, r.hasOwnProperty(i) && l !== t && (l != null || t != null)) {
          if (i === 'style') {
            if (t) {
              for (u in t)!t.hasOwnProperty(u) || l && l.hasOwnProperty(u) || (e || (e = {}), e[u] = '');
              for (u in l)l.hasOwnProperty(u) && t[u] !== l[u] && (e || (e = {}), e[u] = l[u]);
            } else e || (a || (a = []), a.push(i, e)), e = l;
          } else i === 'dangerouslySetInnerHTML' ? (l = l ? l.__html : void 0, t = t ? t.__html : void 0, l != null && t !== l && (a = a || []).push(i, `${l}`)) : i === 'children' ? t === l || typeof l !== 'string' && typeof l !== 'number' || (a = a || []).push(i, `${l}`) : i !== 'suppressContentEditableWarning' && i !== 'suppressHydrationWarning' && ($n.hasOwnProperty(i) ? (l != null && on(o, i), a || t === l || (a = [])) : (a = a || []).push(i, l));
        }
      }
      return e && (a = a || []).push('style', e), a;
    }
    function cn(e, t, n, r, o) {
      rn(n, r), r = rn(n, o);
      for (let a = 0; a < t.length; a += 2) {
        let i = t[a],
          u = t[a + 1];
        i === 'style' ? tn(e, u, na) : i === 'dangerouslySetInnerHTML' ? Yo(e, u) : i === 'children' ? Xo(e, u) : r ? u != null ? Ut(e, i, u) : e.removeAttribute(i) : u != null ? It(e, i, u) : Ht(e, i);
      }
      switch (n) {
      case 'input': Bt(e, o), ie(e); break;
      case 'textarea': Qt(e, o); break;
      case 'select': e._wrapperState.initialValue = void 0, t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!o.multiple, n = o.value, n != null ? Wt(e, !!o.multiple, n, !1) : t !== !!o.multiple && (o.defaultValue != null ? Wt(e, !!o.multiple, o.defaultValue, !0) : Wt(e, !!o.multiple, o.multiple ? [] : '', !1));
      }
    }
    function fn(e, t, n, r, o) {
      switch (t) {
      case 'iframe':
      case 'object': Re('topLoad', 'load', e); break;
      case 'video':
      case 'audio': for (var a in ra)ra.hasOwnProperty(a) && Re(a, ra[a], e); break;
      case 'source': Re('topError', 'error', e); break;
      case 'img':
      case 'image': Re('topError', 'error', e), Re('topLoad', 'load', e); break;
      case 'form': Re('topReset', 'reset', e), Re('topSubmit', 'submit', e); break;
      case 'details': Re('topToggle', 'toggle', e); break;
      case 'input': Vt(e, n), Re('topInvalid', 'invalid', e), on(o, 'onChange'); break;
      case 'select': Gt(e, n), Re('topInvalid', 'invalid', e), on(o, 'onChange'); break;
      case 'textarea': Yt(e, n), Re('topInvalid', 'invalid', e), on(o, 'onChange');
      }
      nn(t, n, na), r = null;
      for (const i in n) {
        n.hasOwnProperty(i) && (a = n[i], i === 'children' ? typeof a === 'string' ? e.textContent !== a && (r = [
          'children',
          a,
        ]) : typeof a === 'number' && e.textContent !== `${a}` && (r = [
          'children',
          `${a}`,
        ]) : $n.hasOwnProperty(i) && a != null && on(o, i));
      }
      switch (t) {
      case 'input': ae(e), zt(e, n); break;
      case 'textarea': ae(e), Xt(e, n); break;
      case 'select':
      case 'option': break;
      default: typeof n.onClick === 'function' && (e.onclick = On);
      }
      return r;
    }
    function pn(e, t) {
      return e.nodeValue !== t;
    }
    function dn(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '));
    }
    function hn(e) {
      return !(!(e = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null) || e.nodeType !== 1 || !e.hasAttribute('data-reactroot'));
    }
    function yn(e, t, n, o, a) {
      dn(n) || r('200');
      let i = n._reactRootContainer;
      if (i)ua.updateContainer(t, i, e, a); else {
        if (!(o = o || hn(n))) for (i = void 0; i = n.lastChild;)n.removeChild(i);
        const u = ua.createContainer(n, o);
        i = n._reactRootContainer = u, ua.unbatchedUpdates(() => {
          ua.updateContainer(t, u, e, a);
        });
      }
      return ua.getPublicRootInstance(i);
    }
    function mn(e, t) {
      const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      return dn(t) || r('200'), Tt(e, t, null, n);
    }
    function vn(e, t) {
      this._reactRootContainer = ua.createContainer(e, t);
    }
    var gn = n(0),
      bn = n(27),
      _n = n(15),
      On = n(6),
      wn = n(28),
      En = n(29),
      Tn = n(30),
      Cn = n(31),
      xn = n(34),
      Sn = n(16);
    gn || r('227');
    var kn = {
        children: !0,
        dangerouslySetInnerHTML: !0,
        defaultValue: !0,
        defaultChecked: !0,
        innerHTML: !0,
        suppressContentEditableWarning: !0,
        suppressHydrationWarning: !0,
        style: !0,
      },
      Pn = {

        MUST_USE_PROPERTY: 1,
        HAS_BOOLEAN_VALUE: 4,
        HAS_NUMERIC_VALUE: 8,
        HAS_POSITIVE_NUMERIC_VALUE: 24,
        HAS_OVERLOADED_BOOLEAN_VALUE: 32,
        HAS_STRING_BOOLEAN_VALUE: 64,
        injectDOMPropertyConfig(e) {
          let t = Pn,
            n = e.Properties || {},
            a = e.DOMAttributeNamespaces || {},
            i = e.DOMAttributeNames || {};
          e = e.DOMMutationMethods || {};
          for (const u in n) {
            Rn.hasOwnProperty(u) && r('48', u);
            let l = u.toLowerCase(),
              s = n[u];
            l = {
              attributeName: l,
              attributeNamespace: null,
              propertyName: u,
              mutationMethod: null,
              mustUseProperty: o(s, t.MUST_USE_PROPERTY),
              hasBooleanValue: o(s, t.HAS_BOOLEAN_VALUE),
              hasNumericValue: o(s, t.HAS_NUMERIC_VALUE),
              hasPositiveNumericValue: o(s, t.HAS_POSITIVE_NUMERIC_VALUE),
              hasOverloadedBooleanValue: o(s, t.HAS_OVERLOADED_BOOLEAN_VALUE),
              hasStringBooleanValue: o(s, t.HAS_STRING_BOOLEAN_VALUE),
            }, l.hasBooleanValue + l.hasNumericValue + l.hasOverloadedBooleanValue <= 1 || r('50', u), i.hasOwnProperty(u) && (l.attributeName = i[u]), a.hasOwnProperty(u) && (l.attributeNamespace = a[u]), e.hasOwnProperty(u) && (l.mutationMethod = e[u]), Rn[u] = l;
          }
        },
      },
      Rn = {},
      jn = Pn,
      An = jn.MUST_USE_PROPERTY,
      Dn = jn.HAS_BOOLEAN_VALUE,
      Ln = jn.HAS_NUMERIC_VALUE,
      Nn = jn.HAS_POSITIVE_NUMERIC_VALUE,
      Mn = jn.HAS_OVERLOADED_BOOLEAN_VALUE,
      In = jn.HAS_STRING_BOOLEAN_VALUE,
      Un = {

        Properties: {
          allowFullScreen: Dn,
          async: Dn,
          autoFocus: Dn,
          autoPlay: Dn,
          capture: Mn,
          checked: An | Dn,
          cols: Nn,
          contentEditable: In,
          controls: Dn,
          default: Dn,
          defer: Dn,
          disabled: Dn,
          download: Mn,
          draggable: In,
          formNoValidate: Dn,
          hidden: Dn,
          loop: Dn,
          multiple: An | Dn,
          muted: An | Dn,
          noValidate: Dn,
          open: Dn,
          playsInline: Dn,
          readOnly: Dn,
          required: Dn,
          reversed: Dn,
          rows: Nn,
          rowSpan: Ln,
          scoped: Dn,
          seamless: Dn,
          selected: An | Dn,
          size: Nn,
          start: Ln,
          span: Nn,
          spellCheck: In,
          style: 0,
          tabIndex: 0,
          itemScope: Dn,
          acceptCharset: 0,
          className: 0,
          htmlFor: 0,
          httpEquiv: 0,
          value: In,
        },
        DOMAttributeNames: {
          acceptCharset: 'accept-charset',
          className: 'class',
          htmlFor: 'for',
          httpEquiv: 'http-equiv',
        },
        DOMMutationMethods: {
          value(e, t) {
            if (t == null) return e.removeAttribute('value');
            e.type !== 'number' || !1 === e.hasAttribute('value') ? e.setAttribute('value', `${t}`) : e.validity && !e.validity.badInput && e.ownerDocument.activeElement !== e && e.setAttribute('value', `${t}`);
          },
        },
      },
      Hn = jn.HAS_STRING_BOOLEAN_VALUE,
      Fn = {
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
      },
      Vn = {

        Properties: {
          autoReverse: Hn,
          externalResourcesRequired: Hn,
          preserveAlpha: Hn,
        },
        DOMAttributeNames: {
          autoReverse: 'autoReverse',
          externalResourcesRequired: 'externalResourcesRequired',
          preserveAlpha: 'preserveAlpha',
        },
        DOMAttributeNamespaces: {
          xlinkActuate: Fn.xlink,
          xlinkArcrole: Fn.xlink,
          xlinkHref: Fn.xlink,
          xlinkRole: Fn.xlink,
          xlinkShow: Fn.xlink,
          xlinkTitle: Fn.xlink,
          xlinkType: Fn.xlink,
          xmlBase: Fn.xml,
          xmlLang: Fn.xml,
          xmlSpace: Fn.xml,
        },
      },
      Bn = /[\-\:]([a-z])/g;
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space'.split(' ').forEach((e) => {
      const t = e.replace(Bn, u);
      Vn.Properties[t] = 0, Vn.DOMAttributeNames[t] = e;
    }), jn.injectDOMPropertyConfig(Un), jn.injectDOMPropertyConfig(Vn);
    var zn = {
        _caughtError: null,
        _hasCaughtError: !1,
        _rethrowError: null,
        _hasRethrowError: !1,
        injection: {
          injectErrorUtils(e) {
            typeof e.invokeGuardedCallback !== 'function' && r('197'), l = e.invokeGuardedCallback;
          },
        },
        invokeGuardedCallback(e, t, n, r, o, a, i, u, s) {
          l.apply(zn, arguments);
        },
        invokeGuardedCallbackAndCatchFirstError(e, t, n, r, o, a, i, u, l) {
          if (zn.invokeGuardedCallback.apply(this, arguments), zn.hasCaughtError()) {
            const s = zn.clearCaughtError();
            zn._hasRethrowError || (zn._hasRethrowError = !0, zn._rethrowError = s);
          }
        },
        rethrowCaughtError() {
          return s.apply(zn, arguments);
        },
        hasCaughtError() {
          return zn._hasCaughtError;
        },
        clearCaughtError() {
          if (zn._hasCaughtError) {
            const e = zn._caughtError;
            return zn._caughtError = null, zn._hasCaughtError = !1, e;
          }
          r('198');
        },
      },
      Kn = null,
      qn = {},
      Wn = [],
      Gn = {},
      $n = {},
      Yn = {},
      Qn = Object.freeze({
        plugins: Wn,
        eventNameDispatchConfigs: Gn,
        registrationNameModules: $n,
        registrationNameDependencies: Yn,
        possibleRegistrationNames: null,
        injectEventPluginOrder: p,
        injectEventPluginsByName: d,
      }),
      Xn = null,
      Jn = null,
      Zn = null,
      er = null,
      tr = {
        injectEventPluginOrder: p,
        injectEventPluginsByName: d,
      },
      nr = Object.freeze({

        injection: tr,
        getListener: _,
        extractEvents: O,
        enqueueEvents: w,
        processEventQueue: E,
      }),
      rr = Math.random().toString(36).slice(2),
      or = `__reactInternalInstance$${rr}`,
      ar = `__reactEventHandlers$${rr}`,
      ir = Object.freeze({
        precacheFiberNode(e, t) {
          t[or] = e;
        },
        getClosestInstanceFromNode: T,
        getInstanceFromNode(e) {
          return e = e[or], !e || e.tag !== 5 && e.tag !== 6 ? null : e;
        },
        getNodeFromInstance: C,
        getFiberCurrentPropsFromNode: x,
        updateFiberProps(e, t) {
          e[ar] = t;
        },
      }),
      ur = Object.freeze({
        accumulateTwoPhaseDispatches: L,
        accumulateTwoPhaseDispatchesSkipTarget(e) {
          m(e, j);
        },
        accumulateEnterLeaveDispatches: N,
        accumulateDirectDispatches(e) {
          m(e, D);
        },
      }),
      lr = null,
      sr = { _root: null, _startText: null, _fallbackText: null },
      cr = 'dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances'.split(' '),
      fr = {
        type: null,
        target: null,
        currentTarget: On.thatReturnsNull,
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null,
      };
    _n(H.prototype, {
      preventDefault() {
        this.defaultPrevented = !0;
        const e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue !== 'unknown' && (e.returnValue = !1), this.isDefaultPrevented = On.thatReturnsTrue);
      },
      stopPropagation() {
        const e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble !== 'unknown' && (e.cancelBubble = !0), this.isPropagationStopped = On.thatReturnsTrue);
      },
      persist() {
        this.isPersistent = On.thatReturnsTrue;
      },
      isPersistent: On.thatReturnsFalse,
      destructor() {
        let e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        for (t = 0; t < cr.length; t++) this[cr[t]] = null;
      },
    }), H.Interface = fr, H.augmentClass = function (e, t) {
      function n() {}
      n.prototype = this.prototype;
      const r = new n();
      _n(r, e.prototype), e.prototype = r, e.prototype.constructor = e, e.Interface = _n({}, this.Interface, t), e.augmentClass = this.augmentClass, B(e);
    }, B(H), H.augmentClass(z, {
      data: null,
    }), H.augmentClass(K, {
      data: null,
    });
    var pr = [9, 13, 27, 32],
      dr = bn.canUseDOM && 'CompositionEvent' in window,
      hr = null;
    bn.canUseDOM && 'documentMode' in document && (hr = document.documentMode);
    let yr;
    if (yr = bn.canUseDOM && 'TextEvent' in window && !hr) {
      const mr = window.opera;
      yr = !(typeof mr === 'object' && typeof mr.version === 'function' && parseInt(mr.version(), 10) <= 12);
    }
    var vr,
      gr = yr,
      br = bn.canUseDOM && (!dr || hr && hr > 8 && hr <= 11),
      _r = String.fromCharCode(32),
      Or = {

        beforeInput: {
          phasedRegistrationNames: {
            bubbled: 'onBeforeInput',
            captured: 'onBeforeInputCapture',
          },
          dependencies: [
            'topCompositionEnd',
            'topKeyPress',
            'topTextInput',
            'topPaste',
          ],
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionEnd',
            captured: 'onCompositionEndCapture',
          },
          dependencies: 'topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown'.split(' '),
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionStart',
            captured: 'onCompositionStartCapture',
          },
          dependencies: 'topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown'.split(' '),
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: 'onCompositionUpdate',
            captured: 'onCompositionUpdateCapture',
          },
          dependencies: 'topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown'.split(' '),
        },
      },
      wr = !1,
      Er = !1,
      Tr = {

        eventTypes: Or,
        extractEvents(e, t, n, r) {
          let o;
          if (dr) {
            e: {
              switch (e) {
              case 'topCompositionStart': var a = Or.compositionStart; break e;
              case 'topCompositionEnd': a = Or.compositionEnd; break e;
              case 'topCompositionUpdate': a = Or.compositionUpdate; break e;
              }
              a = void 0;
            }
          } else Er ? q(e, n) && (a = Or.compositionEnd) : e === 'topKeyDown' && n.keyCode === 229 && (a = Or.compositionStart);
          return a ? (br && (Er || a !== Or.compositionStart ? a === Or.compositionEnd && Er && (o = I()) : (sr._root = r, sr._startText = U(), Er = !0)), a = z.getPooled(a, t, n, r), o ? a.data = o : (o = W(n)) !== null && (a.data = o), L(a), o = a) : o = null, (e = gr ? G(e, n) : $(e, n)) ? (t = K.getPooled(Or.beforeInput, t, n, r), t.data = e, L(t)) : t = null, [
            o,
            t,
          ];
        },
      },
      Cr = null,
      xr = null,
      Sr = null,
      kr = {
        injectFiberControlledHostComponent(e) {
          Cr = e;
        },
      },
      Pr = Object.freeze({
        injection: kr,
        enqueueStateRestore: Q,
        restoreStateIfNeeded: X,
      }),
      Rr = !1,
      jr = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
    bn.canUseDOM && (vr = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature('', ''));
    var Ar = {
        change: {
          phasedRegistrationNames: {
            bubbled: 'onChange',
            captured: 'onChangeCapture',
          },
          dependencies: 'topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange'.split(' '),
        },
      },
      Dr = null,
      Lr = null,
      Nr = !1;
    bn.canUseDOM && (Nr = ne('input') && (!document.documentMode || document.documentMode > 9));
    const Mr = {
      eventTypes: Ar,
      _isInputEventSupported: Nr,
      extractEvents(e, t, n, r) {
        let o = t ? C(t) : window,
          a = o.nodeName && o.nodeName.toLowerCase();
        if (a === 'select' || a === 'input' && o.type === 'file') var i = ce; else if (ee(o)) {
          if (Nr)i = me; else {
            i = he;
            var u = de;
          }
        } else !(a = o.nodeName) || a.toLowerCase() !== 'input' || o.type !== 'checkbox' && o.type !== 'radio' || (i = ye);
        if (i && (i = i(e, t))) return ue(i, n, r);
        u && u(e, o, t), e === 'topBlur' && t != null && (e = t._wrapperState || o._wrapperState) && e.controlled && o.type === 'number' && (e = `${o.value}`, o.getAttribute('value') !== e && o.setAttribute('value', e));
      },
    };
    H.augmentClass(ve, { view: null, detail: null });
    var Ir = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
    ve.augmentClass(_e, {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      pageX: null,
      pageY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: be,
      button: null,
      buttons: null,
      relatedTarget(e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
    });
    var Ur = {
        mouseEnter: {
          registrationName: 'onMouseEnter',
          dependencies: ['topMouseOut', 'topMouseOver'],
        },
        mouseLeave: {
          registrationName: 'onMouseLeave',
          dependencies: ['topMouseOut', 'topMouseOver'],
        },
      },
      Hr = {

        eventTypes: Ur,
        extractEvents(e, t, n, r) {
          if (e === 'topMouseOver' && (n.relatedTarget || n.fromElement) || e !== 'topMouseOut' && e !== 'topMouseOver') return null;
          var o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window;
          if (e === 'topMouseOut' ? (e = t, t = (t = n.relatedTarget || n.toElement) ? T(t) : null) : e = null, e === t) return null;
          const a = e == null ? o : C(e);
          o = t == null ? o : C(t);
          const i = _e.getPooled(Ur.mouseLeave, e, n, r);
          return i.type = 'mouseleave', i.target = a, i.relatedTarget = o, n = _e.getPooled(Ur.mouseEnter, t, n, r), n.type = 'mouseenter', n.target = o, n.relatedTarget = a, N(i, n, e, t), [
            i,
            n,
          ];
        },
      },
      Fr = gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      Vr = [],
      Br = !0,
      zr = void 0,
      Kr = Object.freeze({
        get _enabled() {
          return Br;
        },
        get _handleTopLevel() {
          return zr;
        },
        setHandleTopLevel(e) {
          zr = e;
        },
        setEnabled: Pe,
        isEnabled() {
          return Br;
        },
        trapBubbledEvent: Re,
        trapCapturedEvent: je,
        dispatchEvent: Ae,
      }),
      qr = {
        animationend: De('Animation', 'AnimationEnd'),
        animationiteration: De('Animation', 'AnimationIteration'),
        animationstart: De('Animation', 'AnimationStart'),
        transitionend: De('Transition', 'TransitionEnd'),
      },
      Wr = {},
      Gr = {};
    bn.canUseDOM && (Gr = document.createElement('div').style, 'AnimationEvent' in window || (delete qr.animationend.animation, delete qr.animationiteration.animation, delete qr.animationstart.animation), 'TransitionEvent' in window || delete qr.transitionend.transition);
    var $r = {
        topAbort: 'abort',
        topAnimationEnd: Le('animationend') || 'animationend',
        topAnimationIteration: Le('animationiteration') || 'animationiteration',
        topAnimationStart: Le('animationstart') || 'animationstart',
        topBlur: 'blur',
        topCancel: 'cancel',
        topCanPlay: 'canplay',
        topCanPlayThrough: 'canplaythrough',
        topChange: 'change',
        topClick: 'click',
        topClose: 'close',
        topCompositionEnd: 'compositionend',
        topCompositionStart: 'compositionstart',
        topCompositionUpdate: 'compositionupdate',
        topContextMenu: 'contextmenu',
        topCopy: 'copy',
        topCut: 'cut',
        topDoubleClick: 'dblclick',
        topDrag: 'drag',
        topDragEnd: 'dragend',
        topDragEnter: 'dragenter',
        topDragExit: 'dragexit',
        topDragLeave: 'dragleave',
        topDragOver: 'dragover',
        topDragStart: 'dragstart',
        topDrop: 'drop',
        topDurationChange: 'durationchange',
        topEmptied: 'emptied',
        topEncrypted: 'encrypted',
        topEnded: 'ended',
        topError: 'error',
        topFocus: 'focus',
        topInput: 'input',
        topKeyDown: 'keydown',
        topKeyPress: 'keypress',
        topKeyUp: 'keyup',
        topLoadedData: 'loadeddata',
        topLoad: 'load',
        topLoadedMetadata: 'loadedmetadata',
        topLoadStart: 'loadstart',
        topMouseDown: 'mousedown',
        topMouseMove: 'mousemove',
        topMouseOut: 'mouseout',
        topMouseOver: 'mouseover',
        topMouseUp: 'mouseup',
        topPaste: 'paste',
        topPause: 'pause',
        topPlay: 'play',
        topPlaying: 'playing',
        topProgress: 'progress',
        topRateChange: 'ratechange',
        topScroll: 'scroll',
        topSeeked: 'seeked',
        topSeeking: 'seeking',
        topSelectionChange: 'selectionchange',
        topStalled: 'stalled',
        topSuspend: 'suspend',
        topTextInput: 'textInput',
        topTimeUpdate: 'timeupdate',
        topToggle: 'toggle',
        topTouchCancel: 'touchcancel',
        topTouchEnd: 'touchend',
        topTouchMove: 'touchmove',
        topTouchStart: 'touchstart',
        topTransitionEnd: Le('transitionend') || 'transitionend',
        topVolumeChange: 'volumechange',
        topWaiting: 'waiting',
        topWheel: 'wheel',
      },
      Yr = {},
      Qr = 0,
      Xr = `_reactListenersID${(`${Math.random()}`).slice(2)}`,
      Jr = bn.canUseDOM && 'documentMode' in document && document.documentMode <= 11,
      Zr = {
        select: {
          phasedRegistrationNames: {
            bubbled: 'onSelect',
            captured: 'onSelectCapture',
          },
          dependencies: 'topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange'.split(' '),
        },
      },
      eo = null,
      to = null,
      no = null,
      ro = !1,
      oo = {

        eventTypes: Zr,
        extractEvents(e, t, n, r) {
          let o,
            a = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
          if (!(o = !a)) {
            e: {
              a = Ne(a), o = Yn.onSelect;
              for (let i = 0; i < o.length; i++) {
                const u = o[i];
                if (!a.hasOwnProperty(u) || !a[u]) {
                  a = !1;
                  break e;
                }
              }
              a = !0;
            }
            o = !a;
          }
          if (o) return null;
          switch (a = t ? C(t) : window, e) {
          case 'topFocus': (ee(a) || a.contentEditable === 'true') && (eo = a, to = t, no = null); break;
          case 'topBlur': no = to = eo = null; break;
          case 'topMouseDown': ro = !0; break;
          case 'topContextMenu':
          case 'topMouseUp': return ro = !1, He(n, r);
          case 'topSelectionChange': if (Jr) break;
          case 'topKeyDown':
          case 'topKeyUp': return He(n, r);
          }
          return null;
        },
      };
    H.augmentClass(Fe, {
      animationName: null,
      elapsedTime: null,
      pseudoElement: null,
    }), H.augmentClass(Ve, {
      clipboardData(e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }), ve.augmentClass(Be, {
      relatedTarget: null,
    });
    let ao = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      io = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      };
    ve.augmentClass(Ke, {
      key(e) {
        if (e.key) {
          const t = ao[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress' ? (e = ze(e), e === 13 ? 'Enter' : String.fromCharCode(e)) : e.type === 'keydown' || e.type === 'keyup' ? io[e.keyCode] || 'Unidentified' : '';
      },
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: be,
      charCode(e) {
        return e.type === 'keypress' ? ze(e) : 0;
      },
      keyCode(e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which(e) {
        return e.type === 'keypress' ? ze(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
    }), _e.augmentClass(qe, { dataTransfer: null }), ve.augmentClass(We, {
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: be,
    }), H.augmentClass(Ge, {
      propertyName: null,
      elapsedTime: null,
      pseudoElement: null,
    }), _e.augmentClass($e, {
      deltaX(e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY(e) {
        return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
      },
      deltaZ: null,
      deltaMode: null,
    });
    let uo = {},
      lo = {};
    'abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel'.split(' ').forEach((e) => {
      let t = e[0].toUpperCase() + e.slice(1),
        n = `on${t}`;
      t = `top${t}`, n = {
        phasedRegistrationNames: { bubbled: n, captured: `${n}Capture` },
        dependencies: [t],
      }, uo[e] = n, lo[t] = n;
    });
    const so = {

      eventTypes: uo,
      extractEvents(e, t, n, r) {
        const o = lo[e];
        if (!o) return null;
        switch (e) {
        case 'topKeyPress': if (ze(n) === 0) return null;
        case 'topKeyDown':
        case 'topKeyUp': e = Ke; break;
        case 'topBlur':
        case 'topFocus': e = Be; break;
        case 'topClick': if (n.button === 2) return null;
        case 'topDoubleClick':
        case 'topMouseDown':
        case 'topMouseMove':
        case 'topMouseUp':
        case 'topMouseOut':
        case 'topMouseOver':
        case 'topContextMenu': e = _e; break;
        case 'topDrag':
        case 'topDragEnd':
        case 'topDragEnter':
        case 'topDragExit':
        case 'topDragLeave':
        case 'topDragOver':
        case 'topDragStart':
        case 'topDrop': e = qe; break;
        case 'topTouchCancel':
        case 'topTouchEnd':
        case 'topTouchMove':
        case 'topTouchStart': e = We; break;
        case 'topAnimationEnd':
        case 'topAnimationIteration':
        case 'topAnimationStart': e = Fe; break;
        case 'topTransitionEnd': e = Ge; break;
        case 'topScroll': e = ve; break;
        case 'topWheel': e = $e; break;
        case 'topCopy':
        case 'topCut':
        case 'topPaste': e = Ve; break;
        default: e = H;
        }
        return t = e.getPooled(o, t, n, r), L(t), t;
      },
    };
    zr = function (e, t, n, r) {
      e = O(e, t, n, r), w(e), E(!1);
    }, tr.injectEventPluginOrder('ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin'.split(' ')), Xn = ir.getFiberCurrentPropsFromNode, Jn = ir.getInstanceFromNode, Zn = ir.getNodeFromInstance, tr.injectEventPluginsByName({
      SimpleEventPlugin: so,
      EnterLeaveEventPlugin: Hr,
      ChangeEventPlugin: Mr,
      SelectEventPlugin: oo,
      BeforeInputEventPlugin: Tr,
    });
    var co = [],
      fo = -1;
    new Set();
    var po,
      ho,
      yo,
      mo,
      vo = { current: Sn },
      go = { current: !1 },
      bo = Sn,
      _o = null,
      Oo = null,
      wo = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.portal') || 60106,
      Eo = Array.isArray,
      To = typeof Symbol === 'function' && Symbol.iterator;
    typeof Symbol === 'function' && Symbol.for ? (po = Symbol.for('react.element'), ho = Symbol.for('react.call'), yo = Symbol.for('react.return'), mo = Symbol.for('react.fragment')) : (po = 60103, ho = 60104, yo = 60105, mo = 60107);
    var Co = kt(!0, !0),
      xo = kt(!1, !0),
      So = kt(!1, !1),
      ko = {},
      Po = Object.freeze({ default: Nt }),
      Ro = Po && Nt || Po,
      jo = Ro.default ? Ro.default : Ro,
      Ao = typeof performance === 'object' && typeof performance.now === 'function',
      Do = void 0;
    Do = Ao ? function () {
      return performance.now();
    } : function () {
      return Date.now();
    };
    let Lo = void 0;
    if (bn.canUseDOM) {
      if (typeof requestIdleCallback !== 'function') {
        let No,
          Mo = null,
          Io = !1,
          Uo = !1,
          Ho = 0,
          Fo = 33,
          Vo = 33;
        No = Ao ? {
          timeRemaining() {
            return Ho - performance.now();
          },
        } : {

          timeRemaining() {
            return Ho - Date.now();
          },
        };
        const Bo = `__reactIdleCallback$${Math.random().toString(36).slice(2)}`;
        window.addEventListener('message', (e) => {
          e.source === window && e.data === Bo && (Io = !1, e = Mo, Mo = null, e !== null && e(No));
        }, !1);
        const zo = function (e) {
          Uo = !1;
          let t = e - Ho + Vo;
          t < Vo && Fo < Vo ? (t < 8 && (t = 8), Vo = t < Fo ? Fo : t) : Fo = t, Ho = e + Vo, Io || (Io = !0, window.postMessage(Bo, '*'));
        };
        Lo = function (e) {
          return Mo = e, Uo || (Uo = !0, requestAnimationFrame(zo)), 0;
        };
      } else Lo = requestIdleCallback;
    } else {
      Lo = function (e) {
        return setTimeout(() => {
          e({

            timeRemaining() {
              return 1 / 0;
            },
          });
        }), 0;
      };
    }
    var Ko = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      qo = {},
      Wo = {},
      Go = {
        html: 'http://www.w3.org/1999/xhtml',
        mathml: 'http://www.w3.org/1998/Math/MathML',
        svg: 'http://www.w3.org/2000/svg',
      },
      $o = void 0,
      Yo = (function (e) {
        return typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(() => e(t, n));
        } : e;
      }((e, t) => {
        if (e.namespaceURI !== Go.svg || 'innerHTML' in e)e.innerHTML = t; else {
          for ($o = $o || document.createElement('div'), $o.innerHTML = `<svg>${t}</svg>`, t = $o.firstChild; e.firstChild;)e.removeChild(e.firstChild);
          for (;t.firstChild;)e.appendChild(t.firstChild);
        }
      })),
      Qo = /["'&<>]/;
    bn.canUseDOM && ('textContent' in document.documentElement || (en = function (e, t) {
      if (e.nodeType === 3)e.nodeValue = t; else {
        if (typeof t === 'boolean' || typeof t === 'number')t = `${t}`; else {
          t = `${t}`;
          let n = Qo.exec(t);
          if (n) {
            let r,
              o = '',
              a = 0;
            for (r = n.index; r < t.length; r++) {
              switch (t.charCodeAt(r)) {
              case 34: n = '&quot;'; break;
              case 38: n = '&amp;'; break;
              case 39: n = '&#x27;'; break;
              case 60: n = '&lt;'; break;
              case 62: n = '&gt;'; break;
              default: continue;
              }
              a !== r && (o += t.substring(a, r)), a = r + 1, o += n;
            }
            t = a !== r ? o + t.substring(a, r) : o;
          }
        }
        Yo(e, t);
      }
    }));
    var Xo = en,
      Jo = {

        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Zo = ['Webkit', 'ms', 'Moz', 'O'];
    Object.keys(Jo).forEach((e) => {
      Zo.forEach((t) => {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Jo[t] = Jo[e];
      });
    });
    var ea = _n({ menuitem: !0 }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }),
      ta = Go.html,
      na = On.thatReturns(''),
      ra = {

        topAbort: 'abort',
        topCanPlay: 'canplay',
        topCanPlayThrough: 'canplaythrough',
        topDurationChange: 'durationchange',
        topEmptied: 'emptied',
        topEncrypted: 'encrypted',
        topEnded: 'ended',
        topError: 'error',
        topLoadedData: 'loadeddata',
        topLoadedMetadata: 'loadedmetadata',
        topLoadStart: 'loadstart',
        topPause: 'pause',
        topPlay: 'play',
        topPlaying: 'playing',
        topProgress: 'progress',
        topRateChange: 'ratechange',
        topSeeked: 'seeked',
        topSeeking: 'seeking',
        topStalled: 'stalled',
        topSuspend: 'suspend',
        topTimeUpdate: 'timeupdate',
        topVolumeChange: 'volumechange',
        topWaiting: 'waiting',
      },
      oa = Object.freeze({
        createElement: an,
        createTextNode: un,
        setInitialProperties: ln,
        diffProperties: sn,
        updateProperties: cn,
        diffHydratedProperties: fn,
        diffHydratedText: pn,
        warnForUnmatchedText() {},
        warnForDeletedHydratableElement() {},
        warnForDeletedHydratableText() {},
        warnForInsertedHydratedElement() {},
        warnForInsertedHydratedText() {},
        restoreControlledState(e, t, n) {
          switch (t) {
          case 'input':
            if (Bt(e, n), t = n.name, n.type === 'radio' && t != null) {
              for (n = e; n.parentNode;)n = n.parentNode;
              for (n = n.querySelectorAll(`input[name=${JSON.stringify(`${t}`)}][type="radio"]`), t = 0; t < n.length; t++) {
                const o = n[t];
                if (o !== e && o.form === e.form) {
                  const a = x(o);
                  a || r('90'), Bt(o, a);
                }
              }
            }
            break;
          case 'textarea': Qt(e, n); break;
          case 'select': (t = n.value) != null && Wt(e, !!n.multiple, t, !1);
          }
        },
      });
    kr.injectFiberControlledHostComponent(oa);
    var aa = null,
      ia = null,
      ua = jo({
        getRootHostContext(e) {
          let t = e.nodeType;
          switch (t) {
          case 9:
          case 11: e = (e = e.documentElement) ? e.namespaceURI : Zt(null, ''); break;
          default: t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Zt(e, t);
          }
          return e;
        },
        getChildHostContext(e, t) {
          return Zt(e, t);
        },
        getPublicInstance(e) {
          return e;
        },
        prepareForCommit() {
          aa = Br;
          const e = En();
          if (Ue(e)) {
            if ('selectionStart' in e) {
              var t = {
                start: e.selectionStart,
                end: e.selectionEnd,
              };
            } else {
              e: {
                let n = window.getSelection && window.getSelection();
                if (n && n.rangeCount !== 0) {
                  t = n.anchorNode;
                  let r = n.anchorOffset,
                    o = n.focusNode;
                  n = n.focusOffset;
                  try {
                    t.nodeType, o.nodeType;
                  } catch (e) {
                    t = null;
                    break e;
                  }
                  let a = 0,
                    i = -1,
                    u = -1,
                    l = 0,
                    s = 0,
                    c = e,
                    f = null;
                  t:for (;;) {
                    for (var p; c !== t || r !== 0 && c.nodeType !== 3 || (i = a + r), c !== o || n !== 0 && c.nodeType !== 3 || (u = a + n), c.nodeType === 3 && (a += c.nodeValue.length), (p = c.firstChild) !== null;)f = c, c = p;
                    for (;;) {
                      if (c === e) break t;
                      if (f === t && ++l === r && (i = a), f === o && ++s === n && (u = a), (p = c.nextSibling) !== null) break;
                      c = f, f = c.parentNode;
                    }
                    c = p;
                  }
                  t = i === -1 || u === -1 ? null : { start: i, end: u };
                } else t = null;
              }
            }
            t = t || {
              start: 0,
              end: 0,
            };
          } else t = null;
          ia = { focusedElem: e, selectionRange: t }, Pe(!1);
        },
        resetAfterCommit() {
          let e = ia,
            t = En(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (t !== n && Cn(document.documentElement, n)) {
            if (Ue(n)) {
              if (t = r.start, e = r.end, void 0 === e && (e = t), 'selectionStart' in n)n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (window.getSelection) {
                t = window.getSelection();
                let o = n[M()].length;
                e = Math.min(r.start, o), r = void 0 === r.end ? e : Math.min(r.end, o), !t.extend && e > r && (o = r, r = e, e = o), o = Ie(n, e);
                const a = Ie(n, r);
                if (o && a && (t.rangeCount !== 1 || t.anchorNode !== o.node || t.anchorOffset !== o.offset || t.focusNode !== a.node || t.focusOffset !== a.offset)) {
                  const i = document.createRange();
                  i.setStart(o.node, o.offset), t.removeAllRanges(), e > r ? (t.addRange(i), t.extend(a.node, a.offset)) : (i.setEnd(a.node, a.offset), t.addRange(i));
                }
              }
            }
            for (t = [], e = n; e = e.parentNode;) {
              e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop,
              });
            }
            for (xn(n), n = 0; n < t.length; n++)e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
          }
          ia = null, Pe(aa), aa = null;
        },
        createInstance(e, t, n, r, o) {
          return e = an(e, t, n, r), e[or] = o, e[ar] = t, e;
        },
        appendInitialChild(e, t) {
          e.appendChild(t);
        },
        finalizeInitialChildren(e, t, n, r) {
          ln(e, t, n, r);
          e: {
            switch (t) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea': e = !!n.autoFocus; break e;
            }
            e = !1;
          }
          return e;
        },
        prepareUpdate(e, t, n, r, o) {
          return sn(e, t, n, r, o);
        },
        shouldSetTextContent(e, t) {
          return e === 'textarea' || typeof t.children === 'string' || typeof t.children === 'number' || typeof t.dangerouslySetInnerHTML === 'object' && t.dangerouslySetInnerHTML !== null && typeof t.dangerouslySetInnerHTML.__html === 'string';
        },
        shouldDeprioritizeSubtree(e, t) {
          return !!t.hidden;
        },
        createTextInstance(e, t, n, r) {
          return e = un(e, t), e[or] = r, e;
        },
        now: Do,
        mutation: {
          commitMount(e) {
            e.focus();
          },
          commitUpdate(e, t, n, r, o) {
            e[ar] = o, cn(e, t, n, r, o);
          },
          resetTextContent(e) {
            e.textContent = '';
          },
          commitTextUpdate(e, t, n) {
            e.nodeValue = n;
          },
          appendChild(e, t) {
            e.appendChild(t);
          },
          appendChildToContainer(e, t) {
            e.nodeType === 8 ? e.parentNode.insertBefore(t, e) : e.appendChild(t);
          },
          insertBefore(e, t, n) {
            e.insertBefore(t, n);
          },
          insertInContainerBefore(e, t, n) {
            e.nodeType === 8 ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
          },
          removeChild(e, t) {
            e.removeChild(t);
          },
          removeChildFromContainer(e, t) {
            e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t);
          },
        },
        hydration: {

          canHydrateInstance(e, t) {
            return e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
          },
          canHydrateTextInstance(e, t) {
            return t === '' || e.nodeType !== 3 ? null : e;
          },
          getNextHydratableSibling(e) {
            for (e = e.nextSibling; e && e.nodeType !== 1 && e.nodeType !== 3;)e = e.nextSibling;
            return e;
          },
          getFirstHydratableChild(e) {
            for (e = e.firstChild; e && e.nodeType !== 1 && e.nodeType !== 3;)e = e.nextSibling;
            return e;
          },
          hydrateInstance(e, t, n, r, o, a) {
            return e[or] = a, e[ar] = n, fn(e, t, n, o, r);
          },
          hydrateTextInstance(e, t, n) {
            return e[or] = n, pn(e, t);
          },
          didNotMatchHydratedContainerTextInstance() {},
          didNotMatchHydratedTextInstance() {},
          didNotHydrateContainerInstance() {},
          didNotHydrateInstance() {},
          didNotFindHydratableContainerInstance() {},
          didNotFindHydratableContainerTextInstance() {},
          didNotFindHydratableInstance() {},
          didNotFindHydratableTextInstance() {},
        },
        scheduleDeferredCallback: Lo,
        useSyncScheduling: !0,
      });
    J = ua.batchedUpdates, vn.prototype.render = function (e, t) {
      ua.updateContainer(e, this._reactRootContainer, null, t);
    }, vn.prototype.unmount = function (e) {
      ua.updateContainer(null, this._reactRootContainer, null, e);
    };
    const la = {
      createPortal: mn,
      findDOMNode(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        const t = e._reactInternalFiber;
        if (t) return ua.findHostInstance(t);
        typeof e.render === 'function' ? r('188') : r('213', Object.keys(e));
      },
      hydrate(e, t, n) {
        return yn(null, e, t, !0, n);
      },
      render(e, t, n) {
        return yn(null, e, t, !1, n);
      },
      unstable_renderSubtreeIntoContainer(e, t, n, o) {
        return (e == null || void 0 === e._reactInternalFiber) && r('38'), yn(e, t, n, !1, o);
      },
      unmountComponentAtNode(e) {
        return dn(e) || r('40'), !!e._reactRootContainer && (ua.unbatchedUpdates(() => {
          yn(null, null, e, !1, () => {
            e._reactRootContainer = null;
          });
        }), !0);
      },
      unstable_createPortal: mn,
      unstable_batchedUpdates: Z,
      unstable_deferredUpdates: ua.deferredUpdates,
      flushSync: ua.flushSync,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        EventPluginHub: nr,
        EventPluginRegistry: Qn,
        EventPropagators: ur,
        ReactControlledComponent: Pr,
        ReactDOMComponentTree: ir,
        ReactDOMEventListener: Kr,
      },
    };
    ua.injectIntoDevTools({
      findFiberByHostInstance: T,
      bundleType: 0,
      version: '16.1.1',
      rendererPackageName: 'react-dom',
    });
    let sa = Object.freeze({ default: la }),
      ca = sa && la || sa;
    e.exports = ca.default ? ca.default : ca;
  },
  function (e, t, n) {
    let r = !(typeof window === 'undefined' || !window.document || !window.document.createElement),
      o = {
        canUseDOM: r,
        canUseWorkers: typeof Worker !== 'undefined',
        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen,
        isInWorker: !r,
      };
    e.exports = o;
  },
  function (e, t, n) {
    let r = n(6),
      o = {

        listen(e, t, n) {
          return e.addEventListener ? (e.addEventListener(t, n, !1), {
            remove() {
              e.removeEventListener(t, n, !1);
            },
          }) : e.attachEvent ? (e.attachEvent(`on${t}`, n), {

            remove() {
              e.detachEvent(`on${t}`, n);
            },
          }) : void 0;
        },
        capture(e, t, n) {
          return e.addEventListener ? (e.addEventListener(t, n, !0), {
            remove() {
              e.removeEventListener(t, n, !0);
            },
          }) : {
            remove: r,
          };
        },
        registerDefault() {},
      };
    e.exports = o;
  },
  function (e, t, n) {
    function r(e) {
      if (void 0 === (e = e || (typeof document !== 'undefined' ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    e.exports = r;
  },
  function (e, t, n) {
    function r(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e == 1 / t : e !== e && t !== t;
    }
    function o(e, t) {
      if (r(e, t)) return !0;
      if (typeof e !== 'object' || e === null || typeof t !== 'object' || t === null) return !1;
      let n = Object.keys(e),
        o = Object.keys(t);
      if (n.length !== o.length) return !1;
      for (let i = 0; i < n.length; i++) if (!a.call(t, n[i]) || !r(e[n[i]], t[n[i]])) return !1;
      return !0;
    }
    var a = Object.prototype.hasOwnProperty;
    e.exports = o;
  },
  function (e, t, n) {
    function r(e, t) {
      return !(!e || !t) && (e === t || !o(e) && (o(t) ? r(e, t.parentNode) : 'contains' in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
    }
    var o = n(32);
    e.exports = r;
  },
  function (e, t, n) {
    function r(e) {
      return o(e) && e.nodeType == 3;
    }
    var o = n(33);
    e.exports = r;
  },
  function (e, t, n) {
    function r(e) {
      let t = e ? e.ownerDocument || e : document,
        n = t.defaultView || window;
      return !(!e || !(typeof n.Node === 'function' ? e instanceof n.Node : typeof e === 'object' && typeof e.nodeType === 'number' && typeof e.nodeName === 'string'));
    }
    e.exports = r;
  },
  function (e, t, n) {
    function r(e) {
      try {
        e.focus();
      } catch (e) {}
    }
    e.exports = r;
  },
  function (e, t, n) {
    e.exports = n(36);
  },
  function (e, t, n) {
    e.exports = n(37);
  },
  function (e, t, n) {
    e.exports.AppContainer = n(38);
  },
  function (e, t, n) {
    e.exports = n(39);
  },
  function (e, t, n) {
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function a(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    let i = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      u = n(0),
      l = u.Component,
      s = (function (e) {
        function t() {
          return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return a(t, e), i(t, [{

          key: 'render',
          value() {
            return this.props.component ? u.createElement(this.props.component, this.props.props) : u.Children.only(this.props.children);
          },
        }]), t;
      }(l));
    e.exports = s;
  },
  function (e, t, n) {
    let r = n(6),
      o = n(41),
      a = n(42);
    e.exports = function () {
      function e(e, t, n, r, i, u) {
        u !== a && o(!1, 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      const n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
      };
      return n.checkPropTypes = r, n.PropTypes = n, n;
    };
  },
  function (e, t, n) {
    function r(e, t, n, r, a, i, u, l) {
      if (o(t), !e) {
        let s;
        if (void 0 === t)s = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'); else {
          let c = [n, r, a, i, u, l],
            f = 0;
          s = new Error(t.replace(/%s/g, () => c[f++])), s.name = 'Invariant Violation';
        }
        throw s.framesToPop = 1, s;
      }
    }
    var o = function (e) {};
    e.exports = r;
  },
  function (e, t, n) {
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  },
  function (e, t, n) {
    (function (e) {
      const n = typeof e === 'object' && e && e.Object === Object && e;
      t.a = n;
    }).call(t, n(18));
  },
  function (e, t, n) {
    e.exports = n(45);
  },
  function (e, t, n) {
    (function (e, r) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let o,
        a = n(47),
        i = (function (e) {
          return e && e.__esModule ? e : { default: e };
        }(a));
      o = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : void 0 !== e ? e : r;
      const u = (0, i.default)(o);
      t.default = u;
    }).call(t, n(18), n(46)(e));
  },
  function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', {
        enumerable: !0,
        get() {
          return e.l;
        },
      }), Object.defineProperty(e, 'id', {

          enumerable: !0,
          get() {
            return e.i;
          },
        }), e.webpackPolyfill = 1), e;
    };
  },
  function (e, t, n) {
    function r(e) {
      let t,
        n = e.Symbol;
      return typeof n === 'function' ? n.observable ? t = n.observable : (t = n('observable'), n.observable = t) : t = '@@observable', t;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.default = r;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = n(4),
      a = n(49),
      i = n(50),
      u = r(i),
      l = n(51),
      s = r(l),
      c = (0, o.createStore)(s.default, (0, a.composeWithDevTools)((0, o.applyMiddleware)(u.default))),
      f = c;
    t.default = f;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(c, 'store', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/store/index.js'), __REACT_HOT_LOADER__.register(f, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/store/index.js'));
    }());
  },
  function (e, t, n) {
    const r = n(4).compose;
    t.__esModule = !0, t.composeWithDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
      if (arguments.length !== 0) return typeof arguments[0] === 'object' ? r : r(...arguments);
    }, t.devToolsEnhancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
      return function (e) {
        return e;
      };
    };
  },
  function (e, t, n) {
    function r(e) {
      return function (t) {
        let n = t.dispatch,
          r = t.getState;
        return function (t) {
          return function (o) {
            return typeof o === 'function' ? o(n, r, e) : t(o);
          };
        };
      };
    }
    t.__esModule = !0;
    const o = r();
    o.withExtraArgument = r, t.default = o;
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    let r = n(4),
      o = n(52),
      a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      }(o)),
      i = (0, r.combineReducers)({ todo: a.default });
    t.default = i;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && __REACT_HOT_LOADER__.register(i, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/reducers/index.js');
    }());
  },
  function (e, t, n) {
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function o() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
        t = arguments[1];
      switch (t.type) {
      case i.TEST: return e;
      case i.ADD_TASK:
        var n = { name: t.task, id: e.length + 1 },
          o = new u.createTask(n.name, n.id);
        return [].concat(r(e), [o.create]);
      case i.DELETE_TASK: var l = t.id; return e.filter(e => e.id != l);
      case i.EDIT_TASK:
        var c = t.id;
        return e.map(e => (e.id == c ? a({}, e, {
          editing: !0,
        }) : e));
      case i.SAVE_TASK:
        var f = t.payload,
          p = f.savingId,
          d = f.savingTask;
        return e.map(e => (e.id == p ? a({}, e, {
          editing: !1,
          task: d,
        }) : e));
      case i.TOGGLE_TASK:
        var h = t.id;
        return e.map(e => (e.id == h ? a({}, e, {
          done: !e.done,
        }) : e));
      }
      return e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var a = Object.assign || function (e) {
      for (let t = 1; t < arguments.length; t++) {
        const n = arguments[t];
        for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    };
    t.default = o;
    var i = n(19),
      u = n(53),
      l = n(54),
      s = ((function (e) {
        e && e.__esModule;
      }(l)), n(10), [{

          task: 'Learn React/Redux',
          id: 1,
          editing: !1,
          done: !0,
        }, {
          task: 'Make TODO App',
          id: 2,
          editing: !1,
          done: !1,
        }]);
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(s, 'initialState', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/reducers/todo.js'), __REACT_HOT_LOADER__.register(o, 'addItem', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/reducers/todo.js'));
    }());
  },
  function (e, t, n) {
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      a = t.createTask = (function () {
        function e(t, n) {
          r(this, e), this.task = t, this.id = n;
        }
        return o(e, [{

          key: 'create',
          get() {
            return {

              task: this.task,
              id: this.id,
              editing: !1,
              done: !1,
            };
          },
        }]), e;
      }());
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && __REACT_HOT_LOADER__.register(a, 'createTask', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/models/index.js');
    }());
  },
  function (e, t, n) {
    function r(e) {
      if (Array.isArray(e)) return g(e.constructor(e.length), e);
      if (v(e) === 'Map') return new Map(e);
      if (v(e) === 'Set') return new Set(e);
      if (e && typeof e === 'object') {
        const t = e.constructor && e.constructor.prototype;
        return g(Object.create(t || null), e);
      }
      return e;
    }
    function o() {
      function e(n, o) {
        Array.isArray(n) && Array.isArray(o) || d(!Array.isArray(o), 'update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.'), d(typeof o === 'object' && o !== null, 'update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.', Object.keys(t).join(', '));
        let a = n;
        return b(o).forEach((i) => {
          if (h.call(t, i)) {
            const u = n === a;
            a = t[i](o[i], a, o, n), u && e.isEquals(a, n) && (a = n);
          } else {
            const l = e(n[i], o[i]);
            e.isEquals(l, a[i]) && (void 0 !== l || h.call(n, i)) || (a === n && (a = r(n)), a[i] = l);
          }
        }), a;
      }
      var t = g({}, _);
      return e.extend = function (e, n) {
        t[e] = n;
      }, e.isEquals = function (e, t) {
        return e === t;
      }, e;
    }
    function a(e, t, n) {
      d(Array.isArray(e), 'update(): expected target of %s to be an array; got %s.', n, e), i(t[n], n);
    }
    function i(e, t) {
      d(Array.isArray(e), 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', t, e);
    }
    function u(e, t) {
      d(Array.isArray(e), 'Expected $splice target to be an array; got %s', e), l(t.$splice);
    }
    function l(e) {
      d(Array.isArray(e), 'update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', e);
    }
    function s(e) {
      d(typeof e === 'function', 'update(): expected spec of $apply to be a function; got %s.', e);
    }
    function c(e) {
      d(Object.keys(e).length === 1, 'Cannot have more than one key in an object with $set');
    }
    function f(e, t) {
      d(t && typeof t === 'object', "update(): $merge expects a spec of type 'object'; got %s", t), d(e && typeof e === 'object', "update(): $merge expects a target of type 'object'; got %s", e);
    }
    function p(e, t) {
      const n = v(e);
      d(n === 'Map' || n === 'Set', 'update(): %s expects a target of type Set or Map; got %s', t, n);
    }
    var d = n(3),
      h = Object.prototype.hasOwnProperty,
      y = Array.prototype.splice,
      m = Object.prototype.toString,
      v = function (e) {
        return m.call(e).slice(8, -1);
      },
      g = Object.assign || function (e, t) {
        return b(t).forEach((n) => {
          h.call(t, n) && (e[n] = t[n]);
        }), e;
      },
      b = typeof Object.getOwnPropertySymbols === 'function' ? function (e) {
        return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
      } : function (e) {
        return Object.keys(e);
      },
      _ = {
        $push(e, t, n) {
          return a(t, n, '$push'), e.length ? t.concat(e) : t;
        },
        $unshift(e, t, n) {
          return a(t, n, '$unshift'), e.length ? e.concat(t) : t;
        },
        $splice(e, t, n, o) {
          return u(t, n), e.forEach((e) => {
            l(e), t === o && e.length && (t = r(o)), y.apply(t, e);
          }), t;
        },
        $set(e, t, n) {
          return c(n), e;
        },
        $toggle(e, t) {
          i(e, '$toggle');
          const n = e.length ? r(t) : t;
          return e.forEach((e) => {
            n[e] = !t[e];
          }), n;
        },
        $unset(e, t, n, o) {
          return i(e, '$unset'), e.forEach((e) => {
            Object.hasOwnProperty.call(t, e) && (t === o && (t = r(o)), delete t[e]);
          }), t;
        },
        $add(e, t, n, o) {
          return p(t, '$add'), i(e, '$add'), v(t) === 'Map' ? e.forEach((e) => {
            let n = e[0],
              a = e[1];
            t === o && t.get(n) !== a && (t = r(o)), t.set(n, a);
          }) : e.forEach((e) => {
            t !== o || t.has(e) || (t = r(o)), t.add(e);
          }), t;
        },
        $remove(e, t, n, o) {
          return p(t, '$remove'), i(e, '$remove'), e.forEach((e) => {
            t === o && t.has(e) && (t = r(o)), t.delete(e);
          }), t;
        },
        $merge(e, t, n, o) {
          return f(t, e), b(e).forEach((n) => {
            e[n] !== t[n] && (t === o && (t = r(o)), t[n] = e[n]);
          }), t;
        },
        $apply(e, t) {
          return s(e), e(t);
        },
      };
    e.exports = o(), e.exports.newContext = o;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function i(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let u = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      l = n(0),
      s = r(l),
      c = n(11),
      f = n(61),
      p = r(f),
      d = n(14),
      h = r(d),
      y = n(71),
      m = r(y),
      v = n(72),
      g = r(v),
      b = (function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), u(t, [{
          key: 'render',
          value() {
            return s.default.createElement('div', {
              className: 'wrapper',
            }, s.default.createElement(p.default, null), console.log(window.location), s.default.createElement(c.Route, {
              exact: !0,
              path: '/',
              component: h.default,
            }), s.default.createElement(c.Route, {
              path: '/done',
              component: m.default,
            }), s.default.createElement(c.Route, {
              path: '/active',
              component: g.default,
            }));
          },
        }]), t;
      }(l.Component)),
      _ = b;
    t.default = _;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(b, 'App', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/App.jsx'), __REACT_HOT_LOADER__.register(_, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/App.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    let o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
        return typeof e;
      } : function (e) {
        return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      },
      a = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      u = r(i),
      l = n(3),
      s = r(l),
      c = n(12),
      f = n(5),
      p = n(13),
      d = r(p),
      h = n(22),
      y = function () {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      },
      m = function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, s.default)(h.canUseDOM, 'Browser history needs a DOM');
        var t = window.history,
          n = (0, h.supportsHistory)(),
          r = !(0, h.supportsPopStateOnHashChange)(),
          i = e.forceRefresh,
          l = void 0 !== i && i,
          p = e.getUserConfirmation,
          m = void 0 === p ? h.getConfirmation : p,
          v = e.keyLength,
          g = void 0 === v ? 6 : v,
          b = e.basename ? (0, f.stripTrailingSlash)((0, f.addLeadingSlash)(e.basename)) : '',
          _ = function (e) {
            let t = e || {},
              n = t.key,
              r = t.state,
              o = window.location,
              a = o.pathname,
              i = o.search,
              l = o.hash,
              s = a + i + l;
            return (0, u.default)(!b || (0, f.hasBasename)(s, b), `You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "${s}" to begin with "${b}".`), b && (s = (0, f.stripBasename)(s, b)), (0, c.createLocation)(s, r, n);
          },
          O = function () {
            return Math.random().toString(36).substr(2, g);
          },
          w = (0, d.default)(),
          E = function (e) {
            a(B, e), B.length = t.length, w.notifyListeners(B.location, B.action);
          },
          T = function (e) {
            (0, h.isExtraneousPopstateEvent)(e) || S(_(e.state));
          },
          C = function () {
            S(_(y()));
          },
          x = !1,
          S = function (e) {
            if (x)x = !1, E(); else {
              w.confirmTransitionTo(e, 'POP', m, (t) => {
                t ? E({ action: 'POP', location: e }) : k(e);
              });
            }
          },
          k = function (e) {
            let t = B.location,
              n = R.indexOf(t.key);
            n === -1 && (n = 0);
            let r = R.indexOf(e.key);
            r === -1 && (r = 0);
            const o = n - r;
            o && (x = !0, L(o));
          },
          P = _(y()),
          R = [P.key],
          j = function (e) {
            return b + (0, f.createPath)(e);
          },
          A = function (e, r) {
            (0, u.default)(!((void 0 === e ? 'undefined' : o(e)) === 'object' && void 0 !== e.state && void 0 !== r), 'You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored');
            const a = (0, c.createLocation)(e, r, O(), B.location);
            w.confirmTransitionTo(a, 'PUSH', m, (e) => {
              if (e) {
                let r = j(a),
                  o = a.key,
                  i = a.state;
                if (n) {
                  if (t.pushState({
                    key: o,
                    state: i,
                  }, null, r), l)window.location.href = r; else {
                    let s = R.indexOf(B.location.key),
                      c = R.slice(0, s === -1 ? 0 : s + 1);
                    c.push(a.key), R = c, E({ action: 'PUSH', location: a });
                  }
                } else (0, u.default)(void 0 === i, 'Browser history cannot push state in browsers that do not support HTML5 history'), window.location.href = r;
              }
            });
          },
          D = function (e, r) {
            (0, u.default)(!((void 0 === e ? 'undefined' : o(e)) === 'object' && void 0 !== e.state && void 0 !== r), 'You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored');
            const a = (0, c.createLocation)(e, r, O(), B.location);
            w.confirmTransitionTo(a, 'REPLACE', m, (e) => {
              if (e) {
                let r = j(a),
                  o = a.key,
                  i = a.state;
                if (n) {
                  if (t.replaceState({
                    key: o,
                    state: i,
                  }, null, r), l)window.location.replace(r); else {
                    const s = R.indexOf(B.location.key);
                    s !== -1 && (R[s] = a.key), E({
                      action: 'REPLACE',
                      location: a,
                    });
                  }
                } else (0, u.default)(void 0 === i, 'Browser history cannot replace state in browsers that do not support HTML5 history'), window.location.replace(r);
              }
            });
          },
          L = function (e) {
            t.go(e);
          },
          N = function () {
            return L(-1);
          },
          M = function () {
            return L(1);
          },
          I = 0,
          U = function (e) {
            I += e, I === 1 ? ((0, h.addEventListener)(window, 'popstate', T), r && (0, h.addEventListener)(window, 'hashchange', C)) : I === 0 && ((0, h.removeEventListener)(window, 'popstate', T), r && (0, h.removeEventListener)(window, 'hashchange', C));
          },
          H = !1,
          F = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = w.setPrompt(e);
            return H || (U(1), H = !0), function () {
              return H && (H = !1, U(-1)), t();
            };
          },
          V = function (e) {
            const t = w.appendListener(e);
            return U(1), function () {
              U(-1), t();
            };
          },
          B = {
            length: t.length,
            action: 'POP',
            location: P,
            createHref: j,
            push: A,
            replace: D,
            go: L,
            goBack: N,
            goForward: M,
            block: F,
            listen: V,
          };
        return B;
      };
    t.default = m;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(2),
      i = r(a),
      u = n(3),
      l = r(u),
      s = n(12),
      c = n(5),
      f = n(13),
      p = r(f),
      d = n(22),
      h = {

        hashbang: {
          encodePath(e) {
            return e.charAt(0) === '!' ? e : `!/${(0, c.stripLeadingSlash)(e)}`;
          },
          decodePath(e) {
            return e.charAt(0) === '!' ? e.substr(1) : e;
          },
        },
        noslash: {
          encodePath: c.stripLeadingSlash,
          decodePath: c.addLeadingSlash,
        },
        slash: {
          encodePath: c.addLeadingSlash,
          decodePath: c.addLeadingSlash,
        },
      },
      y = function () {
        let e = window.location.href,
          t = e.indexOf('#');
        return t === -1 ? '' : e.substring(t + 1);
      },
      m = function (e) {
        return window.location.hash = e;
      },
      v = function (e) {
        const t = window.location.href.indexOf('#');
        window.location.replace(`${window.location.href.slice(0, t >= 0 ? t : 0)}#${e}`);
      },
      g = function () {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, l.default)(d.canUseDOM, 'Hash history needs a DOM');
        var t = window.history,
          n = (0, d.supportsGoWithoutReloadUsingHash)(),
          r = e.getUserConfirmation,
          a = void 0 === r ? d.getConfirmation : r,
          u = e.hashType,
          f = void 0 === u ? 'slash' : u,
          g = e.basename ? (0, c.stripTrailingSlash)((0, c.addLeadingSlash)(e.basename)) : '',
          b = h[f],
          _ = b.encodePath,
          O = b.decodePath,
          w = function () {
            let e = O(y());
            return (0, i.default)(!g || (0, c.hasBasename)(e, g), `You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "${e}" to begin with "${g}".`), g && (e = (0, c.stripBasename)(e, g)), (0, s.createLocation)(e);
          },
          E = (0, p.default)(),
          T = function (e) {
            o(q, e), q.length = t.length, E.notifyListeners(q.location, q.action);
          },
          C = !1,
          x = null,
          S = function () {
            let e = y(),
              t = _(e);
            if (e !== t)v(t); else {
              let n = w(),
                r = q.location;
              if (!C && (0, s.locationsAreEqual)(r, n)) return;
              if (x === (0, c.createPath)(n)) return;
              x = null, k(n);
            }
          },
          k = function (e) {
            if (C)C = !1, T(); else {
              E.confirmTransitionTo(e, 'POP', a, (t) => {
                t ? T({ action: 'POP', location: e }) : P(e);
              });
            }
          },
          P = function (e) {
            let t = q.location,
              n = D.lastIndexOf((0, c.createPath)(t));
            n === -1 && (n = 0);
            let r = D.lastIndexOf((0, c.createPath)(e));
            r === -1 && (r = 0);
            const o = n - r;
            o && (C = !0, I(o));
          },
          R = y(),
          j = _(R);
        R !== j && v(j);
        var A = w(),
          D = [(0, c.createPath)(A)],
          L = function (e) {
            return `#${_(g + (0, c.createPath)(e))}`;
          },
          N = function (e, t) {
            (0, i.default)(void 0 === t, 'Hash history cannot push state; it is ignored');
            const n = (0, s.createLocation)(e, void 0, void 0, q.location);
            E.confirmTransitionTo(n, 'PUSH', a, (e) => {
              if (e) {
                let t = (0, c.createPath)(n),
                  r = _(g + t);
                if (y() !== r) {
                  x = t, m(r);
                  let o = D.lastIndexOf((0, c.createPath)(q.location)),
                    a = D.slice(0, o === -1 ? 0 : o + 1);
                  a.push(t), D = a, T({ action: 'PUSH', location: n });
                } else (0, i.default)(!1, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack'), T();
              }
            });
          },
          M = function (e, t) {
            (0, i.default)(void 0 === t, 'Hash history cannot replace state; it is ignored');
            const n = (0, s.createLocation)(e, void 0, void 0, q.location);
            E.confirmTransitionTo(n, 'REPLACE', a, (e) => {
              if (e) {
                let t = (0, c.createPath)(n),
                  r = _(g + t);
                y() !== r && (x = t, v(r));
                const o = D.indexOf((0, c.createPath)(q.location));
                o !== -1 && (D[o] = t), T({ action: 'REPLACE', location: n });
              }
            });
          },
          I = function (e) {
            (0, i.default)(n, 'Hash history go(n) causes a full page reload in this browser'), t.go(e);
          },
          U = function () {
            return I(-1);
          },
          H = function () {
            return I(1);
          },
          F = 0,
          V = function (e) {
            F += e, F === 1 ? (0, d.addEventListener)(window, 'hashchange', S) : F === 0 && (0, d.removeEventListener)(window, 'hashchange', S);
          },
          B = !1,
          z = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = E.setPrompt(e);
            return B || (V(1), B = !0), function () {
              return B && (B = !1, V(-1)), t();
            };
          },
          K = function (e) {
            const t = E.appendListener(e);
            return V(1), function () {
              V(-1), t();
            };
          },
          q = {

            length: t.length,
            action: 'POP',
            location: A,
            createHref: L,
            push: N,
            replace: M,
            go: I,
            goBack: U,
            goForward: H,
            block: z,
            listen: K,
          };
        return q;
      };
    t.default = g;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.__esModule = !0;
    let o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) {
        return typeof e;
      } : function (e) {
        return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      },
      a = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      i = n(2),
      u = r(i),
      l = n(5),
      s = n(12),
      c = n(13),
      f = r(c),
      p = function (e, t, n) {
        return Math.min(Math.max(e, t), n);
      },
      d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.getUserConfirmation,
          n = e.initialEntries,
          r = void 0 === n ? ['/'] : n,
          i = e.initialIndex,
          c = void 0 === i ? 0 : i,
          d = e.keyLength,
          h = void 0 === d ? 6 : d,
          y = (0, f.default)(),
          m = function (e) {
            a(P, e), P.length = P.entries.length, y.notifyListeners(P.location, P.action);
          },
          v = function () {
            return Math.random().toString(36).substr(2, h);
          },
          g = p(c, 0, r.length - 1),
          b = r.map(e => (typeof e === 'string' ? (0, s.createLocation)(e, void 0, v()) : (0, s.createLocation)(e, void 0, e.key || v()))),
          _ = l.createPath,
          O = function (e, n) {
            (0, u.default)(!((void 0 === e ? 'undefined' : o(e)) === 'object' && void 0 !== e.state && void 0 !== n), 'You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored');
            const r = (0, s.createLocation)(e, n, v(), P.location);
            y.confirmTransitionTo(r, 'PUSH', t, (e) => {
              if (e) {
                let t = P.index,
                  n = t + 1,
                  o = P.entries.slice(0);
                o.length > n ? o.splice(n, o.length - n, r) : o.push(r), m({
                  action: 'PUSH',
                  location: r,
                  index: n,
                  entries: o,
                });
              }
            });
          },
          w = function (e, n) {
            (0, u.default)(!((void 0 === e ? 'undefined' : o(e)) === 'object' && void 0 !== e.state && void 0 !== n), 'You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored');
            const r = (0, s.createLocation)(e, n, v(), P.location);
            y.confirmTransitionTo(r, 'REPLACE', t, (e) => {
              e && (P.entries[P.index] = r, m({
                action: 'REPLACE',
                location: r,
              }));
            });
          },
          E = function (e) {
            let n = p(P.index + e, 0, P.entries.length - 1),
              r = P.entries[n];
            y.confirmTransitionTo(r, 'POP', t, (e) => {
              e ? m({ action: 'POP', location: r, index: n }) : m();
            });
          },
          T = function () {
            return E(-1);
          },
          C = function () {
            return E(1);
          },
          x = function (e) {
            const t = P.index + e;
            return t >= 0 && t < P.entries.length;
          },
          S = function () {
            const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return y.setPrompt(e);
          },
          k = function (e) {
            return y.appendListener(e);
          },
          P = {
            length: b.length,
            action: 'POP',
            location: b[g],
            index: g,
            entries: b,
            createHref: _,
            push: O,
            replace: w,
            go: E,
            goBack: T,
            goForward: C,
            canGo: x,
            block: S,
            listen: k,
          };
        return P;
      };
    t.default = d;
  },
  function (e, t, n) {
    function r(e, t) {
      for (var n, r = [], o = 0, a = 0, i = '', u = t && t.delimiter || '/'; (n = g.exec(e)) != null;) {
        let c = n[0],
          f = n[1],
          p = n.index;
        if (i += e.slice(a, p), a = p + c.length, f)i += f[1]; else {
          let d = e[a],
            h = n[2],
            y = n[3],
            m = n[4],
            v = n[5],
            b = n[6],
            _ = n[7];
          i && (r.push(i), i = '');
          let O = h != null && d != null && d !== h,
            w = b === '+' || b === '*',
            E = b === '?' || b === '*',
            T = n[2] || u,
            C = m || v;
          r.push({
            name: y || o++,
            prefix: h || '',
            delimiter: T,
            optional: E,
            repeat: w,
            partial: O,
            asterisk: !!_,
            pattern: C ? s(C) : _ ? '.*' : `[^${l(T)}]+?`,
          });
        }
      }
      return a < e.length && (i += e.substr(a)), i && r.push(i), r;
    }
    function o(e, t) {
      return u(r(e, t));
    }
    function a(e) {
      return encodeURI(e).replace(/[\/?#]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    function i(e) {
      return encodeURI(e).replace(/[?#]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`);
    }
    function u(e) {
      for (var t = new Array(e.length), n = 0; n < e.length; n++) typeof e[n] === 'object' && (t[n] = new RegExp(`^(?:${e[n].pattern})$`));
      return function (n, r) {
        for (var o = '', u = n || {}, l = r || {}, s = l.pretty ? a : encodeURIComponent, c = 0; c < e.length; c++) {
          const f = e[c];
          if (typeof f !== 'string') {
            var p,
              d = u[f.name];
            if (d == null) {
              if (f.optional) {
                f.partial && (o += f.prefix);
                continue;
              }
              throw new TypeError(`Expected "${f.name}" to be defined`);
            }
            if (v(d)) {
              if (!f.repeat) throw new TypeError(`Expected "${f.name}" to not repeat, but received \`${JSON.stringify(d)}\``);
              if (d.length === 0) {
                if (f.optional) continue;
                throw new TypeError(`Expected "${f.name}" to not be empty`);
              }
              for (let h = 0; h < d.length; h++) {
                if (p = s(d[h]), !t[c].test(p)) throw new TypeError(`Expected all "${f.name}" to match "${f.pattern}", but received \`${JSON.stringify(p)}\``);
                o += (h === 0 ? f.prefix : f.delimiter) + p;
              }
            } else {
              if (p = f.asterisk ? i(d) : s(d), !t[c].test(p)) throw new TypeError(`Expected "${f.name}" to match "${f.pattern}", but received "${p}"`);
              o += f.prefix + p;
            }
          } else o += f;
        }
        return o;
      };
    }
    function l(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
    }
    function s(e) {
      return e.replace(/([=!:$\/()])/g, '\\$1');
    }
    function c(e, t) {
      return e.keys = t, e;
    }
    function f(e) {
      return e.sensitive ? '' : 'i';
    }
    function p(e, t) {
      const n = e.source.match(/\((?!\?)/g);
      if (n) {
        for (let r = 0; r < n.length; r++) {
          t.push({
            name: r,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
        }
      }
      return c(e, t);
    }
    function d(e, t, n) {
      for (var r = [], o = 0; o < e.length; o++)r.push(m(e[o], t, n).source);
      return c(new RegExp(`(?:${r.join('|')})`, f(n)), t);
    }
    function h(e, t, n) {
      return y(r(e, n), t, n);
    }
    function y(e, t, n) {
      v(t) || (n = t || n, t = []), n = n || {};
      for (var r = n.strict, o = !1 !== n.end, a = '', i = 0; i < e.length; i++) {
        const u = e[i];
        if (typeof u === 'string')a += l(u); else {
          let s = l(u.prefix),
            p = `(?:${u.pattern})`;
          t.push(u), u.repeat && (p += `(?:${s}${p})*`), p = u.optional ? u.partial ? `${s}(${p})?` : `(?:${s}(${p}))?` : `${s}(${p})`, a += p;
        }
      }
      let d = l(n.delimiter || '/'),
        h = a.slice(-d.length) === d;
      return r || (a = `${h ? a.slice(0, -d.length) : a}(?:${d}(?=$))?`), a += o ? '$' : r && h ? '' : `(?=${d}|$)`, c(new RegExp(`^${a}`, f(n)), t);
    }
    function m(e, t, n) {
      return v(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? p(e, t) : v(e) ? d(e, t, n) : h(e, t, n);
    }
    var v = n(60);
    e.exports = m, e.exports.parse = r, e.exports.compile = o, e.exports.tokensToFunction = u, e.exports.tokensToRegExp = y;
    var g = new RegExp([
      '(\\\\.)',
      '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
    ].join('|'), 'g');
  },
  function (e, t) {
    e.exports = Array.isArray || function (e) {
      return Object.prototype.toString.call(e) == '[object Array]';
    };
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = n(0),
      a = r(o),
      i = n(62),
      u = r(i),
      l = n(64),
      s = r(l),
      c = function () {
        return a.default.createElement('div', {
          className: 'home',
        }, a.default.createElement('h1', null, 'REACT-REDUX TODO'), a.default.createElement(u.default, null), a.default.createElement(s.default, null));
      },
      f = c;
    t.default = f;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(c, 'Home', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Home.jsx'), __REACT_HOT_LOADER__.register(f, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Home.jsx'));
    }());
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    let r = n(8),
      o = n(10),
      a = n(63),
      i = (function (e) {
        return e && e.__esModule ? e : { default: e };
      }(a)),
      u = function (e) {
        return {
          onTest() {
            e((0, o.test)());
          },
          onAddTask(t) {
            e((0, o.addTask)(t));
          },
        };
      },
      l = (0, r.connect)(null, u)(i.default),
      s = l;
    t.default = s;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(u, 'mapDispatchToProps', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/AddItemConatainer.jsx'), __REACT_HOT_LOADER__.register(l, 'AddItemContainer', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/AddItemConatainer.jsx'), __REACT_HOT_LOADER__.register(s, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/containers/AddItemConatainer.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function i(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let u = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      l = n(0),
      s = r(l),
      c = n(1),
      f = r(c),
      p = (function (e) {
        function t(e) {
          o(this, t);
          const n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.handleSubmit = function () {
            return n.__handleSubmit__REACT_HOT_LOADER__(...arguments);
          }, n.handleSubmit = n.handleSubmit.bind(n), n;
        }
        return i(t, e), u(t, [{
          key: '__handleSubmit__REACT_HOT_LOADER__',
          value() {
            return this.__handleSubmit__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {
          key: '__handleSubmit__REACT_HOT_LOADER__',
          value(e) {
            e.preventDefault();
            const t = this.TaskText.value;
            t && this.props.onAddTask(t);
          },
        }, {

          key: 'render',
          value() {
            const e = this;
            return s.default.createElement('form', {
              onSubmit: this.handleSubmit,
            }, s.default.createElement('input', {

              placeholder: 'Add tasks to your list',
              ref(t) {
                return e.TaskText = t;
              },
              type: 'text',
            }), s.default.createElement('button', null, 'Add'));
          },
        }]), t;
      }(l.Component));
    p.propTypes = { onAddTask: f.default.func };
    const d = p;
    t.default = d;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(p, 'AddItem', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/AddItem.jsx'), __REACT_HOT_LOADER__.register(d, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/AddItem.jsx'));
    }());
  },
  function (e, t, n) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    let r = n(0),
      o = (function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r)),
      a = n(11),
      i = function (e) {
        return o.default.createElement('nav', null, o.default.createElement(a.Link, {
          to: '/',
        }, 'View All'), o.default.createElement(a.Link, {
          to: '/active',
        }, 'Active'), o.default.createElement(a.Link, {
          to: '/done',
        }, 'Done'));
      },
      u = i;
    t.default = u;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(i, 'Nav', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Nav.jsx'), __REACT_HOT_LOADER__.register(u, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Nav.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function i(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let u = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      l = n(0),
      s = r(l),
      c = n(66),
      f = r(c),
      p = (function (e) {
        function t() {
          let e,
            n,
            r,
            i;
          o(this, t);
          for (var u = arguments.length, l = Array(u), s = 0; s < u; s++)l[s] = arguments[s];
          return n = r = a(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [
            this,
          ].concat(l))), r.handleDelete = function () {
            let e;
            return (e = r).__handleDelete__REACT_HOT_LOADER__.apply(e, arguments);
          }, r.handleEdit = function () {
            let e;
            return (e = r).__handleEdit__REACT_HOT_LOADER__.apply(e, arguments);
          }, r.handleSave = function () {
            let e;
            return (e = r).__handleSave__REACT_HOT_LOADER__.apply(e, arguments);
          }, r.handleToggle = function () {
            let e;
            return (e = r).__handleToggle__REACT_HOT_LOADER__.apply(e, arguments);
          }, i = n, a(r, i);
        }
        return i(t, e), u(t, [{

          key: '__handleToggle__REACT_HOT_LOADER__',
          value() {
            return this.__handleToggle__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {

          key: '__handleSave__REACT_HOT_LOADER__',
          value() {
            return this.__handleSave__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {

          key: '__handleEdit__REACT_HOT_LOADER__',
          value() {
            return this.__handleEdit__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {
          key: '__handleDelete__REACT_HOT_LOADER__',
          value() {
            return this.__handleDelete__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {
          key: '__handleDelete__REACT_HOT_LOADER__',
          value(e) {
            const t = this;
            return function (n) {
              t.props.onDelete(e);
            };
          },
        }, {

          key: '__handleEdit__REACT_HOT_LOADER__',
          value(e) {
            const t = this;
            return function (n) {
              t.props.onEdit(e);
            };
          },
        }, {

          key: '__handleSave__REACT_HOT_LOADER__',
          value(e, t) {
            const n = this;
            return function (r) {
              const o = { savingId: e, savingTask: t };
              n.props.onSave(o);
            };
          },
        }, {

          key: '__handleToggle__REACT_HOT_LOADER__',
          value(e) {
            const t = this;
            return function (n) {
              console.log(e), t.props.onToggle(e);
            };
          },
        }, {

          key: 'render',
          value() {
            let e = this,
              t = this.props.todoState.todo,
              n = t,
              r = 'Nothing to do';
            switch (this.props.filter) {
            case 'done': n = n.filter(e => e.done == 1), r = "You don't have completed tasks"; break;
            case 'active': n = n.filter(e => e.done == 0);
            }
            return s.default.createElement('ul', {
              className: 'list',
            }, n.length == 0 ? s.default.createElement('h3', null, r) : n.map((t, n) => s.default.createElement(f.default, {
              key: n,
              taskObj: t,
              editItem: e.handleEdit,
              saveItem: e.handleSave,
              toggleItem: e.handleToggle,
              deleteItem: e.handleDelete,
            })));
          },
        }]), t;
      }(l.Component)),
      d = p;
    t.default = d;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(p, 'List', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/List.jsx'), __REACT_HOT_LOADER__.register(d, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/List.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || typeof t !== 'object' && typeof t !== 'function' ? e : t;
    }
    function i(e, t) {
      if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
      e.prototype = Object.create(t && t.prototype, {

        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let u = (function () {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }()),
      l = n(0),
      s = r(l),
      c = n(67),
      f = r(c),
      p = n(68),
      d = r(p),
      h = n(69),
      y = r(h),
      m = n(70),
      v = r(m),
      g = (function (e) {
        function t(e) {
          o(this, t);
          const n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.handleChange = function () {
            return n.__handleChange__REACT_HOT_LOADER__(...arguments);
          }, n.state = { value: n.props.taskObj.task }, n;
        }
        return i(t, e), u(t, [{
          key: '__handleChange__REACT_HOT_LOADER__',
          value() {
            return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
          },
        }, {
          key: '__handleChange__REACT_HOT_LOADER__',
          value(e) {
            this.setState({ value: e.target.value });
          },
        }, {

          key: 'render',
          value() {
            let e = this,
              t = this.props,
              n = t.taskObj,
              r = t.editItem,
              o = t.deleteItem,
              a = t.saveItem,
              i = t.toggleItem,
              u = n.editing,
              l = n.task,
              c = n.id,
              p = n.done;
            return s.default.createElement('li', {
              className: p ? 'done' : null,
            }, s.default.createElement('button', {
              onClick: i(c),
            }, s.default.createElement(f.default, null)), u ? s.default.createElement('input', {
              ref(t) {
                return e.editedTask = t;
              },
              value: this.state.value,
              onChange: this.handleChange,
              type: 'text',
            }) : s.default.createElement('strong', null, l), s.default.createElement('button', {
              onClick: o(c),
            }, s.default.createElement(d.default, null)), s.default.createElement('button', {
              onClick: u ? a(c, this.state.value) : r(c),
            }, u ? s.default.createElement(v.default, null) : s.default.createElement(y.default, null)));
          },
        }]), t;
      }(l.Component)),
      b = g;
    t.default = b;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(g, 'Item', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Item.jsx'), __REACT_HOT_LOADER__.register(b, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Item.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(0),
      i = r(a),
      u = n(7),
      l = r(u),
      s = function (e) {
        return i.default.createElement(l.default, o({
          viewBox: '0 0 40 40',
        }, e), i.default.createElement('g', null, i.default.createElement('path', {
          d: 'm15 27l17.7-17.7 2.3 2.3-20 20-9.3-9.3 2.3-2.3z',
        })));
      };
    t.default = s, e.exports = t.default;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(0),
      i = r(a),
      u = n(7),
      l = r(u),
      s = function (e) {
        return i.default.createElement(l.default, o({
          viewBox: '0 0 40 40',
        }, e), i.default.createElement('g', null, i.default.createElement('path', {
          d: 'm31.6 10.7l-9.3 9.3 9.3 9.3-2.3 2.3-9.3-9.3-9.3 9.3-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 9.3 9.3 9.3-9.3z',
        })));
      };
    t.default = s, e.exports = t.default;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(0),
      i = r(a),
      u = n(7),
      l = r(u),
      s = function (e) {
        return i.default.createElement(l.default, o({
          viewBox: '0 0 40 40',
        }, e), i.default.createElement('g', null, i.default.createElement('path', {
          d: 'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z',
        })));
      };
    t.default = s, e.exports = t.default;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = Object.assign || function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
      a = n(0),
      i = r(a),
      u = n(7),
      l = r(u),
      s = function (e) {
        return i.default.createElement(l.default, o({
          viewBox: '0 0 40 40',
        }, e), i.default.createElement('g', null, i.default.createElement('path', {
          d: 'm0.7 22.3l2.3-2.3 9.3 9.3-2.3 2.3z m36.3-13l2.5 2.3-20 20-9.4-9.3 2.4-2.3 7 7z m-7 2.3l-10.5 10.7-2.4-2.4 10.6-10.6z',
        })));
      };
    t.default = s, e.exports = t.default;
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = n(0),
      a = r(o),
      i = n(14),
      u = r(i),
      l = function () {
        return a.default.createElement(u.default, { filter: 'done' });
      },
      s = l;
    t.default = s;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(l, 'Done', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Done.jsx'), __REACT_HOT_LOADER__.register(s, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Done.jsx'));
    }());
  },
  function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    let o = n(0),
      a = r(o),
      i = n(14),
      u = r(i),
      l = function () {
        return a.default.createElement(u.default, { filter: 'active' });
      },
      s = l;
    t.default = s;
    !(function () {
      typeof __REACT_HOT_LOADER__ !== 'undefined' && (__REACT_HOT_LOADER__.register(l, 'Active', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Active.jsx'), __REACT_HOT_LOADER__.register(s, 'default', 'C:/Users/VamOSGS/Desktop/Tor Browser/Projects/react-redux todo/js/components/Active.jsx'));
    }());
  },
  function (e, t) {},
]));
