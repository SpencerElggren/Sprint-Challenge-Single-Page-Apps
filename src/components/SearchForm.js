import React, {useEffect, useState} from "react";
import axios from 'axios'
import { Card, Search} from "semantic-ui-react";

export default function SearchForm() {
    const [results, setResults] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange= e => {
        setResults(e.target.value)
    };

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${results}`)
            .then((response) => {
                setSearchResults(response.data.results);
                console.log(response.data.results);
            })
            .catch((error => console.log("No Data" + error)))
    }, [results]);


  return (
    <section className="search-form">
     <Search className={'searchbar'} type={'text'} placeholder={'Search'} value={results} onChange={handleChange}/>
        <Card.Group>
            {searchResults.map(character => (
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
