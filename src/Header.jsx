

export default function Header() {
    const trollFace = "https://www.pngitem.com/pimgs/m/146-1468479_trollface-png-image-troll-face-transparent-background.png"
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator <big></big> <small><i>By Madhu Sharma</i></small> </h1>
        </header>
    )
}