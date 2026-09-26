/**
 * OUR 3RD ANNIVERSARY — fill this file with your story.
 *
 * How to add photos / videos / gifs:
 *  1. Put files in  public/memories/  (example: public/memories/01-us.jpg)
 *  2. Set src to    "/memories/01-us.jpg"
 *
 * Types: "image" | "video" | "gif"
 * Add extra items to `media` to make a section swipe like a photo album.
 */

export type MediaType = "image" | "video" | "gif";

export type MediaItem = {
  type: MediaType;
  src: string;
  alt?: string;
};

export type Memory = {
  id: number;
  kicker: string;
  title: string;
  caption: string;
  date?: string;
  media: MediaItem[];
};

export const couple = {
  yourName: "Adam",
  theirName: "Nurin",
  together: "Adam & Nurin",
  years: 3,
  startDate: "2023-09-23",
  anniversaryDateLabel: "23rd September",
  heroLine: "three years of a love I still get shy about",
  letterTitle: "Dearest Nurin,",
  letterBody: [
    "If I could fold every morning I woke up grateful for you into a single page, it would still not be enough paper.",
    "Three years. I have memorized the way you laugh with your whole face. I have learned the weather of your quiet days. I have watched us become a home that is not a place, but a person.",
    "Thank you for the grocery lists and the grand adventures. For forgiving my messy timing. For choosing me in little ways, again and again, when nobody was watching.",
    "I love you in the ordinary hours — that is the extraordinary part. I love you in the kitchen light. I love you when the world is loud. I love you when we are tired and still reach for each other's hands.",
    "Here is my promise, renewed like spring lilies: I will keep learning you. I will keep making rooms in my life where you can rest. I will keep being the safest place I know how to be.",
    "Happy anniversary, my love. Thank you for three years. Please give me every year after this one, too.",
  ],
  signature: "Forever yours,",
  postscript: "P.S. The cat agrees. He is very wise.",
};

export const memories: Memory[] = [
  {
    id: 1,
    kicker: "Chapter I",
    title: "First Picture Together",
    caption:
      "This is our first picture together. After few weeks of talking, our courage finally wins. We looked awkward, and my hair is soooo weird. But I love it. Waktu ni nak hurry je nak tangkap. I can't wait to show this to our children. The first attempt waktu maulidul rasul gagal, but even though this one is baju sekolah, that's okay, we can recreate waktu kahwin nanti.",
    date: "4th October 2023",
    media: [
      { type: "image", src: "/image/1.jpg", alt: "Our first picture together" },
    ],
  },
  {
    id: 2,
    kicker: "Chapter II",
    title: "Pakai Baju PJ",
    caption:
      "Second one, pakai baju pj pula. Ni kawan awak kan panggil tak silap. But kita sempat ambil kesempatan nak ambil gambar hehe. ANOTHER AWKWARD ONE, but it works. I love being able to take more pictures with you.",
    date: "6th October 2023",
    media: [
      { type: "image", src: "/image/2.jpg", alt: "Second picture in baju PJ" },
    ],
  },
  {
    id: 3,
    kicker: "Chapter III",
    title: "Jamuan Sekolah",
    caption:
      'Waktu ni ada jamuan kan. Saya malu nak pergi kelas awak, lepas tu awak bagi saya foods from your class. Dah la kelas saya takde makanan apa sangat. Then lepastu kita ambil gambar kat tangga, Nabil ambilkan. Then waktu tu saya dah dalam kelas, Haikal tanya, "Kau risau eh" then saya reply, "Taklah". But I was, but I think I have grow now, maybe only a little. But I\'m working on it !',
    date: "10th November 2023",
    media: [
      { type: "image", src: "/image/3.jpg", alt: "Jamuan Sekolah" },
    ],
  },
  {
    id: 4,
    kicker: "Chapter IV",
    title: "Malam Solat Hajat",
    caption:
      "First time ambil gambar malam, waktu ni Umi(Ustazah) nampak kita HAHA. Tapi you look very beautiful in that abaya. I remember that night balik rumah I was so happy. We texted, then awak tunjuk gambar awak guna camera, saya post story. Such a good time, being young again.",
    date: "14th December 2023",
    media: [
      { type: "image", src: "/image/4.jpg", alt: "Malam Solat Hajat" },
    ],
  },
  {
    id: 5,
    kicker: "Chapter V",
    title: "Waktu Kelas Tambahan",
    caption:
      "DAPAT KELAS TAMBAHAN WAKTU SAMA. Tapi ni kan dak ipan danish yang ambil gambar kita, tu kurang cantik, tapi awak still cantik ! Even gambar dia ambil tak okay, I am still grateful we got to capture that day together.",
    date: "20th December 2023",
    media: [
      { type: "image", src: "/image/5-1.jpg", alt: "Kelas Tambahan 1" },
      { type: "image", src: "/image/5-2.jpg", alt: "Kelas Tambahan 2" },
    ],
  },
  {
    id: 6,
    kicker: "Chapter VI",
    title: "First Basketball Date",
    caption:
      "YAY first meeting kat taman saya. Ni bila fikir balik kesian awak kena lintas jalan besar, tak gentleman langsung saya. Tapi ni awkward sangat, saya remember, tapi kita ada buat vlog, and I love that vlog so much. Your smile was so radiant that day. I was happy too. I cherish that day so much.",
    date: "14th January 2024",
    media: [
      { type: "image", src: "/image/6-1.jpg", alt: "Basketball Date 1" },
      { type: "image", src: "/image/6-2.jpg", alt: "Basketball Date 2" },
    ],
  },
  {
    id: 7,
    kicker: "Chapter VII",
    title: "Waktu Award Kan Ni ?",
    caption:
      "Ni kita dua pakai baju sekolah, tak silap ni waktu saya kena naik pentas, rasanya award halaqah quran and sebagai ketua kelas. Waktu balik pun kita dapat ambil. Tak silap ni ada senior awak datang, tu awak lambat if I am not mistaken, BUT I HAVE NO PROBLEM WITH IT. Then kita dapat jalan balik sama sama hehehehehe.",
    date: "26th January 2024",
    media: [
      { type: "image", src: "/image/7-1.jpg", alt: "Waktu Award 1" },
      { type: "image", src: "/image/7-2.jpg", alt: "Waktu Award 2" },
    ],
  },
  {
    id: 8,
    kicker: "Chapter VIII",
    title: "Geng Merah",
    caption:
      "Waktu ni saja jalan-jalan nak beli ais krim, sebab mana lah tau dapat jumpa awak kan, THEN BETUL BETUL JUMPA, lepastu terus ambil gambar. Then kita perasan macam cikgu syikin pandang, terus berpocah waktu tu. Tapi nampak lawak la saya, awak cantik sebab awak memang sun.",
    date: "1st February 2024",
    media: [
      { type: "image", src: "/image/8-1.jpg", alt: "Geng Merah 1" },
      { type: "image", src: "/image/8-2.jpg", alt: "Geng Merah 2" },
    ],
  },
  {
    id: 9,
    kicker: "Chapter IX",
    title: "Dapat Nametag Awak",
    caption:
      "Saya buat ni sambil baca our text on that date. AWAK BAGI SAYA LETTER. Awak bagi gambar awak sekali, I love it all until today, until forever.",
    date: "2nd February 2024",
    media: [
      { type: "image", src: "/image/9.jpg", alt: "Dapat Nametag Awak" },
    ],
  },
  {
    id: 10,
    kicker: "Chapter X",
    title: "She Gave Me Kahf",
    caption:
      "NI LAWAK TAPI COMEL, waktu ni yang awak bagi saya hadiah, awak bagi Kahf punya perfume. First time saya pakai perfume, perfume awak bagi. Before tu saya tak pernah pakai. So you are my first in any aspect sayang. Thankyou awak, I still keep the bottle until today, both bottle minyak wangi saya still simpan sayang. I love it all. It have your scent all over it.",
    date: "8th February 2024",
    media: [
      { type: "image", src: "/image/10-1.jpg", alt: "The Kahf perfume gift 1" },
      { type: "image", src: "/image/10-2.jpg", alt: "The Kahf perfume gift 2" },
    ],
  },
  {
    id: 11,
    kicker: "Chapter XI",
    title: "Second Basketball Date",
    caption:
      "I just realized the date is valentine's day, but that's for christian let's ignore it. Waktu ni saya bagi three letters terus ha amik dia. I don't think we argued, saya just tulis sebab bosan and best tulis surat kat awak. I never regret that. I'm glad I did it sayang.",
    date: "14th February 2024",
    media: [
      { type: "image", src: "/image/11.jpg", alt: "Our second basketball date" },
    ],
  },
  {
    id: 12,
    kicker: "Chapter XII",
    title: "Mother and Son",
    caption:
      "HAHAHA SAYA NAMPAK MACAM BUDAK BUDAK LAH AWAK. Ni waktu ni kan saya blur, awak buat hand sign suruh tunggu, saya boleh jalan terus. Ish ish. Ni waktu ni awak ada tugas sains sukan tak silap, dekat padang, saya ada kelas tambahan. Ado jo reason nak ambil gambar, I LOVE IT THOUGH.",
    date: "15th February 2024",
    media: [
      { type: "image", src: "/image/12-1.jpg", alt: "Mother and Son 1" },
      { type: "image", src: "/image/12-2.jpg", alt: "Mother and Son 2" },
      { type: "image", src: "/image/12-3.jpg", alt: "Mother and Son 3" },
      { type: "image", src: "/image/12-4.jpg", alt: "Mother and Son 4" },
    ],
  },
  {
    id: 13,
    kicker: "Chapter XIII",
    title: "Lepak at Taman",
    caption:
      "Didn't really do anything this time. Just chit chatting together. I still let you walk all the way to my taman, apalah Adam. But we look a little young here. I quite miss being that young. Talking like I am so old. But we are steps closer to our marriage. I just wish we could stay young forever. I miss you Nurin.",
    date: "10th March 2024",
    media: [
      { type: "image", src: "/image/13-1.jpg", alt: "Lepak at Taman 1" },
      { type: "image", src: "/image/13-2.jpg", alt: "Lepak at Taman 2" },
    ],
  },
  {
    id: 14,
    kicker: "Chapter XIV",
    title: "Geng Hijo",
    caption:
      "Waktu ni nak ambil hadif, tu ambil kesempatan nak jumpa sekali tu hehe. Dengan kopiah nyo. You look so sweet and precious. You look really happy. I wanna make you smile like that everyday. Yang time ni saya bagi awak keychain angel wings, buku nota saya, and baju putih saya tuuuu eheheh. You said it smell nice. I love giving you a piece of myself love.",
    date: "29th March 2024",
    media: [
      { type: "image", src: "/image/14.jpg", alt: "Geng Hijo" },
    ],
  },
  {
    id: 15,
    kicker: "Chapter XV",
    title: "I Went To School !",
    caption:
      "This one is when I came to school nak bagi hadiah kat cikgu saya. Dengan outfit bajet bajet nya nak impress kan awak. TAPI AWAK MEMANG NAMPAK HAPPY, TAPI SAYA NAMPAK ACAH NGAN BAJUNYA. I remember I asked you to make a A sign for a picture, you insist it was a bad picture, but I really think it is such a cute and memorable gift for ourselves.",
    date: "1st April 2024",
    media: [{ type: "image", src: "/image/15.jpg", alt: "I Went To School" }],
  },
  {
    id: 16,
    kicker: "Chapter XVI",
    title: "FIRST RAYA TOGETHER !",
    caption:
      "This is it, OUR FIRST SYAWAL TOGETHER. I was so nervous before coming to your home, sebab nak jumpa mama baba lagi. Ni yang saya ajak Aizam, Khairi and Haikal tu. It was a very fun night. Kita ambil gambar, main dengan cats, buat tiktok sama sama, duk buka tutup mata, bagi duit raya, makan kek. I remember going to sleep that night cozily. Because it was that good of a night. Waktu tu saya excited sebab tak sabar nak tunggu raya next year dapat spend time macam ni lagi. Kalau gaduh je mesti saya ingat kalau kita breakup ni, tak dapat rasa macam ni lagi. So i can't let it go. I miss you.",
    date: "20th April 2024",
    media: [
      { type: "image", src: "/image/16-1.jpg", alt: "First Raya Together 1" },
      { type: "image", src: "/image/16-2.jpg", alt: "First Raya Together 2" },
      { type: "image", src: "/image/16-3.jpg", alt: "First Raya Together 3" },
      { type: "image", src: "/image/16-4.jpg", alt: "First Raya Together 4" },
      { type: "image", src: "/image/16-5.jpg", alt: "First Raya Together 5" },
    ],
  },
  {
    id: 17,
    kicker: "Chapter XVII",
    title: "Raya At My Home",
    caption:
      "Ni giliran saya pula, waktu ni saya regret one thing, saya rasa macam tak as fun waktu kat rumah awak. Tu awak balik saya sedih je. Rasa macam tak cukup fun saya buat for you. But I am glad kita ada gambar bersama. Ni pun awak ada dapat gambar dengan umi. Saya ingat awak happy sangat. You are so cute baby, my love forever hehe.",
    date: "21st April 2024",
    media: [
      { type: "image", src: "/image/17-1.jpg", alt: "Raya At My Home 1" },
      { type: "image", src: "/image/17-2.jpg", alt: "Raya At My Home 2" },
    ],
  },
  {
    id: 18,
    kicker: "Chapter XVIII",
    title: "Reconcile After An Argument",
    caption:
      "Ni malam before tidur, kita gaduh, sebab saya jeles awak chat Nabil. I was so childish. I am really sorry for troubling you many times. I didn't control my emotions well, really bad mannerism by me. Saya remember cakap kat umi nak jumpa sebab emergency, tapi tulah, awak kena datang taman saya still. Ish ish Adam ni, banyak problem.",
    date: "4th May 2024",
    media: [
      { type: "image", src: "/image/18-1.jpg", alt: "Reconcile After An Argument 1" },
      { type: "image", src: "/image/18-2.jpg", alt: "Reconcile After An Argument 2" },
    ],
  },
  {
    id: 19,
    kicker: "Chapter XIX",
    title: "Venturing To Your Taman !",
    caption:
      "Here we go, finally Adam go to your taman ! Ni saya betul-betul beg kat umi nak pergi. Akhirnya umi giveup. Saya naik motor ke speedmart, then lintas kat jalan besar. I remember waktu tu lesen kereta belum dapat lagi P. Bulan Jun or Julai baru dapat. But waktu ni best, saya dapat main kat taman dengan awak and Rayyan, tapi awak terkena bola dia sepak >:0 Si Rayyan ni !!",
    date: "26th May 2024",
    media: [
      { type: "image", src: "/image/19-1.jpg", alt: "Venturing To Your Taman 1" },
      { type: "image", src: "/image/19-2.jpg", alt: "Venturing To Your Taman 2" },
      { type: "image", src: "/image/19-3.jpg", alt: "Venturing To Your Taman 3" },
    ],
  },
  {
    id: 20,
    kicker: "Chapter XX",
    title: "Adam's SPM Result",
    caption:
      "Waktu ni excited benau dapat result, terus nak celebrate dengan awak. Dengan pakaian atuk nya. Dulu style saya pelik sangat, malu bila dilihat balik. TAPI DAPAT BOUQUET FROM YOU. I was sooo sooo soo happy. First time dapat bouquet, and it's from you, I truly adore you. Makan dia okay kat sini. Tapi macam saya majuk waktu tu sebab kakak awak macam tak suka saya ambil gambar. Adam ni buat hal lagi. DAH LA TAK RETI AMBIL GAMBAU. Tapi awak backup saya, I love you sayang Nurin.",
    date: "27th May 2024",
    media: [
      { type: "image", src: "/image/20-1.jpg", alt: "Adam's SPM Result 1" },
      { type: "image", src: "/image/20-2.jpg", alt: "Adam's SPM Result 2" },
      { type: "image", src: "/image/20-3.jpg", alt: "Adam's SPM Result 3" },
    ],
  },
  {
    id: 21,
    kicker: "Chapter XXI",
    title: "After Arguement",
    caption:
      "This was after arguement. You used to wear a lot of this maroon colored sweater. NI saya ah nakal buat gaduh je kerja.",
    date: "29th May 2024",
    media: [{ type: "image", src: "/image/21.jpg", alt: "After Arguement" }],
  },
  {
    id: 22,
    kicker: "Chapter XXII",
    title: "Sambut SPM!",
    caption:
      "Ni waktu saya datang sekolah nak ambil award. Saya ingat waktu tu nak selfie, tapi awak malu sebab awak takut orang cakap nanti awak pula beria dekat result saya. Saya tak rasa salah pun. Saya suka sambut dengan awak. And I want to make sure awak pun in it too. Sebab awak celebrate me like it's yours, and that made me so happy. Then saya tunggu awak balik sekolah. Kita dapat walk sama-sama lagi sampai luar pagar sekolah hehe.",
    date: "4th June 2024",
    media: [
      { type: "image", src: "/image/22-1.jpg", alt: "Sambut SPM 1" },
      { type: "image", src: "/image/22-2.jpg", alt: "Sambut SPM 2" },
    ],
  },
  {
    id: 23,
    kicker: "Chapter XXIII",
    title: "Jalan-jalan Di Taman Awak",
    caption:
      "I don't remember much from this, but we walk around your taman with Rayyan. Waktu ni saya still jalan kaki. Saya ingat awak takut sebab ada anjing. Tapi takpe, saya ada >:) Anjing takut dengan saya, sebab saya kucing.",
    date: "8th June 2024",
    media: [{ type: "image", src: "/image/23.jpg", alt: "Jalan-jalan Di Taman Awak" }],
  },
  {
    id: 24,
    kicker: "Chapter XXIV",
    title: "Date At Warong",
    caption:
      "First restaurant date after kita makan waktu sambut SPM saya. Ni dua2 naik grab. We were really young back then. Makanan order tiga, lepastu tak habis hehe. Then kita pergi 7E. Lepastu order grab, tapi takde and tak dapat. Tu kita naik abah umi. Saya ingat awak excited and comel je sayang.",
    date: "15th June 2024",
    media: [
      { type: "image", src: "/image/24-1.jpg", alt: "Date At Warong 1" },
      { type: "image", src: "/image/24-2.jpg", alt: "Date At Warong 2" },
      { type: "image", src: "/image/24-3.jpg", alt: "Date At Warong 3" },
      { type: "image", src: "/image/24-4.jpg", alt: "Date At Warong 4" },
      { type: "image", src: "/image/24-5.jpg", alt: "Date At Warong 5" },
    ],
  },
  {
    id: 25,
    kicker: "Chapter XXV",
    title: "New Glasses",
    caption:
      "Ni saya datang taman sebab nak main buaian dengan sayang. Waktu ni saya naik grab. Saya dapat cermin mata baru, tu nak tunjuk awak sekali tu. Tapi best main buaian dengan awak, I miss that.",
    date: "23rd June 2024",
    media: [{ type: "image", src: "/image/25.jpg", alt: "New Glasses" }],
  },
  {
    id: 26,
    kicker: "Chapter XXVI",
    title: "First Date At Aeon",
    caption:
      "Ni first date kita kat Aeon. Ada adik and kakak awak sekali. My outfit sekali lagi pelik, tapi awak cantikkk. Saya ingat yang ni saya merajuk sebab awak tunjuk gambar laki korea cakap hensem. I was so childish about that. I still find it embarrassing till this day with how I reacted on that. But we reconcile and I got you Mr. A from Kaison ! Then we got matching keychains. Lepastu main dekat arcade, main game kereta tu, Wangan Midnight. Anime dulu saya pernah tengok, good watch. You look gorgeous so!",
    date: "13th July 2024",
    media: [
      { type: "image", src: "/image/26-1.jpg", alt: "First Date At Aeon 1" },
      { type: "image", src: "/image/26-2.jpg", alt: "First Date At Aeon 2" },
      { type: "image", src: "/image/26-3.jpg", alt: "First Date At Aeon 3" },
      { type: "image", src: "/image/26-4.jpg", alt: "First Date At Aeon 4" },
    ],
  },
  {
    id: 27,
    kicker: "Chapter XXVII",
    title: "Jumpa After School Pt. 2",
    caption:
      "Ni waktu ni saja je jumpaaa. But it was so fun still. I don't remember what we talked about, but looking at the chat during that day, we had a good time. I wanna be a man like that for you again. I miss you. Please come back. I love you.",
    date: "26th July 2024",
    media: [{ type: "image", src: "/image/27.jpg", alt: "Jumpa After School Pt. 2" }],
  },
  {
    id: 28,
    kicker: "Chapter XXVIII",
    title: "Bagi Taufufa !",
    caption:
      "Ni waktu ada food fest dekat stadium Hang Jebat tu. Tapi awak tak dapat pergi. So saya nak kirim something kat awak. Nasib ada taufufa, terus nak beli tu for you. Waktu tu tak silap kat taman awak macam nak hujan dah. Lepastu tu tunggu, cerah balik. Then kita main buaian, saya ingat kita gelak banyak that day. I was so happy even after coming home. Rasa energetic. I still remember that feeling until today.",
    date: "3rd August 2024",
    media: [
      { type: "image", src: "/image/28-1.jpg", alt: "Bagi Taufufa 1" },
      { type: "image", src: "/image/28-2.jpg", alt: "Bagi Taufufa 2" },
      { type: "image", src: "/image/28-3.jpg", alt: "Bagi Taufufa 3" },
    ],
  },
  {
    id: 29,
    kicker: "Chapter XXIX",
    title: "Ice Cream Together",
    caption:
      "Ni pun saja saja datang jugaaa. Tapi awak nak ice cream waktu tu. Tu saya bawa, kita makan sama sama hehe. Ni pun sama mendung juga. Tapi awak ada cuba pakai cermin mata kecil saya. Comel, nampak y2k and style on you. You have always been beautiful.",
    date: "17th August 2024",
    media: [
      { type: "image", src: "/image/29-1.jpg", alt: "Ice Cream Together 1" },
      { type: "image", src: "/image/29-2.jpg", alt: "Ice Cream Together 2" },
    ],
  },
  {
    id: 30,
    kicker: "Chapter XXX",
    title: "Rayyan Menari...",
    caption:
      "Haha yang ni waktu jumpa kat Aeon sebab Rayyan ada buat persembahan. Saya naik kakak, awak datang dengan family awak. Tapi best waktu tu, dapat minum air yogurt tu, then kita borak-borak sambil tengok Rayyan. Lepastu jalan-jalan Kaison kejap macam biasa. Lepastu boleh pula terjumpa Cikgu Hidayah, such a funny coincidence. You two have always look close. I think she remembers you more than me HAHAHA. But makeup awak cantik, nampak soft and light je. Tapi awak always cantik barefaced and with makeup !",
    date: "24th August 2024",
    media: [
      { type: "image", src: "/image/30-1.jpg", alt: "Rayyan Menari 1" },
      { type: "image", src: "/image/30-2.jpg", alt: "Rayyan Menari 2" },
      { type: "image", src: "/image/30-3.jpg", alt: "Rayyan Menari 3" },
      { type: "image", src: "/image/30-4.jpg", alt: "Rayyan Menari 4" },
    ],
  },
  {
    id: 31,
    kicker: "Chapter XXXI",
    title: "First Anniversary (Early)",
    caption:
      "Ni first of our many anniversaries, ni first time saya bagi awak real flowers. And you know, your reaction was so priceless. You were very happy. And I didn't expect you to be that happy. Tu first time saya rasa macam wah ni hadiah yang paling excited saya pernah nampak awak dapat. And ada sekali rantai of our pictures. From this time, I keep trying to increase my efforts in gifts. I love seeing your smile, so beautiful.",
    date: "14th September 2024",
    media: [
      { type: "image", src: "/image/31-1.jpg", alt: "First Anniversary (Early) 1" },
      { type: "image", src: "/image/31-2.jpg", alt: "First Anniversary (Early) 2" },
      { type: "image", src: "/image/31-3.jpg", alt: "First Anniversary (Early) 3" },
    ],
  },
  {
    id: 32,
    kicker: "Chapter XXXII",
    title: "First Time Masak Buttermilk",
    caption:
      "Ni first time saya try masak real food for you. And kita makan sama-sama kat taman, sambil minum air Mixue yang saya order. Saya ingat dulu, suka awak dekat earl grey honey lemon tea. Pekat saya buat buttermilk tu, tapi awak suka. I love cooking for you. Best dapat makan dekat taman dengan awak. I really enjoy it. I appreciate you for eating what I cook sayang.",
    date: "18th September 2024",
    media: [{ type: "image", src: "/image/32.jpg", alt: "First Time Masak Buttermilk" }],
  },
  {
    id: 33,
    kicker: "Chapter XXXIII",
    title: "Before College",
    caption:
      "Ni a week before saya enter college. Sebab before ni bagi sunflower awak senyum gedabak, tu saya cuba beli bunga mini this time. Your smile is all worth it. Macam biasa kita lepak kat taman awak hehe.",
    date: "20th September 2024",
    media: [
      { type: "image", src: "/image/33-1.jpg", alt: "Before College 1" },
      { type: "image", src: "/image/33-2.jpg", alt: "Before College 2" },
    ],
  },
  {
    id: 34,
    kicker: "Chapter XXXIV",
    title: "A Day Before Orientation",
    caption:
      "Lepas je tahu boleh balik rumah dulu before duduk college, saya balik. Then nak jumpa awak. Saya ingat malam before tu, saya muntah and sakit perut teruk. Alhamdulillah pagi tu okay, tapi rasa relief sangat sebab rasa nervous nak duduk college first day tu. Lepas balik tu rasa hehe dapat duduk rumah lagi, dekat dengan awak pula tu. Ni out of topic sikit, tapi I still remember first night at college, it kinda felt unreal, I can't believe saya dah habis time kat UiTM Jasin huhu.",
    date: "28th September 2024",
    media: [
      { type: "image", src: "/image/34-1.jpg", alt: "A Day Before Orientation 1" },
      { type: "image", src: "/image/34-2.jpg", alt: "A Day Before Orientation 2" },
    ],
  },
  {
    id: 35,
    kicker: "Chapter XXXV",
    title: "Your Birthday ! Pt. 1",
    caption:
      "Ni first time sambut birthday awak sama, well technically the second time. Waktu first time betul tu waktu baru kenal. So saya bagi mesej whatsapp je waktu tu. Ni first time sambut betul-betul. I decided to make it a really special one. Sampai sekarang awak pakai jam tu, cantik dekat tangan awak sangat. Ni juga first time pergi Kin, first of many, sampai kahwin pun nanti. Just writing this make me want to go with you again.",
    date: "12th October 2024",
    media: [
      { type: "image", src: "/image/35-1.jpg", alt: "Your Birthday ! Pt. 1 - 1" },
      { type: "image", src: "/image/35-2.jpg", alt: "Your Birthday ! Pt. 1 - 2" },
      { type: "image", src: "/image/35-3.jpg", alt: "Your Birthday ! Pt. 1 - 3" },
      { type: "image", src: "/image/35-4.jpg", alt: "Your Birthday ! Pt. 1 - 4" },
      { type: "image", src: "/image/35-5.jpg", alt: "Your Birthday ! Pt. 1 - 5" },
      { type: "image", src: "/image/35-6.jpg", alt: "Your Birthday ! Pt. 1 - 6" },
    ],
  },
  {
    id: 36,
    kicker: "Chapter XXXVI",
    title: "Buat Tiktok LOL",
    caption:
      "Datang nak main badminton dengan Rayyan waktu ni. Last last kita buat tiktok yang lagu HSKT tu. Saya still ada video tu saved. Always. I love that video.",
    date: "26th October 2024",
    media: [{ type: "image", src: "/image/36.jpg", alt: "Buat Tiktok LOL" }],
  },
  {
    id: 37,
    kicker: "Chapter XXXVII",
    title: "Makan Taco Bell !",
    caption:
      "Another Aeon date hehe. Ni yang saya belikan cincin Zirconia untuk awak tu, and I'm sure saya belanja awak baju juga waktu tu. Lepastu kita makan kat Taco Bell. Sedap kan, saya still ingat buat tiktok dengan awak tu. Lepastu kita duduk dekat balcony bahagian atas tu, tapi sekarang tempat tu dah renovate. Sampai sekarang tak siap lagi huhu.",
    date: "2nd November 2024",
    media: [
      { type: "image", src: "/image/37-1.jpg", alt: "Makan Taco Bell 1" },
      { type: "image", src: "/image/37-2.jpg", alt: "Makan Taco Bell 2" },
      { type: "image", src: "/image/37-3.jpg", alt: "Makan Taco Bell 3" },
      { type: "image", src: "/image/37-4.jpg", alt: "Makan Taco Bell 4" },
      { type: "image", src: "/image/37-5.jpg", alt: "Makan Taco Bell 5" },
    ],
  },
  {
    id: 38,
    kicker: "Chapter XXXVIII",
    title: "Masak Sambal Udang !",
    caption:
      "Kali ni kita try masak sambal udang pula. Ni pun after gaduh hehe. Saya bagi awak bunga crochet waktu ni, sekali dengan rantai, dapat beg Szindore lolll. Tapi yang ni tak silap grab takde, tu kakak and umi ambil saya waktu tu.",
    date: "30th November 2024",
    media: [{ type: "image", src: "/image/38.jpg", alt: "Masak Sambal Udang !" }],
  },
  {
    id: 39,
    kicker: "Chapter XXXIX",
    title: "Carnival at SKPR",
    caption:
      "Saya ingat saya late datang waktu ni. Bila fikir balik saya ni jahat, boleh took you away from Mirza. I feel bad thinking about it again. I should have let you spend time with your friend. Especially the one yang awak dah lama jumpa. Tapi waktu ni kita naik carriage kuda, tengok Rayyan memanah, makan and minum sikit. It do felt short, but I enjoyed it.",
    date: "11th January 2025",
    media: [{ type: "image", src: "/image/39.jpg", alt: "Carnival at SKPR" }],
  },
  {
    id: 40,
    kicker: "Chapter XL",
    title: "First Date At Jonker !",
    caption:
      "After dah banyak kat Aeon, we try date at Jonker ! But of course we have to visit Kin first, ada kakak awak waktu ni. Alhamdulillah okay sikit gambar. Ni kalau saya ambil, ish ishhhh. Ni juga first time try photobooth, first of many orang kata. But I love all the pictures here, boleh buat ig post ni.",
    date: "30th January 2025",
    media: [
      { type: "image", src: "/image/40-1.jpg", alt: "First Date At Jonker 1" },
      { type: "image", src: "/image/40-2.jpg", alt: "First Date At Jonker 2" },
      { type: "image", src: "/image/40-3.jpg", alt: "First Date At Jonker 3" },
      { type: "image", src: "/image/40-4.jpg", alt: "First Date At Jonker 4" },
      { type: "image", src: "/image/40-5.jpg", alt: "First Date At Jonker 5" },
      { type: "image", src: "/image/40-6.jpg", alt: "First Date At Jonker 6" },
    ],
  },
  {
    id: 41,
    kicker: "Chapter XLI",
    title: "Your Kek Batik",
    caption:
      "Awak bagi kek batik awak buat, siap bagi lebih untuk rumah saya. Umi kata sedap tau waktu ni. Rindu pula makan kek batik, it felt recent, but felt quite long time ago. I miss you.",
    date: "12th February 2025",
    media: [{ type: "image", src: "/image/41.jpg", alt: "Your Kek Batik" }],
  },
  {
    id: 42,
    kicker: "Chapter XLII",
    title: "Buttermilk Cooking Again !",
    caption:
      "I cooked another chicken buttermilk. But we talked a lot that day. I feel comfortable talking to you. And being close to you. It feels like home.",
    date: "21st February 2025",
    media: [
      { type: "image", src: "/image/42.jpg", alt: "Buttermilk Cooking Again" },
    ],
  },
  {
    id: 43,
    kicker: "Chapter XLIII",
    title: "Awak Kurang Sihat :(",
    caption:
      "Saya ada buat nasi goreng untuk awak. Patutnya nak hantar tengah hari, tapi awak demam. Awak rehat dulu, then saya hantar petang. Kesian awak. Nampak kurang bertenaga waktu tu. I'm glad cepat awak sihat.",
    date: "26th February 2025",
    media: [
      { type: "image", src: "/image/43.jpg", alt: "Awak Kurang Sihat" },
    ],
  },
  {
    id: 44,
    kicker: "Chapter XLIV",
    title: "Jumpa Before Iftar",
    caption:
      "Saja jumpa ni, tapi sekejap je waktu ni. Sebab umi ajak saya berbuka. Tu kita main buaian kejap then saya balik. Tapi saya still senyum wide, I was wearing the smile you gave me for a long time after that.",
    date: "1st March 2025",
    media: [
      { type: "image", src: "/image/44.jpg", alt: "Jumpa Before Iftar" },
    ],
  },
  {
    id: 45,
    kicker: "Chapter XLV",
    title: "Jumpa Waktu Iftar",
    caption:
      "NI JUMPA SEBAB KITA BERBUKA DEKAT TEMPAT YANG DEKAT. Lepastu borak dengan baba pula tu. Sempat juga kita ambil kesempatan nak jumpa hehe. But ni predicament before berbuka sama-sama betul2 nanti hehe.",
    date: "29th March 2025",
    media: [
      { type: "image", src: "/image/45.jpg", alt: "Jumpa Waktu Iftar" },
    ],
  },
  {
    id: 46,
    kicker: "Chapter XLVI",
    title: "Raya Kedua Bersama !",
    caption:
      "YAY ANOTHER RAYA BERSAMA. Kali ni dapat matching. This was still the best raya picture of us. Macam poster movie dah. Tapi best raya dekat rumah awak. Sebab rasa intimate. So quiet, and feels like I was at home. Home is wherever you are.",
    date: "4th April 2025",
    media: [
      { type: "image", src: "/image/46-1.jpg", alt: "Raya Kedua Bersama 1" },
      { type: "image", src: "/image/46-2.jpg", alt: "Raya Kedua Bersama 2" },
      { type: "image", src: "/image/46-3.jpg", alt: "Raya Kedua Bersama 3" },
    ],
  },
  {
    id: 47,
    kicker: "Chapter XLVII",
    title: "Day After Raya",
    caption:
      "Literally a day after raya kat rumah awak, alang-alang before balik college tu dapat pujuk umi tu. Kita dapat lego matching, saya Mickey, awak Minney. Then dapat cuba kenangan coffee. Yang waktu ni abang awak hantar saya pergi rumah acu. Awak and Rayyan ikut sekali. But that day best, saya unlimited duit. Dapat spoil awak hehe.",
    date: "5th April 2025",
    media: [
      { type: "image", src: "/image/47-1.jpg", alt: "Day After Raya 1" },
      { type: "image", src: "/image/47-2.jpg", alt: "Day After Raya 2" },
      { type: "image", src: "/image/47-3.jpg", alt: "Day After Raya 3" },
    ],
  },
  {
    id: 48,
    kicker: "Chapter XLVIII",
    title: "Interview for Kerja Sayang",
    caption:
      "This was after I fell of the motorcycle. Memang kena pujuk umi betul-betul supaya dapat teman. Tapi awak berani, I respect and applaud you. And awak dapat pula tu. So proud of you. Your will to do your best is always commendable. Then kita pergi Mr. DIY, and pergi Zus lepas tu. Cantik awak pakai warna hijau haritu. Saya suka, matching pula dengan air Zus dia tu.",
    date: "14th April 2025",
    media: [
      { type: "image", src: "/image/48.jpg", alt: "Interview for Kerja Sayang" },
    ],
  },
  {
    id: 49,
    kicker: "Chapter XLIX",
    title: "Second Raya At My House !",
    caption:
      "HAHA waktu ni kena creative, takde cameraman, last last letak phone kat kerusi. Awak panggil saya bijak, tapi gambar still tak okay. But at least kita dapat gambar. I am more than happy about that. Boleh simpan buat memory. Kita matching lagi hehe !",
    date: "20th April 2025",
    media: [
      { type: "image", src: "/image/49-1.jpg", alt: "Second Raya At My House 1" },
      { type: "image", src: "/image/49-2.jpg", alt: "Second Raya At My House 2" },
    ],
  },
];

export const palettes = [
  ["#f8d7da", "#fbe8c8"],
  ["#f7c9d8", "#e8d4f2"],
  ["#fde2cf", "#f5c6d6"],
  ["#e4d4f0", "#f8d0c8"],
  ["#d9ead3", "#f8e1c8"],
  ["#f6d1c1", "#f3d9e8"],
  ["#f2c6de", "#fae0b8"],
  ["#e7d2f0", "#d7ebe3"],
  ["#fad2d2", "#fff1d6"],
  ["#f3c4d8", "#e5e0f5"],
  ["#ffe5c4", "#f7c8d8"],
  ["#e8f0d8", "#f8d5c8"],
  ["#f8c8c8", "#e3dff7"],
  ["#fde8c0", "#e6c9e8"],
  ["#f0d0c0", "#dce8f5"],
];

export function daysTogether(now = new Date()): number {
  const start = new Date(couple.startDate + "T00:00:00");
  if (Number.isNaN(start.getTime())) return couple.years * 365;
  const days = Math.floor((now.getTime() - start.getTime()) / 86_400_000);
  return days > 0 ? days : couple.years * 365;
}
