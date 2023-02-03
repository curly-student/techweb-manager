import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';
import React from 'react';

class Home extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {restaurante: []};  
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="wrapper">
                <Navbar></Navbar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <Profile></Profile>
                    <div id="content">
                        <table className='table-hover table-primary table-striped table'>
                            <thead>
                                <tr>
                                    <th>Alfa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        beta
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        beta
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
  }


export default Home;