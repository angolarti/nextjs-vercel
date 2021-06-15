import { useState } from 'react'

function Home() {
    return (
        <div>
            <div>Home 2</div>
            <Counter />
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(1)

    function addCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default Home
