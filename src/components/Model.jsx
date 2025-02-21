import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      })
    }

    if(size ==='small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      })
    }
  }, [size])

  useGSAP(() => {
    // Removed the animation for the 'Take a closer look' section
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView 
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              size={size}
              item={model}
            />
          </div>
          <h2 className="text-center mt-4">iPhone 15 Pro in {model.color[0]}</h2>
          <div className="flex justify-center mt-4">
            <button onClick={() => setModel(models[0])} className="mx-2">Color 1</button>
            <button onClick={() => setModel(models[1])} className="mx-2">Color 2</button>
            <button onClick={() => setModel(models[2])} className="mx-2">Color 3</button>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={() => setSize('small')} className="mx-2">Small</button>
            <button onClick={() => setSize('large')} className="mx-2">Large</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model