import { FC, memo } from 'react';
import { TrendingCard } from '../common/TrendingCard';

interface Props {
  className?: string;
}

export const TrendingMovies: FC<Props> = memo(function TrendingMovies() {
  return (
    <TrendingCard
      title="Iron Man"
      overview="Lorem ipsum dolor sit 
      amet consectetur adipisicing elit.
      Exercitationem beatae quos, voluptate autem
      provident porro fugiat. Officiis nesciunt consequuntur, dignissimos doloremque ut voluptatem mollitia odit sit placeat amet saepe dolor porro eveniet repellat minus quidem perspiciatis id fugiat, eius eum voluptatum sed fuga asperiores repellendus? Dolor saepe repudiandae libero tenetur.Lorem ipsum dolor sit 
      amet consectetur adipisicing elit.
      Exercitationem beatae quos, voluptate autem
      provident porro fugiat. Officiis nesciunt consequuntur, dignissimos doloremque ut voluptatem mollitia"
      posterPath="https://media.contentapi.ea.com/content/dam/news/www-ea/images/2022/09/ea-motive-new-title-teaser-16x9-featured.jpg.adapt.crop191x100.628p.jpg"
      rating={9.4}
    />
  );
});
