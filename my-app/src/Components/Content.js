import React from 'react';
import './Content.css';

function Content() {
    const name = "Sonia";
    return (
        <div>
            <h1>Content</h1>
            <p> My name is {name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
    );
};

export default Content;
