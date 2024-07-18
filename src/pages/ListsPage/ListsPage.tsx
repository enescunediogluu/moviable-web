import { FC, memo } from 'react';

interface Props {
  className?: string;
}

export const ListsPage: FC<Props> = memo(function ListsPage({ className }) {
  return (
    <div className={className}>
      <h1>Welcome to ListsPage</h1>
      <p>This is a simple example of a React functional component.</p>
    </div>
  );
});
