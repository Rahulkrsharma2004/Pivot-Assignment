# Pokemon Web Application

## Overview

The Pokemon Web Application is designed to showcase frontend development skills through three progressive challenges. The application is built using React, Next.js, TypeScript, and Tailwind CSS, with optional backend support using Node.js, Express, and MongoDB. The primary goal is to create an interactive, responsive, and accessible Pokemon Explorer Web Application.

## Image

<img width="936" alt="poke1" src="https://github.com/user-attachments/assets/5a9863a5-5b30-47da-92de-d6e3b5bc2393" />
<img width="947" alt="poke2" src="https://github.com/user-attachments/assets/97d14509-cfa0-4a2c-aad1-0e091c95ff6b" />

### Primary Technologies
- React
- Next.js
- TypeScript
- Tailwind CSS
- Pokemon API

## Project Challenges

### Challenge 1: Pokemon Card Component

**Objective:** Create a reusable Pokemon card component.

#### Requirements
- Design a `<PokemonCard />` component that displays:
  - Pokemon name
  - Unique ID
  - Type(s)
  - Sprite/Image
  - Basic stats (optional)

```tsx
interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}
