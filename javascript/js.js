const _0x5c83f3 = _0x26c0;
(function (_0x2720d0, _0x1e8d1d) {
  const _0x17e334 = _0x26c0,
    _0x17768d = _0x2720d0();
  while (!![]) {
    try {
      const _0x56b566 =
        (parseInt(_0x17e334(0x1c1)) / 0x1) *
          (-parseInt(_0x17e334(0x1b5)) / 0x2) +
        (parseInt(_0x17e334(0x1cb)) / 0x3) *
          (-parseInt(_0x17e334(0x1b7)) / 0x4) +
        -parseInt(_0x17e334(0x1a5)) / 0x5 +
        -parseInt(_0x17e334(0x1b3)) / 0x6 +
        (-parseInt(_0x17e334(0x1c9)) / 0x7) *
          (-parseInt(_0x17e334(0x19d)) / 0x8) +
        -parseInt(_0x17e334(0x1c3)) / 0x9 +
        parseInt(_0x17e334(0x19f)) / 0xa;
      if (_0x56b566 === _0x1e8d1d) break;
      else _0x17768d["push"](_0x17768d["shift"]());
    } catch (_0x560f71) {
      _0x17768d["push"](_0x17768d["shift"]());
    }
  }
})(_0x528b, 0x49b29);
var div1 = document[_0x5c83f3(0x1c6)](_0x5c83f3(0x1c2));
(div1[_0x5c83f3(0x1b2)][_0x5c83f3(0x1bb)] = _0x5c83f3(0x1b6)),
  (div1[_0x5c83f3(0x1b2)]["fontSize"] = _0x5c83f3(0x1bf)),
  document[_0x5c83f3(0x19b)](_0x5c83f3(0x1c7))[_0x5c83f3(0x1ae)](div1);
var n1, n2, div2, div3;
function fun1() {
  const _0x15effd = _0x5c83f3;
  (div2 = document[_0x15effd(0x19b)](_0x15effd(0x1c8))),
    (div3 = document["getElementById"]("edit2")),
    (n1 = parseInt(div2[_0x15effd(0x1c0)])),
    (n2 = parseInt(div3[_0x15effd(0x1c0)]));
}
var url,
  time = 0x0,
  videotime;
function getval() {
  const _0x53f460 = _0x5c83f3;
  url = document["getElementById"](_0x53f460(0x1ac))[_0x53f460(0x1c0)];
}
function get_url(_0xa96753) {
  const _0x44133d = _0x5c83f3;
  let _0x1b8ad7 = "" + _0xa96753,
    _0xef3726 = 0x0,
    _0x184f1d;
  for (_0x184f1d = 0x0; _0x184f1d < _0x1b8ad7["length"]; _0x184f1d++) {
    _0x1b8ad7[_0x184f1d] == "=" && (_0xef3726 = _0x184f1d);
  }
  if (_0xef3726 == 0x0) return _0xa96753;
  else {
    var _0xd95aef = "";
    _0xef3726 = _0xef3726 + 0x1;
    while (_0xef3726 < _0x184f1d) {
      (_0xd95aef = _0xd95aef[_0x44133d(0x1d0)](_0x1b8ad7[_0xef3726])),
        _0xef3726++;
    }
    return _0xd95aef;
  }
}
function end() {
  const _0x415e52 = _0x5c83f3;
  document[_0x415e52(0x19b)](_0x415e52(0x1c7))[_0x415e52(0x19c)]["contains"](
    _0x415e52(0x1d2)
  ) &&
    document[_0x415e52(0x19b)](_0x415e52(0x1c7))["classList"][_0x415e52(0x1b9)](
      _0x415e52(0x1d2)
    );
}
const cal = document[_0x5c83f3(0x19b)](_0x5c83f3(0x1a2));
cal[_0x5c83f3(0x1aa)](_0x5c83f3(0x1bd), function () {
  const _0x23a15c = _0x5c83f3;
  (cal["innerHTML"] = _0x23a15c(0x1cf)),
    fun1(),
    getval(),
    loadVideos(),
    document[_0x23a15c(0x19b)]("result")[_0x23a15c(0x19c)][_0x23a15c(0x1ba)](
      _0x23a15c(0x1d2)
    ),
    setTimeout(end, 0x2710);
});
function YTDurationToSeconds(_0x45091d) {
  const _0x14857a = _0x5c83f3;
  var _0x5302ac = _0x45091d["match"](/PT(\d+H)?(\d+M)?(\d+S)?/);
  _0x5302ac = _0x5302ac["slice"](0x1)[_0x14857a(0x1cd)](function (_0x4b4f3c) {
    if (_0x4b4f3c != null) return _0x4b4f3c["replace"](/\D/, "");
  });
  var _0x4f070c = parseInt(_0x5302ac[0x0]) || 0x0,
    _0x5d3fab = parseInt(_0x5302ac[0x1]) || 0x0,
    _0x3a320b = parseInt(_0x5302ac[0x2]) || 0x0;
  return _0x4f070c * 0xe10 + _0x5d3fab * 0x3c + _0x3a320b;
}
function loadVideos() {
  const _0x31348c = _0x5c83f3;
  let _0x35c954 = "",
    _0x50b1ee = 0x0,
    _0x267eeb,
    _0x476320,
    _0x3729e3;
  const _0x158f0a = _0x31348c(0x1a6),
    _0x39936c = get_url(document["getElementById"](_0x31348c(0x1ac))["value"]);
  let _0x3b80a7 = 0x1;
  const _0x194a7d =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&fields=items/contentDetails/videoId,nextPageToken,pageInfo&key=" +
    _0x158f0a +
    _0x31348c(0x1cc) +
    _0x39936c +
    _0x31348c(0x1a4);
  fetch(_0x194a7d)
    [_0x31348c(0x1bc)]((_0x54d99c) => {
      return _0x54d99c["json"]();
    })
    [_0x31348c(0x1bc)](function (_0x3711ce) {
      const _0x23de66 = _0x31348c;
      _0x50b1ee = _0x3711ce[_0x23de66(0x19a)][_0x23de66(0x1be)];
      _0x50b1ee > 0x1f4 && (_0x50b1ee = 0x1f4);
      (total = _0x50b1ee),
        (div1["innerHTML"] = "\x20"),
        (_0x35c954 = _0x3711ce[_0x23de66(0x1a7)]),
        (_0x3729e3 = _0x50b1ee);
      let _0x2b18b1 = 0x0;
      div2[_0x23de66(0x1c0)] === "" && (n1 = 0x1);
      n1 > _0x50b1ee &&
        ((div1[_0x23de66(0x1b8)] = _0x23de66(0x1d4)),
        (cal[_0x23de66(0x1b8)] = "Calculate"));
      n1 > n2 &&
        ((div1[_0x23de66(0x1b8)] =
          "Please\x20fill\x20correct\x20video\x20number."),
        (cal[_0x23de66(0x1b8)] = _0x23de66(0x1d3)));
      n2 > _0x50b1ee && (n2 = _0x50b1ee);
      div3[_0x23de66(0x1c0)] === "" && (n2 = _0x50b1ee);
      let _0x216bcf;
      _0x50b1ee >= 0x32 ? (n = 0x31) : (n = _0x50b1ee);
      let _0x3a0f19 = 0x0;
      l = n1;
      let _0x39ff81 = n1;
      x = n2 - n1 + 0x1;
      for (_0x216bcf = 0x0; _0x216bcf <= n; _0x216bcf++) {
        if (
          _0x216bcf == n1 - 0x1 ||
          (_0x216bcf >= n1 - 0x1 && _0x216bcf < n2)
        ) {
          _0x267eeb = _0x3711ce[_0x23de66(0x1b1)][_0x216bcf];
          if (_0x267eeb == null) continue;
          _0x476320 = _0x267eeb["contentDetails"][_0x23de66(0x1af)];
          const _0x135c6d =
            _0x23de66(0x1ca) +
            _0x158f0a +
            _0x23de66(0x1ce) +
            _0x476320 +
            _0x23de66(0x1b0);
          fetch(_0x135c6d)
            [_0x23de66(0x1bc)]((_0x41d5b8) => {
              const _0x24541b = _0x23de66;
              return _0x41d5b8[_0x24541b(0x1ab)]();
            })
            [_0x23de66(0x1bc)](function (_0x71faf6) {
              const _0x4a2e46 = _0x23de66;
              let _0x330d71 = _0x71faf6[_0x4a2e46(0x1b1)][0x0];
              l++;
              if (_0x330d71 == null) {
              } else {
                let _0x5af8e5 = _0x330d71["contentDetails"]["duration"];
                (time = time + YTDurationToSeconds(_0x5af8e5)),
                  (_0x3a0f19 = _0x3a0f19 + YTDurationToSeconds(_0x5af8e5));
              }
              x == 0x1 &&
                (addondisplay(time, 0x1),
                atspeed(time / 1.25, 1.25),
                atspeed(time / 1.5, 1.5),
                atspeed(time / 1.75, 1.75),
                atspeed(time / 0x2, 0x2)),
                x--;
            });
        }
      }
      (_0x50b1ee = _0x50b1ee - 0x32), (_0x3729e3 = _0x50b1ee);
      let _0x91752f = _0x216bcf;
      const _0x205e45 =
        _0x23de66(0x1a8) +
        _0x158f0a +
        _0x23de66(0x1cc) +
        _0x39936c +
        _0x23de66(0x1a4) +
        _0x35c954;
      fetch(_0x205e45)
        ["then"]((_0x2340da) => {
          const _0x549d5c = _0x23de66;
          return _0x2340da[_0x549d5c(0x1ab)]();
        })
        [_0x23de66(0x1bc)](function (_0x564f97) {
          const _0x46933a = _0x23de66;
          _0x35c954 = _0x564f97[_0x46933a(0x1a7)];
          _0x50b1ee >= 0x32
            ? ((n = 0x31), (_0x50b1ee = _0x50b1ee - 0x32))
            : ((n = _0x50b1ee), (_0x50b1ee = _0x50b1ee - 0x32));
          for (_0x216bcf = 0x0; _0x216bcf <= n; _0x216bcf++) {
            if (
              _0x91752f == n1 - 0x1 ||
              (_0x91752f >= n1 - 0x1 && _0x91752f < n2)
            ) {
              _0x267eeb = _0x564f97[_0x46933a(0x1b1)][_0x216bcf];
              if (_0x267eeb == null) continue;
              _0x476320 = _0x267eeb[_0x46933a(0x1c4)]["videoId"];
              const _0x147be8 =
                "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=" +
                _0x158f0a +
                _0x46933a(0x1ce) +
                _0x476320 +
                _0x46933a(0x1b0);
              fetch(_0x147be8)
                [_0x46933a(0x1bc)]((_0x1a0c60) => {
                  const _0x398826 = _0x46933a;
                  return _0x1a0c60[_0x398826(0x1ab)]();
                })
                [_0x46933a(0x1bc)](function (_0x3f2377) {
                  const _0x35e161 = _0x46933a;
                  let _0x368467 = _0x3f2377["items"][0x0];
                  l++;
                  if (_0x368467 == null) {
                  } else {
                    let _0x5372df =
                      _0x368467[_0x35e161(0x1c4)][_0x35e161(0x1a3)];
                    (time = time + YTDurationToSeconds(_0x5372df)),
                      (_0x3a0f19 = _0x3a0f19 + YTDurationToSeconds(_0x5372df));
                  }
                  x == 0x1 &&
                    (addondisplay(time, 0x1),
                    atspeed(time / 1.25, 1.25),
                    atspeed(time / 1.5, 1.5),
                    atspeed(time / 1.75, 1.75),
                    atspeed(time / 0x2, 0x2)),
                    x--;
                });
            }
            _0x91752f++;
          }
          if (_0x50b1ee > 0x0) {
            const _0x124923 =
              "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&fields=items/contentDetails/videoId,nextPageToken,pageInfo&key=" +
              _0x158f0a +
              "&playlistId=" +
              _0x39936c +
              "&pageToken=" +
              _0x35c954;
            fetch(_0x124923)
              [_0x46933a(0x1bc)]((_0x1bcceb) => {
                const _0xc4cbdf = _0x46933a;
                return _0x1bcceb[_0xc4cbdf(0x1ab)]();
              })
              ["then"](function (_0xd17f01) {
                const _0x24d385 = _0x46933a;
                _0x35c954 = _0xd17f01[_0x24d385(0x1a7)];
                _0x50b1ee >= 0x32
                  ? ((n = 0x31), (_0x50b1ee = _0x50b1ee - 0x32))
                  : ((n = _0x50b1ee), (_0x50b1ee = _0x50b1ee - 0x32));
                for (_0x216bcf = 0x0; _0x216bcf <= n; _0x216bcf++) {
                  if (
                    _0x91752f == n1 - 0x1 ||
                    (_0x91752f >= n1 - 0x1 && _0x91752f < n2)
                  ) {
                    _0x267eeb = _0xd17f01[_0x24d385(0x1b1)][_0x216bcf];
                    if (_0x267eeb == null) continue;
                    _0x476320 = _0x267eeb[_0x24d385(0x1c4)][_0x24d385(0x1af)];
                    const _0x576828 =
                      "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=" +
                      _0x158f0a +
                      _0x24d385(0x1ce) +
                      _0x476320 +
                      "&fields=items/contentDetails/duration";
                    fetch(_0x576828)
                      [_0x24d385(0x1bc)]((_0x2c8803) => {
                        const _0x4b8a1c = _0x24d385;
                        return _0x2c8803[_0x4b8a1c(0x1ab)]();
                      })
                      [_0x24d385(0x1bc)](function (_0x4a03d6) {
                        const _0x396e6a = _0x24d385;
                        let _0x3491d7 = _0x4a03d6["items"][0x0];
                        if (_0x3491d7 == null) {
                        } else {
                          let _0x469ba1 =
                            _0x3491d7[_0x396e6a(0x1c4)][_0x396e6a(0x1a3)];
                          (time = time + YTDurationToSeconds(_0x469ba1)),
                            (_0x3a0f19 =
                              _0x3a0f19 + YTDurationToSeconds(_0x469ba1));
                        }
                        l++,
                          x == 0x1 &&
                            (addondisplay(time, 0x1),
                            atspeed(time / 1.25, 1.25),
                            atspeed(time / 1.5, 1.5),
                            atspeed(time / 1.75, 1.75),
                            atspeed(time / 0x2, 0x2)),
                          x--;
                      });
                  }
                  _0x91752f++;
                }
                if (_0x50b1ee > 0x0) {
                  console[_0x24d385(0x1a1)](_0x50b1ee);
                  const _0x211cd9 =
                    _0x24d385(0x1a8) +
                    _0x158f0a +
                    _0x24d385(0x1cc) +
                    _0x39936c +
                    _0x24d385(0x1a4) +
                    _0x35c954;
                  fetch(_0x211cd9)
                    ["then"]((_0x46a38f) => {
                      const _0x4b1797 = _0x24d385;
                      return _0x46a38f[_0x4b1797(0x1ab)]();
                    })
                    [_0x24d385(0x1bc)](function (_0x34d164) {
                      const _0x315335 = _0x24d385;
                      _0x35c954 = _0x34d164[_0x315335(0x1a7)];
                      _0x50b1ee >= 0x32
                        ? ((n = 0x31), (_0x50b1ee = _0x50b1ee - 0x32))
                        : ((n = _0x50b1ee), (_0x50b1ee = _0x50b1ee - 0x32));
                      for (_0x216bcf = 0x0; _0x216bcf <= n; _0x216bcf++) {
                        if (
                          _0x91752f == n1 - 0x1 ||
                          (_0x91752f >= n1 - 0x1 && _0x91752f < n2)
                        ) {
                          _0x267eeb = _0x34d164[_0x315335(0x1b1)][_0x216bcf];
                          if (_0x267eeb == null) continue;
                          _0x476320 =
                            _0x267eeb[_0x315335(0x1c4)][_0x315335(0x1af)];
                          const _0x5ab76f =
                            "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=" +
                            _0x158f0a +
                            _0x315335(0x1ce) +
                            _0x476320 +
                            _0x315335(0x1b0);
                          fetch(_0x5ab76f)
                            [_0x315335(0x1bc)]((_0x20a69b) => {
                              const _0x35565b = _0x315335;
                              return _0x20a69b[_0x35565b(0x1ab)]();
                            })
                            [_0x315335(0x1bc)](function (_0x19dd61) {
                              const _0x47f9cc = _0x315335;
                              let _0x482ad4 = _0x19dd61[_0x47f9cc(0x1b1)][0x0];
                              if (_0x482ad4 == null) {
                              } else {
                                let _0x170b07 =
                                  _0x482ad4[_0x47f9cc(0x1c4)][_0x47f9cc(0x1a3)];
                                (time = time + YTDurationToSeconds(_0x170b07)),
                                  (_0x3a0f19 =
                                    _0x3a0f19 + YTDurationToSeconds(_0x170b07));
                              }
                              l++,
                                x == 0x1 &&
                                  (addondisplay(time, 0x1),
                                  atspeed(time / 1.25, 1.25),
                                  atspeed(time / 1.5, 1.5),
                                  atspeed(time / 1.75, 1.75),
                                  atspeed(time / 0x2, 0x2)),
                                x--;
                            });
                        }
                        _0x91752f++;
                      }
                      if (_0x50b1ee > 0x0) {
                        console["log"](_0x50b1ee);
                        const _0x393736 =
                          _0x315335(0x1a8) +
                          _0x158f0a +
                          "&playlistId=" +
                          _0x39936c +
                          _0x315335(0x1a4) +
                          _0x35c954;
                        fetch(_0x393736)
                          [_0x315335(0x1bc)]((_0x31a2fd) => {
                            const _0x4a7685 = _0x315335;
                            return _0x31a2fd[_0x4a7685(0x1ab)]();
                          })
                          [_0x315335(0x1bc)](function (_0xffbb7d) {
                            const _0xf0c1f0 = _0x315335;
                            _0x35c954 = _0xffbb7d[_0xf0c1f0(0x1a7)];
                            _0x50b1ee >= 0x32
                              ? ((n = 0x31), (_0x50b1ee = _0x50b1ee - 0x32))
                              : ((n = _0x50b1ee),
                                (_0x50b1ee = _0x50b1ee - 0x32));
                            for (_0x216bcf = 0x0; _0x216bcf <= n; _0x216bcf++) {
                              if (
                                _0x91752f == n1 - 0x1 ||
                                (_0x91752f >= n1 - 0x1 && _0x91752f < n2)
                              ) {
                                _0x267eeb =
                                  _0xffbb7d[_0xf0c1f0(0x1b1)][_0x216bcf];
                                if (_0x267eeb == null) continue;
                                _0x476320 =
                                  _0x267eeb[_0xf0c1f0(0x1c4)][_0xf0c1f0(0x1af)];
                                const _0x115804 =
                                  "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=" +
                                  _0x158f0a +
                                  _0xf0c1f0(0x1ce) +
                                  _0x476320 +
                                  _0xf0c1f0(0x1b0);
                                fetch(_0x115804)
                                  [_0xf0c1f0(0x1bc)]((_0x299d81) => {
                                    return _0x299d81["json"]();
                                  })
                                  [_0xf0c1f0(0x1bc)](function (_0x46efb8) {
                                    const _0x3c9bd6 = _0xf0c1f0;
                                    let _0x211cfa = _0x46efb8["items"][0x0];
                                    if (_0x211cfa == null) {
                                    } else {
                                      let _0xaa4b6 =
                                        _0x211cfa[_0x3c9bd6(0x1c4)][
                                          _0x3c9bd6(0x1a3)
                                        ];
                                      (time =
                                        time + YTDurationToSeconds(_0xaa4b6)),
                                        (_0x3a0f19 =
                                          _0x3a0f19 +
                                          YTDurationToSeconds(_0xaa4b6));
                                    }
                                    l++,
                                      x == 0x1 &&
                                        (addondisplay(time, 0x1),
                                        atspeed(time / 1.25, 1.25),
                                        atspeed(time / 1.5, 1.5),
                                        atspeed(time / 1.75, 1.75),
                                        atspeed(time / 0x2, 0x2)),
                                      x--;
                                  });
                              }
                              _0x91752f++;
                            }
                            if (_0x50b1ee > 0x0) {
                              const _0x3e0e02 =
                                "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&fields=items/contentDetails/videoId,nextPageToken,pageInfo&key=" +
                                _0x158f0a +
                                _0xf0c1f0(0x1cc) +
                                _0x39936c +
                                _0xf0c1f0(0x1a4) +
                                _0x35c954;
                              fetch(_0x3e0e02)
                                [_0xf0c1f0(0x1bc)]((_0x3d9191) => {
                                  const _0x1fcbcb = _0xf0c1f0;
                                  return _0x3d9191[_0x1fcbcb(0x1ab)]();
                                })
                                ["then"](function (_0x4d6b58) {
                                  const _0x476e55 = _0xf0c1f0;
                                  _0x35c954 = _0x4d6b58[_0x476e55(0x1a7)];
                                  _0x50b1ee >= 0x32
                                    ? ((n = 0x31),
                                      (_0x50b1ee = _0x50b1ee - 0x32))
                                    : ((n = _0x50b1ee),
                                      (_0x50b1ee = _0x50b1ee - 0x32));
                                  for (
                                    _0x216bcf = 0x0;
                                    _0x216bcf <= n;
                                    _0x216bcf++
                                  ) {
                                    if (
                                      _0x91752f == n1 - 0x1 ||
                                      (_0x91752f >= n1 - 0x1 && _0x91752f < n2)
                                    ) {
                                      _0x267eeb =
                                        _0x4d6b58[_0x476e55(0x1b1)][_0x216bcf];
                                      if (_0x267eeb == null) continue;
                                      _0x476320 =
                                        _0x267eeb["contentDetails"][
                                          _0x476e55(0x1af)
                                        ];
                                      const _0x2bb261 =
                                        _0x476e55(0x1ca) +
                                        _0x158f0a +
                                        _0x476e55(0x1ce) +
                                        _0x476320 +
                                        _0x476e55(0x1b0);
                                      fetch(_0x2bb261)
                                        ["then"]((_0x721ea2) => {
                                          return _0x721ea2["json"]();
                                        })
                                        [_0x476e55(0x1bc)](function (
                                          _0xaf1340
                                        ) {
                                          const _0x3b35c0 = _0x476e55;
                                          let _0xe18014 =
                                            _0xaf1340[_0x3b35c0(0x1b1)][0x0];
                                          if (_0xe18014 == null) {
                                          } else {
                                            let _0x3c4d07 =
                                              _0xe18014[_0x3b35c0(0x1c4)][
                                                _0x3b35c0(0x1a3)
                                              ];
                                            (time =
                                              time +
                                              YTDurationToSeconds(_0x3c4d07)),
                                              (_0x3a0f19 =
                                                _0x3a0f19 +
                                                YTDurationToSeconds(_0x3c4d07));
                                          }
                                          l++,
                                            x == 0x1 &&
                                              (addondisplay(time, 0x1),
                                              atspeed(time / 1.25, 1.25),
                                              atspeed(time / 1.5, 1.5),
                                              atspeed(time / 1.75, 1.75),
                                              atspeed(time / 0x2, 0x2)),
                                            x--;
                                        });
                                    }
                                    _0x91752f++;
                                  }
                                  if (_0x50b1ee > 0x0) {
                                    const _0x60ebcc =
                                      _0x476e55(0x1a8) +
                                      _0x158f0a +
                                      _0x476e55(0x1cc) +
                                      _0x39936c +
                                      _0x476e55(0x1a4) +
                                      _0x35c954;
                                    fetch(_0x60ebcc)
                                      [_0x476e55(0x1bc)]((_0x54d84f) => {
                                        const _0x86c5ac = _0x476e55;
                                        return _0x54d84f[_0x86c5ac(0x1ab)]();
                                      })
                                      [_0x476e55(0x1bc)](function (_0x590306) {
                                        const _0x4e41c0 = _0x476e55;
                                        _0x35c954 = _0x590306[_0x4e41c0(0x1a7)];
                                        _0x50b1ee >= 0x32
                                          ? ((n = 0x31),
                                            (_0x50b1ee = _0x50b1ee - 0x32))
                                          : ((n = _0x50b1ee),
                                            (_0x50b1ee = _0x50b1ee - 0x32));
                                        for (
                                          _0x216bcf = 0x0;
                                          _0x216bcf <= n;
                                          _0x216bcf++
                                        ) {
                                          if (
                                            _0x91752f == n1 - 0x1 ||
                                            (_0x91752f >= n1 - 0x1 &&
                                              _0x91752f < n2)
                                          ) {
                                            _0x267eeb =
                                              _0x590306["items"][_0x216bcf];
                                            if (_0x267eeb == null) continue;
                                            _0x476320 =
                                              _0x267eeb[_0x4e41c0(0x1c4)][
                                                _0x4e41c0(0x1af)
                                              ];
                                            const _0x524a4c =
                                              _0x4e41c0(0x1ca) +
                                              _0x158f0a +
                                              _0x4e41c0(0x1ce) +
                                              _0x476320 +
                                              _0x4e41c0(0x1b0);
                                            fetch(_0x524a4c)
                                              [_0x4e41c0(0x1bc)](
                                                (_0x564fba) => {
                                                  const _0x2e235f = _0x4e41c0;
                                                  return _0x564fba[
                                                    _0x2e235f(0x1ab)
                                                  ]();
                                                }
                                              )
                                              [_0x4e41c0(0x1bc)](function (
                                                _0x2a6642
                                              ) {
                                                const _0x47c3ec = _0x4e41c0;
                                                let _0x52d3ee =
                                                  _0x2a6642[
                                                    _0x47c3ec(0x1b1)
                                                  ][0x0];
                                                if (_0x52d3ee == null) {
                                                } else {
                                                  let _0x121df6 =
                                                    _0x52d3ee[_0x47c3ec(0x1c4)][
                                                      _0x47c3ec(0x1a3)
                                                    ];
                                                  (time =
                                                    time +
                                                    YTDurationToSeconds(
                                                      _0x121df6
                                                    )),
                                                    (_0x3a0f19 =
                                                      _0x3a0f19 +
                                                      YTDurationToSeconds(
                                                        _0x121df6
                                                      ));
                                                }
                                                l++,
                                                  x == 0x1 &&
                                                    (addondisplay(time, 0x1),
                                                    atspeed(time / 1.25, 1.25),
                                                    atspeed(time / 1.5, 1.5),
                                                    atspeed(time / 1.75, 1.75),
                                                    atspeed(time / 0x2, 0x2)),
                                                  x--;
                                              });
                                          }
                                          _0x91752f++;
                                        }
                                        if (_0x50b1ee > 0x0) {
                                          const _0x30a440 =
                                            _0x4e41c0(0x1a8) +
                                            _0x158f0a +
                                            _0x4e41c0(0x1cc) +
                                            _0x39936c +
                                            "&pageToken=" +
                                            _0x35c954;
                                          fetch(_0x30a440)
                                            [_0x4e41c0(0x1bc)]((_0x28837a) => {
                                              const _0x158372 = _0x4e41c0;
                                              return _0x28837a[
                                                _0x158372(0x1ab)
                                              ]();
                                            })
                                            [_0x4e41c0(0x1bc)](function (
                                              _0x22dea8
                                            ) {
                                              const _0x3f3776 = _0x4e41c0;
                                              _0x35c954 =
                                                _0x22dea8[_0x3f3776(0x1a7)];
                                              _0x50b1ee >= 0x32
                                                ? ((n = 0x31),
                                                  (_0x50b1ee =
                                                    _0x50b1ee - 0x32))
                                                : ((n = _0x50b1ee),
                                                  (_0x50b1ee =
                                                    _0x50b1ee - 0x32));
                                              for (
                                                _0x216bcf = 0x0;
                                                _0x216bcf <= n;
                                                _0x216bcf++
                                              ) {
                                                if (
                                                  _0x91752f == n1 - 0x1 ||
                                                  (_0x91752f >= n1 - 0x1 &&
                                                    _0x91752f < n2)
                                                ) {
                                                  _0x267eeb =
                                                    _0x22dea8[_0x3f3776(0x1b1)][
                                                      _0x216bcf
                                                    ];
                                                  if (_0x267eeb == null)
                                                    continue;
                                                  _0x476320 =
                                                    _0x267eeb[_0x3f3776(0x1c4)][
                                                      _0x3f3776(0x1af)
                                                    ];
                                                  const _0x30ffa2 =
                                                    _0x3f3776(0x1ca) +
                                                    _0x158f0a +
                                                    _0x3f3776(0x1ce) +
                                                    _0x476320 +
                                                    _0x3f3776(0x1b0);
                                                  fetch(_0x30ffa2)
                                                    ["then"]((_0x5d0227) => {
                                                      const _0x1b3c4f =
                                                        _0x3f3776;
                                                      return _0x5d0227[
                                                        _0x1b3c4f(0x1ab)
                                                      ]();
                                                    })
                                                    ["then"](function (
                                                      _0x5c3107
                                                    ) {
                                                      const _0x24a199 =
                                                        _0x3f3776;
                                                      let _0x293c20 =
                                                        _0x5c3107["items"][0x0];
                                                      if (_0x293c20 == null) {
                                                      } else {
                                                        let _0xa9a370 =
                                                          _0x293c20[
                                                            _0x24a199(0x1c4)
                                                          ][_0x24a199(0x1a3)];
                                                        (time =
                                                          time +
                                                          YTDurationToSeconds(
                                                            _0xa9a370
                                                          )),
                                                          (_0x3a0f19 =
                                                            _0x3a0f19 +
                                                            YTDurationToSeconds(
                                                              _0xa9a370
                                                            ));
                                                      }
                                                      l++,
                                                        x == 0x1 &&
                                                          (addondisplay(
                                                            time,
                                                            0x1
                                                          ),
                                                          atspeed(
                                                            time / 1.25,
                                                            1.25
                                                          ),
                                                          atspeed(
                                                            time / 1.5,
                                                            1.5
                                                          ),
                                                          atspeed(
                                                            time / 1.75,
                                                            1.75
                                                          ),
                                                          atspeed(
                                                            time / 0x2,
                                                            0x2
                                                          )),
                                                        x--;
                                                    });
                                                }
                                                _0x91752f++;
                                              }
                                              if (_0x50b1ee > 0x0) {
                                                const _0x576f89 =
                                                  _0x3f3776(0x1a8) +
                                                  _0x158f0a +
                                                  _0x3f3776(0x1cc) +
                                                  _0x39936c +
                                                  _0x3f3776(0x1a4) +
                                                  _0x35c954;
                                                fetch(_0x576f89)
                                                  [_0x3f3776(0x1bc)](
                                                    (_0x1ebd6e) => {
                                                      const _0x2ed46f =
                                                        _0x3f3776;
                                                      return _0x1ebd6e[
                                                        _0x2ed46f(0x1ab)
                                                      ]();
                                                    }
                                                  )
                                                  ["then"](function (
                                                    _0x21e441
                                                  ) {
                                                    const _0x32c50c = _0x3f3776;
                                                    _0x35c954 =
                                                      _0x21e441[
                                                        _0x32c50c(0x1a7)
                                                      ];
                                                    _0x50b1ee >= 0x32
                                                      ? ((n = 0x31),
                                                        (_0x50b1ee =
                                                          _0x50b1ee - 0x32))
                                                      : ((n = _0x50b1ee),
                                                        (_0x50b1ee =
                                                          _0x50b1ee - 0x32));
                                                    for (
                                                      _0x216bcf = 0x0;
                                                      _0x216bcf <= n;
                                                      _0x216bcf++
                                                    ) {
                                                      if (
                                                        _0x91752f == n1 - 0x1 ||
                                                        (_0x91752f >=
                                                          n1 - 0x1 &&
                                                          _0x91752f < n2)
                                                      ) {
                                                        _0x267eeb =
                                                          _0x21e441[
                                                            _0x32c50c(0x1b1)
                                                          ][_0x216bcf];
                                                        if (_0x267eeb == null)
                                                          continue;
                                                        _0x476320 =
                                                          _0x267eeb[
                                                            _0x32c50c(0x1c4)
                                                          ][_0x32c50c(0x1af)];
                                                        const _0xcfbbc7 =
                                                          "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=" +
                                                          _0x158f0a +
                                                          "&id=" +
                                                          _0x476320 +
                                                          _0x32c50c(0x1b0);
                                                        fetch(_0xcfbbc7)
                                                          [_0x32c50c(0x1bc)](
                                                            (_0x2c436d) => {
                                                              const _0x5a6b6f =
                                                                _0x32c50c;
                                                              return _0x2c436d[
                                                                _0x5a6b6f(0x1ab)
                                                              ]();
                                                            }
                                                          )
                                                          [_0x32c50c(0x1bc)](
                                                            function (
                                                              _0x5884d4
                                                            ) {
                                                              const _0x253e59 =
                                                                _0x32c50c;
                                                              let _0x44e14d =
                                                                _0x5884d4[
                                                                  "items"
                                                                ][0x0];
                                                              if (
                                                                _0x44e14d ==
                                                                null
                                                              ) {
                                                              } else {
                                                                let _0x48fba1 =
                                                                  _0x44e14d[
                                                                    "contentDetails"
                                                                  ][
                                                                    _0x253e59(
                                                                      0x1a3
                                                                    )
                                                                  ];
                                                                (time =
                                                                  time +
                                                                  YTDurationToSeconds(
                                                                    _0x48fba1
                                                                  )),
                                                                  (_0x3a0f19 =
                                                                    _0x3a0f19 +
                                                                    YTDurationToSeconds(
                                                                      _0x48fba1
                                                                    ));
                                                              }
                                                              l++,
                                                                x == 0x1 &&
                                                                  (addondisplay(
                                                                    time,
                                                                    0x1
                                                                  ),
                                                                  atspeed(
                                                                    time / 1.25,
                                                                    1.25
                                                                  ),
                                                                  atspeed(
                                                                    time / 1.5,
                                                                    1.5
                                                                  ),
                                                                  atspeed(
                                                                    time / 1.75,
                                                                    1.75
                                                                  ),
                                                                  atspeed(
                                                                    time / 0x2,
                                                                    0x2
                                                                  )),
                                                                x--;
                                                            }
                                                          );
                                                      }
                                                      _0x91752f++;
                                                    }
                                                    if (_0x50b1ee > 0x0) {
                                                      const _0x39d976 =
                                                        "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&fields=items/contentDetails/videoId,nextPageToken,pageInfo&key=" +
                                                        _0x158f0a +
                                                        "&playlistId=" +
                                                        _0x39936c +
                                                        "&pageToken=" +
                                                        _0x35c954;
                                                      fetch(_0x39d976)
                                                        [_0x32c50c(0x1bc)](
                                                          (_0x48385d) => {
                                                            return _0x48385d[
                                                              "json"
                                                            ]();
                                                          }
                                                        )
                                                        [_0x32c50c(0x1bc)](
                                                          function (_0x44d4c2) {
                                                            const _0x48bce5 =
                                                              _0x32c50c;
                                                            _0x35c954 =
                                                              _0x44d4c2[
                                                                _0x48bce5(0x1a7)
                                                              ];
                                                            _0x50b1ee >= 0x32
                                                              ? ((n = 0x31),
                                                                (_0x50b1ee =
                                                                  _0x50b1ee -
                                                                  0x32))
                                                              : ((n =
                                                                  _0x50b1ee),
                                                                (_0x50b1ee =
                                                                  _0x50b1ee -
                                                                  0x32));
                                                            for (
                                                              _0x216bcf = 0x0;
                                                              _0x216bcf <= n;
                                                              _0x216bcf++
                                                            ) {
                                                              if (
                                                                _0x91752f ==
                                                                  n1 - 0x1 ||
                                                                (_0x91752f >=
                                                                  n1 - 0x1 &&
                                                                  _0x91752f <
                                                                    n2)
                                                              ) {
                                                                _0x267eeb =
                                                                  _0x44d4c2[
                                                                    "items"
                                                                  ][_0x216bcf];
                                                                if (
                                                                  _0x267eeb ==
                                                                  null
                                                                )
                                                                  continue;
                                                                _0x476320 =
                                                                  _0x267eeb[
                                                                    _0x48bce5(
                                                                      0x1c4
                                                                    )
                                                                  ]["videoId"];
                                                                const _0x1ce2ee =
                                                                  _0x48bce5(
                                                                    0x1ca
                                                                  ) +
                                                                  _0x158f0a +
                                                                  _0x48bce5(
                                                                    0x1ce
                                                                  ) +
                                                                  _0x476320 +
                                                                  "&fields=items/contentDetails/duration";
                                                                fetch(_0x1ce2ee)
                                                                  [
                                                                    _0x48bce5(
                                                                      0x1bc
                                                                    )
                                                                  ](
                                                                    (
                                                                      _0x2385f7
                                                                    ) => {
                                                                      const _0x17b59d =
                                                                        _0x48bce5;
                                                                      return _0x2385f7[
                                                                        _0x17b59d(
                                                                          0x1ab
                                                                        )
                                                                      ]();
                                                                    }
                                                                  )
                                                                  [
                                                                    _0x48bce5(
                                                                      0x1bc
                                                                    )
                                                                  ](function (
                                                                    _0x42a78d
                                                                  ) {
                                                                    const _0x84df1f =
                                                                      _0x48bce5;
                                                                    let _0x43e60e =
                                                                      _0x42a78d[
                                                                        "items"
                                                                      ][0x0];
                                                                    if (
                                                                      _0x43e60e ==
                                                                      null
                                                                    ) {
                                                                    } else {
                                                                      let _0x268911 =
                                                                        _0x43e60e[
                                                                          "contentDetails"
                                                                        ][
                                                                          _0x84df1f(
                                                                            0x1a3
                                                                          )
                                                                        ];
                                                                      (time =
                                                                        time +
                                                                        YTDurationToSeconds(
                                                                          _0x268911
                                                                        )),
                                                                        (_0x3a0f19 =
                                                                          _0x3a0f19 +
                                                                          YTDurationToSeconds(
                                                                            _0x268911
                                                                          ));
                                                                    }
                                                                    l++,
                                                                      x ==
                                                                        0x1 &&
                                                                        (addondisplay(
                                                                          time,
                                                                          0x1
                                                                        ),
                                                                        atspeed(
                                                                          time /
                                                                            1.25,
                                                                          1.25
                                                                        ),
                                                                        atspeed(
                                                                          time /
                                                                            1.5,
                                                                          1.5
                                                                        ),
                                                                        atspeed(
                                                                          time /
                                                                            1.75,
                                                                          1.75
                                                                        ),
                                                                        atspeed(
                                                                          time /
                                                                            0x2,
                                                                          0x2
                                                                        )),
                                                                      x--;
                                                                  });
                                                              }
                                                              _0x91752f++;
                                                            }
                                                          }
                                                        );
                                                    }
                                                  });
                                              }
                                            });
                                        }
                                      });
                                  }
                                });
                            }
                          });
                      }
                    });
                }
              });
          }
        }),
        (time = 0x0);
    })
    ["catch"](function (_0x411275) {
      const _0x49cfa0 = _0x31348c;
      (div1[_0x49cfa0(0x1b8)] =
        "The\x20playlist\x20identified\x20with\x20the\x20request\x27s\x20playlistId\x20parameter\x20cannot\x20be\x20found\x20or\x20video\x20numbers\x20filled\x20are\x20wrong."),
        (cal[_0x49cfa0(0x1b8)] = _0x49cfa0(0x1d3));
    });
}
function _0x528b() {
  const _0x164973 = [
    "1TEHlpi",
    "div",
    "4163589MHPiqD",
    "contentDetails",
    "floor",
    "createElement",
    "result",
    "edit1",
    "136808VOczMC",
    "https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&key=",
    "290802abzCpk",
    "&playlistId=",
    "map",
    "&id=",
    "<i\x20class=\x22fa\x20fa-spinner\x20fa-spin\x22></i>",
    "concat",
    "toFixed",
    "results",
    "Calculate",
    "Please\x20fill\x20correct\x20video\x20number.",
    "Length\x20of\x20playlist\x20from\x20Video\x20No.\x20",
    "At\x20",
    "pageInfo",
    "getElementById",
    "classList",
    "8PuoiYm",
    "Total\x20Videos\x20in\x20playlist\x20:\x20",
    "19535910TxvRMf",
    "\x20to\x20",
    "log",
    "cal",
    "duration",
    "&pageToken=",
    "517165AYrhZs",
    "AIzaSyDCskWpTFkgZT4CEnW-3TU8k3QZZbtoTxA",
    "nextPageToken",
    "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&fields=items/contentDetails/videoId,nextPageToken,pageInfo&key=",
    "\x20Hours,\x20",
    "addEventListener",
    "json",
    "form1",
    "\x20Minutes,\x20",
    "appendChild",
    "videoId",
    "&fields=items/contentDetails/duration",
    "items",
    "style",
    "2126406iTviBf",
    "x\x20:\x20",
    "920026LPPEtF",
    "20px\x200",
    "12idpAOh",
    "innerHTML",
    "remove",
    "add",
    "margin",
    "then",
    "click",
    "totalResults",
    "18px",
    "value",
  ];
  _0x528b = function () {
    return _0x164973;
  };
  return _0x528b();
}
function _0x26c0(_0x503226, _0xa783c4) {
  const _0x528bc4 = _0x528b();
  return (
    (_0x26c0 = function (_0x26c07f, _0x51a592) {
      _0x26c07f = _0x26c07f - 0x19a;
      let _0x2b3c9d = _0x528bc4[_0x26c07f];
      return _0x2b3c9d;
    }),
    _0x26c0(_0x503226, _0xa783c4)
  );
}
function addondisplay(_0x1dc9f0) {
  const _0x4f74f1 = _0x5c83f3;
  var _0x329c6b = Math["floor"](_0x1dc9f0 / 0xe10);
  _0x1dc9f0 = _0x1dc9f0 - _0x329c6b * 0xe10;
  var _0x1b1052 = Math[_0x4f74f1(0x1c5)](_0x1dc9f0 / 0x3c);
  (_0x1dc9f0 = Math["floor"](_0x1dc9f0 - _0x1b1052 * 0x3c)),
    (div1[_0x4f74f1(0x1b8)] = _0x4f74f1(0x19e) + total + "<br><br>"),
    (div1[_0x4f74f1(0x1b8)] +=
      _0x4f74f1(0x1d5) +
      n1 +
      _0x4f74f1(0x1a0) +
      n2 +
      "\x20is\x20:\x20" +
      _0x329c6b +
      _0x4f74f1(0x1a9) +
      _0x1b1052 +
      _0x4f74f1(0x1ad) +
      _0x1dc9f0 +
      "\x20seconds<br><br>");
}
function atspeed(_0x40f00e, _0x472294) {
  const _0x2b8dc5 = _0x5c83f3;
  var _0x1f7bf5 = Math[_0x2b8dc5(0x1c5)](_0x40f00e / 0xe10);
  _0x40f00e = _0x40f00e - _0x1f7bf5 * 0xe10;
  var _0x33f65a = Math[_0x2b8dc5(0x1c5)](_0x40f00e / 0x3c);
  (_0x40f00e = Math["floor"](_0x40f00e - _0x33f65a * 0x3c)),
    (_0x472294 = _0x472294[_0x2b8dc5(0x1d1)](0x2)),
    (div1["innerHTML"] +=
      _0x2b8dc5(0x1d6) +
      _0x472294 +
      _0x2b8dc5(0x1b4) +
      _0x1f7bf5 +
      _0x2b8dc5(0x1a9) +
      _0x33f65a +
      _0x2b8dc5(0x1ad) +
      _0x40f00e +
      "\x20seconds<br><br>"),
    (document[_0x2b8dc5(0x19b)](_0x2b8dc5(0x1ac))[_0x2b8dc5(0x1c0)] = ""),
    (div2["value"] = ""),
    (div3[_0x2b8dc5(0x1c0)] = ""),
    (cal[_0x2b8dc5(0x1b8)] = _0x2b8dc5(0x1d3));
}
