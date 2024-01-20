import data from "../artist_components/artist.json" 
console.log(data)

export default function Header() {
    return (
      <header>
            <h1 id="artistName">{data.artist.name}</h1>
      </header>
    );
  }

  