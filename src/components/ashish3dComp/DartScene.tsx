"use client"
import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useCallback, useEffect, useRef } from 'react'
import * as THREE from 'three'

const WOOSH_SRC = '/assets/lite_models/woosh.mpeg'

type DartSceneProps = {
    onShootReady?: (shoot: () => void) => void;
};

const DartScene = ({ onShootReady }: DartSceneProps) => {

    const dartModel = useGLTF('/assets/lite_models/dartboard2.glb')

    const { actions } = useAnimations(dartModel.animations, dartModel.scene)

    const wooshRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = new Audio(WOOSH_SRC)
        audio.preload = 'auto'
        audio.setAttribute('playsinline', '')
        audio.load()
        wooshRef.current = audio

        return () => {
            audio.pause()
            audio.src = ''
            wooshRef.current = null
        }
    }, [])

    const handleShoot = useCallback(() => {
        if (!actions['Animation']) return;

        const dart = actions['Animation'];
        dart.reset();
        dart.setLoop(THREE.LoopOnce, 1);
        dart.clampWhenFinished = true;
        dart.play();

        const woosh = wooshRef.current
        if (!woosh) return

        woosh.pause()
        woosh.currentTime = 0
        void woosh.play().catch(() => {})
    }, [actions])

    useEffect(() => {
        onShootReady?.(handleShoot);
    }, [onShootReady, handleShoot]);

    return (
        <group>
            <mesh scale={0.12} position={[-2, 0, 0]}>
                <primitive object={dartModel.scene} />
            </mesh>
        </group>
    )
}

export default DartScene