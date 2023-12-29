import { withMainLayoutPage } from '@/components/layouts';
import { FunctionComponent } from 'react';

const ResumePage: FunctionComponent = () => (
  <iframe src="/media/redemption.pdf" className="h-screen w-full" />
);

export default withMainLayoutPage(ResumePage, {
  meta: {
    title: 'About church',
    slug: 'Short church view'
  }
});
