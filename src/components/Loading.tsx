import React from 'react'
import {
  LoadingOutlined,
} from '@ant-design/icons';
import './less/loading.less'
const Loading=()=>{
  return (
    <div className='loading'>
      <LoadingOutlined style={{color:'red',fontSize:'80px'}}/>
    </div>
  )
}
export default Loading