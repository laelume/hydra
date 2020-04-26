// visuals by LAELUME!!! made with <3 using HYDRA

speed=0.002

s0.initCam()
src(s0).out(o0)
render()


osc(159, 1.1, 1.85)
.rotate(72).pixelate(0.9)
.scale(2)
.color(16, 1, 10.8).kaleid(1.6)
.add(
  osc(219, 0.1, 0.85).color(0.5, 1, 0.5)
  .rotate(-30)
)
.modulate(
  osc(12, 30, 15).pixelate(20).kaleid(2.2)
)
.diff(
  osc(10, 10, 10)
  .rotate(-100).pixelate(100).scale(1.5)
  .color(0.5, 1, 2)
)
.repeatX(0.5).repeatY(0.6)
.out(o0)


osc(500, 1, 0.9)
.rotate().pixelate(7)
.color(2, 5, 10).kaleid(3)
.diff(
  osc(10, 1, 2)
  .color(1, 1, 1)
)
.out(o2)

shape([4,3,5].fast(0.5)).out()

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

osc(150, 50, 400)
.color(5, 0.5, 0.8)
//.color(0.3, 0.4, 0.5)
.diff(
  osc(700, 1, 200)
  .color(5, 60, 35)
  .rotate(1)
  .pixelate(1)
  .kaleid(7)
)
//.scrollX()
//.scrollY()
//.luma()
.repeatX()
//.repeatY()
.modulate(
  osc(100, 5, 50)
)
.scale(2)
.out(o2)

osc(15, 50, 400)
.color(1, 0.5, 0.8)
.diff(
  osc(110, 1, 200) //(1300, 1, 200)
  .color([3,1], [3,1], [2,7])
  .rotate(-0.5).kaleid(0)
)
.modulate(
  osc(30, 20, 1)
  .rotate(4)
)
.scale(2)
.out(o3)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

osc(159, 2.9, 9)
.diff(
  osc(20, 15, 10)
  .color(3, 0.2, 2)
  .rotate(0.135)
)
.pixelate(1.3)
.kaleid(4)
.scale(0.090)
.out(o1)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

src(o0).add(o1)
.rotate().luma()
.scrollY()
.scrollX()
.modulate(o2)
.out(o3)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

src(o0).mult(o1).out(o3)

src(o0).add(o1).out(o3)

src(o0).diff(o1).out(o3)

src(o0).mask(o1).out(o3)

src(o0).modulate(o1).out(o3)

src(o1).modulate(o0).out(o3)

src(o0).modulateScale(o1).out(o3)

osc(20, 0.1, 0.6).rotate().pixelate().out(o3)

src(o0).modulateRotate(o1).out(o3)
src(o0).modulateRotate(o2).out(o3)

src(o0).modulatePixelate(o1).out(o3)
