import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import Particles from "react-particles";

const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="fixed inset-0 z-0">
            <Particles 
                id="tsparticles"
                init={particlesInit}
                options={{
                    // Your particles options here...
                }}
                className="absolute inset-0 z-0"
            />
        </div>
    );
};

export default BackgroundParticles;
