import React from 'react';
import PropTypes from 'prop-types';
import { CWidgetBrand, CRow, CCol } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

const WidgetsBrand = ({withCharts})=>{

  // render

  return withCharts ?
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="facebook"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-facebook"
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[65, 59, 84, 84, 51, 55, 40]}
          label="Friends"
          labels="months"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-twitter"
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[1, 13, 9, 17, 34, 41, 38]}
          label="Followers"
          labels="months"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-linkedin"
          height="52"
          className="my-4"
        />
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[78, 81, 80, 45, 34, 12, 40]}
          label="Contracts"
          labels="months"
        />
      </CWidgetBrand>
    </CCol> 

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
        color="gradient-warning"
      >
       <img src="https://motamem.org/wp-content/uploads/2018/09/RSS-logo.gif" height="100px"/>
        <ChartLineSimple
          className="position-absolute w-100 h-100"
          backgroundColor="rgba(255,255,255,.1)"
          dataPoints={[35, 23, 56, 22, 97, 23, 64]}
          label="Followers"
          labels="months"
        />
      </CWidgetBrand>
    </CCol>
  </CRow> :
  
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="facebook"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-facebook"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="twitter"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-twitter"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        color="linkedin"
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
      >
        <CIcon
          name="cib-linkedin"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetBrand
        rightHeader="مقدار 1"
        rightFooter="عنوان"
        leftHeader="مقدار 2"
        leftFooter="توضیح"
        color="gradient-warning"
      >
        <CIcon
          name="cil-calendar"
          height="56"
          className="my-4"
        />
      </CWidgetBrand>
    </CCol>
  </CRow>
}

WidgetsBrand.propTypes = {
  withCharts: PropTypes.bool
}

export default WidgetsBrand
