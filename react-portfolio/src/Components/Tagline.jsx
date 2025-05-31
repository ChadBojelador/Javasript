"use client"

import { animate, stagger } from "@motionone/dom"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"
import '../Styles/tagline.css'
export default function SplitText() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            containerRef.current.style.visibility = "visible"
            
            const heading = containerRef.current.querySelector("h1")
            if (!heading) return

            // Add splitText options for better reliability
            const { words } = splitText(heading, { 
                type: "word",
                className: "split-word"
            })

            animate(
                words,
                { 
                    opacity: [0, 1], 
                    y: [10, 0] 
                },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            ).catch((error) => {
                console.error("Animation error:", error)
            })
        })
    }, [])

    return (
        <div className="tagline-container" ref={containerRef}>
            <h1 className="tagline-text">
                Fueled by curiosity. Powered by logic. Focused on impact.
            </h1>

        </div>
    )
}

