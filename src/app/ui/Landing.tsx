"use client"

import Image from "next/image"
import { Divider, Grid2, Typography, Box, Container, Button } from "@mui/material"
import landingLogo from "./public/landing.jpg"
import { useEffect, useState, useRef } from "react";
import { Rect, useRect } from "react-use-rect";
import { relative } from "path";
import Link from "next/link";
import {
    Widgets,
    DeveloperModeOutlined,
    StorageOutlined,
    AlarmOutlined,
    GitHub,
    Mail,
    LinkedIn
} from "@mui/icons-material"
import { WorkingExperiences } from "@/app/data/data";
import { ExperienceBox } from "@/app/ui/ExperienceBox";


function Landing() {
    const mock = ["Engineering Manager", "Backend Engineer", "Frontend Engineer", "Guitarist", "Music Producer"];
    const slidePictures = ["golang.png", "ruby-on-rails.png", "java.png", "postgresql.png", "redis.png", "react.png", "typescript.png", "docker.png", "kubernetes.png", "gcp.png"];

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
            <Box
            style={{
                height: "90vh",
                padding: "0px",
                position: "relative",
            }}
            >
                <Image
                src={landingLogo}
                alt="Landing page"
                // width="80%"
                fill
                className="opacity-40"
                />

                <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "right",
                }}
                >
                    <Box
                    sx={{
                        margin: "4px",
                        textAlign: "right",
                        width: "50%",
                        padding: "32px",
                        backgroundColor: "white"
                    }}
                    >
                        <Typography variant="h3">
                            Agustinus Ardhito Vedoputro
                        </Typography>
                        <br/>
                        <Typography variant="h5">
                            <SlideText source={mock}/>
                        </Typography>

                        <Typography className="pt-4">
                            I'm an experienced Engineering Manager & Software Engineer with full experience expanding technology with enterprise-based standards.
                            Nice to meet you!
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "right",
                            }}
                            >
                                <div className="size-8">
                                    <Link href="https://www.linkedin.com/in/agustinus-ardhito">
                                        <Button>
                                            <LinkedIn></LinkedIn>
                                        </Button>
                                    </Link>
                                </div>
                                <div className="size-8 mx-2">
                                    <Link
                                    href="mailto:agusdhito@gmail.com"
                                    >
                                      <Button>
                                          <Mail></Mail>
                                      </Button>
                                    </Link>
                                </div>

                                <div className="size-8">
                                    <Link href="https://github.com/AgusDhito">
                                        <Button
                                        style={{width: "100%"}}
                                        >
                                            <GitHub></GitHub>
                                        </Button>
                                    </Link>
                                </div>
                            </Box>
                    </Box>
                </Box>

            </Box>

            <Container
            maxWidth="xl"
            >
                {/*  Services I offer */}
                <div
                className="m-16 text-center"
                >
                    <Typography variant="h5">
                        Expertises & Services
                    </Typography>

                    <div
                    className="mx-32 p-4"
                    >
                        <Typography>
                          I'm a professional technologist that has extensive expertises & competencies right from discovering your business' problems & needs, to implementing web-based platform that meets start-up company standards. you can trust to start digitalizing your business.
                        </Typography>
                    </div>


                    <div
                    className="flex p-8"
                    >
                        {/* for the card */}
                        <div>
                            <Widgets
                            fontSize="large"
                            />
                            <div
                            className="p-4"
                            >
                                <Typography>
                                    Consult for a better understanding about how technology can help solve your business' problems.
                                </Typography>
                            </div>
                        </div>

                        <div>
                            <DeveloperModeOutlined
                            fontSize="large"
                            />
                            <div
                            className="p-4"
                            >
                                <Typography>
                                    Implement solutions with web-based platform, along with creative & user-friendly display to engage your customers.
                                </Typography>
                            </div>
                        </div>

                        <div>
                            <StorageOutlined
                            fontSize="large"
                            />

                            <div
                            className="p-4"
                            >
                                <Typography>
                                  Implement the backbone system seamlessly, from database to infrastructure required, all fully-customizable & personalized only for your business characteristics.
                                </Typography>
                            </div>

                        </div>

                        <div>
                            <AlarmOutlined
                            fontSize="large"
                            />

                            <div
                            className="p-4"
                            >
                                <Typography>
                                    Full reliable support from initial development until it received by your user's browsers. And can go further more, as needed.
                                </Typography>
                            </div>

                        </div>
                    </div>
                </div>

                <div
                style={{margin: "32px"}}
                >
                    <div>
                        <Typography variant="h6" className="text-center">
                            Tech stack
                        </Typography>

                        <div className="flex justify-center items-center mx-16">
                            {slidePictures.map((logo) => (
                                <div className="p-2 logo">
                                    <Image src={`/${logo}`} alt={logo} width={100} height={100} className="logo"/>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Working & Project Experience */}
                <div
                className="relative"
                >
                    <div className="m-4">
                        <Typography variant="h5"
                        className="text-center"
                        >
                            Working experience
                        </Typography>
                    </div>

                    {/* container cardnya */}
                    {WorkingExperiences.map((exp, index) => (
                        <ExperienceBox
                        imageSrc={exp.imageSrc}
                        title={exp.title}
                        description={exp.description}
                        />
                    ))}

                </div>
            </Container>

            <Box
            sx={{
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center"
            }}
            >
              <Box
              sx={{
                backgroundColor: "lightgray",
                margin: "16px",
                padding: "16px"
              }}
              >
                <Box
                sx={{
                  marginBottom: "8px"
                }}
                >
                    <Typography variant="h5">
                        Interested in collaborating?
                    </Typography>
                </Box>


                <Divider></Divider>

                <Box
                sx={{
                  marginTop: "16px"
                }}
                >
                  Download my resume here : &nbsp;
                  <Button href="/cv.pdf"variant="contained">
                      Download PDF
                  </Button>
                </Box>

              </Box>

            </Box>
        </>
    )

}

export default Landing