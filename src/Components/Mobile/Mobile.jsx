/* import { react } from '@babel/types';
import { render } from '@testing-library/react'; */

import React from 'react';
import SubMobile from './SubMobiles';
//import '../../../node_modules/bootstrap/dist/css'

class MobileStore extends React.Component {

    render() {
        return (
            <React.Fragment>

                <SubMobile />
                             
            </React.Fragment>
        )
    }
}

export default MobileStore;