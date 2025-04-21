import './Particles.css';
export function ParticlesDummy() {
  return (
    <>
      <div className='particle-container-dummy'></div>
    </>
  );
}


import { PtsCanvas } from "react-pts-canvas";
import { Line, Util, Pt, Circle } from "pts";

export function Particles() {

  let pts = [ { x: 191, y: 192, size: 11 }, { x: 180, y: 175, size: 7 }, { x: 174, y: 204, size: 7 } ];
  let isCanvasActive = true;
  // mouseEnter as prop on PtsCanvas?
  return (
    <PtsCanvas
      name={"real-particle"}
      onReady={(space) => {
        space.setup({ bgcolor: "#ff0000" }); //F0EAD6
        pts = pts
          .map((p) => (p = { pts: new Pt(p.x, p.y), size: p.size }))
          .map((p) => ({
            origin: p.pts.clone(),
            current: p.pts.clone(),
            velocity: new Pt(0, 0),
            size: p.size,
          }));
      }}
      onAnimate={(space, form) => {
        let r =
          Math.abs(space.pointer.x - space.center.x) / space.center.x + 100;
        let range = Circle.fromCenter(space.pointer, r);

        for (let i = 0; i < pts.length; i++) {
          form.fillOnly("#4F4F4F").point(pts[i].current, pts[i].size, "circle");
          let dir = pts[i].current.$subtract(space.pointer);
          let dist = dir.magnitude();

          if (Circle.withinBound(range, pts[i].current) && isCanvasActive) {
            let force = dir.unit().multiply(((r - dist) * 0.1) / pts[i].size);
            pts[i].velocity.add(force);
          }

          let origin = pts[i].origin.$subtract(pts[i].current).multiply(0.05);
          pts[i].velocity.add(origin);

          pts[i].velocity.multiply(0.7);
          pts[i].current.add(pts[i].velocity);
        }
      }}
    />
  );
}