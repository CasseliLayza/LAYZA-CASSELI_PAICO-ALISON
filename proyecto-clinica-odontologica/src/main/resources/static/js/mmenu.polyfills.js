window.NodeList &&
  !NodeList.prototype.forEach &&
  (NodeList.prototype.forEach = function (e, t) {
    t = t || window;
    for (var o = 0; o < this.length; o++) e.call(t, this[o], o, this);
  }),
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (e) {
        for (
          var t = (this.document || this.ownerDocument).querySelectorAll(e),
            o = t.length;
          --o >= 0 && t.item(o) !== this;

        );
        return o > -1;
      }),
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector),
  Element.prototype.closest ||
    (Element.prototype.closest = function (e) {
      var t = this;
      do {
        if (t.matches(e)) return t;
        t = t.parentElement || t.parentNode;
      } while (null !== t && 1 === t.nodeType);
      return null;
    }),
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
    function (e) {
      e.hasOwnProperty("prepend") ||
        Object.defineProperty(e, "prepend", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();
            e.forEach(function (e) {
              var o = e instanceof Node;
              t.appendChild(o ? e : document.createTextNode(String(e)));
            }),
              this.insertBefore(t, this.firstChild);
          },
        });
    }
  ),
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(
    function (e) {
      e.hasOwnProperty("append") ||
        Object.defineProperty(e, "append", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();
            e.forEach(function (e) {
              var o = e instanceof Node;
              t.appendChild(o ? e : document.createTextNode(String(e)));
            }),
              this.appendChild(t);
          },
        });
    }
  ),
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(
    function (e) {
      e.hasOwnProperty("before") ||
        Object.defineProperty(e, "before", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            var e = Array.prototype.slice.call(arguments),
              t = document.createDocumentFragment();
            e.forEach(function (e) {
              var o = e instanceof Node;
              t.appendChild(o ? e : document.createTextNode(String(e)));
            }),
              this.parentNode.insertBefore(t, this);
          },
        });
    }
  ),
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(
    function (e) {
      e.hasOwnProperty("remove") ||
        Object.defineProperty(e, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            null !== this.parentNode && this.parentNode.removeChild(this);
          },
        });
    }
  );
