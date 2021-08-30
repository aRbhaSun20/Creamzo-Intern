import React, { useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimensions.jsx'
import './style/carousel.css'

const Carousel = (props) => {
    let {children, show} = props

    const { height, width } = useWindowDimensions();
    // console.log(height,width);
    if(width<450){
        show=1;
    }
    else if(width<700){
        show=2;
    }
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])


    useEffect(()=>{
        const interval= setInterval(next,3000);
        return ()=> clearInterval(interval);
    },[])

    const next = () => {
        setCurrentIndex(prevState => (prevState + 1)%(length-show+1))
        // console.log(currentIndex,length,show);
        // if (currentIndex < (length - show-1)) {
        //     setCurrentIndex(prevState => prevState + 1)
        // }
        // else{
        //     setCurrentIndex(0)
        // }
        
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        else{
            setCurrentIndex(prevState=>length-show-prevState-1)
        }
        console.log(currentIndex,length,show);
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    // currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    // currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel