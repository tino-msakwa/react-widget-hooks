import React from 'react';
import Accordion from './components/Accordion.js';
import Search from "./components/Search.js";

const items = [
    {
        title: "What is React?",
        content: "React is a popular library chosen by many developers"
    },
    {
        title: "Who is React?",
        content: "React is not a who but a what... Like I said... its a library"
    },
    {
        title: "Why is React?",
        content: "ummm... wut???"
    }
]

export default () => {
    return <h1><Search /></h1>;
}