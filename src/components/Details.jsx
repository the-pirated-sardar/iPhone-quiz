import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            All these details.
            <br /> Do you really care?
          </h2>

          <p className="hiw-subtitle">
            Chips and RAM upgrades are needed to run Apple Intelligence. But it's not even out yet.
            <br />There's always Chinese LLMs like DeepSeek.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    <span className="text-white">
                      Chips and RAM {' '}
                    </span>
                    are kind of important, unless you don't give a crap about AI.
                  </p>
                  <p className="hiw-text g_fadeIn">
                    Maybe you need them for {' '}
                    <span className="text-white">
                      mobile games {' '}
                    </span>
                     too, but do you really want to spend an extra $500 to become a mobile gamer?
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">There's always a new statement like</p>
                <p className="hiw-bigtext">Best Battery Life in the Universe</p>
                <p className="hiw-text">with all these colors that are basically white</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks