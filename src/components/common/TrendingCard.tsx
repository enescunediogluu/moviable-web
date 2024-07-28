import { FC, memo, useState } from 'react';

interface Props {
  className?: string;
  title: string;
  overview: string;
  rating?: number;
  posterPath?: string;
}

export const TrendingCard: FC<Props> = memo(function TrendingCard({
  title,
  overview,
  posterPath,
  rating,
}) {
  const [movieLiked, setMovieLiked] = useState<boolean>(false);
  const [watchListed, setWatchListed] = useState<boolean>(false);

  const handleLike = () => {
    setMovieLiked(!movieLiked);
  };

  const handleWatchLaterClick = () => {
    setWatchListed(!watchListed);
  };

  return (
    <div className="aspect-[16/9] xl:aspect-auto w-full">
      <div
        className="h-full flex flex-col md:flex-row
               bg-gradient-to-br from-black-2 to-blue-2
               w-full
               gap-2 md:gap-3 lg:gap-4 xl:gap-5
               p-4 md:p-6 lg:p-8 xl:p-10
               items-center justify-center
               rounded-3xl
               shadow-lg shadow-black-1"
      >
        {/* img */}
        <div className="sm:basis-1/2 h-full">
          <img src={posterPath} alt="" className="h-full w-full object-cover" />
        </div>

        {/* movie info */}
        <div
          className="sm:basis-1/2 flex flex-col justify-between
                    h-full gap-4"
        >
          <div className="flex flex-row w-full items-center justify-between">
            <h1 className="basis-9/10 text-3xl lg:text-4xl xl:text-5xl font-bold text-white-1 truncate">
              {title}
            </h1>
            <div className="basis-1/10 flex flex-row rounded px-1.5 py-0.5 bg-primary flex-shrink-0">
              <img
                src="/src/assets/star_icon.svg"
                alt=""
                className="bg-cover"
              />
              <h1 className="text-black-1 font-bold">{rating}</h1>
            </div>
          </div>
          <p className="text-base text-white-1 text-opacity-50 flex-grow overflow-hidden">
            {overview}
          </p>
          <div className="flex flex-row w-full justify-between px-5">
            <button onClick={handleLike}>
              <img
                src={
                  movieLiked
                    ? '/src/assets/filled_fav_icon.svg'
                    : '/src/assets/favourite_icon.svg'
                }
                alt="like icon"
              />
            </button>
            <div className="flex flex-row gap-3 transition duration-300">
              <button
                className={`flex flex-row items-center bg-purple-1 py-1 px-3 gap-1 rounded-md `}
                onClick={handleWatchLaterClick}
              >
                <img
                  src={
                    watchListed
                      ? '/src/assets/check_icon.svg'
                      : '/src/assets/watch_later.svg'
                  }
                  alt=""
                />
                <h1 className="text-sm font">
                  {watchListed ? 'on WatchList' : 'Save'}
                </h1>
              </button>
              <button className="bg-purple-1 p-1 rounded-full">
                <img src="/src/assets/add_icon.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
