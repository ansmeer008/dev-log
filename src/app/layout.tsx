import {AppStyle} from '@/styles/AppStyle'
import { ReactNode } from 'react';
import { StyledComponentsRegistry } from '@/styles/StyledComponentsRegistry';

export const metadata = {
  title: 'Dev-Log',
  description: '개인 개발 블로그',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
        <AppStyle/>
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}