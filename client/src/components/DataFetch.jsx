import React from "react";
import Display from "./Display";
import axios from "axios";

class DataFetch extends React.Component {

    state = {
        players: [],
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/players")
            .then(res => {
                console.log(res.data)
                this.setState({
                   players: res.data,
                });
            })
            .catch(error => {
                console.log("You cannot fetch the data", error)
            })
    }

    render() {

        return (
            <div>
                {this.state.players.map(player => (
                    <Display
                        key={player.id}
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                ))}
                        
            </div>
        );
    }
}

export default DataFetch;