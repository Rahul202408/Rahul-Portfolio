import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentRef = mountRef.current;
    if (!currentRef) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050714, 0.0015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentRef.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa855f7, 3, 100);
    pointLight2.position.set(-20, -20, -10);
    scene.add(pointLight2);

    // 3D Objects Group
    const group = new THREE.Group();
    scene.add(group);

    // Main 3D Floating Torus Knot
    const geometry = new THREE.TorusKnotGeometry(8, 2.5, 120, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      emissive: 0x0f172a,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.position.set(15, 0, -10);
    group.add(torusKnot);

    // Orbiting 3D Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(5, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoMat);
    icoMesh.position.set(-18, 8, -5);
    group.add(icoMesh);

    // Orbiting Octahedron
    const octaGeom = new THREE.OctahedronGeometry(4, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const octaMesh = new THREE.Mesh(octaGeom, octaMat);
    octaMesh.position.set(-10, -12, 5);
    group.add(octaMesh);

    // Starfield Particles
    const particlesCount = 1200;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    const color1 = new THREE.Color(0x06b6d4);
    const color2 = new THREE.Color(0xa855f7);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 120;
      posArray[i + 1] = (Math.random() - 0.5) * 120;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colorArray[i] = mixedColor.r;
      colorArray[i + 1] = mixedColor.g;
      colorArray[i + 2] = mixedColor.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate 3D Objects
      torusKnot.rotation.x = elapsedTime * 0.2;
      torusKnot.rotation.y = elapsedTime * 0.3;

      icoMesh.rotation.x = -elapsedTime * 0.25;
      icoMesh.rotation.z = elapsedTime * 0.15;

      octaMesh.rotation.y = elapsedTime * 0.4;

      particlesMesh.rotation.y = elapsedTime * 0.05;

      // Mouse Parallax Lerp
      targetX = mouseX * 3;
      targetY = mouseY * 3;

      group.rotation.y += 0.05 * (targetX - group.rotation.y);
      group.rotation.x += 0.05 * (targetY - group.rotation.x);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentRef && renderer.domElement) {
        currentRef.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
