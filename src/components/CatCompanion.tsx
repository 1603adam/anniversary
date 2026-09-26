import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  onPet?: (clientX: number, clientY: number) => void;
};

/**
 * A modern, minimalist black cat — soft matte fur, warm honey eyes,
 * gentle rim light so the silhouette reads against cream paper.
 */
export default function CatCompanion({ onPet }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onPetRef = useRef(onPet);
  onPetRef.current = onPet;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const size = 150;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
    camera.position.set(0, 0.1, 7.4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // Lighting: soft key, warm fill, pink + peach rim to sculpt the black fur
    scene.add(new THREE.HemisphereLight(0xfff1e6, 0x3a2a30, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2.5, 3.5, 4);
    scene.add(key);
    const rimL = new THREE.DirectionalLight(0xf6b8c8, 1.6);
    rimL.position.set(-4, 1.5, -2);
    scene.add(rimL);
    const rimR = new THREE.DirectionalLight(0xf7d9b5, 1.2);
    rimR.position.set(4, -0.5, -2.5);
    scene.add(rimR);

    const fur = new THREE.MeshStandardMaterial({
      color: 0x1c181b,
      roughness: 0.82,
      metalness: 0.05,
    });
    const innerEar = new THREE.MeshStandardMaterial({
      color: 0x8c5a68,
      roughness: 0.9,
    });
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xf2c96a,
      emissive: 0xe0a83a,
      emissiveIntensity: 0.55,
      roughness: 0.25,
    });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x0c0a0b, roughness: 0.3 });
    const glintMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const noseMat = new THREE.MeshStandardMaterial({ color: 0xf2a3b3, roughness: 0.5 });
    const blushMat = new THREE.MeshStandardMaterial({
      color: 0xf29bb0,
      roughness: 1,
      transparent: true,
      opacity: 0.32,
    });

    const cat = new THREE.Group();
    scene.add(cat);

    // Head — a soft rounded dome
    const head = new THREE.Mesh(new THREE.SphereGeometry(1.1, 64, 64), fur);
    head.scale.set(1.08, 0.96, 0.95);
    cat.add(head);

    // Cheeks give the classic wide-cat silhouette
    const cheekL = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), fur);
    cheekL.position.set(-0.7, -0.38, 0.4);
    cheekL.scale.set(1.15, 0.85, 0.9);
    const cheekR = cheekL.clone();
    cheekR.position.x = 0.7;
    cat.add(cheekL, cheekR);

    // Ears — clean triangles
    function makeEar(side: number) {
      const g = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.7, 4, 1), fur);
      outer.rotation.y = Math.PI / 4;
      const inner = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.36, 4, 1), innerEar);
      inner.rotation.y = Math.PI / 4;
      inner.position.set(0, -0.08, 0.16);
      g.add(outer, inner);
      g.position.set(side * 0.66, 0.92, 0);
      g.rotation.z = side * -0.34;
      return g;
    }
    const earL = makeEar(-1);
    const earR = makeEar(1);
    cat.add(earL, earR);

    // Eyes — almond shaped honey eyes with slit pupils
    function makeEye(side: number) {
      const g = new THREE.Group();
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 32), eyeMat);
      ball.scale.set(1.15, 1, 0.55);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 20), pupilMat);
      pupil.scale.set(0.5, 1.6, 0.6);
      pupil.position.z = 0.1;
      const glint = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), glintMat);
      glint.position.set(-0.07, 0.08, 0.16);
      g.add(ball, pupil, glint);
      g.position.set(side * 0.4, 0.08, 0.93);
      g.rotation.y = side * 0.25;
      return { g, pupil };
    }
    const eyeL = makeEye(-1);
    const eyeR = makeEye(1);
    cat.add(eyeL.g, eyeR.g);

    // Nose — tiny rounded triangle
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.09, 3), noseMat);
    nose.rotation.x = Math.PI;
    nose.rotation.y = Math.PI / 6;
    nose.position.set(0, -0.2, 1.06);
    cat.add(nose);

    // Blush
    const blushL = new THREE.Mesh(new THREE.CircleGeometry(0.15, 24), blushMat);
    blushL.position.set(-0.62, -0.18, 0.86);
    blushL.rotation.y = -0.45;
    const blushR = blushL.clone();
    blushR.position.x = 0.62;
    blushR.rotation.y = 0.45;
    cat.add(blushL, blushR);

    // Whiskers — thin, quiet lines
    const whiskerMat = new THREE.LineBasicMaterial({
      color: 0xe8dcdc,
      transparent: true,
      opacity: 0.55,
    });
    for (const side of [-1, 1]) {
      for (const [y, tilt] of [
        [-0.12, 0.1],
        [-0.22, 0],
        [-0.32, -0.1],
      ]) {
        const pts = [
          new THREE.Vector3(side * 0.5, y, 0.98),
          new THREE.Vector3(side * 1.45, y + tilt, 0.72),
        ];
        cat.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), whiskerMat));
      }
    }

    cat.position.y = -0.05;
    const baseScale = 1.22;
    cat.scale.setScalar(baseScale);

    // Animation state
    const pointer = { x: 0, y: 0 };
    const rot = { x: 0, y: 0 };
    let lid = 1;
    let blinkClock = 0;
    let nextBlink = 3;
    let squish = 1;
    let happy = 0;
    let dilate = 1;
    let t = 0;
    let raf = 0;
    let alive = true;

    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onTap = (e: PointerEvent) => {
      squish = 0.86;
      happy = 1;
      dilate = 2.2;
      onPetRef.current?.(e.clientX, e.clientY);
      if (navigator.vibrate) navigator.vibrate(10);
    };
    renderer.domElement.addEventListener("pointerdown", onTap);

    const loop = () => {
      if (!alive) return;
      raf = requestAnimationFrame(loop);
      t += 0.016;
      blinkClock += 0.016;

      rot.y += (pointer.x * 0.35 - rot.y) * 0.05;
      rot.x += (-pointer.y * 0.18 - rot.x) * 0.05;
      cat.rotation.y = rot.y;
      cat.rotation.x = rot.x + Math.sin(t * 1.2) * 0.02;
      cat.rotation.z = Math.sin(t * 0.8) * 0.02;
      cat.position.y = -0.05 + Math.sin(t * 1.5) * 0.035;

      squish += (1 - squish) * 0.1;
      cat.scale.set(baseScale * (2 - squish), baseScale * squish, baseScale);

      // blink
      if (blinkClock > nextBlink) {
        lid = Math.max(0.06, lid - 0.22);
        if (lid <= 0.07) {
          blinkClock = 0;
          nextBlink = 2.5 + Math.random() * 3.5;
        }
      } else {
        lid += (1 - lid) * 0.3;
      }
      happy = Math.max(0, happy - 0.012);
      const open = happy > 0 ? 0.12 : lid;
      eyeL.g.scale.y = open;
      eyeR.g.scale.y = open;

      // pupils look & dilate
      dilate += (1 - dilate) * 0.03;
      const lookX = pointer.x * 0.05;
      const lookY = -pointer.y * 0.04;
      for (const eye of [eyeL, eyeR]) {
        eye.pupil.position.x = lookX;
        eye.pupil.position.y = lookY;
        eye.pupil.scale.set(0.5 * dilate, 1.6, 0.6);
      }

      // ear life
      earL.rotation.z = 0.34 + Math.sin(t * 1.7) * 0.03;
      earR.rotation.z = -0.34 + Math.sin(t * 1.7 + 1) * 0.03;

      renderer.render(scene, camera);
    };
    loop();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      renderer.domElement.removeEventListener("pointerdown", onTap);
      scene.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m: THREE.Material) => m.dispose());
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
}
