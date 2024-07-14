import { ReactNode } from 'react';

import StreamVideoProvider from '@/providers/StreamClientProvider';
import {SubcriptionProvider} from '@/providers/SubscriptionProvider'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <SubcriptionProvider>

      <StreamVideoProvider>{children}</StreamVideoProvider> 
      </SubcriptionProvider>
    </main>
  );
};

export default RootLayout;
