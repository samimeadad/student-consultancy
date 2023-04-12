import React from 'react';

const Address = () => {
    return (
        <div>
            <div className="card text-dark bg-light mb-4" style={ { maxWidth: "25rem" } }>
                <div className="card-header"><h4>City-1 Office</h4></div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                            <b>Tel: </b><a href="tel: +44123456789" className='text-warning'><b>+44123456789</b></a><br />
                            <b>Fax: </b>+44123456789<br />
                            <b>Email: </b><a href='mailto: info@ukstudentconsultants.co.uk' className='text-warning'><b>info@ukstudentconsultants.co.uk</b></a><br />
                            <b>Address:</b> Office 3, Heath Court, <br /> 489-493 Coventry Road <br />Birmingham B10 0JS
                        </p>
                    </div>
                </div>
            </div>
            <div className="card text-dark bg-light" style={ { maxWidth: "25rem" } }>
                <div className="card-header"><h4>City-2 Office</h4></div>
                <div className="card-body">
                    <div className="card-text">
                        <p>
                            <b>Tel: </b><a href="tel: +44123456789" className='text-warning'><b>+44123456789</b></a><br />
                            <b>Fax: </b>+44123456789<br />
                            <b>Email: </b><a href='mailto: info@ukstudentconsultants.co.uk' className='text-warning'><b>info@ukstudentconsultants.co.uk</b></a><br />
                            <b>Address: </b>Second Floor<br /> 235 Whitechapel Road<br /> London E1 1DB
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Address;