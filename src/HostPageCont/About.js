import React from 'react';

const design = {
    color: 'red',
    "text-align": "center",
};

export default function About() {
    alert("Alert: Hello!");
    return (
        <div style={design}>
            <h1>About</h1>
            <p>YOU CAN NEVER LEAVE!!</p>
            <p>Unless You Click the Back Arrow</p>
        </div>        
    );
}