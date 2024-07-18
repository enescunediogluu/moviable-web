import { FC, memo } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';

interface Props {
  className?: string;
}

export const HomePage: FC<Props> = memo(function HomePage() {
  return (
    <PageLayout>
      <>
        <div>Hello World</div>
      </>
    </PageLayout>
  );
});
