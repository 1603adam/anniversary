const songs = [
  {
    title: "Life Is Like a Boat",
    artist: "Rie Fu",
    spotifyId: "02cIqYTYys4M1RBFiBKIEt",
    colors: ["#bd7283", "#f4c8d1"],
  },
  {
    title: "Sampai Jadi Debu",
    artist: "Banda Neira",
    spotifyId: "6tlC32aXqMFyItGks9a2LQ",
    colors: ["#7e886b", "#e5cfaa"],
  },
];

export default function SongSection() {
  return (
    <section className="relative px-6 py-20 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5ee] via-[#f8e4e6] to-[#fff7f0]" />
      <div className="relative z-[1]">
        <p className="text-[10px] tracking-[0.36em] text-[#c45d74] uppercase">
          press play, sayang
        </p>
        <h2 className="mt-2 font-serif text-[34px] italic leading-tight text-[#5c3a44]">
          Song That Reminds Me of You
        </h2>
        <p className="mx-auto mt-2 max-w-[18rem] font-hand text-[18px] leading-relaxed text-[#8a5a66]">
          Some feelings sound better as music. These songs always find their way back to you.
        </p>

        <div className="mt-9 space-y-8">
          {songs.map((song, index) => (
            <div key={song.spotifyId} className="song-entry text-left">
              <div className="mb-3 flex items-center gap-4 px-2">
                <div
                  className="song-record relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg"
                  style={{
                    background: `repeating-radial-gradient(circle, #21171b 0 3px, #38282f 4px 5px), linear-gradient(135deg, ${song.colors[0]}, #21171b)`,
                    animationDelay: `${index * -2.4}s`,
                  }}
                >
                  <div
                    className="h-7 w-7 rounded-full border-2 border-white/50"
                    style={{ background: song.colors[0] }}
                  />
                  <div className="absolute h-2 w-2 rounded-full bg-[#fff7ee]" />
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-[22px] italic leading-tight text-[#5c3a44]">
                    {song.title}
                  </p>
                  <p className="mt-0.5 text-[10px] tracking-[0.24em] text-[#c45d74] uppercase">
                    {song.artist}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl bg-[#2b2025] shadow-[0_14px_30px_rgba(92,58,68,0.14)]">
                <iframe
                  title={`${song.title} by ${song.artist}`}
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block border-0"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-36 items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a36b]" />
          <span className="font-script text-2xl text-[#c45d74]">A + N</span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a36b]" />
        </div>
      </div>
    </section>
  );
}