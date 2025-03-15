import {
    Box,
    Typography
} from "@mui/material";
import Image from "next/image"

export function ExperienceBox(props: { imageSrc: string, title: string, description: string }) {
    return (
        <>
        <Box
            sx={{
                position: "relative",
                // display: "flex",
                // flexDirection: "row-reverse",
                width: "100%",
                height: "400px"

            }}
            >
                <Box
                sx={{
                    position: "relative",
                    width: 300,
                    height: 300,
                    // border: "2px solid black",
                    backgroundColor: "white",
                }}
                >
                    <Image 
                    src={`/${[props.imageSrc]}`}
                    alt={props.title}
                    fill={true}
                    />
                </Box>

                <Box
                sx={{
                    padding: "4px",
                    margin: "4px",
                    backgroundColor: "white",
                    width: "70%",
                    height: "100px",
                    position: "absolute",
                    left: "150px",
                    top: "250px",
                }}
                >
                    <Typography variant="h5">
                        {props.title}
                    </Typography>

                    <Typography>
                        {props.description}
                    </Typography>
                </Box>
                
            </Box>
        </>
    )
}
