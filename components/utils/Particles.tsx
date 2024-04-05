'use client';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: ''
        }
      },
      fpsLimit: 120,
      interactivity: {
        detect_on: 'window',
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: {
            enable: true
          }
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#fe036a'
        },
        links: {
          color: '#636f80',
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 80
        },
        opacity: {
          value: 0.7
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (init) {
    return (
      <div className='hidden sm:block w-full h-full absolute z-[-1]'>
        <Particles id='tsparticles' particlesLoaded={particlesLoaded} options={options} className='w-full h-full' />
      </div>
    );
  }

  return <></>;
}
