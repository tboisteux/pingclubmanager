import React, { Component } from 'react';
import { gql, graphql } from 'apollo-mobx';

class PlayerList extends Component {

  render() {
    console.log(this.props);
    const { loading, error, players } = this.props.data;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div>
        <ul>
          {players.map(player => (
            <li key={player.id}>
              {player.firstname} {player.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

export default graphql(gql`
  query PlayersQuery {
    players {
      id
      firstname
      name
    }
  }
`)(PlayerList);
