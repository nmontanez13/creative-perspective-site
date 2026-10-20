# The Creative Perspective

Production repository for **The Creative Perspective — 6-Week Drone Pilot Skill Accelerator**.

## Hosting

Static Netlify deployment. No build command. Publish directory: repository root (`.`).

## Included in this build

- Main landing page
- Pre-checkout requirements confirmation page (`requirements.html`)
- Post-payment confirmation / questionnaire handoff page (`thank-you.html`)
- Privacy Policy
- Terms and Conditions
- Refund & Cancellation Policy
- 404 page
- Responsive styling and existing page interactions

## Enrollment flow

Landing page → Requirements confirmation → Stripe checkout → Thank-you page → Tally enrollment questionnaire → Circle onboarding

The checkout and questionnaire URLs are intentionally centralized at the top of `main.js`:

```js
const SITE_LINKS={
  checkout:'',
  questionnaire:'',
  youtube:'',
  instagram:''
};
```

When Stripe is approved, paste the live checkout URL into `checkout`. When the Tally form URL is final, paste it into `questionnaire`.

## Still pending before launch

- Stripe checkout URL
- Tally questionnaire URL
- YouTube URL
- Instagram URL
- Hero showreel
- Featured commercial reel / project media
- GA4 + Termly cookie-consent implementation
- Final end-to-end checkout test

## Founding Cohort constraints

Do not add fake testimonials, fake urgency, crossed-out pricing, unsupported guarantees, fabricated results, or public student footage without the appropriate permission.


## 2026-10-19 Checkout-ready update
- Requirements gate now routes to Circle Founding Cohort checkout.
- Creative Pilot Rating added to the main navigation and anchored on-page.
- Circle handles payment, account creation, and onboarding questionnaire.


## October 20 launch-ready updates
- Embedded the 4-minute YouTube landing-page video: https://youtu.be/4bsxKBu0hgA
- Header, hero, mid-page, and final CTAs now scroll to the pricing section.
- The pricing-card CTA is the only main-page CTA that leaves the site and opens the Circle Founding Cohort checkout.
- Circle checkout: https://creative-perspective.circle.so/checkout/founding-cohort
