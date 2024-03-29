import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeFriendlyURL } from '../../utils/urlUtils';
import { Col, Container, Row } from 'react-bootstrap';
import './BusinessPage.css'

function BusinessPage(props) {

    const params = useParams();
    const business = props.businesses.find(
        (b) => makeFriendlyURL(b.name) == params.businessName
    )
    const navigate = useNavigate();
    // const [count, setCount] = useState(0);
    useEffect(() => {
        if (business == undefined) {
            navigate('/')
        }
        // Update the document title using the browser API
    }, [business, navigate]);

    useEffect(() => {
        document.title = business?.name;
    }, []);

    return (
        <>
            <div className='Jumbotron'>
                <h1>{business?.name}</h1>
                <br></br>
                <img className='business_image' src={business?.picturePath} alt='' />
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col>
                        <div className='centeredText'>
                            <div className='block-text'>
                                <p id='informationText'>{business?.description}</p>
                            </div>
                            <h1>{business?.category}</h1>
                            <h2>{business?.subcategory}</h2>
                            <br></br>
                            <h4><a href={'tel:' + business?.phoneNumber} className='phonenumber'>{business?.phoneNumber} {business?.phoneNumberDescription}</a></h4>
                            <h4><a href={'tel:' + business?.phoneNumber2} className='phonenumber'>{business?.phoneNumber2} {business?.phoneNumberDescription2}</a></h4>

                            {/* If they have a public phone number, display it here */}
                            {(business?.phoneNumber != '') &&
                                <br></br>
                            }

                            {/* <!-- * IF they have a Website Link --> */}
                            {(business?.websiteURL != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/website_logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.websiteURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Website</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* <!-- * IF they have a Facebook Link --> */}
                            {(business?.facebookURL != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/facebook-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.facebookURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Facebook</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* <!-- * IF they have an Etsy Link --> */}
                            {(business?.etsyURL != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/etsy-logo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.etsyURL} target='_blank' rel='noopener noreferrer'
                                                className='businessLinks'>{business?.name} Etsy</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* <!-- * Instagram Section --> ONLY SHOW IF THEY HAVE AN INSTAGRAM */}
                            {(business?.instagramURL != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.instagramURL} target='_blank'
                                                rel='noopener noreferrer' className='businessLinks'>@{business?.instagramUsername}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* ONLY SHOW SECOND INSTAGRAM IF THERE IS TWO */}
                            {(business?.instagramURL2 != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/instagramlogo.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.instagramURL2} target='_blank' rel='noopener noreferrer' className='businessLinks'>@{business?.instagramUsername2}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            {/* IF they have a public email */}
                            {(business?.publicEmail != '') &&
                                <>
                                    <br></br>
                                    <div className='businessLinkPic'>
                                        <img src='/images/email-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={'mailto:' + business?.publicEmail} className='businessLinks'>Email {business?.name}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            <br></br>
                            <br></br>

                            {/* IF they have a description for their phone number (in other words, a location name), display it */}
                            {(business?.phoneNumberDescription != '') &&
                                <h3>{business?.phoneNumberDescription}</h3>
                            }

                            {/* <!-- * Business Address --> */}
                            <div className='businessLinkPic'>
                                <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                <div className='businessLinkText'>
                                    <p id='informationTextLinks'><a href={business?.googleMapsLink}
                                        target='_blank' rel='noopener noreferrer' className='businessLinks'>{business?.address}</a></p>
                                </div>
                            </div>

                            <br></br>

                            {/* Google embedded maps link (only if they have a physical address) */}
                            {(business?.embeddedMapsLink != '') &&
                                <div>
                                    <iframe title={business?.name}
                                        src={business?.embeddedMapsLink}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                </div>
                            }

                            {/* If they have a description for their SECOND phone number (in other words, a location name), display it */}
                            {(business?.phoneNumberDescription2 != '') &&
                                <>
                                    <br></br>
                                    <h3>{business?.phoneNumberDescription2}</h3>
                                </>
                            }

                            {/* Only allow if there is two addresses */}
                            {(business?.address2 != '') &&
                                <>
                                    <div className='businessLinkPic'>
                                        <img src='/images/pin-icon.png' className='linkLogosPage' alt='' />
                                        <div className='businessLinkText'>
                                            <p id='informationTextLinks'><a href={business?.googleMapsLink2} target='_blank' rel='noopener noreferrer' className='businessLinks'>{business?.address2}</a></p>
                                        </div>
                                    </div>
                                </>
                            }

                            <br></br>

                            {/* Google embedded maps 2 (only if they have TWO addresses) */}
                            {(business?.embeddedMapsLink2 != '') &&
                                <div>
                                    <iframe title={business?.id}
                                        src={business?.embeddedMapsLink2}
                                        width='95%' height='450' allowfullscreen='' loading='lazy'></iframe>
                                    <br></br>
                                    <br></br>
                                </div>
                            }

                            {/* <!-- * Hours and information --> */}
                            {(business?.hasHours != false) &&
                                <>
                                    <h1>Hours</h1>

                                    {/* If there is two locations with the same hours */}
                                    {(business?.address2 != '') &&
                                        <h3>Both Locations</h3>
                                    }
                                    <p id='informationTextLinks'>
                                        {business?.hoursDays?.first} <b>{business?.hoursTimes?.first}</b>
                                        <br></br>
                                        {business?.hoursDays?.second} <b>{business?.hoursTimes?.second}</b>
                                        <br></br>
                                        {business?.hoursDays?.third} <b>{business?.hoursTimes?.third}</b>
                                        <br></br>
                                        {business?.hoursDays?.fourth} <b>{business?.hoursTimes?.fourth}</b>
                                        <br></br>
                                        {business?.hoursDays?.fifth} <b>{business?.hoursTimes?.fifth}</b>
                                    </p>

                                </>
                            }
                        </div>
                    </Col>
                </Row>

                <br></br>
                <a href='/discover' className='backToDiscoverLink'>
                    <p>Back to Discover Page</p>
                </a>

                {/* <!-- * ADDS FILLER/PADDING TO PAGE BELOW --> */}
                <div className='row justify-content-center' id='filler-area'>
                    <div className='col'>
                        <div className='centeredText'>
                            <br></br>
                        </div>
                    </div>
                </div>
            </Container>

            {/* {count}
            <button onClick={() => { setCount(count + 1) }}>Click here</button> */}
        </>
    )
}

export default BusinessPage;