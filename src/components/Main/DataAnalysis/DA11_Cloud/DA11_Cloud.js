import React , {useState} from 'react';
import './DA11_Cloud.css'

function DA11_Cloud() {
    const [TimeFilter,SetTimeFilter] = useState(1)
    const handleTimeFilter = (e) => {
        let a=e;
        if (TimeFilter===a) {
          
        }
        else {
          SetTimeFilter(a)
        }
    }
    return (
        <div className='DA11'>
            <div className='DA1_Header DA9_Header'>
                        <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>ابر کلمات </span>
                          <span className='DA1_HeaderDescribe DA1_HeaderDescribeIm'>توضیحات مربوط به این نمودار</span>
                        </div>

                        <div className='DA1_HeaderFilters'>
                            <div className='DA_CTimeFilters'>
                                <div className={['DA_CTimeFilter' ,TimeFilter===1? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(1)}>
                                    امروز
                                </div>
                                <div className={['DA_CTimeFilter' ,TimeFilter===2? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(2)}>
                                    هفته
                                </div>
                                <div className={['DA_CTimeFilter' ,TimeFilter===3? 'DA_CTimeFilterActive' : ''].join(' ')} onClick={() => handleTimeFilter(3)}>
                                    ماه
                                </div>
                                <div className='DA_DownloadPng'>
                                ...
                                </div>
                            </div>
                        </div>
            </div>
            <div className='DA11_CloudCantainer'>

            </div>
        </div>
  )
}

export default DA11_Cloud;
