import React from 'react'
import { connect } from 'react-redux'

function LiveCard(props) {
   
    return (
        <div>
            <h1>Live</h1>
            <div className="live-card">
                <img src={props.getImage} class="card-img-top" alt="Image"  width='600px' height="400px" />
                <div class="card-body">
                    <div className="primary-color" style={{
                        backgroundColor: props.getColor.priColor
                    }} >
                      <p style={{width:'100%'}}>Primary Color</p>  


                    </div>
                    <div className="secondary-color" style={{
                        backgroundColor: props.getColor.secColor
                    }}>
                     <p style={{width:'100%'}}>Secondary Color
                     </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    
    return {
        getColor: state.pickColor,
        getImage: state.pickImage.image,
       
    }
}

export default connect(mapStateToProps)(LiveCard)