import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './pages.css';
import JordanCard from '../components/JordanCard';
// import React from 'react'

function Model({ url }) {
  const [active, setActive] = useState(false);
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      scale={1}
      onClick={(event) => setActive(!active)}
      position={[0,0
        ,0]}
    />
  );
}
const Jordan = () => {
  return (
    <div className="Jordan">
      <div className="container">
    <h2>NIKE</h2>
    <div className="Jordan__hero">
        <div className="Jordan__wrap">
          <div className="Jordan__options card1 ">
            <JordanCard title={'Nike Jordan 1'}size7={'40'} size8={'42'} size1={'36'} color1={'red'}  about={'pon sngfsdhfksjdf sdfigsudfg sdfusdgfssdsdfsdfsdfs sdfsdf  sdfsd fskj'} size2={'37'} size3={'37'} size4={'37'}size5={'37'}size6={'37'}  color3={'blue'} color2={'black'} />
          </div>
          <div className="Jordan__model">
      <Canvas className='model' style={{ maxWidth:'800px', width: '100%',height: '800px', margin: '0 auto',  position:'relative' , top:'-140px'  }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Model url="/jordan.glb" position={[0, 0, 0]} />
        <OrbitControls  maxPolarAngle={Math.PI/2} maxDistance={5} minDistance={5} minPolarAngle={Math.PI/2}/> 
      </Canvas>
      
          </div>
          <div className="Jordan__options card2">
            <p>landitiis incidunt aliquam repellat quisquam ex dolores, ipsum, officiis laudantium et. Aliquid commodi amet consequuntur molestias, repellendus necessitatibus adipisci.
            </p>
            <button>buy</button>
          </div>
        </div>
    </div>
      </div>

    </div>
  );
};

export default Jordan;
