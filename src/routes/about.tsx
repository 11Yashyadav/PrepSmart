import "../styles/about.css";
const About = () => {
    return (
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1>About Us</h1>
          <p>
            Welcome to Mock Interviewer AI, where cutting-edge technology meets personalized career development. We are dedicated to revolutionizing your interview preparation experience through advanced AI-powered mock interviews. Our commitment to excellence is driven by a singular passion for helping individuals like you succeed in the competitive job market.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Mock Interviewer AI Banner" 
            className="header-image"
            loading="lazy"
          />
        </header>
  
        {/* Our Story Section */}
        <section className="mission-vision">
          <h2>Our Story</h2>
          <p>
            At Mock Interviewer AI, we recognize the hurdles and uncertainties that job seekers face in their quest for career advancement. The contemporary job market demands more than just technical expertise; it demands a strategic approach to interviews that goes beyond conventional preparation methods.
          </p>
          <img 
            src="https://plus.unsplash.com/premium_photo-1663036940561-269d1682803f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Our Story" 
            className="section-image"
            loading="lazy"
          />
        </section>
  
        {/* The Challenge Section */}
        <section className="services">
          <h2>The Challenge of Acing Interviews Today</h2>
          <p>
            In the fast-paced and dynamic landscape of today's job market, acing interviews has become a formidable task. Employers are not only seeking technical proficiency but also evaluating soft skills, communication, and adaptability. The pressure to stand out among a sea of qualified candidates can be overwhelming, leading to missed opportunities and unfulfilled career aspirations.
          </p>
          <img 
            src="https://plus.unsplash.com/premium_photo-1661596640509-721f4c2e39ee?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Interview Challenges" 
            className="section-image"
            loading="lazy"
          />
        </section>
  
        {/* Motivation Section */}
        <section className="services">
          <h2>Personal Journey of Motivation</h2>
          <p>
          Motivated by the struggles that countless job seekers face, I embarked on a journey to create a tool that bridges the gap between traditional preparation methods and the contemporary demands of interviews. Driven by my passion for technology and problem-solving, I aim to develop an innovative solution that addresses the challenges faced by job seekers in today's competitive market.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Motivational Journey" 
            className="section-image"
            loading="lazy"
          />
        </section>
         {/* Why Mock Interviewer AI Section */}
         <section className="why-mock-ai">
          <h2>Why Mock Interviewer AI?</h2>
          <h3>Tailored Solutions</h3>
          <p>Mock Interviewer AI isn't just a tool; it's a tailored solution born out of a deep understanding of the challenges faced by job seekers in today's market. Our AI-powered mock interviews are designed to address the multifaceted requirements of modern interviews.</p>
          <h3>Passion for Progress</h3>
          <p>At the heart of Mock Interviewer AI is a passion for progress. We are not just facilitating mock interviews; we are fostering personal and professional growth. Our commitment is to empower you with the skills and confidence needed to excel in any interview scenario.</p>
          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="section-image" />
        </section>
  
        {/* Join Us Section */}
        <section className="join-us">
          <h2>Join Us on the Journey</h2>
          <p>
            The road to career success is not always smooth, but at Mock Interviewer AI, we believe in turning challenges into opportunities. Join us on this transformative journey as we work together to redefine success in interviews and make lives better. Thank you for choosing Mock Interviewer AI. Your success is our mission.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Join Us" 
            className="section-image"
            loading="lazy"
          />
        </section>
  
        
      </div>
    );
  };
  
  export default About;