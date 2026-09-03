# Xi Jinping — Civilization VII Leader Mod

A custom Xi Jinping leader mod for **Sid Meier's Civilization VII**, built as a game-modding and software development project using XML, SQL, JavaScript, localisation, custom UI assets, AI configuration, narrative content, and gameplay systems.

## About the Project

This project adds **Xi Jinping as a custom playable leader** in Civilization VII.

The mod was designed to work alongside a custom Modern China civilization while also exploring how Civilization VII handles leader registration, gameplay effects, AI behaviour, narrative events, progression systems, UI integration, localisation, and custom artwork.

Unlike a simple cosmetic replacement, the project required integrating a new leader across multiple game systems.

## Features

- Custom playable Xi Jinping leader
- Custom leader ability and gameplay effects
- Custom AI behaviour configuration
- Custom leader colours and presentation
- Custom portrait and UI artwork
- Multiple leader emotional portrait states
- Custom localisation
- Narrative content across multiple ages
- Age transition content
- Metaprogression integration
- Custom memento content
- Unlockable reward support
- Compatibility configuration for the Modern China civilization

## Technologies & Skills

| Area | Technologies / Skills |
|---|---|
| Game Data | XML |
| Database Configuration | SQL |
| UI Integration | JavaScript |
| Game Modding | Civilization VII Modding Framework |
| AI | Custom leader AI configuration |
| Gameplay | Leader abilities and gameplay effects |
| Narrative | Age-specific narrative content |
| Localisation | Custom leader text and dialogue |
| UI / Artwork | Portraits, icons, backgrounds and leader presentation |
| Progression | Metaprogression and unlockable rewards |
| Debugging | Game logs, configuration testing and iterative fixes |
| Version Control | Git / GitHub |

## Project Structure

```text
civ7-xi-jinping-leader/
│
├── Xi_Jinping_Leader/
│   ├── Xi_Jinping_Leader.modinfo
│   │
│   ├── config/
│   │   ├── Xi_Jinping-config.xml
│   │   ├── Xi_Jinping-China-compat.xml
│   │   ├── Xi_Jinping-icons.xml
│   │   ├── metaprogression.xml
│   │   └── unlockableRewards.xml
│   │
│   ├── data/
│   │   ├── Xi_Jinping_core/
│   │   ├── Xi_Jinping_narrative/
│   │   ├── Xi_Jinping_agetranscard/
│   │   ├── Xi_Jinping_memento/
│   │   ├── Xi_Jinping_progress/
│   │   └── Xi_Jinping_unlock/
│   │
│   ├── text/
│   ├── textures/
│   ├── ui/
│   └── thumbnail.png
│
└── README.md
