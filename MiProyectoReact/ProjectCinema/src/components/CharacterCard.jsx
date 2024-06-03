import Details from "./Details"
import Image from "./Image"
import Title from "./Title"
import Ricky from '../assets/rick-morty-1.jpg'


function Card(props){
    
    return(
      <div className="container">
        <Image img={props.img} />
        <div className='titulo'>
            <Title Title={props.Title}/>
        </div>
        <div className='container1'>
          <div className='descripcion'>
          <Details species={props.species}/>
          </div> 
        </div> 
      </div>  )

}

export default Card