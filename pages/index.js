import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { location } from "react-icons-kit/icomoon/location";
import { phone } from "react-icons-kit/icomoon/phone";
import { home } from "react-icons-kit/entypo/home";
import { x } from "react-icons-kit/feather/x";
import LanguageProvider from "common/LanguageSwitcher/context/language.provider";
import LanguageSwitcher from "common/LanguageSwitcher";
import languageConfig from "common/LanguageSwitcher/config";
import NormalClock from "components/NormalClock/NormalClock";
import Button from "components/Button";
import Modal from "react-modal";
import ContactForm from "components/MaterialContactFormTwo/MaterialContactForm";
import SubscribeModal from "components/SubscribeModal/SubscribeModal";
import MainContentWrapper, {
  MainContentSection,
  NormalClockWrapper,
  LogoImageContainer,
  ButtonWrapper,
  MainWrapper,
  SideBar,
  Overlay,
  SidebarContent,
  About,
  Contact,
  Info,
  InfoItem,
  InfoIcon,
  SidebarClose,
  FooterSection,
  ContactButton,
  ModalStyle,
} from "common/ui/fourteen.style";
// Language translation files
import localEng from "common/data/translation/fourteen/en.json";
import localAr from "common/data/translation/fourteen/ar.json";
import localEs from "common/data/translation/fourteen/es.json";
import localDe from "common/data/translation/fourteen/de.json";
import localCn from "common/data/translation/fourteen/zh.json";
import localIl from "common/data/translation/fourteen/he.json";
import { SOCIAL_PROFILES } from "common/data/social-share/fourteen";
import { Container, SocialShare } from "../components";

// images
import LogoTwo from "common/static/images/logo.png";

// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const deadline = new Date(Date.parse(new Date()) + 21 * 24 * 60 * 60 * 1000);

const IndexPage = () => {
  const [state, setState] = useState({
    toggle: false,
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <LanguageProvider messages={messages}>
      <div>
        <NextSeo
          title="Diiwaan"
          description="Madbacadda Diiwaan."
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Selected Option"
          className="newsletter-modal"
        >
          <SubscribeModal closeHandler={closeModal} />
        </Modal>
        <ModalStyle />
        <MainWrapper>
          <MainContentWrapper>
            <LogoImageContainer>
              <div  style={{display:"flex",justifyContent:"center" , alignItems:"center", }}>
              <Link href={"/"}>
                <img
                  src={LogoTwo.src}
                  alt="logo"
                />
              </Link>
              <h1 style={{color:"#fff",paddingLeft:"20px"}} >Madbacadda Diwaan</h1>
              </div>
            
            
            </LogoImageContainer>
            <Container className="mainContainer">
              <MainContentSection>
                <h2>
                  " Waan soo socdaa kow dheh, Waxna waan sidaa laba dheh "
                </h2>
                
                {/* <p>
                  <FormattedMessage id="description" />
                </p> */}
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
               
              </MainContentSection>
            </Container>
            <FooterSection>
              <SocialShare items={SOCIAL_PROFILES} />
              <p>
                <FormattedMessage id="copyrightText" />
              </p>
            </FooterSection>
          </MainContentWrapper>
         
        </MainWrapper>
      
      </div>
    </LanguageProvider>
  );
};

export default IndexPage;
