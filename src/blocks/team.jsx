import React, { useState } from 'react';
import { TeamBlock, TeamWrap, Title, TeamList, TeamItem, TeamPhoto, TeamInfo, Name, Position, Description, AdvisorTitle, TeamMoreInfo, MoreInfoDescription, SocialMedia, Shadow } from './team.styled';
import { Container } from '../components/container';
import { Link } from 'react-scroll';
import { Button, ButtonColor, ButtonType } from '../components/button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import member from '../assets/img/member.png';

const Team = () => {
  const [ teamMembers ] = useState([
    {name: 'Jacob Jones', position: 'Managing Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Arlene McCoy', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
  ]);

  const [ advisorMembers ] = useState([
    {name: 'Jacob Jones', position: 'Managing Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Arlene McCoy', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
    {name: 'Savannah Nguyen', position: 'General Partner', photo: member, description: 'Pellentesque in ipsum viverra, molestie ex ut, convallis erat. Aenean in ipsum euismod eros varius dictum et quis', moreInfo: ''},
  ]);

  return (
    <TeamBlock id='team'>
      <Container>
        <TeamWrap>
          <Title>Meet our team</Title>
          <TeamList>
            {teamMembers.map(({ name, position, photo, description, moreInfo }, index) => (
              <div>
                <TeamItem key={index}>
                  <TeamPhoto src={photo} alt={name} />
                  <TeamInfo>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                    <Description>{description}</Description>
                    <Button
                      type={ButtonType.ghost}
                      textColor={ButtonColor.verdigris}
                      clickAction={() => {console.log(name)}}
                    >
                      More
                    </Button>
                  </TeamInfo>
                  <TeamMoreInfo>
                    <MoreInfoDescription>{description}</MoreInfoDescription>
                    <SocialMedia>
                      <div></div>
                      <div></div>
                      <div></div>
                    </SocialMedia>
                  </TeamMoreInfo>
                </TeamItem>
                <Shadow />
              </div>
            ))}
          </TeamList>

          <AdvisorTitle>Advisors</AdvisorTitle>
          <TeamList>
            {advisorMembers.map(({ name, position, photo, description, moreInfo }, index) => (
              <div>
                <TeamItem key={index}>
                  <TeamPhoto src={photo} alt={name} />
                  <TeamInfo>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                    <Description>{description}</Description>
                    <Button
                      type={ButtonType.ghost}
                      textColor={ButtonColor.verdigris}
                      clickAction={() => {}}
                    >
                      More
                    </Button>
                  </TeamInfo>
                  <TeamMoreInfo>
                    <MoreInfoDescription>{description}</MoreInfoDescription>
                    <SocialMedia>
                      <div></div>
                      <div></div>
                      <div></div>
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
