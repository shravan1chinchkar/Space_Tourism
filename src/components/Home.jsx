import React from "react";
import Header from "./Header";
import './Home.css'


const Home = () => {
  return (  
    <>
    <div className="home_body">
        {/* header content */}
        <Header/>

        {/* main content */}
        <main className="home_main">
        <div className="leftcontent_home">
            <div className="txt1">
                So, you want to travel to   
            </div>
            <div className="txt2">
                Space
            </div>
            <div className="txt3">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </div>
        </div>

        <div className="rightcontent_home">
            <button className="exploretxtcontainer">
                Explore
            </button>
        </div>
        </main>

        {/* Footer Content */}
        <footer className="home_footer">
            Copyright &copy Space Tour Technology Pvt Ltd.All Rights Reserved
        </footer>
    </div>
    </>
  );
};

export default Home;
