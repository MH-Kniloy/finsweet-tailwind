import React from 'react'

const Banner = () => {
  return (
    <div>
      <section
        id="hero"
        className="bg-[url(./assets/woman-in-orange-coat-with-black-and-brown-scarf.jpg)] py-52 bg-center bg-cover bg-no-repeat"
      >
        <div className="container max-w-[1280px] mx-auto">
          <div className="hero-wrapper">
            <p className="text-base font-bold text-white uppercase">
              Welcome to our CHURCH
            </p>
            <h1 className="w-[592px] text-6xl text-white font-bold uppercase mt-5 mb-12">
              Become a part of our community
            </h1>
            <a href="#" className="py-6 px-16 bg-[#ffd2a4] text-black rounded-xl hover:bg-white">
              LEARN MORE
            </a>
            <div className="quote">
              <p className='text-white text-base mt-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner