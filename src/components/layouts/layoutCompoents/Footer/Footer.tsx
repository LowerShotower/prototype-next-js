import { type FunctionComponent, type ReactNode } from 'react'
import Image from 'next/image'
import touristik from '@/public/assets/icons/touristik.svg'
import {
  StyledFooter,
  StyledLink,
  StyledMainLinks,
  StyledPartnerLinks,
  StyledPartnerLinksWrapper,
} from './Footer.styles'

interface FooterProps {
  children?: ReactNode
  className?: string
}

const Footer: FunctionComponent<FooterProps> = ({ className }) => {
  return (
    <StyledFooter className={className}>
      <StyledMainLinks>
        <StyledLink href="">Impressum & Kontakt</StyledLink>
        <StyledLink href="">Datenschutzerklärung</StyledLink>
        <StyledLink href="">Datenschutz-Einstellungen</StyledLink>
        <StyledLink href="">AGB</StyledLink>
        <StyledLink href="">Abonnement kündigen</StyledLink>
        <StyledLink href="">Ethikrichtlinie</StyledLink>
        <StyledLink href="">Mediendaten</StyledLink>
        <StyledLink href="">(c) schwarzwaelder-bote.de</StyledLink>
      </StyledMainLinks>
      <StyledPartnerLinksWrapper>
        <StyledPartnerLinks>
          <StyledLink href="">Partner</StyledLink>
          <StyledLink href="">Stuttgarter Zeitung</StyledLink>
          <StyledLink href="">Stuttgarter Nachrichten</StyledLink>
          <StyledLink href="">Süddeutsche.de</StyledLink>
          <StyledLink href="">Promotion-Mitarbeiter gesucht</StyledLink>
          <StyledLink href="">
            Stellenangebote für Fach und Führungskräfte
          </StyledLink>
        </StyledPartnerLinks>
        <StyledLink href="">
          <Image src={touristik} alt="touristik" />
        </StyledLink>
      </StyledPartnerLinksWrapper>
    </StyledFooter>
  )
}

export default Footer
