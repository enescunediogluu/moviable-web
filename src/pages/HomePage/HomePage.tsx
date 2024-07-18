import { FC, memo } from 'react';
import { PageLayout } from '../../components/layout/PageLayout';
import { TrendingMovies } from '../../components/movie/TrendingMovies';

interface Props {
  className?: string;
}

export const HomePage: FC<Props> = memo(function HomePage() {
  return (
    <PageLayout>
      <TrendingMovies />
    </PageLayout>
  );
});
