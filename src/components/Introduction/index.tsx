import React from 'react';
import Image from 'next/image';
import topImage from '@/assets/images/LWB_Top_Image.jpg';
import SKJImage from '@/assets/images/LWB_SKJ.png';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-container">
      <div className="main-image-container">
        <Image src={topImage} alt="Learning with Basics Top Image" width={1920} height={1080} className="main-image" />
        <button className="main-image-button">Contact us</button>
      </div>
      <div className="side-image-card">
        <div className="side-image-container">
          <Image src={SKJImage} alt="Learning with basics Founder Image"  width={960} height={1080} className="side-image" />
        </div>
        <p className="side-image-description">
          Dear Learner&apos;s, Learn everything here with scratch.
          <br />
          <br/>
          &quot;Aao milkar seekhte aur seekhate hain&quot;
          <br/>
            <span className="float-end">- Suraj Kumar </span>
        </p>
      </div>
    </div>
  );
};

export default Introduction;