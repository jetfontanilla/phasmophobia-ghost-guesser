export enum Ghost {
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

export interface NameDictionary {
  id: number;
  name: string;
}

export const GHOST: NameDictionary[] = [
  {id: Ghost.Phantom, name: 'Phantom'},
  {id: Ghost.Banshee, name: 'Banshee'},
  {id: Ghost.Mare, name: 'Mare'},
  {id: Ghost.Yurei, name: 'Yurei'},
  {id: Ghost.Demon, name: 'Demon'},
  {id: Ghost.Wraith, name: 'Wraith'},
  {id: Ghost.Jinn, name: 'Jinn'},
  {id: Ghost.Shade, name: 'Shade'},
  {id: Ghost.Oni, name: 'Oni'},
  {id: Ghost.Revenant, name: 'Revenant'},
  {id: Ghost.Poltergeist, name: 'Poltergeist'},
  {id: Ghost.Spirit, name: 'Spirit'},
];

export const EVIDENCE: NameDictionary[] = [
  {id: Evidence.Freezing, name: 'Freezing Temperatures'},
  {id: Evidence.Emf, name: 'EMF Level 5'},
  {id: Evidence.GhostOrbs, name: 'Ghost Orbs'},
  {id: Evidence.SpiritBox, name: 'Spirit Box'},
  {id: Evidence.GhostWriting, name: 'Ghost Writing'},
  {id: Evidence.Fingerprints, name: 'Fingerprints'}
];

export const GHOST_EVIDENCE = {
  [Ghost.Phantom]: [Evidence.Emf, Evidence.Freezing, Evidence.GhostOrbs],
  [Ghost.Banshee]: [Evidence.Emf, Evidence.Freezing, Evidence.Fingerprints],
  [Ghost.Mare]: [Evidence.Freezing, Evidence.GhostOrbs, Evidence.SpiritBox],
  [Ghost.Yurei]: [Evidence.Freezing, Evidence.GhostOrbs, Evidence.GhostWriting],
  [Ghost.Demon]: [Evidence.Freezing, Evidence.SpiritBox, Evidence.GhostWriting],
  [Ghost.Wraith]: [Evidence.Freezing, Evidence.SpiritBox, Evidence.Fingerprints],
  [Ghost.Jinn]: [Evidence.Emf, Evidence.SpiritBox, Evidence.GhostOrbs],
  [Ghost.Shade]: [Evidence.Emf, Evidence.GhostOrbs, Evidence.GhostWriting],
  [Ghost.Oni]: [Evidence.Emf, Evidence.SpiritBox, Evidence.GhostWriting],
  [Ghost.Revenant]: [Evidence.Emf, Evidence.Fingerprints, Evidence.GhostWriting],
  [Ghost.Poltergeist]: [Evidence.Fingerprints, Evidence.SpiritBox, Evidence.GhostOrbs],
  [Ghost.Spirit]: [Evidence.Fingerprints, Evidence.SpiritBox, Evidence.GhostWriting]
};
