"use client"
import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'
import * as THREE from 'three'

type DartSceneProps = {
    onShootReady?: (shoot: () => void) => void;
};

const DartScene = ({ onShootReady }: DartSceneProps) => {

    const dartModel = useGLTF('/assets/lite_models/dartboard2.glb')

    const { actions } = useAnimations(dartModel.animations, dartModel.scene)

    const handleShoot = () => {

        if (!actions['Animation']) return;

        const dart = actions['Animation'];;
        dart.reset();
        dart.setLoop(THREE.LoopOnce, 1);
        dart.clampWhenFinished = true;
        dart.play();
    }

    useEffect(() => {
        onShootReady?.(handleShoot);
    }, [onShootReady, actions]);

    return (
        <group>
            <mesh scale={0.12}>
                <primitive object={dartModel.scene} />
            </mesh>
        </group>
    )
}

export default DartScene