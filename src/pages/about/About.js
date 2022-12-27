import React from "react";
import "./About.css"
import aboutphoto from "../../assets/icons/About.jpg.webp"

const About = () => {


    return(

        <div className="AboutSection">
            <div className="About">
                <h2 className="Title">
                    About our Market
                
                </h2>

                    <img src={aboutphoto}/>
                        
                   
                
                    <p>
                    
                        About Our Market
                        I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click <br></br>“Edit Text” or  double click me to 
                        your own content 
                        and make changes to the font. Feel free to drag <br></br>and drop me anywhere 
                        you like 
                        on your page. I’m a great place for you to tell a story and let your users<br></br> know 
                        a little more about you.
                        This is a great space to write long text about your company <br></br>and your services.
                        You can use this space to go into a little more detail about your company.<br></br> <br></br>
                        
                        Talk about your team and what services you provide. 
                        Tell your visitors the story of how you<br></br> came up with the idea for your 
                        business and what makes you different from your competitors.<br></br>
                        Make your company stand out and show your visitors who you are.
                    </p>
            </div>
        </div>

    )
}
    
        
          
    

export default About