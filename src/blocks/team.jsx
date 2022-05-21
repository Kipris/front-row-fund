import React, { useState, useContext } from 'react';
import { TeamBlock, TeamWrap, Title, TeamList, TeamItem, TeamPhoto, TeamInfo, Name, Position, Description, AdvisorTitle, TeamMoreInfo, MoreInfoDescription, SocialMedia, Shadow } from './team.styled';
import { Container } from '../components/container';
import { Button, ButtonColor, ButtonType } from '../components/button';
import team01 from '../assets/img/team01.png';
import team02 from '../assets/img/team02.png';
import team03 from '../assets/img/team03.png';
import team04 from '../assets/img/team04.png';
import adv01 from '../assets/img/adv01.png';
import adv02 from '../assets/img/adv02.png';
import adv03 from '../assets/img/adv03.png';
import adv04 from '../assets/img/adv04.png';
import { DialogContext } from '../app';
import 'react-lazy-load-image-component/src/effects/blur.css';
import facebook from '../assets/img/facebook.svg';
import email from '../assets/img/email.svg';
import linkedin from '../assets/img/linkedin.svg';

const Team = () => {
  const { activeDialog, setActiveDialog } = useContext(DialogContext);

  const [ teamMembers ] = useState([
    {name: 'David Haines', position: 'Managing Partner', photo: team01, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'As an operator and investor with more than 25 years of international experience, David raised funds for, or invested in early-stage companies all over the world. He founded a number of first in the space companies, including the first microbrewery in Hong Kong, which he took public on NASDAQ, as well as the first e-commerce company in Asia – Sold to PCCW <br /><br /> Prior to Front Row, David ran a family office, investing in seed and early-stage companies in the US, Asia and Australia. Was a founding board member and CEO of Sequent Software', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com' }},
    {name: 'Michael Korsky', position: 'General Partner', photo: team02, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'With over 25 years of executive, financial, operations and technology experience, Michael’s role has been to lead teams of seasoned operators and technology professionals who work side-by-side with growing technology-enabled companies <br /><br /> Prior to Front Row, Mike served as the CEO at DreamLine, a global technology leveraged manufacturer and distributor and was directly involved in all elements of the business including strategy, domestic sales and marketing, finance, technology, logistics, operations and human resources', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Val Shtraks', position: 'General Partner', photo: team03, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Val has over 30 years of executive, financial, operations and engineering experience. He was a co-founder and Managing Partner of DreamLine, a technology leveraged designer, manufacturer and marketer of branded shower related products Val also served as the President of DomuStar China – DreamLine’s wholly-foreign owned enterprise affiliate in China, where he developed and lead engineering, supply chain, manufacturing and logistics teams', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Haig Hengen', position: 'Associate', photo: team04, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Haig is an associate at Front Row Fund <br /><br /> Prior to joining Front Row, Haig worked at Goldman Sachs in the asset management division and Advanced Functional Fabrics of America, a private-public partnership innovation lab between MIT and the government of Massachusetts', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
  ]);

  const [ advisorMembers ] = useState([
    {name: 'Ed Reitler', position: 'Reitler, Kailas & Rosenblatt LLC', photo: adv01, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Ed Reitler is a Senior Partner at Reitler, Kailas & Rosenblatt LLC. Ed is one of the leading venture attorneys in the northeast and has represented dozens of venture funds and their portfolio companies. He is a frequent speaker and panelist on issues affecting the private equity and venture capital markets and is a regular guest lecturer on venture capital finance at Columbia Business School. Ed graduated from Harvard Law School, magna cum laude, where he was an Editor and a contributor to the Journal of Law and Public Policy and a contributor to the Harvard Journal of Legislation', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Joe Allegra', position: 'Edison Partners', photo: adv01, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Joe Allegra is a General Partner at Edison Partners. Joe led and was a board member of numerous investments over the past 20 years across Edison focus areas of enterprise solutions, financial technology and healthcare IT. Prior to Edison, Joe was co-founder and CEO of Princeton Softech, a rapidly growing, profitable company that developed and marketed database products to Fortune 1000 companies. Joe also co-founded the Software Association of New Jersey and served as Chairman of the New Jersey Technology Council, as well as led the initial financing for NJTC Venture Fund', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Marina Seredova', position: 'ABG/Centerbridge', photo: adv01, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Marina Seredova serves as Chief Digital Officer with ABG and is an advisor to a number of venture funded startups. From rolling out advanced industry leading technologies to holding patents, Marina continues to be a thought leader and innovator in digital transformation. She has played a key role in over $500 million of buy-side and sell-side M&A transactions. With expertise in Operations, Strategy, Technology, Digital Engagement, UX/UI , Application Development, Digital Marketing and Data Insights, Marina brings unique perspective to spectrum of companies from early-stage startups to mature market leaders', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Gregg Melinson', position: 'Hewlett-Packard Enterprise', photo: adv04, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'Gregg Melinson serves as Senior Vice President, Corporate Affairs, for Hewlett Packard Enterprise. Prior to his current role, Gregg held several roles at HPE and Hewlett-Packard, having served as Vice President for Global Government Affairs and Deputy General Counsel. Prior to HP, Gregg was Chief Marketing Partner at Drinker Biddle & Reath LLP, a 700-lawyer national law firm headquartered in Philadelphia, PA, where he led all strategic client development activities. A 20-year veteran at DBR, Gregg also took time from the firm to serve as deputy general counsel to former Pennsylvania Governor Tom Ridge from 1995 to 1997', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
  ]);

  const handleShowTeamMemberInfo = (id) => {
    const dialogContent = teamMembers[id];

    setActiveDialog({
      id: 'team-member',
      title: dialogContent.name,
      content: {...dialogContent},
    });
  }

  const handleShowAdvisorMemberInfo = (id) => {
    const dialogContent = advisorMembers[id];

    setActiveDialog({
      id: 'advisor-member',
      title: dialogContent.name,
      content: {...dialogContent},
    });
  }

  const renderIcon = (socialMediaType) => {
    switch (socialMediaType) {
      case 'facebook':
        return <img src={facebook} alt={socialMediaType} />;
      case 'email':
        return <img src={email} alt={socialMediaType} />;
      case 'linkedin':
        return <img src={linkedin} alt={socialMediaType} />;
      default:
        return null;
    }
  }

  const renderSocialMedia = (mediaList) => {
    return Object.entries(mediaList).map((entry, index) => (
      <a key={index} href={entry[1]} target='_blank' rel='noreferrer'>
        {renderIcon(entry[0])}
      </a>
    ))
  }

  return (
    <TeamBlock id='team'>
      <Container>
        <TeamWrap>
          <Title>Meet our team</Title>
          <TeamList>
            {teamMembers.map(({ name, position, photo, description, socialMediaLinks }, index) => (
              <div key={index}>
                <TeamItem>
                  <TeamPhoto src={photo} alt={name} />
                  <TeamInfo>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                    <Button
                      type={ButtonType.ghost}
                      textColor={ButtonColor.verdigris}
                      clickAction={() => {handleShowTeamMemberInfo(index)}}
                    >
                      More
                    </Button>
                  </TeamInfo>
                  <TeamMoreInfo onClick={() => {handleShowTeamMemberInfo(index)}}>
                    <MoreInfoDescription>{description}</MoreInfoDescription>
                    {/* <SocialMedia>
                      {renderSocialMedia(socialMediaLinks)}
                    </SocialMedia> */}
                  </TeamMoreInfo>
                </TeamItem>
                <Shadow />
              </div>
            ))}
          </TeamList>

          <AdvisorTitle>Advisors</AdvisorTitle>
          <TeamList>
            {advisorMembers.map(({ name, position, photo, description, socialMediaLinks }, index) => (
              <div key={index}>
                <TeamItem>
                  <TeamPhoto src={photo} alt={name} />
                  <TeamInfo>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                    <Button
                      type={ButtonType.ghost}
                      textColor={ButtonColor.verdigris}
                      clickAction={() => {handleShowAdvisorMemberInfo(index)}}
                    >
                      More
                    </Button>
                  </TeamInfo>
                  <TeamMoreInfo onClick={() => {handleShowAdvisorMemberInfo(index)}}>
                    <MoreInfoDescription>{description}</MoreInfoDescription>
                    {/* <SocialMedia>
                      {renderSocialMedia(socialMediaLinks)}
                    </SocialMedia> */}
                  </TeamMoreInfo>
                </TeamItem>
                <Shadow />
              </div>
            ))}
          </TeamList>
        </TeamWrap>
      </Container>
    </TeamBlock>
  );
}

export default Team;
