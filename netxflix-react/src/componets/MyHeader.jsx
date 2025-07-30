import {
  Navbar,
  Container,
  Nav,
  Button,
  NavDropdown,
  Image,
} from 'react-bootstrap'
import { BsSearch, BsBellFill } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

function MyHeader() {
  const location = useLocation()
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Link className="navbar-brand " to={'/'}>
            <Image
              height="40"
              src="/media/netflix_logo.png"
              alt="Netflix Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Link
                className={
                  'nav-link text-light ' +
                  (location.pathname === '/' ? ' fw-bold' : '')
                }
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  'nav-link text-light' +
                  (location.pathname === '/tvshows' ? ' fw-bold' : '')
                }
                to="/tvshows"
              >
                TV Shows
              </Link>
              <Link
                className={
                  'nav-link text-light' +
                  (location.pathname === '/movies' ? ' fw-bold' : '')
                }
                to="/movies"
              >
                Movies
              </Link>
              <Link
                className={
                  'nav-link text-light' +
                  (location.pathname === '/recent' ? ' fw-bold' : '')
                }
                to="/recent"
              >
                Recently Added
              </Link>
              <Link
                className={
                  'nav-link text-light' +
                  (location.pathname === '/mylist' ? ' fw-bold' : '')
                }
                to="/mylist"
              >
                My List
              </Link>
            </Nav>
            <div className="d-flex flex-column flex-lg-row align-items-center mt-3 mt-lg-0">
              <Button
                id="edit-button"
                variant="danger"
                className="rounded-0 me-lg-4 me-sm-2 me-md-3 text-black fw-semibold mb-2 mb-lg-0"
              >
                Profile
              </Button>
              <div className="d-flex align-items-center me-3 me-lg-4">
                <BsSearch className="text-light me-3" />
                <Nav.Link href="#" className="text-light">
                  KIDS
                </Nav.Link>
              </div>

              <BsBellFill className="text-light me-3 me-lg-4" />
              <NavDropdown
                title={
                  <Image
                    src="/media/kids_icon.png"
                    className="img-fluid me-2"
                    style={{ maxHeight: '24px' }}
                    alt="Icona"
                  />
                }
                id="profile-dropdown"
                align="end"
                className="rounded-0"
                variant="outline-secondary"
              >
                <NavDropdown.Item href="#">
                  <Image
                    style={{ height: '30px' }}
                    src="/media/yellow-icon.jpg"
                    alt="yellow-icon-netflix"
                    className="pe-2"
                  />
                  Giuseppe
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  <Image
                    style={{ height: '30px' }}
                    src="/media/red-icon.jpg"
                    alt="red-icon-netflix"
                    className="pe-2"
                  />
                  Stefano
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default MyHeader
