import { useState, useEffect } from "react"
import { toPng } from 'html-to-image';
import { useRef } from 'react';


export default function Main() {

    const memeRef = useRef(null);


    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    function handleChange(event){
        const {value} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
        }))
    }
    function lowChange(event){
        const {value} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            bottomText: value
        }))
    }

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data =>{
        const {memes} = data.data
        setAllMemes(memes)
        const randomIndex = Math.floor(Math.random() * memes.length)
        const randomMeme = memes[randomIndex]
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme.url
        }))
    })
}, [])  
function handleClick(){
    const randomIndex = Math.floor(Math.random() * allMemes.length)
    const randomMeme = allMemes[randomIndex]
    setMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: randomMeme.url
    }))
}

function downloadMeme() {
    if (memeRef.current) {
      toPng(memeRef.current)  // Convert meme div to PNG
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'meme.png';  // Download as meme.png
          link.click();
        })
        .catch((err) => console.error("Error generating image:", err));
    }
  }
  


    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={lowChange}
                    />
                </label>
                <button onClick={handleClick} >Get a new meme image 🖼</button>
            </div>
            <div ref={memeRef} className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            <button onClick={downloadMeme}>Download Meme</button>
        </main>
    )
}