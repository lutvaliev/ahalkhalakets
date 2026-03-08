# Arman Tsarukyan — Fighter Website

A cinematic React fan site for UFC lightweight contender Arman Tsarukyan.

## Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── App.jsx                   # Root app, routing, cursor
├── data.js                   # All fights, news, merch, timeline data
├── hooks.js                  # useReveal, useCounter, useSmoke
├── styles/
│   └── global.css            # Global variables, animations, shared styles
└── components/
    ├── ui/
    │   ├── Nav.jsx / Nav.css          # Fixed navigation
    │   ├── Shared.jsx                 # Reveal, ArmFlag, PageHero, SiteFooter, StatCard, FightRow, QuoteSection
    │   └── SVGs.jsx                   # BatSVG, KhachkarSVG, ArmenianEmblem, EternitySVG
    └── pages/
        ├── HomePage.jsx / .css        # Hero, stats, about teaser, quote, recent fights
        ├── AboutPage.jsx / .css       # Bio, profile table, career timeline
        ├── FightsPage.jsx / .css      # Full 26-fight record with filter
        ├── NewsPage.jsx / .css        # News grid with featured article
        ├── GalleryPage.jsx / .css     # Photo gallery with category tabs
        ├── MerchPage.jsx / .css       # Merchandise store
        └── ContactPage.jsx / .css     # Contact info, social links, form
```

## Design

- **Fonts**: Cinzel Decorative (display) · Cinzel (UI) · Rajdhani (body)
- **Colors**: Blood red `#8b0000` · Crimson `#c0392b` · Gold `#c9a84c` on near-black
- **Effects**: Bat SVG background, animated smoke lines, custom red cursor, scroll reveal, animated stat counters, glitch on hero name hover, fight filter, hero parallax
# ahalkhalakets
