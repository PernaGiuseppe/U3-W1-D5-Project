import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const filmLink = `http://www.omdbapi.com/?apikey=9597bf94&s=`

function MovieDetails() {
  const params = useParams()
  console.log('PARAMS', params)
  //   const arrayFilm = () => {
  //     fetch(filmLink + this.props.title)
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json()
  //         }
  //         throw new Error(
  //           `Errore nel recupero dei film: HTTP status ${response.status}`
  //         )
  //       })
  //       .then((data) => {})
  //       .catch((error) => {
  //         console.error('Errore nel recupero dati:', error)
  //       })
  //   }
  return <></>
}
export default MovieDetails
