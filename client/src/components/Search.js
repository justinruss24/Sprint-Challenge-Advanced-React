import React from 'react';
import "../App";
import "../App.css";
import { useInput } from "../hooks/useInput";

const Search = (props) => {

    let soccerPlayers = props.soccerData;
    const [handleChange, searchResults, formSubmit, searchTerm] = useInput(soccerPlayers);

    return(
        <div>
            <div>
                <form onSubmit={formSubmit}>
                    <input 
                        id="search"
                        type="text"
                        name="textfield"
                        placeholder="Search Players"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button>Search</button>
                </form>
                <div>
                    {searchResults.map(item => {
                        return (
                            <div key={item.id} className="results">
                                <p>{item.name}</p>
                                <p>{item.country}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="soccerPlayers">
                {soccerPlayers.map(player => {
                    return (
                        <div className="soccerPlayer" key={player.id}>
                            <p className="player">{player.name}</p>
                            <p className="country">{player.country}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Search;