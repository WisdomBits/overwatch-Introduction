'use client'
import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../Components/ui/button";
import { Sun, Moon } from "lucide-react";
import { createSharedState, useSharedState } from "overwatch-ts";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particleConfigDark } from "@/particlesjs-config";
import { particleConfigLight } from "@/particlesjs-config-light";
import { motion, AnimatePresence } from 'framer-motion';
import darkLogo from "@/assets/dark-overwatch-logo.png"
import lightLogo from "@/assets/light-overwatch-logo.png"
import bgDark from "@/assets/bgDark.png"
import bgLight from "@/assets/bgLight.png"
import overwatchAvatar from "@/assets/overwatchAvatar.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Copy } from "lucide-react";
createSharedState("theme", "light");
export default function OverwatchLanding() {
    const [theme, setTheme] = useSharedState("theme");
    const [particlesInit, setParticlesInit] = useState(false);
    const [copied, setCopied] = useState(false);
      const router = useRouter();

    const handleCopy = () => {
        navigator.clipboard.writeText("npm install overwatch-ts");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const particlesLoaded = (container) => {
        console.log("Particles Loaded:", container);
    }

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setParticlesInit(true);
            console.log("Particles engine initialized");
        });
    }, [])

    const options = useMemo(() => (theme === 'dark' ? particleConfigDark : particleConfigLight), [theme]);

    return (<>
        <main className={`relative w-full h-screen flex flex-col items-center justify-between ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black text-gray-100' : 'bg-gradient-to-br from-white to-[#ff7d00] text-white-900'}`}>
            <Image
                src={theme == "dark" ? bgDark : bgLight}
                alt="Bg"
                style={{ width: "100%", height: "100%", opacity: 0.3, position: "absolute" }}
                priority
                className="h-10 w-auto"
            />
            <header className="z-10 w-full px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold flex items-center justify-center">
                    <Image
                        src={theme == "dark" ? darkLogo : lightLogo}
                        alt="Overwatch Logo"
                        priority
                        className="h-auto w-[55px]"
                    /> Overwatch</div>
                <div className="space-x-4">
                    <a href="https://overwatchts.in/docs" target="_blank" className="hover:underline">Docs</a>
                    <a href="https://github.com/WisdomBits/overwatch" target="_blank" className="hover:underline">GitHub</a>
                    <a href="/blog" className="hover:underline">Blog</a>
                </div>
            </header>

            <section className="z-10 flex flex-col md:flex-row items-center justify-around w-[100%] gap-8 px-6">
                <Image
                    src={overwatchAvatar}
                    alt="overwatch eagle"
                    className="absolute w-auto md:bottom-0.5 bottom-3"
                    priority
                />
                <Card className="max-w-sm w-full backdrop-blur-sm bg-white/30 dark:bg-black/20 border border-white/20 shadow-lg p-4">
                    <CardContent>
                        <h2 className="text-xl font-bold mb-2">Install Overwatch</h2>
                        <div className="flex items-center justify-between bg-black/80 text-white text-sm rounded px-3 py-2">
                            <code>npm install overwatch-ts</code>
                            <button onClick={handleCopy}>
                                <Copy className={`h-4 w-4 ${copied ? "text-green-400" : "text-white"}`} />
                            </button>
                        </div>
                        <Button
                            onClick={() => router.forward("/docs")}
                            className="mt-4 w-full text-base"
                        >
                            Getting Started
                        </Button>
                    </CardContent>
                </Card>
                <Card className="max-w-md w-full backdrop-blur-sm [background:color-mix(in_oklab,_#ffffff_20%,_transparent)] dark:bg-black/20 border border-white/30 dark:border-white/20 shadow-lg">
                    <CardContent className="p-6">
                        <pre className="card-container text-sm bg-muted p-4 rounded-lg overflow-x-auto">
                            {`import { useSharedState } from 'overwatch-ts';

function ThemeSwitcher() {
  const [theme, setTheme] = useSharedState('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Switch Theme
    </button>
  );
}`}
                        </pre>
                        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="mt-4 w-full">
                            <AnimatePresence mode="wait" initial={false}>
                                {theme === 'light' ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        exit={{ scale: 0.5, opacity: 0, rotate: 15 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 25, duration: 0.2 }}
                                    >
                                        <Moon className="mr-2" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
                                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                        exit={{ scale: 0.5, opacity: 0, rotate: -15 }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 25, duration: 0.2 }}
                                    >
                                        <Sun className="mr-2" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                        </Button>
                    </CardContent>
                </Card>
            </section>

            <footer className="z-10 mt-6 mb-6 text-sm text-muted-foreground">© 2025 Overwatch Ts. All rights reserved.</footer>
        </main >
        {particlesInit && (
            <Particles
                id="tsparticles"
                options={options}
                particlesLoaded={particlesLoaded}
            />
        )
        }
    </>);
}