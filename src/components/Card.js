import {Row,Col} from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

export const Cards=({itemdata})=> {
  return (

   
    <Row  className='card-main' >
   <Zoom left>

    {
     itemdata.length>=1? (itemdata.map((item)=>{
        return(
    <Col key={item.id}  sm='12' className='card flex-row'  >
    <img  src={item.imgurl} alt='img'/>
    <div className='card-body'>
    <div className='card-title'>
    <h3>{item.title}</h3>
    <h5>{item.price}</h5>
    </div>
    <div className='catd-content'>
    <p> وصف وجبه الفطار وصف وجبه الفطار وصف وجبه الفطار .</p>
    </div>
    </div>
    </Col>
        )
     })):<h3 className='Error'>لا يوجد بيانات</h3>
}
</Zoom>

    </Row>
  );
}

export default Cards;