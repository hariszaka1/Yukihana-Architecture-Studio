import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);

    const mousePos = useRef({ x: -100, y: -100 });
    const circlePos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleInteraction = (e: MouseEvent, add: boolean) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input[type="submit"], select, .cursor-pointer')) {
                dotRef.current?.classList.toggle('hovered', add);
                circleRef.current?.classList.toggle('hovered', add);
            }
        };
        
        const handleMouseOver = (e: MouseEvent) => handleInteraction(e, true);
        const handleMouseOut = (e: MouseEvent) => handleInteraction(e, false);
        
        const handleMouseDown = () => {
            circleRef.current?.classList.add('clicked');
        }

        const handleAnimationEnd = () => {
            circleRef.current?.classList.remove('clicked');
        }

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mousedown', handleMouseDown);
        
        const currentCircleRef = circleRef.current;
        currentCircleRef?.addEventListener('animationend', handleAnimationEnd);
        
        let animationFrameId: number;

        const animate = () => {
            // Dot follows mouse directly
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%)`;
            }

            // Circle lags behind via linear interpolation
            if (circleRef.current) {
                const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
                circlePos.current.x = lerp(circlePos.current.x, mousePos.current.x, 0.15);
                circlePos.current.y = lerp(circlePos.current.y, mousePos.current.y, 0.15);
                circleRef.current.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px) translate(-50%, -50%)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mousedown', handleMouseDown);
            currentCircleRef?.removeEventListener('animationend', handleAnimationEnd);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className='hidden lg:block'>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={circleRef} className="cursor-circle"></div>
        </div>
    );
};

export default CustomCursor;