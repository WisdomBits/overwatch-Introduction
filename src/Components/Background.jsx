'use client'
import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = ({options}) => {
    const [particlesInit, setParticlesInit] = useState(false);

        const particlesLoaded = (container) => {
            console.log("Particles Loaded:", container);
        }
    
        useEffect(() => {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setParticlesInit(true);
                console.log("Particles engine initialized");
            });
        }, [])
  return (<>
      {particlesInit && (
            <Particles
                id="tsparticles"
                options={options}
                particlesLoaded={particlesLoaded}
            />
        )
        }
  </>)
}

export default Background