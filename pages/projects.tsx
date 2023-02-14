import Head from "next/head";
import Top from "../components/Top";
import Link from "next/link";
import Project from "../components/Project";

export default function Index() {

    return (
        <>
            <Head>
                <title>Sudoku Solver</title>
            </Head>
            <main>
                <Top/>
                <Project project="Sudoku Solver">
                    <p>Earlier this year, I developed a tool that can solve most human-solvable Sudoku puzzles using logical reasoning in C#.</p>
                    <p>The tool outputs logically deducible steps and tries to get as far as possible in solving the puzzle.</p>
                    <br/>
                    <p>The solver has various different rules it can use, and it tries to apply the rules from least computationally intensive to most.</p>
                    <p>A simple rule could be looking for cells on the Sudoku grid where only one number is necessary to complete it, and fill it in.</p>
                    <br/>
                    <p>An example of the start of a solve can be seen here: <Link className="link" href="/solve.png">here</Link>, in this case rules were based on <Link className="link" href="https://www.sudokuwiki.org/sudoku.htm">Andrew Stuart&apos;s findings</Link>.</p>
                    <br/>
                </Project>
                <Project project="Portfolio website">
                    <p>This website was statically generated using Next.js and it uses React for frontend components.</p>
                    <p>It&apos;s open source, and can be found <Link className="link" href="https://github.com/arenmn/portfolio">here</Link>.</p>
                </Project>
            </main>
        </>
    )
}