import React from 'react'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

interface Todos {
    title: string;
}

export default async function Tutorial() {
    const todos: Todos[] = await getData();
    return (
        <>
        <div className="badge">default</div>
        <div className="badge badge-neutral">neutral</div>
        <div className="badge badge-primary">primary</div>
        <div className="badge badge-secondary">secondary</div>
        <div className="badge badge-accent">accent</div>
        <div className="badge badge-ghost">ghost</div>
        </>
        
    );
}
