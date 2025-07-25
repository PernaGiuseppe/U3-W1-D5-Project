import { Component } from 'react'
import {
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Carousel,
  Container,
} from 'react-bootstrap'
const filmLink = `http://www.omdbapi.com/?apikey=9597bf94&s=`
// Questo è il link dell'API con la mia apikey già inserita, pronto per il search tramite il codice

class FilmList extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  }

  arrayFilm = () => {
    fetch(filmLink + this.props.title)
      // tramite questa fetch, faccio la GET dall'api dei film, poi in mymain, tramite il <filmlist/> do come props il titolo da cercare
      // tramite l'elemento title="", infatti se non vi sono elementi tra gli apici, da errore
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(
          `Errore nel recupero dei film: HTTP status ${response.status}`
        )
      })
      .then((data) => {
        this.setState({
          films: data.Search,
          isLoading: false,
          isError: false,
        })
      })
      .catch((error) => {
        console.error('Errore nel recupero dati:', error)
        this.setState({
          isLoading: false,
          isError: true,
          films: [],
        })
      })
  }
  componentDidMount() {
    if (this.props.title) {
      this.arrayFilm()
    } else {
      this.setState({ isLoading: false, isError: true })
      alert('Nessun titolo fornito')
    }
  }

  render() {
    const { films, isLoading, isError } = this.state

    const chunkArray = (arr, chunkSize) => {
      const R = []
      for (let i = 0; i < arr.length; i += chunkSize)
        R.push(arr.slice(i, i + chunkSize))
      return R
    }

    const filmsPerSlide = 6
    const chunkedFilms = chunkArray(films, filmsPerSlide)

    return (
      <>
        {isLoading && (
          <Row className="justify-content-center my-3 ">
            <Col xs={12} className="text-center">
              <Spinner animation="border" role="status" className="text-light">
                <span className="visually-hidden">Caricamento...</span>
              </Spinner>
            </Col>
          </Row>
        )}

        {isError && !isLoading && (
          <Row className="justify-content-center my-3">
            <Col xs={12} className="text-center">
              <Alert variant="danger">
                Errore nel recupero dei film o nessun risultato trovato per "
                {this.props.title}". Per favore riprova.
              </Alert>
            </Col>
          </Row>
        )}

        {!isLoading && !isError && films.length > 0 && (
          <Container className="netflix-carousel-container">
            <Carousel indicators={false} controls={true} interval={null}>
              {chunkedFilms.map((films, index) => (
                <Carousel.Item key={index}>
                  <Row className="netflix-carousel-row flex-nowrap overflow-hidden">
                    {films.map((film) => (
                      <Col
                        key={film.imdbID}
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        className="my-2"
                      >
                        {' '}
                        <Card className="shadow border-0 h-100 bg-dark text-light">
                          <Card.Img
                            variant="top"
                            src={film.Poster}
                            alt={film.Title}
                            style={{
                              objectFit: 'cover',
                              height: '300px',
                              cursor: 'pointer',
                            }}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        )}
      </>
    )
  }
}

export default FilmList
