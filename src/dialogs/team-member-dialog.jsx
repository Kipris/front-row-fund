import React from 'react';
import { Position, MoreInfo, SocialBlock, SocialLink } from './terms-of-use-dialog.styled';
import facebook from '../assets/img/facebook.svg';
import email from '../assets/img/email.svg';
import linkedin from '../assets/img/linkedin.svg';

export const TeamMemberDialog = ({ content }) => {
  const { position, moreInfo, socialMediaLinks } = content;

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
      <SocialLink key={index} href={entry[1]} target='_blank' rel='noreferrer'>
        {renderIcon(entry[0])}
      </SocialLink>
    ))
  }

  return (
    <>
      <Position>{position}</Position>
      <MoreInfo dangerouslySetInnerHTML={{__html: moreInfo}} />
      <SocialBlock>
        {renderSocialMedia(socialMediaLinks)}
      </SocialBlock>
    </>
  );
}
