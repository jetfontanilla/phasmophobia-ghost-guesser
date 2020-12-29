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

export interface EvidenceEntity {
  id: number;
  name: string;
  noEvidence: boolean;
}

export interface GhostEntity {
  id: Ghost;
  name: string;
  evidence: Evidence[];
}

export interface BehaviorEntity {
  id: Ghost;
  value: string;
}

export interface BehaviorCommonEntity {
  value: string;
  ghostIds: Ghost[];
}

export const GHOST: GhostEntity[] = [
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

export const EVIDENCE: EvidenceEntity[] = [
  {id: Evidence.Freezing, name: 'Freezing Temperatures', noEvidence: true},
  {id: Evidence.Emf, name: 'EMF Level 5', noEvidence: true},
  {id: Evidence.GhostOrbs, name: 'Ghost Orbs', noEvidence: false},
  {id: Evidence.SpiritBox, name: 'Spirit Box', noEvidence: false},
  {id: Evidence.GhostWriting, name: 'Ghost Writing', noEvidence: false},
  {id: Evidence.Fingerprints, name: 'Fingerprints', noEvidence: false}
];

export const GHOST_BEHAVIOR_GIVEAWAY: BehaviorEntity[] = [
  {id: Ghost.Phantom, value: 'Disappears after taking a Photo. Ghost Photo in Journal is invisible'},
  {id: Ghost.Banshee, value: 'Hunts at > 65% average sanity, only targets one person during hunts'},
  {id: Ghost.Mare, value: 'Hunts at <= 60% sanity when lights are off in its room. Can only hunt at <= 40% average sanity when lights are on it its room'},
  {id: Ghost.Demon, value: 'Hunts at <= 65% sanity'},
  {id: Ghost.Wraith, value: 'Does not leave UV footprints after stepping on salt'},
  {id: Ghost.Jinn, value: 'When break is turned on, during hunts will move at 2x speed, but will slow down within 4 meters of a player'},
  {id: Ghost.Shade, value: 'Unable to hunt when there is more than 1 person in its room'},
  {id: Ghost.Revenant, value: 'Super fast ghost, moves at 2x speed during hunts'},
  {id: Ghost.Poltergeist, value: 'Can throw more than one item at once. drains sanity if you see items being thrown'},
  {id: Ghost.Spirit, value: 'After using Smudge Sticks, unable to hunt for 180 seconds instead of the usual 90 seconds'},
];

export const GHOST_BEHAVIOR_LIKELY: BehaviorCommonEntity[] = [
  {
    value: 'Ghost seems to wander around multiple rooms',
    ghostIds: [Ghost.Phantom, Ghost.Wraith, Ghost.Yurei, Ghost.Banshee]
  },
  {
    value: 'Ghost almost never turns off the breaker',
    ghostIds: [Ghost.Jinn]
  },
  {
    value: 'Ghost turns off the breaker, or light switches frequently. Almost never turns them on',
    ghostIds: [Ghost.Mare]
  },
  {
    value: 'Ghost is territorial or becomes more active when people are present in its room',
    ghostIds: [Ghost.Oni, Ghost.Jinn]
  },
  {
    value: 'Ghost becomes shy when more people are present in its room, but more active when alone',
    ghostIds: [Ghost.Shade]
  },
  {
    value: 'Ghost tends to start a hunt a lot more often than usual',
    ghostIds: [Ghost.Demon, Ghost.Banshee]
  },
  {
    value: 'Ghost seems to drain more sanity when manifesting more than the usual',
    ghostIds: [Ghost.Yurei, Ghost.Phantom]
  }
];
