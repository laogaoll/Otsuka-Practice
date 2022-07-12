import {React} from 'react';
import './index.less';

const Button = ({data}) => {
    return(
        <div className='button'>
            <span>{data}</span>
        </div>
    )
}
export default Button;