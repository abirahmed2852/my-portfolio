import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function TransitionEffect({ children }) {
  const slideRef = useRef(null);
  const slide2Ref = useRef(null);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowChildren(true)
    });
    tl.to(slideRef.current, { left: "0%", duration: .5 })
      .to(slide2Ref.current, { right: "0%", duration: .5 }, 0)
      tl.to(slideRef.current, { left: "-50%", duration: .5 } ,1)
      .to(slide2Ref.current, { right: "-50%", duration: .5}, 1);
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
         {showChildren && children}
      <div ref={slideRef} className="slide" />
      <div ref={slide2Ref} className="slide2"  />
    </div>
  );
}

export default TransitionEffect;