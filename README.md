# InvestMatch
## Inspiration
InvestMatch was inspired by the need to democratize investing in small businesses by making it more accessible to everyday investors. We wanted to create a platform where users can discover, evaluate, and invest in businesses that align with their interests, financial goals, and risk tolerance. The idea stemmed from the challenge of connecting investors with promising startups and local businesses that need funding but lack traditional venture capital access.

## What it does
InvestMatch allows users to: ✅ Browse and explore investment opportunities in small businesses across various industries. ✅ Save and track their investments in a personalized dashboard. ✅ View key business metrics like revenue, employees, and risk assessment. ✅ Seamlessly remove investments they no longer want to track.

By providing a user-friendly interface, InvestMatch helps investors make informed decisions quickly and efficiently.

## How we built it
🔹 Frontend: Developed using Next.js and React for a fast, interactive experience. 🔹 UI/UX: Tailwind CSS was used for styling, ensuring a clean and responsive design. 🔹 State Management: React Hooks (useState, useEffect) were used to manage and persist investment data. 🔹 LocalStorage Integration: Investments are stored in localStorage to maintain data persistence across sessions. 🔹 Navigation: Next.js Link was used for smooth routing between pages (Home, Dashboard, Explore, Profile).

## Challenges we ran into
🚧 Implementing persistent storage for user-selected investments required handling localStorage efficiently. 🚧 Ensuring responsive UI/UX for different devices without losing functionality. 🚧 Creating an intuitive dashboard that is both functional and visually appealing. 🚧 Managing state updates when adding/removing investments dynamically while ensuring the UI reflects changes instantly.
Accomplishments that we're proud of

🏆 Successfully implemented a fully functional investment dashboard with smooth state management. 🏆 Designed a clean, modern, and intuitive UI using Tailwind CSS. 🏆 Ensured fast navigation using Next.js while maintaining persistent data. 🏆 Added dynamic investment tracking with the ability to remove investments in real-time.

## What we learned
📌 How to effectively manage state and data persistence using React Hooks and localStorage. 📌 The importance of UI/UX design in creating a user-friendly experience. 📌 Optimizing Next.js navigation and performance for a smoother experience. 📌 Handling dynamic updates in a React application while keeping UI performance smooth.

## What's next for InvestMatch
🚀 User Authentication: Implementing login/signup features for a more personalized experience. 🚀 Live Investment Data: Integrating an API to fetch real-time business performance metrics. 🚀 Portfolio Tracking: Providing users with analytics on their investments' growth and potential. 🚀 Business Profiles: Expanding investment options by adding deeper insights into businesses, including reviews and founder backgrounds. 🚀 Community & Social Features: Allowing investors to discuss and share insights on potential opportunities.

InvestMatch is just getting started, and we’re excited about its future! 🚀💡 Let us know if you have any feedback or feature ideas! 🎯

<!-- # Free React / Next.js landing page template

![Open React / Next.js template preview](https://github.com/user-attachments/assets/522a5e46-2a0e-48ca-80eb-87c7fa58f3ea)

**Open** is a **free React / Next.js landing page template built with Tailwind CSS** for developers/makers who want to create a quick and professional landing page for their open source projects, SaaS products, online services, and more.

**UPDATE 2025-02-04** Added Tailwind v4 support!

Use it for whatever you want, and be sure to reach us out on [Twitter](https://twitter.com/Cruip_com) if you build anything cool/useful with it.

Created and maintained with ❤️ by [Cruip.com](https://cruip.com).

_Version 1.0.0 built with the Cruip CSS is available [here](https://github.com/cruip/open-react-template/releases/tag/1.0.0)._
_Version 2.0.3 built with Tailwind CSS and React + Vite is available [here](https://github.com/cruip/open-react-template/releases/tag/2.0.3)._
_Version 3.3.0 (before redesign) built with Tailwind CSS and Next.js is available [here](https://github.com/cruip/open-react-template/releases/tag/3.3.0)._

## Live demo

Check the live demo here 👉️ [https://open.cruip.com/](https://open.cruip.com/)

## Open PRO

[![Open Pro](https://github.com/user-attachments/assets/2062c728-95f1-4d59-aa2d-d63556f625d5)](https://cruip.com/)

## Design files

If you need the design files, you can download them from Figma's Community 👉 https://bit.ly/401KSUS

## Usage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev (recommended)
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Support notes

This template has been developed with the App Router (`app`) and React Server Components. If you’re unfamiliar with these beta features, you can find more information about them on the Next.js beta documentation page. So, please note that any request dealing with React (e.g. extra features, customisations, et cetera) is to be considered out of the support scope.

For more information about what support covers, please see our (FAQs)[https://cruip.com/faq/].

## Credits

- [Nucleo](https://nucleoapp.com/)

## Terms and License

- Released under the [GPL](https://www.gnu.org/licenses/gpl-3.0.html).
- Copyright 2024 [Cruip](https://cruip.com/).
- Use it for personal and commercial projects, but please don’t republish, redistribute, or resell the template.
- Attribution is not required, although it is really appreciated.

## About Us

We're an Italian developer/designer duo creating high-quality design/code resources for developers, makers, and startups.

## Stay in the loop

If you would like to know when we release new resources, you can follow [@pacovitiello](https://x.com/pacovitiello) and [@DavidePacilio](https://x.com/DavidePacilio) on X, or you can subscribe to our [newsletter](https://cruip.com/newsletter/). -->
