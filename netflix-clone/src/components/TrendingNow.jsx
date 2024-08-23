import React, { Component } from 'react';
import "../App.css";

class TrendingNow extends Component {

    state = {
        films: []
    }

    fetchFilms = () => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=e8c1f24e&s=${this.props.term}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("errore nella chiamata")
                }
            })
            .then((data) => {
                this.setState({ films: data.Search });
            })
            .catch((e) => {
                console.error(e);
            })
    }

    componentDidMount() {
        this.fetchFilms();
    }

    render() {
        const carouselId = `carousel-${this.props.term}`;

        return (
            <>
                <h2 className="text-light fs-5 mb-3 mt-5">{this.props.term}</h2>
                    <div id={carouselId} className="carousel slide d-flex justify-content-center w-100 my-0 mx-auto caroselloCentrato" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row ">
                                    {this.state.films.map((f, i) => {
                                        if (i < 2) {
                                            return (
                                                <div key={i} className="col-4 col-lg-2 px-1 over"><img src={f.Poster} className="d-block w-100"
                                                    alt={f.Title} />
                                                </div>
                                            )
                                        } else if (i > 1 && i < 6) {
                                            return (
                                                <div key={i} className="col-4 col-lg-2 px-1 d-none d-lg-block over"><img src={f.Poster} className="d-block w-100"
                                                    alt={f.Title} />
                                                </div>
                                            )
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row ">
                                    {this.state.films.map((f, i) => {
                                        if (i > 3 && i < 6) {
                                            return (
                                                <div key={i} className="col-4 col-lg-2 px-1 over"><img src={f.Poster} className="d-block w-100"
                                                    alt={f.Title} />
                                                </div>
                                            )
                                        } else if (i > 5 && i < 10) {
                                            return (
                                                <div key={i} className="col-4 col-lg-2 px-1 d-none d-lg-block over"><img src={f.Poster} className="d-block w-100"
                                                    alt={f.Title} />
                                                </div>
                                            )
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`}
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`}
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
            </>
        );
    }
}

export default TrendingNow;
