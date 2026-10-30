# Project status

This repository is an early Windows desktop prototype. It is not yet a complete AI assistant.

## Available in this prototype

- Frameless, transparent, always-on-top Electron window.
- Character image, idle motion, scanlines, and glitch-style teleport.
- Basic chat panel that displays messages for the current session.
- Narrow preload bridge with Electron context isolation enabled.

## Not implemented yet

- AI model or local model connection.
- Voice input or output.
- Persistent chat, settings, reminders, or notes.
- Computer-control actions.

## Suggested development order

1. Make the character and chat interaction stable, including window positioning and hide/show behavior.
2. Add settings and local persistence with clear controls for model configuration.
3. Add a model connection with explicit network and data-use disclosures.
4. Add a small allowlisted set of PC actions. Require confirmation before consequential actions and provide a reliable stop control.
5. Add voice and broader automation only after the permission model is clear.

The reference images and their provenance notes are in `assets/references/`. Upstream Capri code is MIT-licensed according to its own repository, while its character design and artwork are excluded; review its license files before incorporating any upstream code into this project.
