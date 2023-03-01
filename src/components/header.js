import { Row,Col } from "react-bootstrap"


export const Header=()=>{

    return(
        <Row>
        <Col sm='12' className="justify-content-center text-center">
         <div className="header">
            <h2>قائمة الطعام</h2>
            <div className="border"></div>
         </div>
        </Col>
        </Row>
    )
}