# Charming Tasks — Agent Guide

Quick orientation for contributors and future agents.
This is a light ongoing project for me to learn and practice the deep aspects of React and Next.js

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Project Structure

- App routes live in `src/app`
- Pages are located inside `src/app/**/page.tsx`

## Commands

- Dev server: `npm run dev`
- Lint: `npm run lint`

## Environment Notes

- ESLint config expects `structuredClone` to exist.
- Use Node.js 22.14.0 to run `npm run lint` without config errors.

## Style & Behavior

- Use TypeScript and functional React components.
- Keep UI work in Tailwind utility classes.
- Prefer small, data-driven UI mockups over heavy state unless requested.

## Deliverables

- Update only the files required for the requested feature.
- Report any lint errors and how to address them.
