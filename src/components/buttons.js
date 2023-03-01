import { Row , Col} from "react-bootstrap"
import Roll from 'react-reveal/Roll';

export const Buttons=({fliterbycat,allcat})=>{
    //filter by cat
    const onfilter=(cat)=>{
        fliterbycat(cat);
    }
    return(
        <Row> 
        
        <Col sm='12' className="d-flex justify-content-center">
        <Roll>
        {
               allcat.length>=1? (allcat.map((item)=>{
                return(
                    <button key={item.id} className="btn-design" onClick={()=>onfilter(item)}>{item}</button>
                )
               })):<h3>لا يوجد بيانات</h3>
              
        }
        </Roll>
        </Col>
        </Row>
    )
}