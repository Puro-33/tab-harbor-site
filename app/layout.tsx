import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://tab-harbor.junghuncha40.chatgpt.site'),
  title: 'Tab Harbor 개인정보처리방침 · 탭 보관함',
  description: '선택한 Chrome 탭과 URL을 로컬에 보관하는 Tab Harbor의 개인정보, 저장, 백업 및 삭제 안내입니다.',
  icons: { icon: '/icon.png' },
  openGraph: { title: 'Tab Harbor · 내 Chrome 안의 탭 보관함', description: '탭은 잠시 닫고, 기록은 남겨 두세요. 개인정보와 백업 안내.', locale: 'ko_KR', type: 'website', url: 'https://tab-harbor.junghuncha40.chatgpt.site', images: [{ url: 'https://tab-harbor.junghuncha40.chatgpt.site/og.png', width: 440, height: 280, alt: 'Tab Harbor · Your local tab collection' }] },
  twitter: { card: 'summary_large_image', title: 'Tab Harbor · 탭 보관함', description: '선택한 탭을 내 Chrome에 보관하고 다시 열기.', images: ['https://tab-harbor.junghuncha40.chatgpt.site/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
