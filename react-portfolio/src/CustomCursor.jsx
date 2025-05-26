const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trailRef = useRef(null);
  const requestRef = useRef();

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (trailRef.current) {
        const trail = trailRef.current;
        trail.style.transform = `translate(
          ${position.x - 24}px, 
          ${position.y - 24}px
        )`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  return (
    <>
      <div 
        className="cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <div 
        ref={trailRef}
        className="cursor-trail"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  );
};