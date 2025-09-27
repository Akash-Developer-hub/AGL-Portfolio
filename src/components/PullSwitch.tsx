import React, { useEffect, useRef, useState } from "react";

const PullSwitch: React.FC<{ theme: string; setTheme: (theme: string) => void }> = ({ theme, setTheme }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const switchRef = useRef<HTMLInputElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [lit, setLit] = useState(false);
    const [ballVisible, setBallVisible] = useState(false);
    const [ballX, setBallX] = useState(-100);
    const [ballY, setBallY] = useState(-100);
    const [rotation, setRotation] = useState(0);
    const [intervalId, setIntervalId] = useState<number | null>(null);
    const [ballWidth, setBallWidth] = useState(32);
    const [ballHeight, setBallHeight] = useState(32);
    const [newCircleVisible, setNewCircleVisible] = useState(false);
    const [newCircleSize, setNewCircleSize] = useState(0);

    const startBallAnimation = () => {
        if (intervalId) clearInterval(intervalId);
        setBallVisible(true);
        setBallX(window.innerWidth - 50);
        setBallY(32); // in the navbar area
        setRotation(0);
        setBallWidth(32);
        setBallHeight(32);
        setNewCircleVisible(false);
        setNewCircleSize(0);
        const id = setInterval(() => {
            setRotation(r => r + 100);
        }, 500);
        setIntervalId(id);
        setTimeout(() => {
            setBallX(window.innerWidth / 2);
        }, 100);
        setTimeout(() => {
            setBallY(window.innerHeight / 2);
        }, 1000);
        setTimeout(() => {
            setBallWidth(2000);
            setBallHeight(2000);
        }, 2000);
        setTimeout(() => {
            setNewCircleVisible(true);
            setNewCircleSize(0);
            setTimeout(() => {
                setNewCircleSize(2000);
            }, 10);
        }, 3000);
        setTimeout(() => {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        }, 3900);
        setTimeout(() => {
            setBallVisible(false);
            setNewCircleVisible(false);
            clearInterval(id);
            setIntervalId(null);
        }, 4000);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx) return;

        // settings
        const BEAD_COUNT = 15;
        const BEAD_SIZE = 3;
        const BEAD_DIST = 200 / (BEAD_COUNT + 2);
        const INITIAL_X_MOMENTUM = -6;
        const GRAVITY = 12;
        const X_FRICTION = 0.01;

        function pythag(x1: number, y1: number, x2: number, y2: number) {
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }
        function getAngle(x1: number, y1: number, x2: number, y2: number) {
            return Math.atan((y2 - y1) / (x2 - x1));
        }

        class Bead {
            x: number;
            y: number;
            speedX: number;
            speedY: number;
            parent: Bead | { x: number; y: number };

            constructor(initialX: number, initialY: number) {
                this.x = initialX;
                this.y = initialY;
                this.speedX = 0;
                this.speedY = 0;
                this.parent = { x: canvas ? canvas.width - 10 : 70, y: 0 };
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, BEAD_SIZE, 0, Math.PI * 2, false);

                const grd = ctx.createRadialGradient(
                    this.x,
                    this.y,
                    BEAD_SIZE,
                    this.x - BEAD_SIZE / 2,
                    this.y - BEAD_SIZE / 4,
                    BEAD_SIZE * 0.75
                );

                if (lit) {
                    grd.addColorStop(1, "#c98b4c");
                    grd.addColorStop(0, "#967e54");
                } else {
                    grd.addColorStop(1, "#4a5425");
                    grd.addColorStop(0, "#172023");
                }
                ctx.fillStyle = grd;
                ctx.fill();

                ctx.restore();
            }
            drawLine() {
                if (!ctx) return;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(this.parent.x, this.parent.y);
                ctx.moveTo(this.parent.x, this.parent.y);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = lit ? "#baaf62" : "#3d392d";
                ctx.stroke();
                ctx.restore();
            }

            setParent(parentBead: Bead | { x: number; y: number }) {
                this.parent = parentBead;
            }

            addMomentum(x: number, y: number) {
                this.speedX += x;
                this.speedY += y;
            }

            updateMomentum(deltaTime: number) {
                this.speedY += (GRAVITY * deltaTime) / 1000;
                if (Math.abs(this.speedX) < X_FRICTION * deltaTime / 1000) {
                    this.speedX = 0;
                } else {
                    this.speedX =
                        this.speedX > 0
                            ? this.speedX - X_FRICTION * deltaTime / 1000
                            : this.speedX + X_FRICTION * deltaTime / 1000;
                }
            }

            move() {
                this.x += this.speedX;
                this.y += this.speedY;
            }

            positionBasedOnParent() {
                if (this.parent) {
                    const d = pythag(this.x, this.y, this.parent.x, this.parent.y);
                    if (d > BEAD_DIST) {
                        const a = getAngle(this.x, this.y, this.parent.x, this.parent.y);
                        let dx = Math.cos(a) * (d - BEAD_DIST);
                        let dy = Math.sin(a) * (d - BEAD_DIST);
                        if (this.x > this.parent.x) {
                            dx *= -1;
                            dy *= -1;
                        }

                        if (this.parent instanceof Bead) {
                            this.x += dx / 2;
                            this.y += dy / 2;
                            this.speedX += dx / 2;
                            this.speedY += dy / 2;

                            this.parent.x -= dx / 2;
                            this.parent.y -= dy / 2;
                            this.parent.speedX -= dx / 2;
                            this.parent.speedY -= dy / 2;
                        } else {
                            this.x += dx;
                            this.y += dy;
                            this.speedX += dx;
                            this.speedY += dy;
                        }
                    }
                }
            }
        }

        // init beads
        const beads: Bead[] = [];
        for (let i = 0; i < BEAD_COUNT; i++) {
            beads.push(new Bead(canvas.width - 10, i * BEAD_DIST + BEAD_SIZE));
            if (i > 0) beads[i].setParent(beads[i - 1]);
        }
        // add gentle random sway every 2 seconds
        setInterval(() => {
            const randomKick = (Math.random() - 2) * 2; // -1 to +1
            beads[BEAD_COUNT - 1].addMomentum(randomKick, 0);
        }, 2000);

        let running = true;
        let lastTime = new Date().getTime();

        function loop() {
            const now = new Date().getTime();
            const deltaTime = now - lastTime;

            if (running && canvas && ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                beads.forEach((bead) => {
                    bead.updateMomentum(deltaTime);
                    bead.move();
                    bead.positionBasedOnParent();
                });
                for (let i = 0; i < 20; i++) {
                    beads.forEach((bead) => bead.positionBasedOnParent());
                }
                beads.forEach((bead) => bead.drawLine());
                beads.forEach((bead) => bead.draw());
            }

            lastTime = now;
            requestAnimationFrame(loop);
        }
        loop();

        canvas.addEventListener("mouseup", () => {
            beads[BEAD_COUNT - 1].addMomentum(INITIAL_X_MOMENTUM, 0);
            beads[0].parent.y = 0;
            running = true;
        });
        canvas.addEventListener("mousedown", () => {
            beads[0].parent.y = BEAD_DIST * 2;
            running = true;
        });

        return () => {
            running = false;
        };
    }, [lit]);

    return (
        <>
            <div
                ref={containerRef}
                className="fixed right-5 top-12 z-50 pointer-events-none"
            >
                <input
                    ref={switchRef}
                    type="checkbox"
                    id="switchInp"
                    checked={lit}
                    onChange={(e) => setLit(e.target.checked)}
                    className="hidden"
                />
                <label htmlFor="switchInp" className="cursor-pointer pointer-events-auto" onClick={startBallAnimation}>
                    <canvas ref={canvasRef} width={100} height={400}></canvas>
                </label>
            </div>
            <div
                className={`fixed z-[1000] bg-yellow-500 rounded-full ${ballVisible ? '' : 'hidden'}`}
                style={{ width: ballWidth, height: ballHeight, left: ballX - ballWidth / 2, top: ballY - ballHeight / 2, transform: `rotate(${rotation}deg)`, transition: 'all 1s ease-in-out' }}
            ></div>
            <div
                className={`fixed z-[1000] rounded-full border border-white ${newCircleVisible ? '' : 'hidden'} ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
                style={{ width: newCircleSize, height: newCircleSize, left: window.innerWidth / 2 - newCircleSize / 2, top: window.innerHeight / 2 - newCircleSize / 2, transition: 'all 1s ease-in-out' }}
            ></div>
        </>
    );

};

export default PullSwitch;
