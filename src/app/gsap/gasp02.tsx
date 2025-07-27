
import React, { useEffect, useRef } from "react";

const Gsap02 = () => {

    const boxRef = useRef(null);

    useEffect(()=>{

        const element = boxRef.current;
        if(!element) return;

       const animation = gsap.to(element,{
        ScrollTrigger : {
            trigger : elementm, //어떤 요소를 만났을 때 애니메이션 시작
            start : 'top 80%', //요소의 top부분이 뷰포트 80% 지점에 도달했을 때 애니메이션
        }
       })
    })

  return (
    <section className="h-[200vh] flex justify-center items-center">
      <div className="size-20 bg-red-600">BOX</div>
    </section>
  );
};

export default Gsap02;