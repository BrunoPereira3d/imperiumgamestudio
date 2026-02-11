import { useEffect, useRef } from "react";

export function useCursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Array<{ x: number; y: number; life: number }>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Create trail container
    const trail = document.createElement("div");
    trail.id = "cursor-trail";
    trail.style.position = "fixed";
    trail.style.top = "0";
    trail.style.left = "0";
    trail.style.width = "100%";
    trail.style.height = "100%";
    trail.style.pointerEvents = "none";
    trail.style.zIndex = "9999";
    document.body.appendChild(trail);
    trailRef.current = trail;

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosRef.current = { x: e.clientX, y: e.clientY };

      // Add particle
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
      });

      // Keep only last 30 particles
      if (particlesRef.current.length > 30) {
        particlesRef.current.shift();
      }
    };

    const animate = () => {
      if (!trailRef.current) return;

      // Clear previous frame
      trailRef.current.innerHTML = "";

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 0.05;
        return particle.life > 0;
      });

      particlesRef.current.forEach((particle) => {
        const dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.left = particle.x + "px";
        dot.style.top = particle.y + "px";
        dot.style.width = 4 + particle.life * 2 + "px";
        dot.style.height = 4 + particle.life * 2 + "px";
        dot.style.backgroundColor = `#C61331`;
        dot.style.borderRadius = "50%";
        dot.style.transform = "translate(-50%, -50%)";
        dot.style.opacity = particle.life.toString();
        dot.style.boxShadow = `0 0 ${8 * particle.life}px rgba(198, 19, 49, ${particle.life * 0.5})`;
        trailRef.current?.appendChild(dot);
      });

      // Add white hot spot at cursor position
      const hotSpot = document.createElement("div");
      hotSpot.style.position = "absolute";
      hotSpot.style.left = lastMousePosRef.current.x + "px";
      hotSpot.style.top = lastMousePosRef.current.y + "px";
      hotSpot.style.width = "8px";
      hotSpot.style.height = "8px";
      hotSpot.style.backgroundColor = "#FFFFFF";
      hotSpot.style.borderRadius = "50%";
      hotSpot.style.transform = "translate(-50%, -50%)";
      hotSpot.style.boxShadow = "0 0 12px rgba(255, 255, 255, 0.8), 0 0 24px rgba(198, 19, 49, 0.6)";
      trailRef.current?.appendChild(hotSpot);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (trailRef.current?.parentNode) {
        trailRef.current.parentNode.removeChild(trailRef.current);
      }
      document.body.style.cursor = "auto";
    };
  }, []);
}
