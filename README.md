# Strboard Demo Gallery

A mobile-first static gallery for Strboard developer build-task demos. Each video is embedded directly and links to all related UI and API pull requests.

The site is intentionally dependency-free and hosted with GitHub Pages.

## Add a demo

1. Copy the optimized MP4 into `videos/`.
2. Add its metadata and PR links to the top of the `demos` array in `app.js`.
3. Commit and push to `main`; GitHub Pages will publish the update automatically.

Videos should contain only dev/test data because this repository and the deployed site are public.
