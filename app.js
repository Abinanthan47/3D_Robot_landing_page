

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
  
    // Move the cursor smoothly
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out"
      });
    };
  
    document.addEventListener("mousemove", moveCursor);
  });
  