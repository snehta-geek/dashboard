import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import ColourPicker from './colorPicker';
import { connect } from 'react-redux'
import * as imageActions from '../actions/imageAction';

const InputDashboard = (props) => {
    const [brandName, setBrandName] = useState('')
    const [cardName, setCardName] = useState('')
    const [showPriColorPicker, setShowPriColorPicker] = useState(false)
    const [showSecColorPicker, setShowSecColorPicker] = useState(false)
    const [imageFile, setImageFile] = useState('');
    const inputImage = useRef(null);

    const showToast = async (message, success = false) => {
        if (success) toast.success(message)
        else toast.error(message.toString())
    }

    const brandValue = (e) => {
        setBrandName(e.target.value.replace(/[^A-Za-z]+$/gi, ""))
        setShowPriColorPicker(true)
        if (e.target.value.match(/[^A-Za-z]+$/gi)) {
            console.log("if-")
            showToast('Special Characters & digits are not allowed')
        }
    }

    const cardValue = (e) => {
        setCardName(e.target.value.replace(/[^A-Za-z]+$/gi, ""))
        setShowSecColorPicker(true)
        if (e.target.value.match(/[^A-Za-z]+$/gi)) {

            showToast('Special Characters & digits are not allowed')
        }
    }
    const changeImg = async e => {
        const reader = new FileReader();
        reader.onload = function () {
            if (reader.readyState === 2) {
                props.imageAction(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className="input-container">
            <div className="input-field">
                <label htmlFor="bname">Brand name : </label>
                <input className="text" type="text" value={brandName} onChange={brandValue} maxLength="10" title="Please enter exactly 10 chars" />
            </div>

            <div className="input-field">
                <label htmlFor="cname">Card Name :  </label>
                <input className="text" type="text" value={cardName} onChange={cardValue} maxLength="10" title="Please enter exactly 10 chars" />
            </div>

            <div className="input-field">
                <div className="u-img">
                    <label htmlFor="cname">Upload Image :  </label>

                    <input className="image" onChange={e => changeImg(e)} type="file" ref={inputImage} accept="image/*" />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = {
    ...imageActions
};

export default connect(mapStateToProps, mapDispatchToProps)(InputDashboard)

