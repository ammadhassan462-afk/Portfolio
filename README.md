# Ammad Mubashar — Interactive Portfolio

An immersive and cinematic developer portfolio built to showcase my work, projects, and technical skills as a BS Artificial Intelligence student.

Designed with a dark-first aesthetic, interactive 3D visuals, smooth motion systems, and a refined editorial-inspired layout.

---

## ✦ Overview

This portfolio combines modern frontend interaction design with lightweight 3D environments to create a premium browsing experience without overwhelming usability.

The project focuses on:
- smooth visual storytelling
- subtle interaction design
- responsive layouts
- immersive but restrained motion
- clean typography and hierarchy

Because apparently a normal static portfolio was too emotionally uncomplicated.

---

## ✦ Features

### Interactive Hero Section
- Real-time 3D spiral animation using Three.js
- Mouse-reactive motion system
- Cinematic loading transition
- Dynamic glow and depth effects

### Dark / Light Theme
- Dark-first default experience
- Persistent theme memory using `localStorage`
- Smooth visual transitions between themes

### Motion & Interaction
- Custom animated cursor
- Reveal-on-scroll animations
- Animated marquee section
- Smooth hover states and transitions
- Persistent animated background grid

### Sections Included
- Hero
- About
- Experience
- Projects
- Skills
- Contact

### Responsive Design
- Mobile-friendly layout
- Adaptive typography
- Performance-aware animation scaling

---

# ✦ Tech Stack

## Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Graphics & Animation
- Three.js
- WebGL Canvas Rendering

## Typography
- Fraunces
- Inter
- JetBrains Mono

---

# ✦ Design Philosophy

The portfolio was designed around three ideas:

### 1. Restraint
Animations are intentionally slowed and softened to create a calm and premium feel instead of an overstimulating experience.

### 2. Depth
Layered motion systems, blur, glow, grain, and transparency create visual depth while keeping the interface minimal.

### 3. Identity
The dark-first aesthetic and cinematic reveal sequence establish a distinct personality without relying on excessive UI gimmicks.

A shocking number of developer portfolios collapse under the weight of their own animations. The goal here was avoiding that fate.

---

# ✦ Performance Considerations

Several optimizations were made to maintain smooth rendering:

- reduced particle opacity
- softened motion interpolation
- optimized canvas rendering
- limited animation intensity
- responsive rendering adjustments

---

# ✦ Project Structure

```bash
portfolio/
│
├── index.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── resume/
│
├── styles/
│   └── style.css
│
├── scripts/
│   └── app.js
│
└── README.md
