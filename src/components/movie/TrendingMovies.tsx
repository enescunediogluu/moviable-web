import { FC, memo } from 'react';

interface Props {
  className?: string;
}

export const TrendingMovies: FC<Props> = memo(function TrendingMovies() {
  return (
    <div className="flex flex-row w-full h-full py-2 px-10 ">
      <div className="w-full"> </div>
    </div>
  );
});
