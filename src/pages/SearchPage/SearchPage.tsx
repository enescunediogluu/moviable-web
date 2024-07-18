import { FC, memo } from 'react';

interface Props {
  className?: string;
}

export const SearchPage: FC<Props> = memo(function SearchPage({ className }) {
  return (
    <div className={className}>
      <h1>Welcome to SearchPage</h1>
      <p>This is a simple example of a React functional component.</p>
    </div>
  );
});
