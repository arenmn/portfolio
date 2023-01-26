import Head from "next/head";
import Top from "../components/Top";
import Project from "../components/Project";

export default function Projects() {
    return (
        <>
            <Head>
                <title>University Projects</title>
            </Head>
            <main>
                <Top/>
                <Project project="Babel" image="/babel.png">
                    Babel was a prototype project designed to help (international) students train their pronunciation of words.<br/>
                    The prototype has speech recognition that can tell what word the user said, using the Web Speech API.<br/>
                    The backend uses Static Site Generation with Next.js and TypeScript.<br/>
                    The frontend uses React with TypeScript.
                </Project>
                <Project project="Ultrapark" image="/ultrapark.png">
                    Ultrapark was a finished project implementing a fully automated parking system.<br/>
                    Parking sensors can be registered that receive a unique authentication token, and when a car is detected the sensor will automatically report this to the main server.<br/>
                    The main server keeps track of all sensors and all parked cars, and charges users based on how long a car was parked.<br/>
                    Users can log in with their account to view the location of their cars, and how long they&apos;ve been parked.<br/>
                    The backend was implemented with Express and TypeScript.<br/>
                    The frontend was implemented with Bootstrap and vanilla JavaScript.<br/>
                </Project>
            </main>
        </>
    )
}