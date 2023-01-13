import Head from "next/head";
import Top from "../components/Top";
import hljs from 'highlight.js';
import cs from 'highlight.js/lib/languages/csharp'
import {useEffect} from "react";
import Link from "next/link";
hljs.registerLanguage('cs', cs)

export default function Index() {

    useEffect(() => {
        hljs.configure({ classPrefix: ''});
        hljs.initHighlighting()
    }, [])

    return (
        <>
            <Head>
                <title>Sudoku Solver</title>
            </Head>
            <main>
                <Top/>
                <p>Earlier this year, I developed a tool that can solve most human-solvable Sudoku puzzles using logical reasoning in C#.</p>
                <p>The tool outputs logically deducible steps and tries to get as far as possible in solving the puzzle.</p>
                <br/>
                <p>The solver has various different rules it can use, and it tries to apply the rules from least computationally intensive to most.</p>
                <p>A simple rule would look something like this:</p>
                <br/>
                <pre><code className="cs">
                    {`
public bool ApplyRule(Cell cell, Solver solver) 
{
    if (cell.Possibilities.Count == 1)
    {
        solver.PlaceDigit(cell, cell.Possibilities[0]);
        return true;
    }
    return false;
}
                    `}
                </code></pre>
                <br/>
                <p>An example of a solve can be seen <Link className="link" href="/solve.png">here</Link>.</p>
                <br/>
            </main>
        </>
    )
}