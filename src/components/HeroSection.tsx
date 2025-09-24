
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import developerIllustration from '@/assets/developer-illustration.jpg';

const HeroSection = () => {
  // Canvas ref for interactive lines
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store mouse position and lines
  useEffect(() => {
  // ...removed console.log
    const canvas = canvasRef.current;
  if (!canvas) { /* Canvas ref not found (inside useEffect) */ return; }
    const ctx = canvas.getContext('2d');
  if (!ctx) { /* Canvas context not found */ return; }
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
  // ...removed console.log
    const mouse = { x: width / 2, y: height / 2 };
    const lines: { x: number; y: number; vx: number; vy: number; hue: number }[] = [];
    // Initialize lines
    for (let i = 0; i < 16; i++) {
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        hue: Math.random() * 360,
      });
    }
  // ...removed console.log
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      // HiDPI support
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
  // ...removed console.log
    }
    resize();
    window.addEventListener('resize', resize);
    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        // Animate
        l.x += l.vx;
        l.y += l.vy;
        // Bounce off edges
        if (l.x < 0 || l.x > width) l.vx *= -1;
        if (l.y < 0 || l.y > height) l.vy *= -1;
        // Attract to mouse
        const dx = mouse.x - l.x;
        const dy = mouse.y - l.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (i === 0 && (performance.now() % 60 < 2)) {
          // Log the first line's position and mouse occasionally
          // ...removed console.log
        }
        if (dist < 180) {
          l.vx += dx / dist * 0.05;
          l.vy += dy / dist * 0.05;
        }
        // Draw line to mouse if close
        if (dist < 180) {
          ctx.save();
          ctx.strokeStyle = `hsl(${l.hue}, 80%, 60%)`;
          ctx.globalAlpha = 0.25 + 0.75 * (1 - dist / 180);
          ctx.beginPath();
          ctx.moveTo(l.x, l.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.restore();
        }
        // Draw node
        ctx.save();
        ctx.beginPath();
        ctx.arc(l.x, l.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${l.hue}, 80%, 60%)`;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.restore();
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    // Mouse move
    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    // On click, burst lines from mouse
    function onClick(e: MouseEvent) {
      for (let i = 0; i < 6; i++) {
        lines.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          hue: Math.random() * 360,
        });
      }
      if (lines.length > 32) lines.splice(0, lines.length - 32);
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden network-bg">
      {/* Interactive flowing lines canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 2, pointerEvents: 'auto' }} />
      {/* Animated background elements - creative network/cyber effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        {/* SVG grid background */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex:1}}>
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        {/* Animated network lines */}
        <svg className="absolute left-1/4 top-1/4 w-1/2 h-1/2 opacity-40 animate-spin-slow" style={{zIndex:2}}>
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
        <svg className="absolute right-10 bottom-10 w-1/4 h-1/4 opacity-30 animate-spin-reverse" style={{zIndex:2}}>
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#a78bfa" strokeWidth="2" strokeDasharray="6 6" rx="20" />
        </svg>

        {/* Floating icons */}
        <span className="absolute left-10 top-1/3 text-3xl animate-float-slow" style={{zIndex:3}} role="img" aria-label="bolt">⚡</span>
        <span className="absolute right-1/4 top-10 text-2xl animate-float" style={{zIndex:3}} role="img" aria-label="lock">🔒</span>
        <span className="absolute left-1/2 bottom-10 text-2xl animate-float" style={{zIndex:3}} role="img" aria-label="atom">⚛️</span>
        <span className="absolute right-1/3 bottom-1/4 text-2xl animate-float-slow" style={{zIndex:3}} role="img" aria-label="chip">💾</span>

        {/* Pulsing dots */}
        <div className="absolute w-2 h-2 bg-primary/30 rounded-full top-20 left-1/4 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-accent/40 rounded-full top-1/3 right-1/4 animate-pulse delay-1000"></div>
        <div className="absolute w-4 h-4 bg-secondary/30 rounded-full bottom-1/4 left-1/3 animate-pulse delay-2000"></div>
        <div className="absolute w-1 h-1 bg-foreground/20 rounded-full bottom-10 right-1/2 animate-pulse delay-1500"></div>
      </div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl text-foreground">Hi There,</h2>
              <h1 className="text-4xl lg:text-6xl font-bold">
                I'm <span className="text-primary">0xV41BH4V</span> <span className="text-base align-super text-muted-foreground">0xV41BH4V</span> Patil
              </h1>
              <div className="text-xl text-muted-foreground">
                I Am Into <span className="text-primary">Tech Enthusiast</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full text-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Linkedin size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Github size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 relative floating">
                <img 
                  src={developerIllustration} 
                  alt="Developer working on computer"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;