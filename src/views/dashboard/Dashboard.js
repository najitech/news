import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import {CgWebsite} from 'react-icons/cg';
import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import CIcon from '@coreui/icons-react'
import {FaRssSquare} from 'react-icons/fa'
import {BiWorld} from 'react-icons/bi'
import MainChartExample from '../charts/MainChartExample.js'
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">نمودار</h4>
              <div className="small text-muted">توضیح یا تاریخ</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButtonGroup style={{direction:'ltr'}} className="float-right mr-3">
                {
                  ['روز', 'ماه', 'سال'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'ماه'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">بازدید ها</div>
              <strong>درصد 1</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">تعداد خبر</div>
              <strong>عنوان 2</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">توضیح 3</div>
              <strong>عنوان 3</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">توضیح 4</div>
              <strong>عنوان 4</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">توضیح 5</div>
              <strong>عنوان 5</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts/>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
               عنوان نمودار
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">عنوان 1</small>
                        <br />
                        <strong className="h4">مقدار 1</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">عنوان 2</small>
                        <br />
                        <strong className="h4">مقدار 2</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        دوشنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      سه شنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      چهارشنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      پنج شنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      جمعه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      شنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="53" />
                      <CProgress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      یک شنبه
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                      محتوای نوع 1
                      &nbsp;
                      <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                     محتوای نوع 2
                    </small>
                  </div>
                </CCol>

                <CCol xs="12" md="6" xl="6">

                  <CRow>
                    <CCol sm="6">
                      <CCallout color="warning">
                        <small className="text-muted">عنوان 3</small>
                        <br />
                        <strong className="h4">مقدار 3</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="success">
                        <small className="text-muted">عنوان 4</small>
                        <br />
                        <strong className="h4">مقدار 4</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <span className="title">حس خبر</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="warning" value="43" />
                    </div>
                  </div>
                  
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <BiWorld style={{fontSize:"22px"}} className="progress-group-icon" name="cil-globe-alt" />
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="56" />
                    </div>
                  </div>


                  <div className="progress-group">
                    <div className="progress-group-header">
                      <AiFillFacebook style={{fontSize:"22px"}} className="progress-group-icon"/>
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="15" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <AiFillTwitterSquare style={{fontSize:"23px"}} name="cib-twitter" className="progress-group-icon"/>
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="11" />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <FaRssSquare name="cib-linkedin" style={{fontSize:"20px"}} className="progress-group-icon" />
                      <span className="title">RSS </span>
                      <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="success" value="8" />
                    </div>
                  </div>
                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CgWebsite style={{fontSize : '23px'}}/></th>
                    <th>وب سایت</th>
                    <th>نمودار</th>
                    <th>فعالیت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'https://www.shahrekhabar.com/statics/images/logo.png'} className="c-avatar-img" alt="https://www.shahrekhabar.com/" />
                      </div>
                    </td>
                    <td>
                      <div>شهر خبر</div>
                      <div className="small text-muted">
                        تاریخ شروع
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>10 ثانیه پیش</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/3/35/Tasnim_News_Agency_logo_2color_rounded_square.png'} className="c-avatar-img" alt="https://www.tasnimnews.com/" />
                      </div>
                    </td>
                    <td>
                      <div>تسنیم</div>
                      <div className="small text-muted">
                        تاریخ شروع
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>5 دقیقه قبل</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'data:image/png;base64,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'} className="c-avatar-img" alt="https://www.irna.ir/" />
                      </div>
                    </td>
                    <td>
                      <div>ایرنا</div>
                      <div className="small text-muted">
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>1 ساعت پیش</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'https://yektalink.com/wp-content/uploads/2019/05/mashreghnews-logo.jpg'} className="c-avatar-img" alt="https://www.mashreghnews.ir" />
                      </div>
                    </td>
                    <td>
                      <div>مشرق نیوز</div>
                      <div className="small text-muted">
                         تاریخ شروع
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>یک ماه پیش</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'https://apprecs.org/ios/images/app-icons/256/37/841251639.jpg'} className="c-avatar-img" alt="https://www.khabaronline.ir" />
                      </div>
                    </td>
                    <td>
                      <div>خبر آنلاین</div>
                      <div className="small text-muted">
                        تاریخ شروع 
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>هفته پیش</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/e/e9/ISNA_logo.jpg'} className="c-avatar-img" alt="https://www.isna.ir/" />
                      </div>
                    </td>
                    <td>
                      <div>ایسنا</div>
                      <div className="small text-muted">
                        تاریخ شروع
                      </div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                   
                    <td>
                      <div className="small text-muted">آخرین پست</div>
                      <strong>دیروز</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
