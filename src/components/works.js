import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.jpg'),
    title: 'Example 1',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img3.jpg'),
    title: 'Example 2',
    subtitle: 'Branding'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/img4.jpg'),
    title: 'Example 3',
    subtitle: 'Web Design'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/img5.jpg'),
    title: 'Example 4',
    subtitle: 'Branding'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/img6.jpg'),
    title: 'Example 5',
    subtitle: 'Photography'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/img7.jpg'),
    title: 'Example 6',
    subtitle: 'Web Design'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pengalaman Kerja</h2>
          <div className="subtitle">Pekerjaan </div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;