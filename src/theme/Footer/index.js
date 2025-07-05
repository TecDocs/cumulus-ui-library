import '@site/src/globalReactFix';
import FooterLayout from '@theme/Footer/Layout';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';

export default function Footer() {
  return (
    <FooterLayout>
      <FooterLinks />
      <FooterLogo />
      <FooterCopyright />
    </FooterLayout>
  );
}
