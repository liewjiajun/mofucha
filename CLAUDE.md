# mofucha

> matcha made cozy

Home-based matcha drinks business in Clementi, Singapore.

## Links

| Platform | URL |
|----------|-----|
| Order | https://take.app/mofuchasg |
| Instagram | https://instagram.com/mofuchasg |
| TikTok | https://tiktok.com/@mofuchasg |
| Website | https://mofucha.sg |
| GitHub | https://github.com/liewjiajun/mofucha |

## Menu

| Item | Price | Description | Tags |
|------|-------|-------------|------|
| Dreamy Matcha Latte | $5.90 | Creamy matcha layered over premium cow's milk | Popular, Creamy, Classic |
| Cloud Matcha Coconut | $5.90 | Fluffy matcha cream over refreshing coconut water | Refreshing, Low-calorie, Light |

## Business Info

- **Location:** Clementi, Singapore (home-based)
- **Availability:** Pre-order required
- **Domain Registrar:** Vodien

## Tech Stack

- HTML5 / CSS3 / JavaScript (no frameworks)
- Google Fonts: Nunito, Playfair Display
- Google Analytics (G-4JHLEHZKJ6)
- Mobile-responsive design
- Hosting: Netlify (auto-deploy from GitHub)

## Project Structure

```
mofucha/
├── index.html          # Main page (hero, menu, about, follow us, footer)
├── css/styles.css      # All styles
├── js/main.js          # Navigation, scroll animations
├── assets/
│   ├── images/
│   │   ├── dreamy-matcha-latte.png
│   │   └── cloud-matcha-coconut.png
│   └── logo/
│       ├── mofucha_logo.png      # Original (3000x4500px)
│       ├── mofucha_logo_500.png  # Hero (333x500px)
│       ├── mofucha_logo_200.png  # Nav/Footer (133x200px)
│       ├── mofucha_icon_200.png  # About section (icon only)
│       ├── mofucha_icon_100.png  # Small icon
│       ├── favicon-64.png
│       └── favicon-32.png
├── .gitignore
└── CLAUDE.md
```

## Design

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Matcha Green | `#7C9A6B` | Primary, buttons, accents |
| Matcha Dark | `#6B8A5A` | Hover states |
| Cream | `#FDF8F3` | Background |
| Cream Dark | `#F5EDE3` | Cards, secondary bg |
| Soft Black | `#2D2D2D` | Text |

### Fonts

- **Headings:** Playfair Display (serif)
- **Body:** Nunito (sans-serif)

## Deployment

### Auto-Deploy Workflow

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "description"
   git push
   ```
3. Netlify auto-deploys in ~30 seconds

### Custom Domain (mofucha.sg)

DNS records in Vodien:

| Type | Host | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | [netlify-site].netlify.app |

## Brand

- **Name meaning:** "mofu mofu" (fluffy in Japanese) + "cha" (tea)
- **Mascot:** Cute cat sitting in a matcha whisk
- **Aesthetic:** Japanese Kissaten meets Soft Kawaii
