!(function (t) {
  "use strict";
  var o = 0;
  function n(o, n) {
    return t.map(o, function (t) {
      return (function (t, o) {
        return t + ".touchspin_" + o;
      })(t, n);
    });
  }
  t.fn.TouchSpin = function (s) {
    if ("destroy" !== s) {
      var a = {
          min: 0,
          max: 100,
          initval: "",
          replacementval: "",
          step: 1,
          decimals: 0,
          stepinterval: 100,
          forcestepdivisibility: "round",
          stepintervaldelay: 500,
          verticalbuttons: !1,
          verticalupclass: "fa fa-chevron-up",
          verticaldownclass: "fa fa-chevron-down",
          prefix: "",
          postfix: "",
          prefix_extraclass: "",
          postfix_extraclass: "",
          booster: !0,
          boostat: 10,
          maxboostedstep: !1,
          mousewheel: !0,
          buttondown_class: "btn btn-default",
          buttonup_class: "btn btn-default",
          buttondown_txt: "-",
          buttonup_txt: "+",
        },
        e = {
          min: "min",
          max: "max",
          initval: "init-val",
          replacementval: "replacement-val",
          step: "step",
          decimals: "decimals",
          stepinterval: "step-interval",
          verticalbuttons: "vertical-buttons",
          verticalupclass: "vertical-up-class",
          verticaldownclass: "vertical-down-class",
          forcestepdivisibility: "force-step-divisibility",
          stepintervaldelay: "step-interval-delay",
          prefix: "prefix",
          postfix: "postfix",
          prefix_extraclass: "prefix-extra-class",
          postfix_extraclass: "postfix-extra-class",
          booster: "booster",
          boostat: "boostat",
          maxboostedstep: "max-boosted-step",
          mousewheel: "mouse-wheel",
          buttondown_class: "button-down-class",
          buttonup_class: "button-up-class",
          buttondown_txt: "button-down-txt",
          buttonup_txt: "button-up-txt",
        };
      return this.each(function () {
        var i,
          u,
          p,
          r,
          c,
          l,
          d,
          f,
          b = t(this),
          h = b.data(),
          v = 0,
          m = !1;
        function x() {
          var t, o, n;
          "" !== (t = b.val())
            ? (i.decimals > 0 && "." === t) ||
              ((o = parseFloat(t)),
              isNaN(o) && (o = "" !== i.replacementval ? i.replacementval : 0),
              (n = o),
              o.toString() !== t && (n = o),
              o < i.min && (n = i.min),
              o > i.max && (n = i.max),
              (n = (function (t) {
                switch (i.forcestepdivisibility) {
                  case "round":
                    return (Math.round(t / i.step) * i.step).toFixed(
                      i.decimals
                    );
                  case "floor":
                    return (Math.floor(t / i.step) * i.step).toFixed(
                      i.decimals
                    );
                  case "ceil":
                    return (Math.ceil(t / i.step) * i.step).toFixed(i.decimals);
                  default:
                    return t;
                }
              })(n)),
              Number(t).toString() !== n.toString() &&
                (b.val(n), b.trigger("change")))
            : "" !== i.replacementval &&
              (b.val(i.replacementval), b.trigger("change"));
        }
        function g() {
          if (i.booster) {
            var t = Math.pow(2, Math.floor(v / i.boostat)) * i.step;
            return (
              i.maxboostedstep &&
                t > i.maxboostedstep &&
                ((t = i.maxboostedstep), (r = Math.round(r / t) * t)),
              Math.max(i.step, t)
            );
          }
          return i.step;
        }
        function w() {
          x(), (r = parseFloat(p.input.val())), isNaN(r) && (r = 0);
          var t = r,
            o = g();
          (r += o) > i.max && ((r = i.max), b.trigger("touchspin.on.max"), D()),
            p.input.val(Number(r).toFixed(i.decimals)),
            t !== r && b.trigger("change");
        }
        function y() {
          x(), (r = parseFloat(p.input.val())), isNaN(r) && (r = 0);
          var t = r,
            o = g();
          (r -= o) < i.min && ((r = i.min), b.trigger("touchspin.on.min"), D()),
            p.input.val(r.toFixed(i.decimals)),
            t !== r && b.trigger("change");
        }
        function _() {
          D(),
            (v = 0),
            (m = "down"),
            b.trigger("touchspin.on.startspin"),
            b.trigger("touchspin.on.startdownspin"),
            (d = setTimeout(function () {
              c = setInterval(function () {
                v++, y();
              }, i.stepinterval);
            }, i.stepintervaldelay));
        }
        function C() {
          D(),
            (v = 0),
            (m = "up"),
            b.trigger("touchspin.on.startspin"),
            b.trigger("touchspin.on.startupspin"),
            (f = setTimeout(function () {
              l = setInterval(function () {
                v++, w();
              }, i.stepinterval);
            }, i.stepintervaldelay));
        }
        function D() {
          switch (
            (clearTimeout(d),
            clearTimeout(f),
            clearInterval(c),
            clearInterval(l),
            m)
          ) {
            case "up":
              b.trigger("touchspin.on.stopupspin"),
                b.trigger("touchspin.on.stopspin");
              break;
            case "down":
              b.trigger("touchspin.on.stopdownspin"),
                b.trigger("touchspin.on.stopspin");
          }
          (v = 0), (m = !1);
        }
        !(function () {
          if (b.data("alreadyinitialized")) return;
          if (
            (b.data("alreadyinitialized", !0),
            (o += 1),
            b.data("spinnerid", o),
            !b.is("input"))
          )
            return void console.log("Must be an input.");
          (i = t.extend(
            {},
            a,
            h,
            ((r = {}),
            t.each(e, function (t, o) {
              var n = "bts-" + o;
              b.is("[data-" + n + "]") && (r[t] = b.data(n));
            }),
            r),
            s
          )),
            "" !== i.initval && "" === b.val() && b.val(i.initval),
            x(),
            (function () {
              var o = b.val(),
                n = b.parent();
              "" !== o && (o = Number(o).toFixed(i.decimals));
              b.data("initvalue", o).val(o),
                b.addClass("form-control"),
                n.hasClass("input-group")
                  ? (function (o) {
                      o.addClass("bootstrap-touchspin");
                      var n,
                        s,
                        a = b.prev(),
                        e = b.next(),
                        p =
                          '<span class="input-group-addon bootstrap-touchspin-prefix">' +
                          i.prefix +
                          "</span>",
                        r =
                          '<span class="input-group-addon bootstrap-touchspin-postfix">' +
                          i.postfix +
                          "</span>";
                      a.hasClass("input-group-btn")
                        ? ((n =
                            '<button class="' +
                            i.buttondown_class +
                            ' bootstrap-touchspin-down" type="button">' +
                            i.buttondown_txt +
                            "</button>"),
                          a.append(n))
                        : ((n =
                            '<span class="input-group-btn"><button class="' +
                            i.buttondown_class +
                            ' bootstrap-touchspin-down" type="button">' +
                            i.buttondown_txt +
                            "</button></span>"),
                          t(n).insertBefore(b));
                      e.hasClass("input-group-btn")
                        ? ((s =
                            '<button class="' +
                            i.buttonup_class +
                            ' bootstrap-touchspin-up" type="button">' +
                            i.buttonup_txt +
                            "</button>"),
                          e.prepend(s))
                        : ((s =
                            '<span class="input-group-btn"><button class="' +
                            i.buttonup_class +
                            ' bootstrap-touchspin-up" type="button">' +
                            i.buttonup_txt +
                            "</button></span>"),
                          t(s).insertAfter(b));
                      t(p).insertBefore(b), t(r).insertAfter(b), (u = o);
                    })(n)
                  : (function () {
                      var o;
                      o = i.verticalbuttons
                        ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' +
                          i.prefix +
                          '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                          i.postfix +
                          '</span><span class="input-group-btn-vertical"><button class="' +
                          i.buttondown_class +
                          ' bootstrap-touchspin-up" type="button"><i class="' +
                          i.verticalupclass +
                          '"></i></button><button class="' +
                          i.buttonup_class +
                          ' bootstrap-touchspin-down" type="button"><i class="' +
                          i.verticaldownclass +
                          '"></i></button></span></div>'
                        : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' +
                          i.buttondown_class +
                          ' bootstrap-touchspin-down" type="button">' +
                          i.buttondown_txt +
                          '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' +
                          i.prefix +
                          '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                          i.postfix +
                          '</span><span class="input-group-btn"><button class="' +
                          i.buttonup_class +
                          ' bootstrap-touchspin-up" type="button">' +
                          i.buttonup_txt +
                          "</button></span></div>";
                      (u = t(o).insertBefore(b)),
                        t(".bootstrap-touchspin-prefix", u).after(b),
                        b.hasClass("input-sm")
                          ? u.addClass("input-group-sm")
                          : b.hasClass("input-lg") &&
                            u.addClass("input-group-lg");
                    })();
            })(),
            (p = {
              down: t(".bootstrap-touchspin-down", u),
              up: t(".bootstrap-touchspin-up", u),
              input: t("input", u),
              prefix: t(".bootstrap-touchspin-prefix", u).addClass(
                i.prefix_extraclass
              ),
              postfix: t(".bootstrap-touchspin-postfix", u).addClass(
                i.postfix_extraclass
              ),
            }),
            (function () {
              "" === i.prefix && p.prefix.hide();
              "" === i.postfix && p.postfix.hide();
            })(),
            b.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              38 === o
                ? ("up" !== m && (w(), C()), t.preventDefault())
                : 40 === o && ("down" !== m && (y(), _()), t.preventDefault());
            }),
            b.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              38 === o ? D() : 40 === o && D();
            }),
            b.on("blur", function () {
              x();
            }),
            p.down.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              (32 !== o && 13 !== o) ||
                ("down" !== m && (y(), _()), t.preventDefault());
            }),
            p.down.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              (32 !== o && 13 !== o) || D();
            }),
            p.up.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              (32 !== o && 13 !== o) ||
                ("up" !== m && (w(), C()), t.preventDefault());
            }),
            p.up.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              (32 !== o && 13 !== o) || D();
            }),
            p.down.on("mousedown.touchspin", function (t) {
              p.down.off("touchstart.touchspin"),
                b.is(":disabled") ||
                  (y(), _(), t.preventDefault(), t.stopPropagation());
            }),
            p.down.on("touchstart.touchspin", function (t) {
              p.down.off("mousedown.touchspin"),
                b.is(":disabled") ||
                  (y(), _(), t.preventDefault(), t.stopPropagation());
            }),
            p.up.on("mousedown.touchspin", function (t) {
              p.up.off("touchstart.touchspin"),
                b.is(":disabled") ||
                  (w(), C(), t.preventDefault(), t.stopPropagation());
            }),
            p.up.on("touchstart.touchspin", function (t) {
              p.up.off("mousedown.touchspin"),
                b.is(":disabled") ||
                  (w(), C(), t.preventDefault(), t.stopPropagation());
            }),
            p.up.on("mouseout touchleave touchend touchcancel", function (t) {
              m && (t.stopPropagation(), D());
            }),
            p.down.on("mouseout touchleave touchend touchcancel", function (t) {
              m && (t.stopPropagation(), D());
            }),
            p.down.on("mousemove touchmove", function (t) {
              m && (t.stopPropagation(), t.preventDefault());
            }),
            p.up.on("mousemove touchmove", function (t) {
              m && (t.stopPropagation(), t.preventDefault());
            }),
            t(document).on(
              n(["mouseup", "touchend", "touchcancel"], o).join(" "),
              function (t) {
                m && (t.preventDefault(), D());
              }
            ),
            t(document).on(
              n(["mousemove", "touchmove", "scroll", "scrollstart"], o).join(
                " "
              ),
              function (t) {
                m && (t.preventDefault(), D());
              }
            ),
            b.on("mousewheel DOMMouseScroll", function (t) {
              if (i.mousewheel && b.is(":focus")) {
                var o =
                  t.originalEvent.wheelDelta ||
                  -t.originalEvent.deltaY ||
                  -t.originalEvent.detail;
                t.stopPropagation(), t.preventDefault(), o < 0 ? y() : w();
              }
            }),
            b.on("touchspin.uponce", function () {
              D(), w();
            }),
            b.on("touchspin.downonce", function () {
              D(), y();
            }),
            b.on("touchspin.startupspin", function () {
              C();
            }),
            b.on("touchspin.startdownspin", function () {
              _();
            }),
            b.on("touchspin.stopspin", function () {
              D();
            }),
            b.on("touchspin.updatesettings", function (o, n) {
              !(function (o) {
                (function (o) {
                  i = t.extend({}, i, o);
                })(o),
                  x();
                var n = p.input.val();
                "" !== n &&
                  ((n = Number(p.input.val())),
                  p.input.val(n.toFixed(i.decimals)));
              })(n);
            }),
            p.input.css("display", "block");
          var r;
        })();
      });
    }
    this.each(function () {
      var o = t(this).data();
      t(document).off(
        n(
          [
            "mouseup",
            "touchend",
            "touchcancel",
            "mousemove",
            "touchmove",
            "scroll",
            "scrollstart",
          ],
          o.spinnerid
        ).join(" ")
      );
    });
  };
})(jQuery);
