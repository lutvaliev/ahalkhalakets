import georgia from "./imgs/georgia.png";import arman1 from "./imgs/arman1.jpg";import arman2 from "./imgs/arman2.jpg";import arman3 from "./imgs/arman3.webp";import arman4 from "./imgs/arman4.webp";import arman5 from "./imgs/arman5.webp";import arman6 from "./imgs/arman6.webp";import arman7 from "./imgs/arman7.webp";import arman8 from "./imgs/arman8.webp";import arman9 from "./imgs/arman9.jpg";
import partner from "./imgs/partner.png";
import partner2 from "./imgs/partner2.svg";
import partner3 from "./imgs/partner3.png";
import partner4 from "./imgs/partner4.webp";
import partner5 from "./imgs/partner5.png";
import partner6 from "./imgs/partner6.png";
import merch1 from "./imgs/merch1.webp";
import merch2 from "./imgs/merch2.webp";
import merch3 from "./imgs/merch3.avif";
import merch4 from "./imgs/merch4.avif";
import merch5 from "./imgs/merch5.avif";

export const FIGHTS = [
  { n: 26, opp: 'Dan Hooker',     event: 'UFC Qatar · Nov 22, 2025',         res: 'W', method: 'Sumbission', round: 'R3',      org: 'ufc', link: "https://www.youtube.com/watch?v=xOIzKgZB4TU"      },
  { n: 25, opp: 'Charles Oliveira',    event: 'UFC 300 · Apr 13, 2024',         res: 'W', method: 'Decision (Unanimous)', round: 'R3 · Dominant',           org: 'ufc', link: "https://www.youtube.com/watch?v=EBbKU3F7SoA"      },
  { n: 24, opp: 'Beneil Dariush',      event: 'UFC 286 · Mar 18, 2023',         res: 'W', method: 'TKO (Punches)',         round: 'R2 · 2:44',              org: 'ufc' , link: "https://www.youtube.com/watch?v=9QZcovsNFbk"     },
  { n: 23, opp: 'Joaquim Silva', event: 'UFC Fight Night · Mar 2022',     res: 'W', method: 'Decision (Unanimous)', round: 'R3',                      org: 'ufc', link: "https://www.youtube.com/watch?v=i2a_YpBGjvk"      },
  { n: 22, opp: 'Damir Ismagulov',     event: 'UFC Fight Night · Sep 25, 2021', res: 'W', method: 'Submission (RNC)',      round: 'R1 · 4:07',              org: 'ufc', link: "https://www.youtube.com/watch?v=DqezIPB7MqY"      },
  { n: 21, opp: 'Mateusz Gamrot',      event: 'UFC Fight Night · Sep 3, 2022',  res: 'L', method: 'Decision (Split)',      round: 'R3 · Main Event',         org: 'ufc', link: "https://www.youtube.com/watch?v=m378HC3Htlw"      },
  { n: 20, opp: 'Joel Alvarez',        event: 'UFC Fight Night · Jan 2021',     res: 'W', method: 'KO (Punches)',          round: 'R1 · 4:52',              org: 'ufc', link: "https://www.youtube.com/watch?v=v6c_KMa49KM"      },
  { n: 19, opp: 'Christos Giagos',     event: 'UFC Fight Night · Sep 25, 2021', res: 'W', method: 'Submission (RNC)',      round: 'R1 · 4:07',              org: 'ufc', link: "https://www.youtube.com/watch?v=0WQVO0HsErA"      },
  { n: 18, opp: 'Matt Frevola',        event: 'UFC 249 · May 9, 2020',          res: 'W', method: 'Decision (Unanimous)', round: 'R3',                      org: 'ufc', link: "https://www.youtube.com/watch?v=bUWfehWXiJY"      },
  { n: 17, opp: 'Davi Ramos',          event: 'UFC Fight Night · Oct 2020',     res: 'W', method: 'Submission',            round: 'R1 · Triangle Choke',     org: 'ufc', link: "https://www.youtube.com/watch?v=x1ymdQpWBvA"      },
  { n: 16, opp: 'Olivier Aubin-Mercier',         event: 'UFC Fight Night · May 2021',     res: 'W', method: 'Decision (Unanimous)', round: 'R3',                      org: 'ufc', link: "https://www.youtube.com/watch?v=eHeiMt_mxfg"      },
  { n: 15, opp: 'Islam Makhachev',     event: 'UFC Fight Night · Apr 20, 2019', res: 'L', method: 'Decision (Unanimous)', round: 'R3 · UFC Debut',          org: 'ufc', link: "https://www.youtube.com/watch?v=MA5jyiEBxww"      },
  { n: 14, opp: 'Felipe Olivieri',       event: 'STRIKEBACK · 2019',              res: 'W', method: 'TKO',                  round: 'R1',                      org: 'regional' },
  { n: 13, opp: 'Junior Assuncao',       event: 'FIGHT NIGHTS · 2018',            res: 'W', method: 'Decision',             round: 'R3',                      org: 'regional' },
  { n: 12, opp: 'Haotian Wu',        event: 'FNG · 2018',                     res: 'W', method: 'Submission',            round: 'R1',                      org: 'regional' },
  { n: 11, opp: 'Takenori Sato',      event: 'FNG · 2018',                     res: 'W', method: 'KO',                   round: 'R1',                      org: 'regional' },
  { n: 10, opp: 'Kyung Pyo Kim',     event: 'FNG · 2018',                     res: 'W', method: 'TKO',                  round: 'R2',                      org: 'regional' },
  { n: 9, opp: 'Marcio Breno Rodrigues Braga',     event: 'FNG · 2017',                     res: 'W', method: 'Decision',             round: 'R3',                      org: 'regional' },
  { n:  8, opp: 'Nizamuddin Ramazanov',      event: 'FNG · 2017',                     res: 'W', method: 'Submission',            round: 'R1',                      org: 'regional' },
  { n:  7, opp: 'Gustavo Wurlitzer',        event: 'FNG · 2017',                     res: 'W', method: 'KO',                   round: 'R1',                      org: 'regional' },
  { n:  6, opp: 'Alexander Belikh',     event: 'FNG · 2016',                     res: 'W', method: 'TKO',                  round: 'R1',                      org: 'regional' },
  { n:  5, opp: 'Dmitriy Shkrabiy',    event: 'Regional · 2016',                res: 'W', method: 'Decision',             round: 'R3',                      org: 'regional' },
  { n:  4, opp: 'Alexander Merezhko',       event: 'Regional · 2016',                res: 'W', method: 'Submission',            round: 'R2',                      org: 'regional' },
  { n:  3, opp: 'Ali Khaibulaev',  event: 'Regional · 2016',                res: 'W', method: 'KO',                   round: 'R1',                      org: 'regional' },
  { n:  2, opp: 'Alexander Belikh',   event: 'Regional · 2016',                res: 'L', method: 'TKO',                  round: 'R2',                      org: 'regional' },
  { n:  1, opp: 'Shamil Olokhanov',           event: 'Regional · 2016',                res: 'W', method: 'Submission',            round: 'R1 · Pro Debut',          org: 'regional' },
];

export const NEWS = [
  { tag: 'Performance', date: 'April 2024',    headline: 'Tsarukyan Outclasses Oliveira on the World\'s Biggest Stage',              excerpt: 'On the most-watched card in UFC history, Arman delivered a masterclass — outworking and outhustling submission legend Charles Oliveira across all three rounds at UFC 300.' },
  { tag: 'Ranking',     date: 'July 2024',     headline: 'Tsarukyan Officially Reaches #1 in UFC Lightweight Rankings',               excerpt: 'Following his title fight performance, the UFC elevated Tsarukyan to the #1 spot in the lightweight rankings, cementing his place as the undisputed next challenger.' },
  { tag: 'Training',    date: 'August 2024',   headline: 'Inside Camp: Building the Perfect Fighter',                                  excerpt: 'A rare look inside Arman\'s training regimen, from the wrestling rooms of Gyumri to elite MMA facilities worldwide. How an Armenian sambo champion transformed into the most complete lightweight.' },
  { tag: 'Armenia',     date: 'September 2024',headline: 'National Hero: How Tsarukyan Became Armenia\'s Greatest MMA Export',        excerpt: 'Back home in Gyumri, billboards of The Armenian line the streets. We explore what Arman means to a proud nation with a deep fighting tradition.' },
  { tag: 'Interview',   date: 'October 2024',  headline: '"I Will Be Champion. It Is Not a Question."',                               excerpt: 'In a rare sit-down, Arman speaks with characteristic quiet conviction about the rematch, his childhood in Armenia, and what separates great fighters from legends.' },
  { tag: 'Analysis',    date: 'November 2024', headline: 'The Complete Fighter: Breaking Down Tsarukyan\'s Arsenal',                  excerpt: 'Elite wrestling, suffocating top pressure, a dangerous submission game, and world-class striking. How Arman evolved into the most complete lightweight on the UFC roster.' },
  { tag: 'Record',      date: 'March 2023',    headline: 'TKO Dariush at UFC 286: The Win That Changed Everything',                    excerpt: 'A second-round TKO of the dangerous Beneil Dariush signaled the arrival of a genuine title contender. The performance was complete, ruthless, and impossible to ignore.' },
  { tag: 'Legacy',      date: 'December 2024', headline: 'From Gyumri to World Title Contender: The Tsarukyan Story',                 excerpt: 'A long-form feature on the journey of Arman Tsarukyan — from a small city in Armenia, through national wrestling titles, to fighting for the UFC lightweight championship.' },
];

export const MERCH = [
  { sym: 'AT',   name: 'The Armenian Fight Tee',   desc: 'Premium heavyweight cotton with embossed Khachkar cross on chest. Blood red on black. Limited run.', img: merch1,price: '$45',  badge: 'Best Seller' },
  { sym: 'Tsar', name: 'Walkout Hoodie',            desc: "Replica of the iconic fight-night walkout hoodie. Armenian script on the back. Premium heavyweight fleece.", img: merch2,price: '$89'  },
  { sym: '23-3', name: 'Record Tee — 23–3',         desc: 'Minimalist design. Fight record printed large across the chest in blood red. A statement piece for true fans.', img: merch3,price: '$40',  badge: 'New'         },
  { sym: '\u2655', name: 'Armenian Champion Cap',   desc: 'Structured snapback with embroidered Armenian Eternity symbol in gold thread on black. Adjustable, one size.', img: merch4,price: '$35',  gold: true           },
  { sym: '\u2726', name: 'Training Shorts',         desc: 'Official training shorts in blood red and black. MMA cut, full stretch waistband. Worn by the man himself in camp.', img: merch5,price: '$65'  },
  { sym: '302',  name: 'Signed UFC 302 Poster',     desc: 'Official UFC 302 event poster, hand-signed by Arman Tsarukyan. Certificate of authenticity included. Numbered edition of 500.', img: merch5, price: '$199', badge: 'Limited'     },
];

export const TIMELINE = [
  { year: '1996',     title: 'Born in Akhalkalaki, Georgia',           desc: 'Born April 28, 1996 in Akhalkalaki — Georgia city, a place of iron character that would shape him profoundly.', img: georgia },
  { year: '2008',     title: 'Begins Freestyle Wrestling',         desc: 'At age 12, enters competitive wrestling, immediately showing exceptional talent and an unbreakable work ethic.', img: arman1 },
  { year: '2016',     title: 'MMA Professional Debut',            desc: 'Turns professional in MMA, winning his debut by stoppage. The beginning of an undefeated run that catches the world\'s attention.', img: arman2 },
  { year: '2018',     title: 'Signs with the UFC',                desc: 'After compiling an elite 11-1 professional record, Tsarukyan earns a UFC contract — the world stage he was destined for.', img: arman3 },
  { year: '2019',     title: 'UFC Debut vs. Makhachev',           desc: 'Debuts against Islam Makhachev. Loses a competitive decision but immediately earns respect across the entire division.', img: arman4 },
  { year: '2020',     title: 'First-Round KO vs. Joel Alvarez',   desc: 'Announces himself with a first-round KO, showcasing elite striking power to complement his world-class grappling.', img: arman5 },
  { year: '2022',     title: 'Top 10 — Loss to Gamrot',             desc: 'Cracks the top 10 in UFC lightweight rankings. Lost to Mateusz Gamrot by split decision in a war.', img: arman6 },
  { year: '2023',     title: 'TKO Dariush — UFC 286',             desc: 'In a statement performance, stops the dangerous Beneil Dariush in round two. Catapults into top 5 and title contention.', img: arman7 },
  { year: 'Apr 2024', title: 'Win over Oliveira — UFC 300',       desc: 'On the grandest card in UFC history, outpoints submission ace Charles Oliveira by unanimous decision. A performance for the ages.', img: arman8 },
  { year: '2025',     title: 'Dominates Hooker',        desc: 'Stands as the undisputed #1 contender in the UFC lightweight division. Dominated easily over Dan Hooker.', img: arman9 },
];

export const PARTNERS = [
  {
    name: "Venum",
    logo: partner,
    url: "https://venum.com"
  },
  {
    name: "LitEnergy",
    logo: partner2,
    url: "https://litenergy.com/"
  },
  {
    name: "Pari",
    logo: partner3,
    url: "https://parimatch.com"
  },
  {
    name: "Aviator",
    logo: partner4,
    url: "https://spribe.co/games/aviator"
  },
  {
    name: "Full Violence",
    logo: partner5,
    url: "https://www.fullviolence.com/"
  },
  {
    name: "Jermuk",
    logo: partner6,
    url: "http://jermukgroup.am/en/jermuk/"
  }
];