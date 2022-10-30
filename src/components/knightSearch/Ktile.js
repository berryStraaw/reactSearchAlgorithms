import React, {useEffect} from 'react';
import KImage from './KImage';
const Ktile=(props)=>{
    
    const coords=props.coords;
    const value=props.value;
    const change=props.change;

    return(
        <div className='clickableTile'
            style={typeof(value)=='number'? {backgroundColor:`rgba(6,123,194, ${1-0.05*value}) ` } : {}}
            onClick={()=>{
            change(coords,"K");
        }}>
            {value=='K'? <KImage/> : value}
        </div>
    );
}

export default Ktile;