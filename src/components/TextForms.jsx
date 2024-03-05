import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");

    const charLength = (ch) => {
        let count = 0;
        let c = ch.split("");
        for (let i = 0; i < c.length; i++) {
            if (c[i] === " ") {
                count++;
            }
        }
        return ch.length - count;
    }
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = (event) => {
        setText("");
    }
    const handleFindNum = () => {
        let matches = text.replace(/[^0-9]/g, "");
        if (matches) {
            setText(matches);
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <>
            <div className="container" >
                <h1>Enter Text to analyze</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleFindNum}>Find Number</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {charLength(text)} characters</p>
                <p className='mt-2'>This Paragraph can be read in {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes</p>
                <h2>Preview</h2>
                <p class="text-break">{text.length > 0 ? text : "Enter text above to preview here"}</p>
            </div>
        </>
    )
}
