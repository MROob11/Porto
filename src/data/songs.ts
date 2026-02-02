export interface LyricLine {
  time: number;
  text: string;
}

export interface Song {
  title: string;
  artist: string;
  cover: string;
  audio: string;
  lyrics?: LyricLine[];
}

export const songs: Song[] = [
  {
    title: 'Someone Like You',
    artist: 'Adele',
    cover: '/music/foto/2.jpg',
    audio: '/music/music/2.mp3',
    lyrics: [
      // Intro piano cukup panjang, vokal baru masuk di detik ~14
      { time: 14.25, text: "I heard that you're settled down" },
      { time: 21.45, text: "That you found a girl and you're married now" },
      { time: 30.05, text: "I heard that your dreams came true" },
      { time: 35.75, text: "Guess she gave you things I didn't give to you" },
      { time: 43.35, text: "Old friend, why are you so shy?" },
      { time: 49.65, text: "Ain't like you to hold back or hide from the light" },
      
      // Chorus 1
      { time: 57.45, text: "I hate to turn up out of the blue, uninvited" },
      { time: 60.95, text: "But I couldn't stay away, I couldn't fight it" },
      { time: 64.55, text: "I had hoped you'd see my face" },
      { time: 65.90, text: "And that you'd be reminded that for me it isn't over" },
      
      // Reff
      { time: 73.90, text: "Never mind, I'll find someone like you" },
      { time: 79.50, text: "I wish nothing but the best for you two" },
      { time: 86.80, text: "Don't forget me, I beg" },
      { time: 89.90, text: "I remember you said" },
      { time: 93.50, text: "Sometimes it lasts in love" },
      { time: 96.50, text: "But sometimes it hurts instead" },
      { time: 100.50, text: "Sometimes it lasts in love" },
      { time: 103.50, text: "But sometimes it hurts instead" },
      
      // Verse 2
      { time: 111.00, text: "You know how the time flies" },
      { time: 116.80, text: "Only yesterday was the time of our lives" },
      { time: 123.90, text: "We were born and raised in a summer haze" },
      { time: 130.50, text: "Bound by the surprise of our glory days" },
      
      // Chorus 2
      { time: 139.00, text: "I hate to turn up out of the blue, uninvited" },
      { time: 142.50, text: "But I couldn't stay away, I couldn't fight it" },
      { time: 145.50, text: "I had hoped you'd see my face" },
      { time: 146.90, text: "And that you'd be reminded that for me it isn't over" },
      
      // Reff 2
      { time: 157.00, text: "Never mind, I'll find someone like you" },
      { time: 162.50, text: "I wish nothing but the best for you two" },
      { time: 169.80, text: "Don't forget me, I beg" },
      { time: 172.90, text: "I remember you said" },
      { time: 176.50, text: "Sometimes it lasts in love" },
      { time: 179.50, text: "But sometimes it hurts instead" },
      
      // Bridge
      { time: 185.30, text: "Nothing compares, no worries or cares" },
      { time: 188.60, text: "Regrets and mistakes, they're memories made" },
      { time: 191.80, text: "Who would have known how bittersweet this would taste?" },
      
      // Reff Akhir
      { time: 203.90, text: "Never mind, I'll find someone like you" },
      { time: 209.50, text: "I wish nothing but the best for you two" },
      { time: 216.80, text: "Don't forget me, I beg" },
      { time: 220.90, text: "I remember you said" },
      { time: 224.50, text: "Sometimes it lasts in love" },
      { time: 227.50, text: "But sometimes it hurts instead" },
      
      // Outro Reff
      { time: 232.50, text: "Never mind, I'll find someone like you" },
      { time: 238.50, text: "I wish nothing but the best for you two" },
      { time: 245.80, text: "Don't forget me, I beg" },
      { time: 248.90, text: "I remember you said" },
      { time: 252.50, text: "Sometimes it lasts in love" },
      { time: 255.00, text: "But sometimes it hurts instead" },
      { time: 260.00, text: "Sometimes it lasts in love" },
      { time: 262.40, text: "But sometimes it hurts instead" },
    ],
  },
  {
    title: 'Don\'t You Remember',
    artist: 'Adele',
    cover: '/music/foto/3.png',
    audio: '/music/music/3.mp3',
    lyrics: [
      // Intro gitar ~14 detik (Layar kosong/Instrumental)
      
      // Verse 1
      { time: 18.00, text: "When will I see you again?" },
      { time: 25.00, text: "You left with no goodbye, not a single word was said" },
      { time: 34.00, text: "No final kiss to seal any sins" },
      { time: 42.00, text: "I had no idea of the state we were in" },
      
      // Pre-Chorus
      { time: 49.00, text: "I know I have a fickle heart and a bitterness" },
      { time: 55.00, text: "And a wandering eye and a heaviness in my head" },
      
      // Chorus
      { time: 62.00, text: "But don't you remember?" },
      { time: 71.00, text: "Don't you remember" },
      { time: 78.00, text: "The reason you loved me before?" },
      { time: 86.00, text: "Baby, please remember me once more" },
      
      // Verse 2
      { time: 97.00, text: "When was the last time that you thought of me?" },
      { time: 104.30, text: "Or have you completely erased me from your memory?" },
      { time: 113.10, text: "I often think about where I went wrong" },
      { time: 121.50, text: "The more I do, the less I know" },
      
      // Pre-Chorus 2
      { time: 129.50, text: "But I know I have a fickle heart and a bitterness" },
      { time: 134.50, text: "And a wandering eye and a heaviness in my head" },
      
      // Chorus 2
      { time: 141.50, text: "But don't you remember?" },
      { time: 150.00, text: "Don't you remember" },
      { time: 157.00, text: "The reason you loved me before?" },
      { time: 165.30, text: "Baby, please remember me once more" },
      
      // Bridge (Bagian nada tinggi/slow)
      { time: 176.00, text: "I gave you the space so you could breathe" },
      { time: 179.58, text: "I kept my distance so you would be free" },
      { time: 184.58, text: "In hope that you'd find the missing piece" },
      { time: 188.57, text: "To bring you back to me" },
      
      // Chorus Akhir (High Note)
      { time: 193.00, text: "Why don't you remember?" },
      { time: 202.50, text: "Don't you remember" },
      { time: 209.50, text: "The reason you loved me before?" },
      { time: 218.00, text: "Baby, please remember me once more" },
      
      // Outro
      { time: 228.50, text: "When will I see you again?" }
    ]
  },
  {
    title: 'It Will Rain',
    artist: 'Bruno Mars',
    cover: '/music/foto/4.jpg',
    audio: '/music/music/4.mp3',
    lyrics: [
      // Intro instrumental ~4 detik
      { time: 3.90, text: "If you ever leave me, baby" },
      { time: 10.10, text: "Leave some morphine at my door" },
      { time: 15.90, text: "'Cause it would take a whole lot of medication" },
      { time: 22.20, text: "To realize what we used to have" },
      { time: 24.80, text: "We don't have it anymore" },
      
      // Verse 1 Lanjutan
      { time: 29.10, text: "There's no religion that could save me" },
      { time: 35.10, text: "No matter how long my knees are on the floor, oh" },
      { time: 41.40, text: "So keep in mind all the sacrifices I'm makin'" },
      { time: 47.60, text: "To keep you by my side" },
      { time: 50.30, text: "And keep you from walkin' out the door" },
      
      // Chorus 1
      { time: 53.90, text: "'Cause there'll be no sunlight if I lose you, baby" },
      { time: 60.60, text: "There'll be no clear skies if I lose you, baby" },
      { time: 67.00, text: "Just like the clouds, my eyes will do the same" },
      { time: 71.70, text: "If you walk away, every day it'll rain, rain, rain" },
      
      // Interlude "Ooh ooh"
      { time: 83.00, text: "Ooh, ooh" },

      // Verse 2
      { time: 96.30, text: "I'll never be your mother's favorite" },
      { time: 101.50, text: "Your daddy can't even look me in the eye" },
      { time: 107.10, text: "Ooh, if I was in their shoes, I'd be doing the same thing" },
      { time: 114.70, text: "Sayin', 'There goes my little girl, walking with that troublesome guy'" },
      { time: 121.00, text: "But they're just afraid of somethin' they can't understand" },
      { time: 125.70, text: "Ooh, but, little darlin', watch me change their minds" },
      { time: 133.00, text: "Yeah, for you, I'll try, I'll try, I'll try, I'll try" },
      
      // Pre-Chorus
      { time: 139.70, text: "And pick up these broken pieces 'til I'm bleedin' if that'll make it right" },
      
      // Chorus 2
      { time: 146.70, text: "'Cause there'll be no sunlight if I lose you, baby" },
      { time: 153.30, text: "There'll be no clear skies if I lose you, baby" },
      { time: 159.80, text: "And just like the clouds, my eyes will do the same" },
      { time: 164.30, text: "If you walk away, every day it'll rain, rain, rain" },
      
      // Interlude Vocal
      { time: 175.00, text: "Ooh, ooh" },

      // Bridge (Bagian Emosional)
      { time: 186.80, text: "Oh, don't you say (don't you say) goodbye (goodbye)" },
      { time: 195.20, text: "Don't you say (don't you say) goodbye (goodbye)" },
      { time: 200.50, text: "I'll pick up these broken pieces 'til I'm bleedin' if that'll make it right" },
      
      // Chorus Akhir
      { time: 207.80, text: "'Cause there'll be no sunlight if I lose you, baby" },
      { time: 214.40, text: "And there'll be no clear skies if I lose you, baby" },
      { time: 220.80, text: "And just like the clouds, my eyes will do the same" },
      { time: 225.90, text: "If you walk away, every day it'll rain, rain, rain" },
      
      // Outro
      { time: 236.50, text: "Ooh, ooh" },
    ],
  },
  {
    title: 'The Man Who Can\'t Be Moved',
    artist: 'The Script',
    cover: '/music/foto/5.jpeg',
    audio: '/music/music/5.mp3',
    lyrics: [
      // Intro Gitar ~17 detik
     
      // Verse 1
      { time: 9.10, text: "Going back to the corner where I first saw you" },
      { time: 13.70, text: "Gonna camp in my sleeping bag, I'm not gonna move" },
      { time: 18.40, text: "Got some words on cardboard, got your picture in my hand" },
      { time: 23.60, text: "Saying, 'If you see this girl, can you tell her where I am?'" },
      
      // Pre-Chorus
      { time: 28.00, text: "Some try to hand me money, they don't understand" },
      { time: 33.00, text: "I'm not broke, I'm just a broken hearted man" },
      { time: 37.50, text: "I know it makes no sense but what else can I do?" },
      { time: 43.10, text: "How can I move on when I'm still in love with you?" },
      
      // Chorus
      { time: 47.20, text: "'Cause if one day you wake up and find that you're missing me" },
      { time: 52.00, text: "And your heart starts to wonder where on this Earth I could be" },
      { time: 56.80, text: "Thinkin' maybe you'll come back here to the place that we'd meet" },
      { time: 61.80, text: "And you'll see me waiting for you on the corner of the street" },
      
      // Post-Chorus
      { time: 66.50, text: "So I'm not moving, I'm not moving" },
      
      // Verse 2
      { time: 87.20, text: "Policeman says, 'Son, you can't stay here'" },
      { time: 90.70, text: "I said, 'There's someone I'm waiting for if it's a day, a month, a year'" },
      { time: 95.20, text: "Gotta stand my ground even if it rains or snows" },
      { time: 100.90, text: "If she changes her mind, this is the first place she will go" },
      
      // Chorus 2
      { time: 104.50, text: "'Cause if one day you wake up and find that you're missing me" },
      { time: 110.00, text: "And your heart starts to wonder where on this Earth I could be" },
      { time: 114.50, text: "Thinkin' maybe you'll come back here to the place that we'd meet" },
      { time: 119.30, text: "And you'll see me waiting for you on the corner of the street" },
      
      // Post-Chorus 2
      { time: 123.80, text: "So I'm not moving, I'm not moving" },
      { time: 133.00, text: "I'm not moving, I'm not moving" },
      
      // Bridge
      { time: 144.40, text: "People talk about the guy that's waiting on a girl" },
      { time: 153.90, text: "There are no holes in his shoes but a big hole in his world" },
      { time: 163.00, text: "Maybe I'll get famous as the man who can't be moved" },
      { time: 167.40, text: "Maybe you won't mean to, but you'll see me on the news" },
      { time: 172.00, text: "And you'll come running to the corner" },
      { time: 175.80, text: "'Cause you'll know it's just for you" },
      { time: 179.20, text: "I'm the man who can't be moved" },
      { time: 183.95, text: "I'm the man who can't be moved" },
      
      // Chorus 3
      { time: 186.70, text: "'Cause if one day you wake up and find that you're missing me" },
      { time: 191.20, text: "And your heart starts to wonder where on this Earth I could be" },
      { time: 195.70, text: "Thinkin' maybe you'll come back here to the place that we'd meet" },
      { time: 200.20, text: "And you'll see me waiting for you on the corner of the street" },
      
      // Outro (Chorus Variation)
      { time: 204.70, text: "'Cause if one day you wake up and find that you're missing me" },
      { time: 210.50, text: "(I'm not moving) And your heart starts to wonder where on this Earth I could be" },
      { time: 215.70, text: "(I'm not moving) Thinkin' maybe you'll come back here to the place that we'd meet" },
      { time: 220.20, text: "(I'm not moving) And you'll see me waiting for you on the corner of the street" },
      
      // Ending
      { time: 225.20, text: "Going back to the corner where I first saw you" },
      { time: 230.00, text: "Gonna camp in my sleeping bag, I'm not gonna move" }
    ],
  },
  {
    title: 'Last Night On Earth',
    artist: 'Green Day',
    cover: '/music/foto/6.jpeg',
    audio: '/music/music/6.mp3',
    lyrics: [
      // Intro Piano ~17 detik
      
      // Verse 1
      { time: 16.20, text: "I text a postcard sent to you" },
      { time: 20.10, text: "Did it go through?" },
      { time: 24.40, text: "Sendin' all my love to you" },
      { time: 32.20, text: "You are the moonlight of my life" },
      { time: 36.10, text: "Every night" },
      { time: 40.15, text: "Givin' all my love to you" },
      
      // Chorus 1
      { time: 48.00, text: "My beatin' heart belongs to you" },
      { time: 56.00, text: "I walked for miles 'til I found you" },
      { time: 64.00, text: "I'm here to honour you" },
      { time: 67.30, text: "If I lose everything in the fire" },
      { time: 73.00, text: "I'm sendin' all my love to you" },
      
      // Verse 2
      { time: 92.00, text: "With every breath that I am worth" },
      { time: 96.50, text: "Here on Earth" },
      { time: 100.20, text: "I'm sendin' all my love to you" },
      { time: 108.00, text: "So if you dare to second-guess" },
      { time: 112.00, text: "You can rest" },
      { time: 116.00, text: "Assured that all my love's for you" },
      
      // Chorus 2
      { time: 124.00, text: "My beatin' heart belongs to you" },
      { time: 132.00, text: "I walked for miles 'til I found you" },
      { time: 140.00, text: "I'm here to honour you" },
      { time: 143.50, text: "If I lose everything in the fire" },
      { time: 149.00, text: "I'm sendin' all my love to you" },
      
      // Guitar Solo (Instrumental Break ~35 detik)
      // Lirik akan tetap di baris terakhir sampai vokal masuk lagi di menit 3:00
      
      // Chorus 3
      { time: 184.00, text: "My beatin' heart belongs to you" },
      { time: 192.00, text: "I walked for miles 'til I found you" },
      { time: 200.00, text: "I'm here to honour you" },
      { time: 203.50, text: "If I lose everything in the fire" },
      
      // Outro
      { time: 209.00, text: "Did I ever make it through?" }
    ],
  },
  {
    title: 'I Don\'t Love You',
    artist: 'My Chemical Romance',
    cover: '/music/foto/7.jpg',
    audio: '/music/music/7.mp3',
    lyrics: [
      // Intro Gitar ~26 detik
      
      // Verse 1
      { time: 26.00, text: "Well, when you go" },
      { time: 31.30, text: "Don't ever think I'll make you try to stay" },
      { time: 37.80, text: "And maybe when you get back" },
      { time: 40.40, text: "I'll be off to find another way" },
      
      // Pre-Chorus
      { time: 48.10, text: "And after all this time that you still owe" },
      { time: 54.00, text: "You're still a good-for-nothing, I don't know" },
      { time: 59.90, text: "So take your gloves and get out" },
      { time: 63.70, text: "Better get out while you can" },
      
      // Chorus 1
      { time: 73.70, text: "When you go, and would you even turn to say" },
      { time: 84.00, text: "\"I don't love you like I did yesterday\"?" },
      
      // Verse 2
      { time: 93.60, text: "Sometimes I cry so hard from pleading" },
      { time: 99.20, text: "So sick and tired of all the needless beating" },
      { time: 105.50, text: "But baby, when they knock you down and out" },
      { time: 110.50, text: "Is where you oughta stay" },
      
      // Pre-Chorus 2
      { time: 116.00, text: "And after all the blood that you still owe" },
      { time: 122.00, text: "Another dollar's just another blow" },
      { time: 128.00, text: "So fix your eyes and get up" },
      { time: 131.40, text: "Better get up while you can" },
      
      // Bridge / Solo Build up
      { time: 136.50, text: "Whoa, whoa, whoa-whoa, whoa-whoa" },
      
      // Chorus 2
      { time: 141.00, text: "When you go, and would you even turn to say" },
      { time: 151.15, text: "\"I don't love you like I did yesterday\"?" },
      
      // Guitar Solo & Build Up
      { time: 160.35, text: "Well, come on, come on" },
      
      // Final Chorus (Explosive)
      { time: 186.00, text: "When you go, would you have the guts to say" },
      { time: 196.85, text: "\"I don't love you like I loved you yesterday\"?" },
      
      // Outro
      { time: 206.40, text: "I don't love you like I loved you yesterday" },
      { time: 219.10, text: "I don't love you like I loved you yesterday" }
    ],
  },
  {
    title: 'Jar Of Hearts',
    artist: 'Christina Perri',
    cover: '/music/foto/8.jpeg',
    audio: '/music/music/8.mp3',
    lyrics: [
      // Verse 1
      { time: 1.00, text: "I know I can't take one more step towards you" },
      { time: 7.30, text: "'Cause all that's waiting is regret" },
      { time: 14.20, text: "Don't you know I'm not your ghost anymore" },
      { time: 20.50, text: "You lost the love I loved the most" },
      
      // Pre-Chorus
      { time: 27.00, text: "I learned to live half alive" },
      { time: 33.20, text: "Now you want me one more time" },
      
      // Chorus 1
      { time: 39.50, text: "Who do you think you are?" },
      { time: 43.00, text: "Runnin' 'round leaving scars" },
      { time: 46.20, text: "Collecting your jar of hearts" },
      { time: 50.30, text: "Tearing love apart" },
      { time: 53.00, text: "You're gonna catch a cold" },
      { time: 56.00, text: "From the ice inside your soul" },
      { time: 59.00, text: "So don't come back for me" },
      { time: 62.20, text: "Who do you think you are?" },
      
      // Verse 2
      { time: 68.50, text: "I hear you're asking all around" },
      { time: 74.80, text: "If I am anywhere to be found" },
      { time: 81.40, text: "But I have grown too strong" },
      { time: 87.40, text: "To ever fall back in your arms" },
      
      // Pre-Chorus 2
      { time: 94.00, text: "I've learned to live half alive" },
      { time: 100.00, text: "Now you want me one more time" },
      
      // Chorus 2
      { time: 108.00, text: "Who do you think you are?" },
      { time: 111.00, text: "Runnin' 'round leaving scars" },
      { time: 114.00, text: "Collecting your jar of hearts" },
      { time: 117.00, text: "Tearing love apart" },
      { time: 120.00, text: "You're gonna catch a cold" },
      { time: 123.00, text: "From the ice inside your soul" },
      { time: 126.00, text: "So don't come back for me" },
      { time: 129.90, text: "Who do you think you are?" },
      
      // Bridge
      { time: 135.30, text: "It took so long just to feel alright" },
      { time: 141.00, text: "Remember how to put back the light in my eyes" },
      { time: 147.60, text: "I wish I had missed the first time that we kissed" },
      { time: 154.00, text: "'Cause you broke all your promises" },
      { time: 160.00, text: "And now you're back" },
      { time: 162.50, text: "You don't get to get me back" },
      
      // Chorus 3 (High Note)
      { time: 168.50, text: "Who do you think you are?" },
      { time: 171.50, text: "Runnin' 'round leaving scars" },
      { time: 174.50, text: "Collecting your jar of hearts" },
      { time: 177.50, text: "Tearing love apart" },
      { time: 181.00, text: "You're gonna catch a cold" },
      { time: 184.00, text: "From the ice inside your soul" },
      { time: 188.00, text: "So don't come back for me" },
      { time: 191.00, text: "Don't come back at all" },
      
      // Chorus 4 (Low Note)
      { time: 193.90, text: "Who do you think you are?" },
      { time: 197.00, text: "Runnin' 'round leaving scars" },
      { time: 200.00, text: "Collecting your jar of hearts" },
      { time: 204.00, text: "Tearing love apart" },
      { time: 206.50, text: "You're gonna catch a cold" },
      { time: 210.00, text: "From the ice inside your soul" },
      { time: 213.50, text: "So don't come back for me" },
      { time: 217.00, text: "Don't come back at all" },

      // Outro
      { time: 221.50, text: "Who do you think you are?" },
      { time: 227.80, text: "Who do you think you are?" },
      { time: 234.00, text: "Who do you think you are?" }
    ],
  },
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    cover: '/music/foto/9.jpeg',
    audio: '/music/music/9.mp3',
    lyrics: [
      // Intro Gitar Singkat ~20 detik
      
      // Verse 1
      { time: 21.00, text: "I found a love for me" },
      { time: 28.20, text: "Darling, just dive right in and follow my lead" },
      { time: 36.00, text: "Well, I found a girl, beautiful and sweet" },
      { time: 43.20, text: "Oh, I never knew you were the someone waitin' for me" },
      
      // Pre-Chorus
      { time: 50.00, text: "'Cause we were just kids when we fell in love" },
      { time: 54.90, text: "Not knowin' what it was" },
      { time: 58.20, text: "I will not give you up this time" },
      { time: 66.00, text: "Darling, just kiss me slow" },
      { time: 69.90, text: "Your heart is all I own" },
      { time: 73.50, text: "And in your eyes, you're holdin' mine" },
      
      // Chorus 1
      { time: 80.50, text: "Baby, I'm dancin' in the dark" },
      { time: 88.00, text: "With you between my arms" },
      { time: 91.20, text: "Barefoot on the grass" },
      { time: 95.80, text: "Listenin' to our favourite song" },
      { time: 99.00, text: "When you said you looked a mess" },
      { time: 102.00, text: "I whispered underneath my breath" },
      { time: 105.50, text: "But you heard it" },
      { time: 109.00, text: "Darling, you look perfect tonight" },
      
      // Verse 2
      { time: 119.00, text: "I found a woman" },
      { time: 123.00, text: "Stronger than anyone I know" },
      { time: 127.00, text: "She shares my dreams" },
      { time: 130.50, text: "I hope that someday I'll share her home" },
      { time: 134.50, text: "I found a love" },
      { time: 138.20, text: "To carry more than just my secrets" },
      { time: 142.00, text: "Carry love, to carry children" },
      { time: 146.00, text: "Of our own" },
      
      // Pre-Chorus 2
      { time: 148.50, text: "We are still kids and we're so in love" },
      { time: 153.20, text: "Fightin' against all odds" },
      { time: 157.50, text: "I know we'll be alright this time" },
      { time: 164.70, text: "Darling, just hold my hand" },
      { time: 168.50, text: "Be my girl, I'll be your man" },
      { time: 172.00, text: "I see my future in your eyes" },
      
      // Chorus 2
      { time: 179.00, text: "Baby, I'm dancin' in the dark" },
      { time: 186.20, text: "With you between my arms" },
      { time: 190.20, text: "Barefoot on the grass" },
      { time: 194.00, text: "Listenin' to our favourite song" },
      { time: 197.35, text: "When I saw you in that dress" },
      { time: 200.70, text: "Looking so beautiful" },
      { time: 203.70, text: "I don't deserve this" },
      { time: 206.70, text: "Darling, you look perfect tonight" },
      
      // Solo / Interlude
      { time: 217.60, text: "Mm, sing with me, yeah" },
      
      // Chorus 3
      { time: 224.30, text: "Baby, I'm dancin' in the dark" },
      { time: 231.70, text: "With you between my arms" },
      { time: 236.00, text: "Barefoot on the grass" },
      { time: 239.60, text: "Listenin' to our favourite song" },
      { time: 243.00, text: "I have faith in what I see" },
      { time: 246.00, text: "Now I know I have met an angel in person" },
      { time: 253.00, text: "And she looks perfect" },
      { time: 256.00, text: "Oh, I don't deserve this" },
      
      // Outro
      { time: 260.50, text: "You look perfect tonight" }
    ],
  },
  {
    title: 'December',
    artist: 'Neck Deep',
    cover: '/music/foto/10.jpeg',
    audio: '/music/music/10.mp3',
    lyrics: [
      // Intro Gitar ~4 detik
      
      // Verse 1
      { time: 4.60, text: "Stumbled 'round the block a thousand times" },
      { time: 8.00, text: "You missed every call that I had tried" },
      { time: 11.30, text: "So now I'm giving up" },
      { time: 12.60, text: "A heartbreak in mid-December" },
      { time: 16.00, text: "You don't give a fuck" },
      { time: 17.60, text: "You'd never remember me" },
      { time: 20.00, text: "While you're pulling on his jeans" },
      { time: 23.40, text: "Getting lost in the big city" },
      { time: 27.70, text: "I was looking out our window" },
      { time: 31.00, text: "Watching all the cars go" },
      { time: 33.70, text: "Wondering if I'll see Chicago" },
      { time: 37.60, text: "Or a sunset on the west coast" },
      { time: 40.90, text: "Or will I die in the cold?" },
      { time: 44.00, text: "Feeling blue and alone" },
      { time: 46.60, text: "I wonder if you'll ever hear this song on your stereo" },
      
      // Chorus 1
      { time: 52.70, text: "I hope you get your ballroom floor" },
      { time: 56.80, text: "Your perfect house with rose red doors" },
      { time: 60.00, text: "I'm the last thing you'd remember" },
      { time: 63.00, text: "It's been a long, lonely December" },
      { time: 66.70, text: "I wish I'd known that less is more" },
      { time: 69.00, text: "But I was passed out on the floor" },
      { time: 73.00, text: "And that's the last thing I remember" },
      { time: 76.00, text: "It's been a long, lonely December" },
      
      // Verse 2
      { time: 79.00, text: "Cast me aside to show yourself in a better light" },
      { time: 84.20, text: "I came out grieving, barely breathing, and you came out alright" },
      { time: 91.00, text: "But I'm sure you'll take his hand" },
      { time: 94.30, text: "I hope he's better than I ever could've been" },
      { time: 97.70, text: "My mistakes were not intentions" },
      { time: 101.40, text: "This is a list of my confessions I couldn't say" },
      { time: 114.00, text: "Pain is never permanent, but tonight it's killing me" },
      
      // Chorus 2
      { time: 119.30, text: "I hope you get your ballroom floor" },
      { time: 123.00, text: "Your perfect house with rose red doors" },
      { time: 125.80, text: "I'm the last thing you'd remember" },
      { time: 129.50, text: "It's been a long, lonely December" },
      { time: 132.60, text: "I wish I'd known that less is more" },
      { time: 135.50, text: "But I was passed out on the floor" },
      { time: 139.00, text: "And that's the last thing I remember" },
      { time: 142.50, text: "It's been a long, lonely December" },
      
      // Bridge (Slow)
      { time: 159.30, text: "I miss your face, you're in my head" },
      { time: 162.00, text: "There's so many things that I should've said" },
      { time: 165.30, text: "A year of suffering, a lesson learned" },
      
      // Bridge (Build Up/Louder)
      { time: 172.00, text: "I miss your face, you're in my head" },
      { time: 175.40, text: "There's so many things that I should've said" },
      { time: 178.50, text: "A year of suffering, a lesson learned" },
      
      // Chorus Akhir
      { time: 185.50, text: "I hope you get your ballroom floor" },
      { time: 188.50, text: "Your perfect house with rose red doors" },
      { time: 191.80, text: "I'm the last thing you'd remember" },
      { time: 195.50, text: "It's been a long, lonely December" },
      { time: 198.50, text: "I wish I'd known that less is more" },
      { time: 201.50, text: "But I was passed out on the floor" },
      { time: 205.00, text: "And that's the last thing I remember" },
      { time: 208.80, text: "It's been a long, lonely December" }
    ],
  },
  {
    title: 'Tarot',
    artist: '.Feast',
    cover: '/music/foto/11.jpeg',
    audio: '/music/music/11.mp3',
    lyrics: [
      // Intro Instrumental ~33 detik
      
      // Verse 1
      { time: 33.00, text: "Nama yang sama bertahan" },
      { time: 37.40, text: "Dalam ruangan hening" },
      { time: 41.10, text: "Tanpa suara bertahan" },
      { time: 45.20, text: "Tak bergeming" },
      { time: 49.40, text: "Terlalu lama bercanda" },
      { time: 54.10, text: "Kita tak terbiasa" },
      { time: 57.80, text: "Dengan celaka yang nyata" },
      { time: 62.40, text: "Diam tak berdaya" },
      
      // Chorus 1
      { time: 66.60, text: "Namun aku bingung kenapa ku tak pergi" },
      { time: 71.60, text: "Aku bingung kalian masih di sini" },
      { time: 75.80, text: "Apa mungkin karena terlalu lama" },
      { time: 79.90, text: "Apa benar tuk berbagi derita" },
      { time: 84.50, text: "Mungkin nanti semua justru memburuk" },
      { time: 88.50, text: "Hati-hati namun terjatuh lagi" },
      { time: 92.80, text: "Tapi luka adalah niscaya" },
      { time: 96.50, text: "Kutanggung denganmu selama ku mampu" },
      { time: 103.90, text: "Selama ku mampu" },
      
      // Verse 2 / Bridge
      { time: 117.70, text: "Di kehidupan kedua (di kesempatan kedua)" },
      { time: 120.50, text: "S'moga kau tak terlalu keras kepala" },
      { time: 125.30, text: "Atau mungkin ini bukan yang pertama (ini bukan yang pertama)" },
      { time: 129.50, text: "Dan kita diberi kesempatan berubah" },
      { time: 134.00, text: "Kuyakin nyawa kita bertautan" },
      { time: 138.50, text: "Khatam berbagai cobaan" },
      { time: 142.00, text: "Selalu menertawakan ramalan bintang kartu tarot" },
      { time: 147.10, text: "Orang pintar pembaca nasib" },
      
      // Chorus 2
      { time: 150.30, text: "Namun aku bingung kenapa ku tak pergi" },
      { time: 155.00, text: "Aku bingung kalian masih di sini" },
      { time: 160.00, text: "Apa mungkin karena terlalu lama" },
      { time: 164.00, text: "Apa benar tuk berbagi derita" },
      { time: 168.00, text: "Mungkin nanti semua justru memburuk" },
      { time: 172.00, text: "Hati-hati namun terjatuh lagi" },
      { time: 176.00, text: "Tapi luka adalah niscaya" },
      { time: 180.00, text: "Kutanggung denganmu selama ku mampu" },
      { time: 183.00, text: "Selama ku mampu" },
      { time: 187.50, text: "Selama ku mampu" },
      
      // Outro
      { time: 192.00, text: "Selalu menertawakan ramalan bintang kartu tarot" },
      { time: 197.20, text: "Orang pintar pembaca nasib namun" },
      { time: 202.80, text: "Padamu kupercaya" },
      { time: 211.60, text: "Tak masuk logika" },
      { time: 219.00, text: "Padamu kupercaya" },
      { time: 228.00, text: "Tak masuk logika (tak masuk logika)" },
      { time: 236.00, text: "Padamu kupercaya (padamu kupercaya)" },
      { time: 244.50, text: "Tak masuk logika (tak masuk logika)" },
      { time: 252.90, text: "Padamu kupercaya (padamu kupercaya)" },
      { time: 261.30, text: "Tak masuk logika (tak masuk logika)" },
      { time: 269.70, text: "Padamu kupercaya" },
      { time: 278.10, text: "Tak masuk logika" }
    ],
  },
  {
    title: 'O, Tuan',
    artist: '.Feast',
    cover: '/music/foto/12.jpeg',
    audio: '/music/music/12.mp3',
    lyrics: [
      // Intro Piano ~33 detik
      
      // Verse 1
      { time: 33.50, text: "Oh jelas aku tahu bunga akan layu" },
      { time: 41.05, text: "Rumput kian mengering daun kan menguning" },
      { time: 49.20, text: "Kau tahu menurutku waktu adalah" },
      { time: 54.50, text: "Kutukan ancaman bualan" },
      
      // Pre-Chorus
      { time: 63.00, text: "Dan satu per satu orang sekitarku" },
      { time: 71.00, text: "Mulai ditinggalkan oh ini peringatan" },
      
      // Chorus 1
      { time: 78.00, text: "Untukku o Tuan wahai Kematian" },
      { time: 85.00, text: "Ku tak bisa melawan jamah perhentian" },
      { time: 92.00, text: "Berjanji kuikhlaskan dengan rela" },
      { time: 98.20, text: "Namun jangan hari ini" },
      
      // Verse 2 (Jeda cukup panjang sebelum masuk verse 2)
      { time: 106.00, text: "Melihatmu masuk ke dalam ruang operasi" },
      { time: 113.00, text: "Berdoa semalam suntuk di kamar yang hening" },
      { time: 121.00, text: "Tanpa metafora dan analogi" },
      { time: 127.70, text: "Kiasan berbelit diksi tanpa berbungkus fiksi" },
      { time: 135.00, text: "Aku takut" },
      
      // Chorus 2
      { time: 140.00, text: "Untuknya o Tuan wahai Kematian" },
      { time: 147.80, text: "Ku tak bisa melawan jamah perhentian" },
      { time: 154.00, text: "Berjanji kuikhlaskan dengan rela" },
      { time: 161.00, text: "Namun jangan hari ini" },
      
      // Bridge (Membangun emosi)
      { time: 179.00, text: "Kurelakan o Tuan" },
      { time: 186.00, text: "Kurelakan namun jangan hari ini" },
      { time: 194.40, text: "Kurelakan o Tuan" },
      { time: 201.00, text: "Kurelakan namun jangan hari ini" },
      { time: 209.00, text: "Kurelakan o Tuan" },
      { time: 216.00, text: "Kurelakan namun jangan hari ini" },
      
      // Outro
      { time: 227.00, text: "Namun jangan hari ini" }
    ],
  },
  {
    title: 'Almost Is Never Enough',
    artist: 'Ariana Grande',
    cover: '/music/foto/13.png',
    audio: '/music/music/13.mp3',
    lyrics: [
      // Intro Piano ~13 detik
      
      // Verse 1 (Ariana)
      { time: 13.20, text: "I'd like to say we gave it a try" },
      { time: 18.50, text: "I'd like to blame it all on life" },
      { time: 24.50, text: "Maybe we just weren't right" },
      { time: 28.50, text: "But that's a lie, that's a lie" },
      
      // Pre-Chorus
      { time: 34.50, text: "And we can deny it as much as we want" },
      { time: 40.50, text: "But in time our feelings will show" },
      { time: 46.50, text: "'Cause sooner or later we'll wonder why we gave up" },
      { time: 52.50, text: "The truth is everyone knows, oh" },
      
      // Chorus 1
      { time: 61.50, text: "Almost, almost is never enough" },
      { time: 67.20, text: "So close to being in love" },
      { time: 72.50, text: "If I would have known that you wanted me" },
      { time: 77.50, text: "The way I wanted you" },
      { time: 82.00, text: "Then maybe we wouldn't be two worlds apart" },
      { time: 87.50, text: "But right here in each other's arms" },
      { time: 92.50, text: "And we almost, we almost knew what love was" },
      { time: 102.50, text: "But almost is never enough" },
      
      // Verse 2 (Nathan Sykes)
      { time: 107.50, text: "If I could change the world overnight" },
      { time: 112.00, text: "There'd be no such thing as goodbye" },
      { time: 117.90, text: "You'd be standing right where you were" },
      { time: 123.00, text: "And we'd get the chance we deserve, oh" },
      
      // Pre-Chorus 2
      { time: 128.50, text: "Try to deny it as much as you want" },
      { time: 134.00, text: "But in time our feelings will show" },
      { time: 139.50, text: "'Cause sooner or later we'll wonder why we gave up" },
      { time: 146.60, text: "The truth is everyone knows" },
      
      // Chorus 2
      { time: 153.40, text: "Almost, almost is never enough" },
      { time: 161.00, text: "So close to being in love" },
      { time: 166.50, text: "If I would have known that you wanted me" },
      { time: 173.00, text: "The way I wanted you, oh" },
      { time: 177.00, text: "Then maybe we wouldn't be two worlds apart" },
      { time: 182.50, text: "But right here in each other's arms" },
      { time: 186.10, text: "And we almost, we almost knew what love was" },
      { time: 198.50, text: "But almost is never enough" },
      
      // Bridge / Ad-libs
      { time: 215.00, text: "Huh (huh-huh), huh, baby (mm)" },
      { time: 220.00, text: "You know, you know, baby" },
      { time: 225.00, text: "Almost, (baby, baby) is never enough, baby (baby)" },
      { time: 230.00, text: "You know, (hm-hm) hey" },
    ],
  }
];
