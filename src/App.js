import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  FormControl,
  Image,
  ListGroup,
  Figure,
  Jumbotron,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Tooltip,
  Pagination,
  ProgressBar,
  Table,
  Tab,
  Tabs,
  Collapse,
  Breadcrumb
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true
    };
  }
  render() {
    const munculPopover = <Popover title="informasi">Selamat Kamu Berhasil</Popover>
    return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand src="/">Home</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">About</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Silahkan Cari"/>
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Profile</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Tabs defaultActiveKey="Info">
        <Tab eventKey="Home" title="Home">
          <p>Contoh halaman Home</p>
        </Tab>
        <Tab eventKey="Info" title="Info">
          <p>Contoh halaman Info</p>
        </Tab>
      </Tabs>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg "
            alt="Travel1"
          />
          <Carousel.Caption>
            <h3>Tiket Murah</h3>
            <p>Promo Tiket Pesawat Murah. Dapatkan Segera!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png "
            alt="Travel2"
          />
          <Carousel.Caption>
            <h3>Tiket Murah</h3>
            <p>Promo Tiket Pesawat Murah. Dapatkan Segera!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg "
            alt="Travel3"
          />
          <Carousel.Caption>
            <h3>Tiket Murah</h3>
            <p>Promo Tiket Pesawat Murah. Dapatkan Segera!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <Jumbotron>
        <h1> Welcome </h1>
        <p> This my First Website with react Native</p>
        <p>
        <Button variant="primary">View Detail</Button>
        </p>
      </Jumbotron>
        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Sate </h5>
                <p>Sate Maknyus</p>
              </Media.Body>
            </Media>
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Sate </h5>
                <p>Sate Maknyus</p>
              </Media.Body>
            </Media>
         </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Alert variant="primary">Selamat telah Login </Alert>
          </Col>
          <Col>
            <h5>
            Pesannya Adalah
              <Badge variant="secondary">New</Badge>
            </h5>

            <Button variant="primary">
              Profile
              <Badge variant="light">9</Badge>
            </Button>
          </Col>
          <Col>
            <Alert variant="success">
              <Alert.Heading>Hey, What do You Thinks </Alert.Heading>
              <p>
                Can you tell to me What do you thinks about Life now
              </p>
              <hr />
                <p className="mb-0">
                  Whatever, you life must Go on
                </p>
              </Alert>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{width: '300px'}}>
              <Card.Img variant="top" src="https://www.gsa.gov/cdnstatic/getMediaDatamediaId168142.jpg"/>
              <Card.Body>
                <Card.Title>Technology</Card.Title>
                <Card.Text>Its All About Technology</Card.Text>
                <Button variant="primary">Lihat Detail</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Pilih Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Contact</Dropdown.Item>
                <Dropdown.Item href="#/action-3">About</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <br /><br /><br />
            <Form>
              <Form.Group>
                <Form.Label>Nama Anda</Form.Label>
                <Form.Control type="Nama" placeholder="Masukkan Nama"/>
                <Form.Text className="text-muted">
                  Gunakan Nama Sesuai ID Card
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Anda</Form.Label>
                <Form.Control type="Nama" placeholder="Masukkan Email"/>
                <Form.Text className="text-muted">
                  Privacy Anda terjaga
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Isi Password Anda</Form.Label>
                <Form.Control type="password" placeholder="Masukkan Password"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Setuju</Form.Label>
                <Form.Check type="Checkbox" placeholder="submit"/>
              </Form.Group>

              <Button variant="primary" type="submit">
                Daftar
              </Button>
            </Form>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Username"/>
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
              type="password"
              placeholder="password"/>
            </InputGroup>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <br />
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg" roundedCircle/>
            <Figure>
              <Figure.Image
              width={180}
              height={180}
              alt="Nasi Padang"
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg "
              />
              <Figure.Caption>
                Nasi Padang
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Button variant="info">Kirim</Button>
          </Col>
          <Col>1 of 3</Col>
          <Col>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Second group">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" aria-label="Third group">
              <Button>1</Button>
              <Button>2</Button>
            </ButtonGroup>
          </ButtonToolbar>
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Home</ListGroup.Item>
              <ListGroup.Item>Profile</ListGroup.Item>
              <ListGroup.Item>Contact</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Save Change</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Apakah Anda ingin Menyimpan Perubahan</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary">Tidak</Button>
                <Button variant="primary">Ya</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Col>
          <Col>
            <OverlayTrigger
              trigger="click"
              placement="top"
              overlay={munculPopover}>
              <Button variant="success">Munculkan Overlay </Button>
            </OverlayTrigger>
            <br /><br/>
            {['top'].map(placement => (
              <OverlayTrigger
                key={placement}
                placement="top"
                overlay={<Tooltip id={`tooltip-${placement}`}>
                          Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                        }
                      >
                <Button variant="success">Munculkan Overlay </Button>
            </OverlayTrigger>
          ))}
          <br />
          <br />
            <Pagination size="sm">
              <Pagination.Item active >1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
            </Pagination>
            <br />
            <br/>
            <ProgressBar now={75} label="75%"/>
          </Col>
        </Row>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama</th>
              <th>Makanan</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>fefw</td>
              <td>ffwf</td>
              <td>20000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ffgefw</td>
              <td>ffwgrf</td>
              <td>25000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>frffgefw</td>
              <td>ffwgdff</td>
              <td>25000</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="primary"
          onClick={()=>this.setState({buka: !this.state.buka})}
        >
          Tampilkan
        </Button>
        <Collapse in={this.state.buka}>
          <p>Menampilkan pesan </p>
        </Collapse>
    </Container>
    );
  }
}

export default App;
