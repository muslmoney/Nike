import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import ProductsData from '../data/api.json';
import './pages.css';

function Model({ url }) {
  const modelRef = React.useRef();
  const { scene } = useGLTF(url);

  // Вращаем модель
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ротация модели по оси Y
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

const Jordan = () => {
  const [showTheModel, setShowTheModel] = useState(false);
  const onClickModel = () => setShowTheModel((prev) => !prev);

  return (
    <div className="Jordan">
      <div className={`container ${showTheModel ? 'showTheModel' : ''}`}>
        <h2 >NIKE</h2>
        <div className="Jordan__hero">
          <div className="Jordan__wrap">
            <div className={`Jordan__options card1 ${showTheModel ? 'showModel' : ''}`}>
              <h1>Nike jordan 1</h1>
              <div className="Jordan__about">
                <p>release date</p>
                <p>2016-10-06</p>
                <p>color way </p>
                <p>sail/starfish-black</p>
              </div>
              <div className='Jordan__sizes'>
                <h3>Select size</h3>
                <div className='Jordan__sizes-wrap'>
                  <button>37</button>
                  <button>38</button>
                  <button>39</button>
                  <button>40</button>
                  <button>41</button>
                  <button>42</button>
                  <button>43</button>
                  <button>44</button>
                </div>
              </div>
            </div>
            <div className={`Jordan__model  ${showTheModel ? 'showTheModel' : ''}`}>
              <Canvas
                className='model'
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  height: '635px',
                  margin: '0 auto',
                  position: 'relative',
                  top: '-100px'
                }}
              >
                <ambientLight intensity={3} color={'lightpink'} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  decay={0}
                  intensity={1.4}
                  color={'lightblue'}
                />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={1} color={''} />
                <Model url="/jordan.glb" position={[0, 0, 0]} />
                <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2} maxDistance={5} minDistance={5} minPolarAngle={Math.PI / 2} />
              </Canvas>
            </div>
            <div className={`Jordan__options card2 ${showTheModel ? 'showModel' : ''}`}>
              <p>
                The Travis Scott x Air Jordan 1 Retro High features a new look on the iconic silhouette, thanks to an oversized backward-facing Swoosh on the lateral side.
                <br />
                A traditionally oriented Swoosh graces the medial side of the upper, which is built with a blend of white leather and brown suede.
              </p>
              <div className='Jordan__btns'>
                <a href="/product/17">
                  <button>buy</button>
                </a>
                <button onClick={onClickModel}>
                  {showTheModel ? 'Hide model' : 'Show model'}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Крестик теперь находится вне Jordan__wrap и отображается только при showTheModel */}
        <div className={`cross ${showTheModel ? 'show' : ''}`} onClick={onClickModel}></div>
      </div>
    </div>
  );
};

export default Jordan;
