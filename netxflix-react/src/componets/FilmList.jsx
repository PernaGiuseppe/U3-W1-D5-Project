import { useState, useEffect } from 'react'
import {
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Carousel,
  Container,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../assets/netflix.css'

const filmLink = `http://www.omdbapi.com/?apikey=9597bf94&s=`

const FilmList = ({ title }) => {
  const [films, setFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchFilms = () => {
    if (!title) {
      setIsLoading(false)
      setIsError(true)
      alert('Nessun titolo fornito')
      return
    }

    fetch(filmLink + title)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(
          `Errore nel recupero dei film: HTTP status ${response.status}`
        )
      })
      .then((data) => {
        if (data.Search) {
          setFilms(data.Search)
          setIsError(false)
        } else {
          setFilms([])
          setIsError(true)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Errore nel recupero dati:', error)
        setIsLoading(false)
        setIsError(true)
        setFilms([])
      })
  }

  useEffect(() => {
    fetchFilms()
  }, [title])
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
              {title}". Per favore riprova.
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
                      <Link
                        className="card-link"
                        to={'/movie-details/' + film.imdbID}
                      >
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
                      </Link>
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

export default FilmList
