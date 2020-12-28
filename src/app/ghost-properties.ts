export enum Ghosts {
  Phantom,
  Banshee,
  Mare,
  Yurei,
  Demon,
  Wraith,
  Jinn,
  Shade,
  Oni,
  Revenant,
  Poltergeist,
  Spirit
}

export enum Evidence {
  Freezing,
  Emf,
  GhostOrbs,
  SpiritBox,
  GhostWriting,
  Fingerprints
}

export const GHOST_EVIDENCE_MATRIX = [
  [1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 1, 1],
  [0, 0, 1, 1, 0, 1],
  [0, 0, 0, 1, 1, 1],
];
