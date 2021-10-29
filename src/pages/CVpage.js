import React, { Component } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const model = useLoader(GLTFLoader, "./models/scene.gltf");
  return (
    <>
      <primitive object={model.scene} scale={0.4} />
    </>
  );
};

class CVpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      camera: { zoom: 300, position: [300, 300, -50] },
    };
  }

  render() {
    return (
      <div className="pageContainer visible">
        
      </div>
    );
  }
}

export default CVpage;
