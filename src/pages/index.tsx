import { useEffect, useRef, useState } from 'react';
import './style.css'
import dummy from './lib/dummy.json'



export default function HomePage() {
  const imageUrl = "https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  const canvasRef = useRef(null)
  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);

  const fetchImage = async (url: string) => {
    const res = await fetch(url)
    const blob = await res.blob()
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    })
  }

  const clearKoordinat = () => {
    setStartCoords(null)
    setEndCoords(null)
  }

  const rate = 1;
  const width = 720 / rate;
  const height = 480 / rate;
  
  const handleMouseDown = async(event: any) => {
    if (!startCoords || !endCoords) {
      clearKoordinat()
      const canvas: any = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      setStartCoords({ x, y });
    }
  };

  const handleMouseUp = (event) => {
    if (!startCoords || !endCoords) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
  
      setEndCoords({ x, y });
    }
  };

  const loadImage = async() => {
    const base64 = await fetchImage(dummy.imageUrl)
    return base64
  }
  useEffect(()=>{
    const generateImage = async() => {
      const base64 = await loadImage()
      const canvas: any = canvasRef.current
      const context = canvas?.getContext('2d')
      if (dummy.startCords) {
        setStartCoords(dummy.startCords)
      }

      if (dummy.endCords) {
        setEndCoords(dummy.endCords)
      }
      
      const image = new Image()
      image.onload = () => {
        canvas.width = width
        canvas.height = height
      
      context.drawImage(image, 0,0, width, height)
      


      }
      image.src = base64
    }

    generateImage()
  }, [])


  useEffect(()=>{
    const rectConf = async() => {
      if (startCoords && endCoords) {
        const base64 = await loadImage()
        const image = new Image()
        image.src = base64
        image.height = height
        image.width = width
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')        
        
        context.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas
        // context.filter = 'blur(10px)'
        context.drawImage(image, 0, 0, canvas.width, canvas.height);  // Redraw image
  
  
        const x1 = startCoords.x;
        const y1 = startCoords.y;
        const x2 = endCoords.x;
        const y2 = endCoords.y;
        
        context.strokeStyle = 'red'
        context.lineWidth = 3
        context.filter = 'none'
        
        context.strokeRect(x1, y1, x2 - x1, y2 - y1)
        // context.fill
        // context.drawImage(image, x1 , y1, x2 - x1, y2 - y1, x1, y1, x2 - x1, y2 - y1);
      }
    }

    rectConf()

  }, [startCoords, endCoords])
  
  return (
    
    <div className='cardvideo'>
      <canvas ref={canvasRef} className='canvas' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></canvas>
    </div>
  );
}
