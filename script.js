var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  //   opacity: 0,
  stagger: 0.25,
  duration: 1,
});

tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 30);
  },
});
tl.to(" .line h2", {
  AnimationName: anime,
  opacity: 1,

  //   stagger: 0.25,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3.5,
});

tl.from("#page1", {
  y: 1200,
  opacity: 0,
  delay: 0.2,
});
tl.to("#loader", {
  display: "none",
  delay: 0.2,
});
