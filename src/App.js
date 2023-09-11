import React from "react";
import data from "./data"; // Import the data from the data.js file
import './App.css';
import './components/Component.css';
import Component from './components/Component';
import { galleryImages } from "./data";
import { uitImages } from "./data";
import { parkImages } from "./data";
import { udaipurImages } from "./data";
import { jalImages } from "./data";
import { campImages } from "./data";
import { helpImages } from "./data";
import { functionImages } from "./data";
import { communityImages } from "./data";
import { placeImages } from "./data";
import { foundationImages } from "./data";
import { supportImages } from "./data";
import { surgicalImages } from "./data";
import { festivalImages } from "./data";
import logo from '../src/logo.webp';
import udaipur from '../src/sheisudaipur.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  delay: 0,
  duration: 500,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});


function App() {
  return (
    <div className="App">
      <div className="bg-cover bg-center relative text-justify py-16 flex flex-col justify-center">
        <img src={logo} alt="Logo" className="logo-image w-80 h-38 mx-auto my-8 mt-6" />
        <p className="text-black p-8 mt-6 mx-auto max-w-3/4 text-3xl font-light">
          Arcgate Foundation, a not-for-profit initiative, focuses on improving the local community through programs in the areas of education, healthcare, sports, and rural development. Our mission is to support the less privileged sections of the society through various efforts that will help create a brighter future.
        </p>
      </div>


      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index} className="mb-8 text-center">
            {/* Check if heading is defined before rendering */}
            {section.heading1 && <h1 className="text-4xl font-bold mx-auto max-w-1/2">{section.heading1}</h1>}
            {section.heading2 && <h2 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading2}</h2>}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph1 && <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph1}</p>}
            {section.paragraph2 && <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph2}</p>}
            {section.paragraph3 && <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph3}</p>}
          </div>
        ))}
      </div>



      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading3 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">
                {section.heading3}
              </h3>
            )}
            {/* Check if paragraph is defined before rendering */}
            {section.paragraph4 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">
                {section.paragraph4}
              </p>
            )}
            {/* Check if images is defined before rendering */}
            {section.images && (
              <div data-aos="fade-up">
                <Component images={galleryImages} />
              </div>
            )}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <ul>
                {section.bulletPoints.map((point, bulletIndex) => (
                  // Check if the bullet point is defined before rendering
                  point && (
                    <li
                      className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify"
                      key={bulletIndex}
                    >
                      {point}
                    </li>
                  )
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>


      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading4 && <h1 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading4}</h1>}
            {/* Check if images is defined before rendering */}
            {section.images1 && (
              <div data-aos="fade-up">
                <Component images={uitImages} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading5 && <h1 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading5}</h1>}
            {/* Check if images is defined before rendering */}
            {section.images2 && (
              <div data-aos="fade-up">
                <Component images={parkImages} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4 md:flex sm:block">
          <img src={udaipur} alt="udaipur" className='udaipur-image h-60 m-2 mx-3' />
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading6 && (
                <h1 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading6}</h1>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph5 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph5}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images3 && (
                <div data-aos="fade-up">
                  <Component images={udaipurImages} className="images3" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>





      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading7 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading7}</h3>
            )}
            {/* Check if images is defined before rendering */}
            {section.images4 && (
              <div data-aos="fade-up">
                <Component images={jalImages} />
              </div>
            )}
          </div>
        ))}

      </div>


      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading8 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading8}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph6 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph6}</p>
              )}


              {section.paragraph7 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph7}</p>
              )}


              {section.paragraph8 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph8}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images5 && (
                <div data-aos="fade-up">
                  <Component images={campImages} />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>




      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading9 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading9}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph9 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph9}</p>
            )}


            {section.paragraph10 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph10}</p>
            )}

            {section.paragraph11 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph11}</p>
            )}
            {/* Check if images is defined before rendering */}
            {section.images6 && (
              <div data-aos="fade-up">
                <Component images={helpImages} />
              </div>
            )}
          </div>
        ))}

      </div>


      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading10 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading10}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph12 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph12}</p>
              )}


              {section.paragraph13 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph13}</p>
              )}


              {section.paragraph14 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph14}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images7 && (
                <div data-aos="fade-up">
                  <Component images={functionImages} />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>


      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading11 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading11}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph15 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph15}</p>
            )}


            {section.paragraph16 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph16}</p>
            )}


            {section.paragraph17 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph17}</p>
            )}
          </div>
        ))}

      </div>



      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading12 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading12}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph18 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph18}</p>
              )}


              {section.paragraph19 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph19}</p>
              )}


              {section.paragraph20 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph20}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images8 && (
                <div data-aos="fade-up">
                  <Component images={communityImages} />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>


      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading11 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading11}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph21 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph21}</p>
            )}

            {section.paragraph22 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph22}</p>
            )}


            {section.paragraph23 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph23}</p>
            )}
            {/* Check if images is defined before rendering */}
            {section.images9 && (
              <div data-aos="fade-up">
                <Component images={placeImages} />
              </div>
            )}
          </div>
        ))}

      </div>

      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading14 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading14}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph24 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph24}</p>
              )}


              {section.paragraph25 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph25}</p>
              )}


              {section.paragraph26 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph26}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images10 && (
                <div data-aos="fade-up">
                  <Component images={foundationImages} />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>



      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading15 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading15}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph27 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph27}</p>
            )}


            {section.paragraph28 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph28}</p>
            )}


            {section.paragraph29 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify-">{section.paragraph29}</p>
            )}
            {/* Check if images is defined before rendering */}
            {section.images11 && (
              <div data-aos="fade-up">
                <Component images={supportImages} />
              </div>
            )}
          </div>
        ))}

      </div>


      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading16 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading16}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph30 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph30}</p>
              )}


              {section.paragraph31 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph31}</p>
              )}

              {section.paragraph32 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph32}</p>
              )}
              {/* Check if images is defined before rendering */}
              {section.images12 && (
                <div data-aos="fade-up">
                  <Component images={surgicalImages} />
                </div>
              )}
            </div>
          ))}

        </div>
      </div>



      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading17 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading17}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph33 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph33}</p>
            )}


            {section.paragraph34 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph34}</p>
            )}

            {section.paragraph35 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph35}</p>
            )}
          </div>
        ))}

      </div>



      <div className="max-w-full bg-[#f7f7f7]">
        <div className="p-8 mx-auto max-w-3/4">
          {data.map((section, index) => (
            <div key={index}>
              {/* Check if heading is defined before rendering */}
              {section.heading18 && (
                <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading18}</h3>
              )}

              {/* Check if paragraph is defined before rendering */}
              {section.paragraph36 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph36}</p>
              )}

              {section.paragraph37 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph37}</p>
              )}


              {section.paragraph38 && (
                <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph38}</p>
              )}
            </div>
          ))}

        </div>
      </div>



      <div className="p-8 mx-auto max-w-3/4">
        {data.map((section, index) => (
          <div key={index}>
            {/* Check if heading is defined before rendering */}
            {section.heading19 && (
              <h3 className="p-2 font-medium mt-8 max-w-full text-left text-2xl">{section.heading19}</h3>
            )}

            {/* Check if paragraph is defined before rendering */}
            {section.paragraph39 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph39}</p>
            )}

            {section.paragraph40 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph40}</p>
            )}


            {section.paragraph41 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-justify">{section.paragraph41}</p>
            )}


            {section.paragraph42 && (
              <p className="text-black p-1 mt-3 max-w-full text-xl font-light text-left">{section.paragraph42}</p>
            )}
            {/* Check if images is defined before rendering */}
            {section.images13 && (
              <div data-aos="fade-up">
                <Component images={festivalImages} />
              </div>
            )}
          </div>
        ))}

      </div>


      <div className='footer max-h-full py-2 bg-[#d83e18]'>
        <p className="text-base text-center"> Copyright © 2023. All rights reserved</p>
      </div>
    </div >
  );

}

export default App;
