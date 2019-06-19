import React, { Component } from "react";
import LoginForm from '../Login/LoginForm';
import './Home.scss';
import GroupImage from '../../assets/group.gif';
import GroupImage0 from '../../assets/illustration_0.svg';
import GroupImage1 from '../../assets/illustration_1.svg';
import GroupImage2 from '../../assets/illustration_2.svg';
import LogoImage from '../../assets/logo.png';
import line from '../../assets/lines.png';
import dottedlineline from '../../assets/dottedline.png';
import IconImage from '../../assets/icon.png';
import Icon1Image from '../../assets/icon1.png';
import Icon2Image from '../../assets/icon2.png';
import Icon3Image from '../../assets/icon3.png';
import Icon4Image from '../../assets/icon4.png';
import Icon5Image from '../../assets/icon5.png';
import Icon6Image from '../../assets/icon6.png';
import apple from '../../assets/apple.png';
import google from '../../assets/google-play.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Home extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  handleOnDragStart = e => e.preventDefault()

  render() {
    let modalClassName = "modal";
    if (this.state.modal) {
      modalClassName += " is-active";
    }

    return (
      <div className="home-page">
        <div>
          <nav className="level">
            <div className="level-left">
              <div className="level-item">
                <img src={LogoImage}/>
              </div>
            </div>
            <div className="level-right topmenu">
              <p className="level-item"><a className="Blog-Contact-us-Copy">BLOG</a></p>
              <p className="level-item"><a className="Blog-Contact-us-Copy">CONTACTUS</a></p>
              <p className="level-item"><a className="Blog-Contact-us-Copy" onClick={this.toggleModal}>LOGIN</a></p>
              <p className="level-item Rectangle-Copy"><a className="Sign-Up">Sign Up</a></p>
            </div>
            <div className={modalClassName}   closeModal={this.toggleModal} >
              <div className="modal-background" />
              <div className="modal-content">
                <LoginForm/>
              </div>
              <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
            </div>
          </nav>
        </div>
        <div className="columns">
          <div className="column title-wrapper">
            <div>
              <img
                  src={line}
                />
              <p className="AI-human-doctors-d">
                AI & human doctors diagnosis
              </p>
              <span className="Lorem-ipsum-dolor-si">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </span>
              <div className="twobutton">
                <p className="Rectangle"><a className="Get-the-App">Get the App</a></p>
                <p className="Rectangle-Copy"><a className="Get-the-App">I'm a Doctor</a></p>
              </div>
            </div>
          </div>
          <div className="slider-wrapper column">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={80}
              totalSlides={3}
              isPlaying={true}
              interval={3000}
              touchEnabled={false}
              dragEnabled={false}
            >
              <Slider>
                <Slide index={0}>
                  <img src={GroupImage0} className="yours-custom-class" />
                </Slide>
                <Slide index={1}>
                  <img src={GroupImage1} className="yours-custom-class" />
                </Slide>
                <Slide index={2}>
                  <img src={GroupImage2} className="yours-custom-class" />
                </Slide>
              </Slider>
            </CarouselProvider>
            
          </div>
        </div>
        <div>
          <div className="Why-to-Use-Medical-E">
            <p> Why to Use <span className="text-style-1">Medical Eye</span></p>
          </div>
          <div className="columns">
            <div className="Mask column  twobox">
              <div className="iconsize">
                <img src={IconImage}/>
              </div>
              <div className="Diagnosis-Online-Any">
                <p>Diagnosis <span className="text-style-1">Online</span> Anytime</p>
                <span  className="Lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris.
                </span>
              </div>
            </div>
            <div className="Mask column  twobox">
              <div className="iconsize">
                <img src={Icon1Image}/>
              </div>
              <div className="Choose-the-Doctor-Yo">
                <p>Choose the Doctor<span className="text-style-1"> You Like</span></p>
                <span  className="Lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris.
                </span>
              </div>
            </div>
          </div>
          <div className="stay-healthy-mask">
            <div className="iconsize">
              <img src={Icon2Image}/>
            </div>
            <div className="Stay-Healthy-Article">
              <p>Stay Healthy<span className="text-style-1"> Articles</span></p>
              <span  className="Lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris.
              </span>
            </div>
          </div>
          <div className="columns backimagearea">
            <div className="column  twobox">
              
              <div className="How-Does-It-Works">
                <p>How Does It Works?</p>
                <span  className="Lorem-ipsum-dolor-si">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                   velit esse cillum dolore eu fugiat nulla pariatur. 
                </span>
              </div>
            </div>
            {/* <div className="column  twobox">
              <div className="iconsize">
                <img src={Icon1Image}/>
              </div>
              <div className="Take-a-Picture-of-Yo">
                <span className="text-style-1">Take a Picture</span>
                <p>of Your Mole</p>
              </div>
            </div> */}
          </div>
          {/* <div className="columns">
            <div className="column  twobox" style={{paddingTop:"75px"}}>
              <div className="iconsize">
                <img src={Icon3Image}/>
              </div>
              <div className="AI-tells-you-the-pro">
                AI tells you <span className="text-style-1">the possibility</span>
               <p>of concern</p>
              </div>
            </div>
            <div className="column  twobox">
              <div className="iconsize">
                <img src={Icon1Image}/>
              </div>
              <div className="A-real-human-doctor">
                <p><span className="text-style-1">A real human</span> doctor</p>
                <p>gives you a second option</p>
              </div>
            </div>
          </div> */}
          <div className="apple-google-mask">
            <div className="Get-the-App-and-Cons">
              Get the App and Consult with Doctors
            </div>
            <div className="columns">
              <p className="column border disflex App-Store"><img src={apple}/><span className="Available-at-the">Available at </span>App Store</p>
              <div className="column border disflex Google-Pay"><img src={google}/><span className="GET-IT-ON">GET IT ON  </span>Google Pay</div>
            </div>
          </div>
          <div className="columns">
            <div className="column  twobox">
              
              <div className="Are-you-a-Doctor-Wh">
                <p className="text-style-1">Are you a Doctor?</p>
                <p>Why You Should to Sign Up</p>
                <span  className="Lorem-ipsum-dolor-si">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <p className="level-item Rectangle-signup signup1"><a className="Sign-Up">Sign Up</a></p>
              </div>
            </div>
            <div className="column">
              <div className="disflex">
                <div className="iconsize">
                  <img src={Icon4Image}/>
                </div>
                <div className="Earn-Additional-Mone">
                  <p><span className="text-style-1">Earn</span> Additional Money</p>
                  <span className="Lorem-ipsum-dolor-si">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </div>
              </div>
              <div className="disflex">
                <div className="iconsize">
                  <img src={Icon5Image}/>
                </div>
                <div className="A-Great-Chance-to-Fi">
                  <p><span className="text-style-1">A Great Chance</span> to Find Patients</p>
                  <span className="Lorem-ipsum-dolor-si">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </span>
                </div>
              </div>
              <div className="disflex">
                <div className="iconsize">
                  <img src={Icon6Image}/>
                </div>
                <div className="A-Good-Practice">
                  <p>A Good <span className="text-style-1">Practice</span></p>
                  <span className="Lorem-ipsum-dolor-si">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="level-item Rectangle-Copy signup2"><a className="Sign-Up">Sign Up</a></p>
          <img  src={LogoImage}/>
        </div>
      </div>
    );
  }
}
export default Home;
