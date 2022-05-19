import React, { useState, useContext } from 'react';
import { TeamBlock, TeamWrap, Title, TeamList, TeamItem, TeamPhoto, TeamInfo, Name, Position, Description, AdvisorTitle, TeamMoreInfo, MoreInfoDescription, SocialMedia, Shadow } from './team.styled';
import { Container } from '../components/container';
import { Button, ButtonColor, ButtonType } from '../components/button';
import member from '../assets/img/member.png';
import { DialogContext } from '../app';
import 'react-lazy-load-image-component/src/effects/blur.css';
import facebook from '../assets/img/facebook.svg';
import email from '../assets/img/email.svg';
import linkedin from '../assets/img/linkedin.svg';

const Team = () => {
  const { activeDialog, setActiveDialog } = useContext(DialogContext);

  const [ teamMembers ] = useState([
    {name: 'David Haines', position: 'Managing Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: 'As an operator and investor with more than 25 years of international experience, David raised funds for, or invested in early-stage companies all over the world. He founded a number of first in the space companies, including the first microbrewery in Hong Kong, which he took public on NASDAQ, as well as the first e-commerce company in Asia – Sold to PCCW <br /><br /> Prior to Front Row, David ran a family office, investing in seed and early-stage companies in the US, Asia and Australia. Was a founding board member and CEO of Sequent Software', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com' }},
    {name: 'Arlene McCoy', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
  ]);

  const [ advisorMembers ] = useState([
    {name: 'Jacob Jones', position: 'Managing Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Arlene McCoy', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: '', socialMediaLinks: { facebook: 'https://facebook.com/', email: 'qwerty@frontrowfung.com', linkedin: 'https://www.linkedin.com/' }},
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
                    <Description>{description}</Description>
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
                    <SocialMedia>
                      {renderSocialMedia(socialMediaLinks)}
                    </SocialMedia>
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
                    <Description>{description}</Description>
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
                    <SocialMedia>
                      {renderSocialMedia(socialMediaLinks)}
                    </SocialMedia>
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
