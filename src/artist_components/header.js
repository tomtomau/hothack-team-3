import data from "./artist.json" 
console.log(data)

export default function Header() {
    return (
      <div>
            <h1 id="artistName">{data.artist.name}</h1>

      </div>
    );
  }

  