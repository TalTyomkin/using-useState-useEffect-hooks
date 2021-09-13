import React, {useEffect} from 'react';

const Test = () => {

    useEffect(() => {
        console.log('component did mount')
        return () => {
            console.log('component unMount')
        }
    })

    return ( 
        <div> A test component</div>
     );
}
 
export default Test;