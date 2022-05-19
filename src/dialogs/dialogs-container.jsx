import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { DialogWrap, DialogBackdrop, DialogBody, DialogInner, DialogContent, ButtonClose, Top, Title, ImageContainer } from './dialog-container.styled';
import { DialogContext, dialogs } from '../app';
import { TermsOfUseDialog } from './terms-of-use-dialog';
import { TeamMemberDialog } from './team-member-dialog';
import { AdvisorMemberDialog } from './advisor-member-dialog';
import { PrivacyPolicyDialog } from './privacy-policy-dialog';
import { LegalDisclaimerDialog } from './legal-disclaimer-dialog';

const DialogContainer = () => {

  const { activeDialog, setActiveDialog } = useContext(DialogContext);

  const renderDialogContent = () => {
    switch (activeDialog?.id) {
      case dialogs.termsOfUse.id:
        return <TermsOfUseDialog />;
      case dialogs.privacyPolicy.id:
        return <PrivacyPolicyDialog />;
      case dialogs.legalDisclaimer.id:
        return <LegalDisclaimerDialog />;
      case dialogs.teamMember.id:
        return <TeamMemberDialog content={activeDialog.content} />;
      case dialogs.advisorMember.id:
        return <AdvisorMemberDialog content={activeDialog.content} />;
      default:
        return null;
    }
  }

  const renderPhoto = () => {
    return activeDialog?.id === dialogs.teamMember.id
    || activeDialog?.id === dialogs.advisorMember.id
    ? (
      <ImageContainer>
        <LazyLoadImage src={activeDialog?.content?.photo} alt={activeDialog?.title} />
      </ImageContainer>
    ) : null;
  }

  return (
    <DialogWrap activeDialog={(!!activeDialog).toString()}>
      <DialogBackdrop onClick={() => setActiveDialog(null)} />
      <DialogBody activeDialog={activeDialog?.id?.toString()}>
        <DialogInner activeDialog={activeDialog?.id?.toString()}>
          {renderPhoto()}
          <div>
            <Top>
              <Title>{activeDialog?.title}</Title>
              <ButtonClose onClick={() => setActiveDialog(null)} />
            </Top>
            <DialogContent activeDialog={activeDialog?.id?.toString()}>
              {renderDialogContent()}
            </DialogContent>
          </div>
        </DialogInner>
      </DialogBody>
    </DialogWrap>
  );
}

export default DialogContainer;
