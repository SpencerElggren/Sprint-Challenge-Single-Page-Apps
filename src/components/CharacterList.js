import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Card} from "semantic-ui-react";

export default function CharacterList() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
          console.log(response.data);
          setCharacter(response.data.results)
          })
        .catch((error => console.log("No Data" + error)))
  }, []);

  return (
    <section className="character-list">
        <Card.Group>
            {characters.map(character => (
                <Card key={character.id}>
                    <img src={character.image} alt={'Character Card'}/>
                    <Card.Content>
                        <Card.Header>{character.name}</Card.Header>
                        <Card.Meta>{character.species}, {character.status}</Card.Meta>
                        <Card.Description>{character.location.name}</Card.Description>
                    </Card.Content>
                </Card>
            ))}
        </Card.Group>
    </section>
  );
}
