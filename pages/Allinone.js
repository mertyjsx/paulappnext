import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Allinone/Banner';
import Imagıne from "../components/Allinone/imagine"
import ImagıneLogos from "../components/Allinone/imagine2logos"
import Madde from "../components/Allinone/Madde"
class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
               <Imagıne></Imagıne>
<ImagıneLogos></ImagıneLogos>
<Madde></Madde>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Signup;