const _0x50e5b1 = _0x5250;
(function (_0x262c52, _0x3dc90c) {
  const _0x5f3500 = _0x5250,
    _0x379868 = _0x262c52();
  while (!![]) {
    try {
      const _0x1df491 =
        parseInt(_0x5f3500(0x1e7)) / 0x1 +
        -parseInt(_0x5f3500(0x1ef)) / 0x2 +
        parseInt(_0x5f3500(0x1e0)) / 0x3 +
        parseInt(_0x5f3500(0x1ce)) / 0x4 +
        (parseInt(_0x5f3500(0x1d7)) / 0x5) *
          (-parseInt(_0x5f3500(0x1db)) / 0x6) +
        parseInt(_0x5f3500(0x1ed)) / 0x7 +
        -parseInt(_0x5f3500(0x1d8)) / 0x8;
      if (_0x1df491 === _0x3dc90c) break;
      else _0x379868["push"](_0x379868["shift"]());
    } catch (_0x24f3db) {
      _0x379868["push"](_0x379868["shift"]());
    }
  }
})(_0x70b3, 0xc637d);
if (localStorage["length"] == 0x0) var i = 0x0;
else i = localStorage[_0x50e5b1(0x1cf)];
function _0x70b3() {
  const _0x929031 = [
    "847851xoxsPc",
    "red",
    "location",
    "Add",
    "log",
    "getElementById",
    "Please\x20add\x20Title\x20to\x20Notes.",
    "1604341jKnUkc",
    "cont1",
    "addEventListener",
    "remove",
    "display",
    "added",
    "3528441yznDOw",
    "makeNotes",
    "1075064CfGsjr",
    "style",
    "click",
    "innerHTML",
    "2567124LAILmZ",
    "length",
    "setItem",
    "appendChild",
    "classList",
    "result",
    "color",
    "getElementsByClassName",
    "div",
    "5BQnIzW",
    "5816064EALjQY",
    "<i\x20class=\x27fa\x20fa-exclamation\x27\x20style=\x27font-size:20px;\x20color:red;\x27></i>",
    "addnotes",
    "5738166oEsYLQ",
    "add",
    "removeChild",
    "headNote",
    "value",
  ];
  _0x70b3 = function () {
    return _0x929031;
  };
  return _0x70b3();
}
let cancelBtn = document[_0x50e5b1(0x1e5)]("cancel"),
  addBtn = document[_0x50e5b1(0x1e5)](_0x50e5b1(0x1e3));
cancelBtn[_0x50e5b1(0x1e9)]("click", () => {
  const _0x2dde41 = _0x50e5b1;
  document[_0x2dde41(0x1d5)]("makeNotes")[0x0]["classList"][_0x2dde41(0x1ea)](
    _0x2dde41(0x1eb)
  );
});
let x = 0x0,
  divNote = document["createElement"](_0x50e5b1(0x1d6));
addBtn[_0x50e5b1(0x1e9)]("click", () => {
  const _0x29096c = _0x50e5b1;
  x > 0x0 &&
    document[_0x29096c(0x1d5)](_0x29096c(0x1e8))[0x0][_0x29096c(0x1dd)](
      divNote
    ),
    (divNote[_0x29096c(0x1cd)] = ""),
    document["getElementById"](_0x29096c(0x1de))["value"] == ""
      ? (document[_0x29096c(0x1d5)](_0x29096c(0x1e8))[0x0][_0x29096c(0x1d1)](
          divNote
        ),
        x++,
        (divNote[_0x29096c(0x1cd)] = _0x29096c(0x1d9)),
        (divNote[_0x29096c(0x1cd)] += _0x29096c(0x1e6)),
        (divNote[_0x29096c(0x1f0)][_0x29096c(0x1d4)] = _0x29096c(0x1e1)))
      : (addingNotes(),
        document[_0x29096c(0x1d5)](_0x29096c(0x1ee))[0x0]["classList"][
          _0x29096c(0x1ea)
        ](_0x29096c(0x1eb)));
});
let addNote = document[_0x50e5b1(0x1e5)](_0x50e5b1(0x1da));
addNote[_0x50e5b1(0x1e9)](_0x50e5b1(0x1cc), () => {
  const _0x1e35c3 = _0x50e5b1;
  document["getElementsByClassName"](_0x1e35c3(0x1ee))[0x0][_0x1e35c3(0x1d2)][
    _0x1e35c3(0x1dc)
  ](_0x1e35c3(0x1eb)),
    (document["getElementById"](_0x1e35c3(0x1de))["value"] = "");
});
function addingNotes() {
  const _0x4c5011 = _0x50e5b1;
  let _0x44d779 = document[_0x4c5011(0x1e5)](_0x4c5011(0x1de))[
    _0x4c5011(0x1df)
  ];
  localStorage[_0x4c5011(0x1d0)](
    "" + _0x44d779,
    document["getElementById"](_0x4c5011(0x1d3))[_0x4c5011(0x1cd)]
  ),
    i++,
    setTimeout(load(), 0x1388),
    console[_0x4c5011(0x1e4)](_0x4c5011(0x1ec));
}
function _0x5250(_0x15c891, _0x1a70f8) {
  const _0x70b3e2 = _0x70b3();
  return (
    (_0x5250 = function (_0x525050, _0x2f3068) {
      _0x525050 = _0x525050 - 0x1cc;
      let _0xef7218 = _0x70b3e2[_0x525050];
      return _0xef7218;
    }),
    _0x5250(_0x15c891, _0x1a70f8)
  );
}
function load() {
  const _0x507687 = _0x50e5b1;
  console[_0x507687(0x1e4)]("load"), window[_0x507687(0x1e2)]["reload"](!![]);
}
