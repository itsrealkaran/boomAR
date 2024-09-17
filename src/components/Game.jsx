import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "@/components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Leaderboard } from '@/components/Leaderboard'
export default function Game() {
    const [downgradedPerformance, setDowngradedPerformance] = useState(false);

    return (
        <div className="h-screen w-screen">
            {/* <Loader /> */}
            <Leaderboard />
            <Canvas
                shadows
                camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
                dpr={[1, 1.5]}
            >
                <color attach="background" args={["#242424"]} />
                <SoftShadows size={42} />
                <PerformanceMonitor
                    onDecline={(fps) => {
                        setDowngradedPerformance(true);
                    }}
                />
                <Suspense>
                    <Physics>
                        <Experience downgradedPerformance={downgradedPerformance} />
                    </Physics>
                </Suspense>
                {!downgradedPerformance && (
                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={1} intensity={1.5} mipmapBlur />
                    </EffectComposer>
                )}
            </Canvas>
        </div>
    )
}