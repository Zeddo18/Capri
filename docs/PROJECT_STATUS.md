# Project status

The repository now pins the upstream Capri Companion desktop app as a submodule. The older standalone window prototype is retained under `prototype/` for comparison.

## Current state

- Upstream source commit pinned by `capri-companion/` submodule.
- Launcher scripts are in the root `package.json`.
- Owner-supplied reference images and their source notes remain under `assets/references/`.
- Runtime dependencies are not installed yet, and the app has not been launched in this checkout.

The upstream app provides its own AI providers, offline command handling, voice support, desktop movement, and permission-gated PC actions. Read `capri-companion/docs/SECURITY.md` before enabling computer control. Its character artwork and traced model are excluded from the MIT code license; see `capri-companion/assets/capri/SOURCES.md`.
