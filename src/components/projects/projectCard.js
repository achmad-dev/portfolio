import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, name, img, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{name}:</span>
          <a href={link} target="_blank" rel="noopener noreferrer">open</a>
        </div>
      </div>
    </Col>
  )
}