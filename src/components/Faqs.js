import React from "react";
import Accordion from "./Accordion";
import mountainPic from '../images/IMG_5186.JPG'
import questions from '../info/questions'

const Faqs = (props) => {
  return (
    <div className="faqs">
      <div className='faqspand'>
        {questions.map((item) => {
          return <Accordion title={item.question} content={item.answer} />;
        })}
      </div>
      <div className='faqsimg'>
        <img
          className= 'faqsimg'
          src={mountainPic}
          alt="alt"
        />
      </div>
    </div>
  );
};

export default Faqs;
