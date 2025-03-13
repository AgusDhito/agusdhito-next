"use client"

import Image from "next/image"
import { Divider, Grid2, Typography } from "@mui/material"
import landingLogo from "./public/landing.jpg"
import { useEffect, useState, useRef } from "react";
import { Rect, useRect } from "react-use-rect";
import { relative } from "path";
import Link from "next/link";


function Landing() {
    const mock = ["an Engineering Manager", "a Software Engineer", "a Guitarist", "a Music Producer"];
    const slidePictures = ["golang.png", "ruby-on-rails.png", "java.png", "postgresql.png", "redis.png"];

    const SlideText = ({ source }: { source: string[] }) => {
        const [currentItemIndex, setCurrentItemIndex] = useState(0);
        const [rect, setRect] = useState<Rect | null>(null);
        const [rectRef] = useRect(setRect);

        useEffect(() => {
            const interval = setInterval(() => {
            // console.log(rect?.width);
            setCurrentItemIndex((index) =>
                index === source.length - 1 ? 0 : index + 1
            );
            }, 2000);
            return () => clearInterval(interval);
        }, [currentItemIndex, source]);

        return (
            <div
                style={{
                    display: "inline-flex",
                    overflow: "hidden", // untuk biar di ada di bawah
                    position: "relative",
                    width: `${rect?.width}px`,
                    transition: "all 0.5s ease-in-out",
                }}
                >
                <span className="w-full" style={{ visibility: "hidden" }}>{source[currentItemIndex]}</span>
                {source.map((text, index) => (
                    <span
                    className="w-full"
                    ref={currentItemIndex === index ? rectRef : null}
                    style={{
                        position: "absolute",
                        top: (rect?.height ?? 0) * 2,
                        transform: `translateY(${
                        currentItemIndex === index ? `-${(rect?.height ?? 0) * 2}px` : 0
                        })`,
                        transition: "all 1s ease-in-out",
                    }}
                    >
                    {text}
                    </span>
                ))}
                </div>
            );
    };

    const SlidePictures = ({ source }: { source: string[] }) => {
        const [currentItemIndex, setCurrentItemIndex] = useState(0);
        const [rect, setRect] = useState<Rect | null>(null);
        const [rectRef] = useRect(setRect);

        useEffect(() => {
            const interval = setInterval(() => {
            console.log(rect?.width);
            setCurrentItemIndex((index) =>
                index === source.length - 1 ? 0 : index + 1
            );
            }, 3000); // interval untuk ngelamain transisinya
            return () => clearInterval(interval);
        }, [currentItemIndex, source]);

        return (
            <div
                style={{
                    display: "inline-flex",
                    overflow: "hidden", // untuk biar di ada di bawah
                    position: "relative",
                    width: `${rect?.width}px`,
                    transition: "all 0.5s ease-in-out",
                }}
                >
                <span className="w-full" style={{ visibility: "hidden" }}>
                    {/* {source[currentItemIndex]} */}
                    <Image src={`/${source[currentItemIndex]}`} alt={source[currentItemIndex]} width={150} height={150}/>
                </span>
                {source.map((text, index) => (
                    <span
                    className="w-full"
                    ref={currentItemIndex === index ? rectRef : null}
                    style={{
                        position: "absolute",
                        // top: (rect?.height ?? 0) * 2,
                        left: (rect?.width?? 0) * 2,
                        // transform: `translateY(${
                        // currentItemIndex === index ? `-${(rect?.height ?? 0) * 2}px` : 0
                        transform: `translateX(${
                        currentItemIndex === index ? `-${(rect?.width ?? 0) * 2}px` : 0
                        })`,
                        transition: "all 1s ease-in-out",
                    }}
                    >
                        <Image src={`/${text}`} alt={text} width={150} height={150}/>
                    </span>
                ))}
            </div>
        );
    };


    return (
        <>
            <div
                style={
                    {
                        position: "relative",
                        // padding: "4px",
                        margin: "32px",
                        // border: "8px solid black",
                        // borderRadius: "16px",
                    }
                }
                className="grid grid-cols-2 h-auto bg-gray-200 max-w-1084"
            >

                {/* gambar taro sini */}
                <div
                style={{  }}
                className="m-4"
                >
                    <Typography variant="h3">
                        Agustinus Ardhito Vedoputro
                    </Typography>
                    <br/>
                    <Typography variant="h5">
                        Hello! I am &nbsp;
                        <SlideText source={mock}/>
                    </Typography>

                    <Typography className="text-justify">
                        <br/>
                        I'm an experienced Engineering Manager & Software Engineer with full experience expanding technology with enterprise-based standards.
                        Nice to meet you!
                    </Typography>
                    
                    <div className="flex absolute bottom-0">
                        
                        <div className="size-8">
                            <Link href="https://www.linkedin.com/in/agustinus-ardhito">
                                <Image src={`/linkedin.png`} alt="linkedin" width={30} height={30}/>
                            </Link>
                        </div>
                        <div className="size-8">
                            <Link href="https://www.instagram.com/ardhitovp/">
                                <Image src={`/instagram.png`} alt="instagram" width={32} height={32}/>
                            </Link>
                        </div>

                        <div className="size-8">
                            <Link href="https://github.com/AgusDhito">
                                <Image src={`/github.png`} alt="github" width={37} height={37}/>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
                <div
                style={{ 
                    margin: "auto" 
                }}
                >
                    <Image 
                    src={landingLogo} 
                    alt="Landing page"
                    // fill={true} 
                    // width={600} 
                    // height={600}
                    />
                </div>
            </div>


            <div
            style={{padding: "64px"}}
            >
                <div>
                    <Typography variant="h6" className="text-center">
                        Tech stack
                    </Typography>
                    
                    <div className="flex justify-center items-center">
                        {slidePictures.map((logo) => (
                            <div className="p-2 logo">
                                <Image src={`/${logo}`} alt={logo} width={100} height={100} className="logo"/>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>

                    {/*  TODO my services */}
        </>
    )
    
}

export default Landing