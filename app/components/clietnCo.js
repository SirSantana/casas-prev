'use client'
import { useState } from "react";

export default function ClientCo() {
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>ClientCo</h1>
        <button onClick={() => setCount(count + 1)}>
            count is {count}
        </button>
        </>
    )
}