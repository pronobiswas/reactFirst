import React from 'react'
import './Farmme.css'
import { FiCloudRain } from "react-icons/fi";
import { AiOutlineBgColors } from "react-icons/ai";import { GiFrayedArrow } from "react-icons/gi";
import { GiHappySkull } from "react-icons/gi";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { GiAbstract093 } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { GiArchaeopteryxFossil } from "react-icons/gi";
import { GiBlackHoleBolas } from "react-icons/gi";
import { GiBrainTentacle } from "react-icons/gi";
import { GiCircleSparks } from "react-icons/gi";
import { GiCrystalShine } from "react-icons/gi";
import { FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { GrHtml5 } from "react-icons/gr";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoSass } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { TfiPalette } from "react-icons/tfi";
import { TfiControlForward } from "react-icons/tfi";
import { SiAngellist } from "react-icons/si";
import { SiApachecloudstack } from "react-icons/si";

const Farmme = () => {
  return (
    <>
      <div id="sectionWarper">
        <div className="container">
          <div className="mainWarper">

            <div id="sectonOne">

              <div className="one">

                <div className="oneOne">
                  <div className="bioGraphy">
                      <img src="pic.jpg" alt="myphotos" />
                    <div className="imageContainer">
                    </div>
                    <div className="nameTxt">
                      <span>I'm Pronob Biswas</span>
                    </div>
                    <div className="bioTxt">
                      <p>Biography</p>
                      <p className="bioIcon"><GiBlackHoleBolas className='rIconOne'/></p>
                    </div>
                  </div>
                  <div className="blog">
                    <div className="blogTxt">
                      <h2>Articale</h2>
                      <h2>&</h2>
                      <h2>publiction</h2>
                    </div>
                    <div className="bioTxt">
                      <p>Our Pubilaction</p>
                      <p className="bioIcon">
                      <GiArchaeopteryxFossil className='rIconTwo'/>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="oneTwo">
                  <div className="others">
                    <div className="TFwarpper">
                      <div className="TFCard title">
                        <h3>Title</h3>
                        <h3>Product</h3>
                        <h3>Designer</h3>
                      </div>
                      <div className="TFCard profiles">

                        <div className="rectBox">
                          <div className="prof">
                            <FiCloudRain />
                          </div>
                          <div className="prof">
                            <AiOutlineBgColors />
                          </div>
                        </div>

                        <div className="bioTxt">
                          <p>Biography</p>
                          <p className="bioIcon"><GiFrayedArrow /></p>
                        </div>
                      </div>
                    </div>

                    <div className="service">

                      <h2>Service Offring</h2>

                      <div className="serviceBoxWarpper">

                        <div className="serviceBox">
                          <div className="servicelogo">
                          <GiHappySkull className='rIcon'/>
                          </div>
                          <h4>static webpage</h4>
                        </div>
                        <div className="serviceBox">
                          <div className="servicelogo">
                          <PiWebhooksLogoFill className='rIcon'/>
                          </div>
                          <h4>dynamic webpages</h4>
                        </div>

                        <div className="serviceBox">
                          <div className="servicelogo">
                          <GiAbstract093 className='rIcon'/>
                          </div>
                          <h4>seo</h4>
                        </div>

                        <div className="serviceBox">
                          <div className="servicelogo">
                          <GiArtificialIntelligence className='rIcon'/>
                          </div>
                          <h4>business site</h4>
                        </div>

                      </div>

                      <h1>Iam Good At</h1>

                      <div className="bioTxt">
                          <p>Biography</p>
                          <p className="bioIcon">
                            <GiCrystalShine className='rIconFour'/>
                          </p>
                        </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="two">

                <div className="twoOne">
                  <h2>Skill and Tols</h2>

                  

                  <div className="tecName">
                    <div className="techNameBox">HTML5</div>
                    <div className="techNameBox">CSS3</div>
                    <div className="techNameBox">BootStrap</div>
                    <div className="techNameBox">Tilwind</div>
                    <div className="techNameBox">CSS Framwork</div>
                    <div className="techNameBox">CSS Laibrary</div>
                    <div className="techNameBox">JavaScript</div>
                    <div className="techNameBox">ReactJS</div>
                    <div className="techNameBox">MongoDB</div>
                    <div className="techNameBox">NextJS</div>
                    <div className="techNameBox">NodeJS</div>
                  </div>
                  <div className="techIconWarpper">
                    <div className="techIconBox">
                      <FaGithub className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <FaStackOverflow  className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <GrHtml5   className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <SiCss3    className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <TbBrandJavascript     className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <TbBrandBootstrap      className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <TbBrandTailwind      className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <IoLogoSass       className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <IoLogoReact        className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <SiMongodb        className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <SiExpress         className='rIcons'/>
                    </div>
                    <div className="techIconBox">
                      <FaNode        className='rIcons'/>
                    </div>


                  </div>
                  
                  <div className="techIcon"></div>
                </div>

                <div className="twoTwo">
                <GiCircleSparks className='absOne'/>
                  <h2>Work With</h2>
                  <h2 className='gh'>Gole Layal...!</h2>

                  <div className="bioTxt">
                    <p>Get Benifit With Us</p>
                    <p><GiBrainTentacle className='rIconThird'/></p>
                  </div>
                </div>

              </div>
              

            </div>

            <div id="sectonTwo">
              <div className="first">
                <marquee behavior="" direction="">
                  Hi Devoloper<SiAngellist />let's play<SiApachecloudstack />go to the next lavel
                </marquee>
              </div>

              <div className="second">

                <div className="exp">
                  <h2 className='countResult' title='6'>6</h2>
                  <p>YEARS EXPERIENCE</p>
                </div>
                <div className="pro">
                  <h2 className='countResult' title='145'>+145</h2>
                  <p>TOTAL PROJECTS</p>
                </div>
                <div className="clint">
                  <h2 className='countResult' title='129'>+129</h2>
                  <p>CLENTS WORLDWIBE</p>
                </div>

              </div>

              <div className="third">
                <h3>See My</h3>
                <h3>Latest Works</h3>
                <GrWorkshop className='rIconSix'/>
                <div className="allProject">
                  <div className="gTouch">
                    <p>Get In Touch</p>
                    <p ><TfiControlForward /></p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

// ========counter result===========
// let counteResult = document.querySelectorAll(".countResult");
// let myArray = Array.from(counteResult) ;
// console.log(counteResult);
// myArray.map((item) =>{
//   let count = 0;
//   console.log(item.innerHTML);
//   function counterUp(){
//     count++;
//     item.innerHTML = count;
//     if(item.title == count){
//       clearInterval(stop);
//     }
//   }
//   let stop = setInterval(
//     function(){
//       counterUp()
//     } ,1000
//   );
//   console.log(item);
// })
// ==========time  machine========






window.addEventListener("load", function(){

      let ind = document.querySelector(".in");
      let toogleBall = document.querySelector(".toogleBall");
      let body = document.querySelector("body");

      toogleBall.addEventListener("click", function(){
        let root = document.querySelector("#root");
        let pra = document.querySelectorAll("p");
          toogleBall.className = "toogleBallMove ";

          root.className = "ohNice";
          // p.className = "whith"
          pra.style.color = "white"
      
          console.log(toogleBall.className);
      });
      

      

  // ==========time  machine========
let logos = document.querySelector("#logoTime");

function mytime(){
  logos.innerHTML = new Date().toLocaleTimeString();
};
mytime();
setInterval(mytime,1000);
// ==========time  machine========



  let counteResult = document.querySelectorAll(".countResult");
  let myArray = Array.from(counteResult) ;
  console.log(counteResult);
  myArray.map((item) =>{
    let count = 0;
    console.log(item.innerHTML);
    function counterUp(){
      count++;
      item.innerHTML = count;
      if(item.title == count){
        clearInterval(stop);
      }
    }
    let stop = setInterval(
      function(){
        counterUp()
      } ,1000/item.title
    );
    console.log(item);
  })
});



export default Farmme
