import React from "react";
// imgs
import brandRecognitionIcon from "../../assets/images/icon-brand-recognition.svg";
import brandDetailedRecords from "../../assets/images/icon-detailed-records.svg";
import brandFullyCustomizable from "../../assets/images/icon-fully-customizable.svg";
// styles
import {
  BenefitsWrapper,
  BenefitsItem,
  BenefitsIcon,
  BenefitsHead,
  BenefitsItens,
} from "./styles";

const BenefitsContent = [
  {
    icon: brandRecognitionIcon,
    title: "Brand Recognition",
    content: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
  },
  {
    icon: brandDetailedRecords,
    title: "Detailed Records",
    content: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
  },
  {
    icon: brandFullyCustomizable,
    title: "Fully Customizable",
    content: `Improve brand awareness and content discoverability through customizable links, superchargin audience engagement.`,
  },
];

const Benefits = () => {
  return (
    <BenefitsWrapper>
      <BenefitsHead>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </BenefitsHead>

      <BenefitsItens>
        {BenefitsContent.map(({ icon, title, content }) => (
          <BenefitsItem key={title}>
            <BenefitsIcon>
              <img src={icon} alt={title} />
            </BenefitsIcon>
            <h3>{title}</h3>
            <p>{content}</p>
          </BenefitsItem>
        ))}
      </BenefitsItens>
    </BenefitsWrapper>
  );
};

export default Benefits;
