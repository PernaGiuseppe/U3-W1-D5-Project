import { Container, Button, Dropdown } from 'react-bootstrap'
import { BsList, BsGrid } from 'react-icons/bs'
import FilmList from './FilmList'
function MyMain() {
  return (
    <Container as="main">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1 className="text-light me-4">TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle
              variant="dark"
              className="border-white text-white rounded-0 px-3"
              id="dropdownMenuButton"
            >
              Generi
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="rounded-0">
              <Dropdown.Item href="#">Fantascienza</Dropdown.Item>
              <Dropdown.Item href="#">Commedia</Dropdown.Item>
              <Dropdown.Item href="#">Romantici</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Horror</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex">
          <Button variant="dark" className="border-white text-white rounded-0">
            <BsList />
          </Button>
          <Button variant="dark" className="border-white text-white rounded-0">
            <BsGrid />
          </Button>
        </div>
      </div>

      <section className="my-4">
        <h3 className="mb-3 text-light">Trending Now</h3>
        <FilmList title="Marvel" />
      </section>
      <section className="my-3">
        <h3 className="mb-3 text-light">Watch it Again</h3>
        <FilmList title="Harry Potter" />
      </section>
      <section className="my-3">
        <h3 className="mb-3 text-light">New Releases</h3>
        <FilmList title="Star Wars" />
      </section>
    </Container>
  )
}

export default MyMain
