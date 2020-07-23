import React, { Component } from "react";

class Hero extends Component {
    state = { HeroId: 189, movies: ['Movie 1', 'Movie 2'] , likeCount: 0};
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src="https://p1.hiclipart.com/preview/707/869/118/the-a-avengers-logo-png-clipart.jpg"
                    className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Avenger Name</h5>
                    <h6>Avenger Birth Name</h6>
                    
                        <ul>{this.showMovies()}</ul>
                        {/* <ul ngif={this.showMovies}>
                            <li>{this.movies.}</li>
                            <li>Movie 2</li>
                            <li>Movie 3</li>
                        </ul> */}
                    
                    <button  className="btn btn-primary" onClick={() => {this.likeAvenger(1)}}>
                    Like{" "} <span className="badge badge-light">{this.state.likeCount}</span>
                    </button>
                    <span></span>
                </div>
            </div>
        );
    }

    isHero() {
        return this.state.HeroId > 0 ? "Is an Avenger" : "Not an Avenger";
    }
    showMovies() {
        if(this.state.movies.length === 0) return <p>No movies available</p>;
        
        return this.state.movies.map((movie) => <li key = {this.state.movies.indexOf(movie)}>{movie}</li>);
    }
    likeAvenger = (likeCounter) => {
        this.setState({likeCount : this.state.likeCount + likeCounter});
        console.log("You have liked this Avenger!");
    }
}

export default Hero;