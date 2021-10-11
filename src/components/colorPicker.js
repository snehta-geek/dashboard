import React, { useState } from 'react'

import { ChromePicker } from 'react-color'
// import LiveCard from './livePart'
import { connect } from 'react-redux'
// import { setColor, setColorAction } from '../actions/colorAction'
import * as coloractions from '../actions/colorAction';


const ColourPicker = (props) => {
    const [primary, setPrimary] = useState('#fff')
    const [secondary, setSecondary] = useState('#fff')
    const [showPriColorPicker, setShowPriColorPicker] = useState(false)
    const [showSecColorPicker, setShowSecColorPicker] = useState(false)


    const chooseColorPicker1 = (e) => {
        setShowPriColorPicker(!showPriColorPicker)
    }
    const chooseColorPicker2 = (e) => {
        setShowSecColorPicker(!showSecColorPicker)
    }


    const PriColorChange = (e) => {
        // console.log("cc-", e) 
        props.priColorAction(e)
        setPrimary(e)
        // setShowPriColorPicker(false)
    }
    const SecColorChange = (e) => {
        props.secColorAction(e)
        setSecondary(e)
        // setShowSecColorPicker(false)
    }


    return (
        <div>
            <div className='colorpickers-container'>
                <button className="p-btn" onClick={chooseColorPicker1}>
                    {showPriColorPicker ? 'Close color picker' : 'Pick primary color'}
                </button>
                {showPriColorPicker && (
                    <ChromePicker color={primary} onChange={(e) => PriColorChange(e.hex)} />
                )}

                <button className="s-btn" onClick={chooseColorPicker2}>
                    {showSecColorPicker ? 'Close color picker' : 'Pick secondary color'}
                </button>
                {showSecColorPicker && (
                    <ChromePicker color={secondary} onChange={(e) => SecColorChange(e.hex)} />
                )}

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getFormData: state.pickColor.color,
    }
}
const mapDispatchToProps = {
    ...coloractions
};

export default connect(mapStateToProps, mapDispatchToProps)(ColourPicker)
