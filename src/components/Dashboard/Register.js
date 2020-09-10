import React,{useState} from "react";
import PatientReg from "./PatientReg";
import CompanyReg from "./CompanyReg";
import DoctorReg from "./DoctorReg";
import {Switch, Route} from 'react-router-dom'

export default function Register() {
    const {doctor, SetDoctor} = (false)
    const {patient, SetPatient} = (false)
    const {compnay, SetCompany} = (false)


    // const ShowDoctor = () => {
    //     SetDoctor(true)
    // }
  return (
    <>
        <PatientReg />
    <Switch>
      <Route path='/register/Doctor'component={DoctorReg} />
      <Route path='/register/Company'component={CompanyReg} />
    </Switch>
    </>
  );
}
