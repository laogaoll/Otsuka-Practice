import {React} from 'react';
import './index.less';

const Img02 = ({data})=>{
    return(
        <div className='sc-Img02'>
            {data.list?.map((item, i) =>
                i<=3&&(<div className='m-item' key={i}>
                    <div className='m-img'>
                        <img src={item?.img} />
                        </div>
                        <div className='m-tit'>{item?.title}</div>
                        <div className='m-cnt'>{item?.cnt}</div>
                    </div>
                    
                    )
                )}
            
       
        </div>
    )
}
export default Img02