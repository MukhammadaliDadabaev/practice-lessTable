import React, { Component } from "react";

class App extends Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    const players = [
      {
        firstName: "Pelle",
        age: 33,
        club: "CSHA",
        value: 70,
      },
      {
        firstName: "Salah",
        age: 31,
        club: "Saud",
        value: 170,
      },
      {
        firstName: "Royal",
        age: 39,
        club: "USA",
        value: 100,
      },
      {
        firstName: "Roma",
        age: 37,
        club: "Ukrain",
        value: 130,
      },
      {
        firstName: "Romaha",
        age: 32,
        club: "Ufa",
        value: 150,
      },
      {
        firstName: "Ali",
        age: 27,
        club: "Liveya",
        value: 180,
      },
      {
        firstName: "Tomas",
        age: 39,
        club: "China",
        value: 130,
      },
    ];
    this.setState({
      clubs: players,
    });
  }
  removePlayer = (index) => {
    const remove = this.state.clubs;
    remove.splice(index, 1);
    this.setState({
      clubs: remove,
    });
  };

  render() {
    const { clubs } = this.state;
    return (
      <div className="market">
        <div className="container mt-3">
          <h1 className="text-center m-3">⚽ TRANSFER MARKET</h1>
          <div className="row">
            <div className="col">
              <div className="table-responsive-sm">
                <table className="table table-hover table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>№</th>
                      <th>First Name</th>
                      <th>Age</th>
                      <th>Club</th>
                      <th>Market Value</th>
                      <th>Off | On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clubs.map((club, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{club.firstName}</td>
                        <td>{club.age}</td>
                        <td>{club.club}</td>
                        <td>
                          <span className="badge badge-primary">
                            ⚱ $ {club.value}.000ml
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => this.removePlayer(index)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
