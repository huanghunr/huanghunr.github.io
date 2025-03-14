!function () {
    function i() {
        scale = window.devicePixelRatio || 1;
        n.width = window.innerWidth * scale;
        n.height = window.innerHeight * scale;
        u.scale(scale, scale);
    }

    function r(n) {
        n = d.indexOf(n);
        if (n > -1) {
            d.splice(n, 1);
        }
    }

    function e(n, e) {
        i();
        var t, a = function (n, e) {
            var t = [];
            for (var a = 0; a < 24; a++) {
                var i = function (n, e) {
                    var t = {};
                    t.x = n;
                    t.y = e;
                    t.color = c[anime.random(0, c.length - 1)];
                    t.radius = anime.random(o(), 2 * o());
                    t.draw = function () {
                        u.beginPath();
                        u.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !0);
                        u.fillStyle = t.color;
                        u.fill();
                    };
                    return t;
                }(n, e);
                t.push(i);
            }
            return t;
        }(n, e);

        n = (e = e, (t = {}).x = n, t.y = e, t.color = c[anime.random(0, c.length - 1)], t.color = "#FFF", t.radius = 0, t.alpha = 1, t.lineWidth = 6, t.draw = function () {
            u.globalAlpha = t.alpha;
            u.beginPath();
            u.arc(t.x, t.y, t.radius, 0, 2 * Math.PI, !0);
            u.lineWidth = t.lineWidth;
            u.strokeStyle = t.color;
            u.stroke();
            u.globalAlpha = 1;
        }, t);

        e = anime({
            targets: a,
            x: function (n) {
                return n.x + anime.random(-200, 200);
            },
            y: function (n) {
                return n.y + anime.random(-200, 200);
            },
            radius: 0,
            duration: function () {
                return anime.random(1200, 1800);
            },
            easing: "easeOutExpo",
            complete: r
        });

        a = anime({
            targets: n,
            radius: function () {
                return anime.random(8.75 * o(), 11.25 * o());
            },
            lineWidth: 0,
            alpha: {
                value: 0,
                easing: "linear",
                duration: function () {
                    return anime.random(400, 600);
                }
            },
            duration: function () {
                return anime.random(1200, 1800);
            },
            easing: "easeOutExpo",
            complete: r
        });

        d.push(e);
        d.push(a);
    }

    var t, a, o = function () {
        return parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    var n = document.getElementById("fireworks"),
        u = n.getContext("2d"),
        d = [],
        c = ["#ff324a", "#31ffa6", "#206eff", "#ffff99"];

    anime({
        duration: 1 / 0,
        update: function () {
            u.clearRect(0, 0, n.width, n.height);
            d.forEach(function (n) {
                n.animatables.forEach(function (n) {
                    n.target.draw();
                });
            });
        }
    });

    document.addEventListener("mousedown", function (n) {
        t = n.clientX;
        a = n.clientY;
        e(t, a);
    }, !1);

    window.addEventListener("resize", i, !1);
}();

