import { Global } from '@/GlobalStyled';
import { Manrope } from 'next/font/google';
import StyledJsxRegistry from '../styled/registry/styledRegistry';
import { StyledProvider } from '../styled/provider';
export const metadata = {
  title: 'OxyTech',
  description: 'Generated by Next.js'
};

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <StyledProvider>
        <body className={manrope.className}>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>

          <Global />
        </body>
      </StyledProvider>
    </html>
  );
}