import Head from "next/head";
import Top from "../components/Top";

export default function Index() {
    return (
        <>
            <Head>
                <title>Aren</title>
            </Head>
            <main>
                <Top/>
                <p>I&apos;m a 20 year old Technical Computer Science student at the University of Twente.</p>
                <p>I enjoy writing small programs and scripts to solve everyday problems I encounter.</p>
                <p>You can explore one of my bigger personal projects, along with some university projects using the links above.</p>
                <br/>
                <p>I&apos;m a fast learner, and already familiar with JavaScript/TypeScript, C#, Java and Python.</p>
                <br/>
                <p>You can reach me at <a className="link" href="mailto:contact@arenm.me">contact@arenm.me</a>.</p>
            </main>
        </>
    )
}