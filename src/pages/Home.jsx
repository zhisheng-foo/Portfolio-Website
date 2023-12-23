import {useState , Suspense, useEffect , useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Sky from '../models/background';
import Bird from '../models/bird';
import Plane from '../models/plane';
import Island from '../models/island';
import {Stars } from '@react-three/drei';
import HomeInfo from '../components/HomeInfo';

import sakura from '../../assets/sakura.mp3';
import {soundoff, soundon } from '../../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const[isPlayingMusic, setIsPlayingMusic ] = useState(false);

  useEffect(() =>{

    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const[isRotating, setIsRotating] = useState(false);
  const[currentStage , setCurrentStage] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [1, -30, -280];
    let rotation = [145, Math.PI / 2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.22, 0.22, 0.22];
      screenPosition = [-2, -80, -300]; // Adjust these values as needed
    } else {
      screenScale = [0.32, 0.32, 0.32];
      screenPosition = [-15, -75, -350]; // Elevate the Y-coordinate for a bird's-eye view
      rotation = [145, Math.PI/2, 0]; // Rotate to look downwards
    }

    return [screenScale, screenPosition, rotation];

  }
  const adjustPlaneForScreenSize = () => {
    let screenScale = null
    let screenPosition =[-3, -4, -4];

    if (window.innerWidth < 768) {
      screenScale = [4, 4, 4];
      screenPosition = [0, -1, -8]; // Adjust these values as needed
    } else {
      screenScale = [2.4, 2.4, 2.4];
      screenPosition = [0, 0.5, -2]; // Elevate the Y-coordinate for a bird's-eye view
    }

    return [screenScale, screenPosition];

  }
  const [islandScale , islandPosition , islandRotation] = adjustIslandForScreenSize();
  const [planeScale , planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-20 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
        
      </div>
      <Canvas tabIndex="0" 
      className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{near: 0.1, far:1000  }}
      >
        <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
          />
        <hemisphereLight skyColor = "#b1e1ff" groundColor="#000000" intensity={1} /> 
        
        <Sky isRotating = {isRotating}/>
        <Stars/>
        <Bird/>
        <Island
          position= {islandPosition}
          scale ={islandScale}
          rotation = {islandRotation}
          setIsRotating={setIsRotating}
          isRotating = {isRotating}
          setCurrentStage={setCurrentStage}
        
        />
        
        <Plane
      
          isRotating = {isRotating}
          scale = {planeScale}
          position = {planePosition}
          rotation = {[0,20,0]}
        
        />

        </Suspense>
      </Canvas>

      <div className= "absolute bottom-2 left-2">
        <img 
        src={!isPlayingMusic ? soundoff : soundon}
        alt="sound"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        
        />

      </div>

    </section>
  )
}

export default Home