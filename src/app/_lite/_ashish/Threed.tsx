"use client";

import * as THREE from 'three'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'

const Threed = () => {
    const meshRef = useRef<THREE.Mesh>(null)
    return (
        <>
            <mesh ref={meshRef}>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
            <OrbitControls />
        </>
    )
}

export default Threed