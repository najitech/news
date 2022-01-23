import React , {useState} from 'react';
import './DA12.css'
import DA12_Hashtag from './DA12_Hashtag';

function DA12() {
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
        <div className='DA12'>
            <div className='DA1_Header DA9_Header'>
                        <div className='DA1_HeaderTitleDes'>
                          <span className='DA1_HeaderTitle'>هشتگ ها </span>
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

            <div className='DA12_Hashtags'>
                <DA12_Hashtag title="مشهد" count={23}/>
                <DA12_Hashtag title="مذاکره" count={8} />
                <DA12_Hashtag title="شادی" count={34}/>
                <DA12_Hashtag title="یلدا" count={56}/>
                <DA12_Hashtag title="زمستان" count={89}/>
                <DA12_Hashtag title="مشهد" count={23}/>
                <DA12_Hashtag title="مذاکره" count={8} />
                <DA12_Hashtag title="شادی" count={34}/>
                <DA12_Hashtag title="یلدا" count={56}/>
                <DA12_Hashtag title="مشهد" count={23}/>
                <DA12_Hashtag title="مذاکره" count={8} />
                <DA12_Hashtag title="شادی" count={34}/>
                <DA12_Hashtag title="یلدا" count={56}/>
                <DA12_Hashtag title="مشهد" count={23}/>
                <DA12_Hashtag title="مذاکره" count={8} />
                <DA12_Hashtag title="شادی" count={34}/>
                <DA12_Hashtag title="یلدا" count={56}/>
                <DA12_Hashtag title="مشهد" count={23}/>
                <DA12_Hashtag title="مذاکره" count={8} />
                <DA12_Hashtag title="شادی" count={34}/>
                <DA12_Hashtag title="یلدا" count={56}/>
            </div>
        </div>
    )
}

export default DA12;
