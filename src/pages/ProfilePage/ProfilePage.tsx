import { FC, memo } from 'react';

interface Props {
  className?: string;
}

export const ProfilePage: FC<Props> = memo(function ProfilePage({ className }) {
  return (
    <div className={className}>
      <h1>Welcome to ProfilePage</h1>
      <p>This is a simple example of a React functional component.</p>
    </div>
  );
});
