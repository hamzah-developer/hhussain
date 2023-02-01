import React from "react";

function HomeIntro () {
  return(
    <section className="home-intro text-white min-h-screen flex items-center text-center">
      <div className="container">
            <h2 className="heading-lg text-[#e2e8f0] mb-10 xl:mb-15">Hi, I'm Hamza Hussain</h2>
            <h3 className="heading-xs text-[#e2e8f0]">A Junior Software Engineer at <a href="https://www.weareframework.co.uk/" className="text-[#7348E5] hover:underline">Framework Design</a></h3> 
        </div>
    </section>
  )
}

export default HomeIntro;