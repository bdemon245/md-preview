import { useEffect, useState } from 'react'
import showdown from 'showdown'
import './App.css'
import Editor from './Editor'
import Preview from './Preview'

function App() {
  const defaultText = "# Hi, I'am Mojahid\n## I am a Web Developer\n## This is a ```markdown``` to ```html``` converter app\nYou can follow me on[Facebook](https://www.facebook.com/itsemon245) to know about me more\n### Skills I possess:\n- JavaScript\n- PHP & MySQL\n- Laravel\n- React\n- Bootstrap"

  const converter = new showdown.Converter()
  const [text, setText] = useState(defaultText)
  const html = converter.makeHtml(text)

  useEffect(() => {
    document.querySelector('#preview').innerHTML = html
  }, [])
  const onChangeHandler = (e) => {
    setText(e.target.value)
    document.querySelector('#preview').innerHTML = html
  }
  const onClickHandler = () => {
    if (text === "") {
      document.querySelector('#preview').innerHTML = '<span style="color:gray">Text preview here...</span>'
    }
    setText("")
  }

  return (
    <div className="App">
      <h1>Markdown To Html</h1>
      <div className='container'>
        <Editor text={text} onChangeHandler={onChangeHandler} onClickHandler={onClickHandler} />
        <div className="hr"></div>
        <Preview html={html} />
      </div>
    </div>
  )
}

export default App
