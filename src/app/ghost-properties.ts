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

export interface GhostDictionary extends NameDictionary {
  evidence: Evidence[];
}

export const GHOST: GhostDictionary[] = [
  {id: Ghost.Phantom, name: 'Phantom', evidence: [Evidence.Emf, Evidence.Freezing, Evidence.GhostOrbs]},
  {id: Ghost.Banshee, name: 'Banshee', evidence: [Evidence.Emf, Evidence.Freezing, Evidence.Fingerprints]},
  {id: Ghost.Mare, name: 'Mare', evidence: [Evidence.Freezing, Evidence.GhostOrbs, Evidence.SpiritBox]},
  {id: Ghost.Yurei, name: 'Yurei', evidence: [Evidence.Freezing, Evidence.GhostOrbs, Evidence.GhostWriting]},
  {id: Ghost.Demon, name: 'Demon', evidence: [Evidence.Freezing, Evidence.SpiritBox, Evidence.GhostWriting]},
  {id: Ghost.Wraith, name: 'Wraith', evidence: [Evidence.Freezing, Evidence.SpiritBox, Evidence.Fingerprints]},
  {id: Ghost.Jinn, name: 'Jinn', evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.GhostOrbs]},
  {id: Ghost.Shade, name: 'Shade', evidence: [Evidence.Emf, Evidence.GhostOrbs, Evidence.GhostWriting]},
  {id: Ghost.Oni, name: 'Oni', evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.GhostWriting]},
  {id: Ghost.Revenant, name: 'Revenant', evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.GhostWriting]},
  {id: Ghost.Poltergeist, name: 'Poltergeist', evidence: [Evidence.Fingerprints, Evidence.SpiritBox, Evidence.GhostOrbs]},
  {id: Ghost.Spirit, name: 'Spirit', evidence: [Evidence.Fingerprints, Evidence.SpiritBox, Evidence.GhostWriting]},
];

export const EVIDENCE: NameDictionary[] = [
  {id: Evidence.Freezing, name: 'Freezing Temperatures'},
  {id: Evidence.Emf, name: 'EMF Level 5'},
  {id: Evidence.GhostOrbs, name: 'Ghost Orbs'},
  {id: Evidence.SpiritBox, name: 'Spirit Box'},
  {id: Evidence.GhostWriting, name: 'Ghost Writing'},
  {id: Evidence.Fingerprints, name: 'Fingerprints'}
];
