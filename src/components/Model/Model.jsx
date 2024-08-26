import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }) {
    const [active, setActive] = useState(false);
    const { scene } = useGLTF(url);
  
    return <primitive object={scene} scale={4} onClick={(event) => setActive(!active)}/>;
  }

createRoot(document.getElementById('root')).render(


    <Canvas   style={{width:'100%', height:'100dvh'}}>
        
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Model url="/shoe.glb"  position={[0, 0, 0]}/>
      <OrbitControls />
    </Canvas>
  
  )

export default Model
