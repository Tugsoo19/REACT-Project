import Nav from 'react-bootstrap/Nav';

function PopularTabs() {
  return (
    <Nav variant="pills bg-none" defaultActiveKey="/Cameras" className='gap-3'>
      <Nav.Item className='border rounded-5'>
        <Nav.Link href="/Cameras">Cameras</Nav.Link>
      </Nav.Item>
      <Nav.Item className='border rounded-5'>
        <Nav.Link eventKey="link-1">Laptops</Nav.Link>
      </Nav.Item >
      <Nav.Item className='border rounded-5'>
        <Nav.Link eventKey="link-2">Tablets</Nav.Link>
      </Nav.Item>
      <Nav.Item className='border rounded-5'>
        <Nav.Link eventKey="link-3">Mouse</Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default PopularTabs;