import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle=""
        title=" About US"
        text=" We help provide proficient admission guidance to students and parents, thereby helping them walk on the path to a bright future. A student is not just limited to receiving admission consultation but is also provided with career counselling that equips them to make an informed career decision.
      
        Operating since 2008, we have created a huge network of opportunities with offices all over India, Gulf countries, Kingdom of Bahrain, and Europe to help realize your dream of studying overseas for professional and personal growth.
        
        Getting admission into good colleges is still very hard in India, where students outnumber seats for admissions every year. Many students aspire to go abroad for their studies but miss the opportunity due to a lack of guidance.
        
        Every aspiring student wants to land in their dream course at the best college. We help students by giving them the opportunity to have admission to good colleges.
        
        We provide complete education facilities to students, supporting and guiding them from their admission procedure to their placements. Admission guidance is necessary to ensure that students get into an institution that is most compatible with their profile.
        
        We guide for GATE, NEET, CLAT, and CAT exams, which play a significant role in getting into India’s best institutions. We also guide for GRE, TOEFL, IELTS, and GMAT to help them get into colleges abroad. 
         "
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle=""
        title="In hac habitasse"
        text="Phasellus porta sagittis sapien. Nam quis odio eu libero tempus rutrum. Suspendisse nec eros eget ex cursus rhoncus. Proin at velit quis ante pretium porta. Quisque pulvinar, elit et tincidunt ultricies, mauris odio luctus risus, vitae auctor elit risus a tortor. Nunc pulvinar purus id est rutrum vulputate. Mauris venenatis lectus vel nisi semper scelerisque."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle=""
        title="Quisque dui justo"
        text="Cras et ligula eget neque ornare tempor et vitae est. Duis et lectus accumsan, mollis dui a, finibus metus. Quisque dui justo, ullamcorper eget luctus id, consectetur eget nunc. In quis arcu erat. Morbi consequat imperdiet lorem, porta porta erat hendrerit vel. Aliquam dignissim purus at dolor posuere euismod."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
