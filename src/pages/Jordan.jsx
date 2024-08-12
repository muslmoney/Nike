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
    />
  );
}
const Jordan = () => {
  return (
    <div className="Jordan">
      <div className="container">
    <h2>NIKE</h2>
    <div className="Jordan__hero">
        <div className="Jordan_wrap">
          <div className="Jordan__options">
            <JordanCard title={'Nike Jordan 1'} size1={'36'} about={'pon sngfsdhfksjdf sdfigsudfg sdfusdgfssdsdfsdfsdfs sdfsdf  sdfsd fskj'} size2={'37'} size3={'37'} size4={'37'}size5={'37'}size6={'37'} color1={'red'} color3={'blue'} color2={'black'} />
          </div>
          <div className="Jordan__model">
      <Canvas className='model' style={{ width: '60%', margin: '0 auto', height: '800px', position:'relative' , top:'-170px'  }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Model url="/shoe.glb" position={[0, 0, 0]} />
        <OrbitControls  maxPolarAngle={Math.PI/2} maxDistance={5} minDistance={5} minPolarAngle={Math.PI/2}/> 
      </Canvas>
      
          </div>
          <div className="Jordan__options">
            
          </div>
        </div>
    </div>
      </div>

    </div>
  );
};

export default Jordan;
