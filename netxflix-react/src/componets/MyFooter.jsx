import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function MyFooter() {
  return (
    <footer className="text-dark-emphasis mt-9 mb-3 py-2 text-center text-md-start text-md-center text-lg-start">
      <Container>
        <Row className="mb-3">
          <Col xs={12} className="px-0">
            <a href="#" className="text-dark-emphasis mx-2">
              <BsFacebook className="fs-4" />
            </a>
            <a href="#" className="text-dark-emphasis mx-2">
              <BsInstagram className="fs-4" />
            </a>
            <a href="#" className="text-dark-emphasis mx-2">
              <BsTwitter className="fs-4" />
            </a>
            <a href="#" className="text-dark-emphasis mx-2">
              <BsYoutube className="fs-4" />
            </a>
          </Col>
        </Row>

        <Row xs={1} sm={2} md={4} className="g-3 mb-4">
          <Col>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Audio and Subtitles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Media Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Audio Description
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Investor Relations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Legal Notices
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark-emphasis text-decoration-none small"
                >
                  Corporate Information
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col
            xs={12}
            className="text-center text-md-start text-md-center text-lg-start"
          >
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-0 px-4"
            >
              Service Code
            </Button>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            className="text-center text-md-start text-md-center text-lg-start"
          >
            <p className="text-dark-emphasis small mb-0">
              &copy; 1997-2019 Netflix, Inc. {'{i-000c0bba29fecb0a}'}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
