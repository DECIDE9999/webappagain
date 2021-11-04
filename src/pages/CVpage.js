import React, { Component, Suspense } from "react";
import Collapsible from "./../components/collapsible/Collapsible";
import Section from "./../components/section/Section";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PerspectiveCamera } from "@react-three/fiber";

const Scene = () => {
  const gltf = useLoader(GLTFLoader, "./models/statue/scene.gltf");
  return (
    <Suspense fallback={null}>
      
      <primitive object={gltf.scene} />
    </Suspense>
  );
};

class CVpage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pageContainer visible">
        <Collapsible label="Profile">
          <div>
            <Section>
              <Canvas orthographic camera={{zoom:10, position:[10,0,175]}}>
                <Suspense fallback={null}>
                  <Scene />
                </Suspense>
              </Canvas>
            </Section>
          </div>
        </Collapsible>
        <Collapsible label="Profile">
          <div> Test </div>
        </Collapsible>
      </div>
    );
  }
}

export default CVpage;
