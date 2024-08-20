import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloaders = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const preloaderRef = useRef(null);

  useEffect(() => {
    const countTween = gsap.to(
      {},
      {
        duration: 3,
        onUpdate: () => {
          const progress = countTween.progress();
          const newCount = Math.round(progress * 100);
          setCount(newCount);
        },
        onComplete: () => {
          console.log("Counting complete");
        },
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        console.log("Animation complete");
        if (onComplete) onComplete();
      },
    });

    tl.add(countTween)
      .to({}, { duration: 1 }) // Add a delay of 1 second
      .to(preloaderRef.current, { y: "-100%", duration: 1 });

    return () => {
      countTween.kill();
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} style={styles.preloader}>
      {count}
    </div>
  );
};

const styles = {
  preloader: {
    overflow: "hidden",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    fontSize: "200px",
    fontFamily: "Arial, sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
};

export default Preloaders;
