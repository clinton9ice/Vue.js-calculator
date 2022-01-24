(function (t) {
    function r(r) {
        for (var n, s, a = r[0], i = r[1], u = r[2], _ = 0, p = []; _ < a.length; _++) s = a[_], Object.prototype.hasOwnProperty.call(c, s) && c[s] && p.push(c[s][0]), c[s] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        l && l(r);
        while (p.length) p.shift()();
        return o.push.apply(o, u || []), e()
    }

    function e() {
        for (var t, r = 0; r < o.length; r++) {
            for (var e = o[r], n = !0, a = 1; a < e.length; a++) {
                var i = e[a];
                0 !== c[i] && (n = !1)
            }
            n && (o.splice(r--, 1), t = s(s.s = e[0]))
        }
        return t
    }

    var n = {}, c = {app: 0}, o = [];

    function s(r) {
        if (n[r]) return n[r].exports;
        var e = n[r] = {i: r, l: !1, exports: {}};
        return t[r].call(e.exports, e, e.exports, s), e.l = !0, e.exports
    }

    s.m = t, s.c = n, s.d = function (t, r, e) {
        s.o(t, r) || Object.defineProperty(t, r, {enumerable: !0, get: e})
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, s.t = function (t, r) {
        if (1 & r && (t = s(t)), 8 & r) return t;
        if (4 & r && "object" === typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (s.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var n in t) s.d(e, n, function (r) {
            return t[r]
        }.bind(null, n));
        return e
    }, s.n = function (t) {
        var r = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(r, "a", r), r
    }, s.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, s.p = "/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [], i = a.push.bind(a);
    a.push = r, a = a.slice();
    for (var u = 0; u < a.length; u++) r(a[u]);
    var l = i;
    o.push([0, "chunk-vendors"]), e()
})({
    0: function (t, r, e) {
        t.exports = e("56d7")
    }, "034f": function (t, r, e) {
        "use strict";
        e("85ec")
    }, 2018: function (t, r, e) {
    }, "56d7": function (t, r, e) {
        "use strict";
        e.r(r);
        e("e260"), e("e6cf"), e("cca6"), e("a79d");
        var n = e("2b0e"), c = function () {
                var t = this, r = t.$createElement, e = t._self._c || r;
                return e("div", {attrs: {id: "app"}}, [e("Calculator", {attrs: {app: "vue-calculator."}})], 1)
            }, o = [], s = function () {
                var t = this, r = t.$createElement, e = t._self._c || r;
                return e("div", {staticClass: "calculator-container"}, [e("div", {staticClass: "display"}, [t._v(t._s(t.current || 0))]), e("div", {staticClass: "keys"}, [e("button", {
                    staticClass: "btn operator",
                    on: {
                        click: function (r) {
                            return t.operator("clear")
                        }
                    }
                }, [t._v("AC")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("Backspace")
                        }
                    }
                }, [t._v("Del")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("percent")
                        }
                    }
                }, [t._v("%")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("divide")
                        }
                    }
                }, [t._v("/")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(7)
                        }
                    }
                }, [t._v("7")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(8)
                        }
                    }
                }, [t._v("8")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(9)
                        }
                    }
                }, [t._v("9")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("multiply")
                        }
                    }
                }, [t._v("*")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(4)
                        }
                    }
                }, [t._v("4")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(5)
                        }
                    }
                }, [t._v("5")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(6)
                        }
                    }
                }, [t._v("6")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("subtract")
                        }
                    }
                }, [t._v("-")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(1)
                        }
                    }
                }, [t._v("1")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(2)
                        }
                    }
                }, [t._v("2")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.number(3)
                        }
                    }
                }, [t._v("3")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("add")
                        }
                    }
                }, [t._v("+")]), e("button", {
                    staticClass: "btn zero", on: {
                        click: function (r) {
                            return t.number(0)
                        }
                    }
                }, [t._v("0")]), e("button", {
                    staticClass: "btn", on: {
                        click: function (r) {
                            return t.operator("dot")
                        }
                    }
                }, [t._v(".")]), e("button", {
                    staticClass: "btn operator", on: {
                        click: function (r) {
                            return t.operator("eval")
                        }
                    }
                }, [t._v("=")])])])
            }, a = [], i = e("a97d"), u = i["a"], l = (e("5960"), e("2877")),
            _ = Object(l["a"])(u, s, a, !1, null, "26889744", null), p = _.exports,
            b = {name: "App", components: {Calculator: p}}, f = b,
            d = (e("034f"), Object(l["a"])(f, c, o, !1, null, null, null)), h = d.exports;
        n["a"].config.productionTip = !1, new n["a"]({
            render: function (t) {
                return t(h)
            }
        }).$mount("#app")
    }, 5960: function (t, r, e) {
        "use strict";
        e("2018")
    }, "85ec": function (t, r, e) {
    }, a97d: function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb6a"),
            core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("99af"),
            core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
        __webpack_exports__["a"] = {
            name: "Calculator", data: function () {
                return {current: "", isAnswered: !1, operatorClicked: !1}
            }, methods: {
                operatorIsClicked: function () {
                    this.operatorClicked = !0, this.isAnswered = !1
                }, operator: function operator(arg) {
                    switch (arg) {
                        case"clear":
                            this.current = "", this.operatorClicked = !1;
                            break;
                        case"Backspace":
                            this.current && (this.current = this.current.length > 1 ? this.current.slice(0, this.current.length - 1) : "", this.operatorClicked = !1);
                            break;
                        case"percent":
                            this.current = parseFloat(this.current) / 100, this.operatorClicked = !1;
                            break;
                        case"divide":
                            this.current = !this.operatorClicked && this.current ? "".concat(this.current, "/") : this.current, this.operatorIsClicked();
                            break;
                        case"multiply":
                            this.current = !this.operatorClicked && this.current ? "".concat(this.current, "*") : this.current, this.operatorIsClicked();
                            break;
                        case"add":
                            this.current = !this.operatorClicked && this.current ? "".concat(this.current, "+") : this.current, this.operatorIsClicked();
                            break;
                        case"subtract":
                            this.current = !this.operatorClicked && this.current ? "".concat(this.current, "-") : this.current, this.operatorIsClicked();
                            break;
                        case"eval":
                            this.current = this.current ? "".concat(eval(this.current).toLocaleString()) : "", this.isAnswered = !0;
                            break;
                        case"dot":
                            if (-1 === this.current.indexOf(".")) {
                                var i = this.current ? "." : "0.";
                                this.number(i)
                            }
                            break;
                        default:
                            console.log(arg);
                            break
                    }
                }, number: function (t) {
                    this.isAnswered && (this.current = "", this.isAnswered = !1), this.operatorClicked && (this.operatorClicked = !1), (this.current || 0 !== t) && (this.current = null !== this.current ? "".concat(this.current).concat(t) : "")
                }
            }
        }
    }
});
//# sourceMappingURL=app.ece41c88.js.map