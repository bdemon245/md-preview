import React from 'react'

export default function Editor({ text, onChangeHandler, onClickHandler }) {
    return (
        <div id='editor-section' style={{position: 'relative'}}>
            <textarea name="text-editor" id="editor" placeholder='Write your markdown here...' value={text} onChange={onChangeHandler}></textarea>
            <button onClick={onClickHandler} style={{position: 'absolute', right: 0, bottom: -40}}>Clear</button>
        </div>
    )
}
