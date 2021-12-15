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
  Spirit,
  Yokai,
  Hantu,
  Goryo,
  Myling,
  Onryo,
  Twins,
  Obake,
  Raiju,
  Mimic
}

export enum Evidence {
  Freezing,
  Emf,
  GhostOrbs,
  SpiritBox,
  GhostWriting,
  Fingerprints,
  DotsProjector
}

export interface EvidenceEntity {
  id: number;
  name: string;
  noEvidence: boolean;
  iconClass: string;
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
  {id: Ghost.Phantom, name: 'Phantom', evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.DotsProjector]},
  {id: Ghost.Banshee, name: 'Banshee', evidence: [Evidence.GhostOrbs, Evidence.Fingerprints, Evidence.DotsProjector]},
  {id: Ghost.Mare, name: 'Mare', evidence: [Evidence.GhostOrbs, Evidence.GhostWriting, Evidence.SpiritBox]},
  {id: Ghost.Yurei, name: 'Yurei', evidence: [Evidence.GhostOrbs, Evidence.Freezing, Evidence.DotsProjector]},
  {id: Ghost.Demon, name: 'Demon', evidence: [Evidence.Freezing, Evidence.GhostWriting, Evidence.Fingerprints]},
  {id: Ghost.Wraith, name: 'Wraith', evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.DotsProjector]},
  {id: Ghost.Jinn, name: 'Jinn', evidence: [Evidence.Emf, Evidence.Freezing, Evidence.Fingerprints]},
  {id: Ghost.Shade, name: 'Shade', evidence: [Evidence.Emf, Evidence.GhostWriting, Evidence.Freezing]},
  {id: Ghost.Oni, name: 'Oni', evidence: [Evidence.Emf, Evidence.Freezing, Evidence.DotsProjector]},
  {id: Ghost.Revenant, name: 'Revenant', evidence: [Evidence.GhostOrbs, Evidence.Freezing, Evidence.GhostWriting]},
  {id: Ghost.Poltergeist, name: 'Poltergeist', evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.GhostWriting]},
  {id: Ghost.Spirit, name: 'Spirit', evidence: [Evidence.Emf, Evidence.SpiritBox, Evidence.GhostWriting]},
  {id: Ghost.Yokai, name: 'Yokai', evidence: [Evidence.GhostOrbs, Evidence.SpiritBox, Evidence.DotsProjector]},
  {id: Ghost.Hantu, name: 'Hantu', evidence: [Evidence.GhostOrbs, Evidence.Freezing, Evidence.Fingerprints]},
  {id: Ghost.Goryo, name: 'Goryo', evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.DotsProjector]},
  {id: Ghost.Myling, name: 'Myling', evidence: [Evidence.Emf, Evidence.Fingerprints, Evidence.GhostWriting]},
  {id: Ghost.Onryo, name: 'Onryo', evidence: [Evidence.GhostOrbs, Evidence.Freezing, Evidence.SpiritBox]},
  {id: Ghost.Twins, name: 'The Twins', evidence: [Evidence.Emf, Evidence.Freezing, Evidence.SpiritBox]},
  {id: Ghost.Obake, name: 'Obake', evidence: [Evidence.Emf, Evidence.GhostOrbs, Evidence.Fingerprints]},
  {id: Ghost.Raiju, name: 'Raiju', evidence: [Evidence.DotsProjector, Evidence.Emf, Evidence.GhostOrbs]},
  {id: Ghost.Mimic, name: 'Mimic', evidence: [Evidence.SpiritBox, Evidence.Fingerprints, Evidence.Freezing]}
];

export const EVIDENCE: EvidenceEntity[] = [
  {id: Evidence.Freezing, name: 'Freezing Temperatures', noEvidence: true, iconClass: 'fas fa-snowflake'},
  {id: Evidence.Emf, name: 'EMF Level 5', noEvidence: true, iconClass: 'fas fa-bolt'},
  {id: Evidence.GhostOrbs, name: 'Ghost Orbs', noEvidence: false, iconClass: 'fas fa-camera'},
  {id: Evidence.SpiritBox, name: 'Spirit Box', noEvidence: false, iconClass: 'fas fa-calendar-week'},
  {id: Evidence.GhostWriting, name: 'Ghost Writing', noEvidence: false, iconClass: 'fab fa-leanpub'},
  {id: Evidence.Fingerprints, name: 'Fingerprints', noEvidence: false, iconClass: 'fas fa-hand-paper'},
  {id: Evidence.DotsProjector, name: 'D.O.T.S. Projector', noEvidence: false, iconClass: 'fas fa-podcast'}
];

export const GHOST_BEHAVIOR_GIVEAWAY: BehaviorEntity[] = [
  {id: Ghost.Phantom, value: 'Disappears after taking a Photo. Ghost Photo in Journal is invisible'},
  {id: Ghost.Banshee, value: 'Gives a unique wailing sound on Parabolic Mic'},
  {id: Ghost.Mare, value: 'Hunts at <= 60% average sanity when lights are off in its room. Can only hunt at <= 40% average sanity when lights are on it its room'},
  {id: Ghost.Demon, value: 'Hunts at <= 75% average sanity and not triggered by noise'},
  {id: Ghost.Wraith, value: 'Does not leave UV footprints after stepping on salt'},
  {id: Ghost.Jinn, value: 'When break is turned on, during hunts will move at 2x speed, but will slow down within 4 meters of a player'},
  {id: Ghost.Shade, value: 'Unable to hunt when there is more than 1 person in its room'},
  {id: Ghost.Revenant, value: 'Super fast ghost, moves at 2x speed during hunts'},
  {id: Ghost.Poltergeist, value: 'Can throw more than one item at once. drains sanity if you see items being thrown'},
  {id: Ghost.Spirit, value: 'After using Smudge Sticks, unable to hunt for 180 seconds instead of the usual 90 seconds'},
  {id: Ghost.Yokai, value: 'Triggers hunts above 60% and triggered by noise'},
  {id: Ghost.Hantu, value: 'Moves much faster when breaker is turned off, normal speed when breaker is on'},
  {id: Ghost.Hantu, value: 'Freezing Breath on ghost model during hunts'},
  {id: Ghost.Obake, value: 'Leaves 6-fingered fingerprints'},
  {id: Ghost.Mimic, value: 'Gives 3 Evidence including Ghost Orbs on Nightmare mode'},
];

export const GHOST_BEHAVIOR_LIKELY: BehaviorCommonEntity[] = [
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
    ghostIds: [Ghost.Yurei, Ghost.Phantom, Ghost.Jinn]
  }
];
