import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {
  BehaviorCommonEntity,
  BehaviorEntity,
  EVIDENCE,
  Evidence,
  EvidenceEntity,
  GHOST,
  Ghost,
  GHOST_BEHAVIOR_GIVEAWAY,
  GHOST_BEHAVIOR_LIKELY,
  GhostEntity
} from './ghost-properties';
import { difference, filter, isUndefined, map, reduce } from 'lodash-es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private evidenceMatrix: (boolean | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined];
  private selectedCommonBehavior: number[] = [];
  private likelyCandidates: Ghost[] = [];
  private sureCandidate?: Ghost;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  reset(): void {
    this.evidenceMatrix = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.selectedCommonBehavior = [];
    this.likelyCandidates = [];
    this.sureCandidate = undefined;
    this.changeDetectorRef.markForCheck();
  }

  getEvidence(): EvidenceEntity[] {
    return EVIDENCE;
  }

  getGhostBehaviorGiveaway(): BehaviorEntity[] {
    return GHOST_BEHAVIOR_GIVEAWAY;
  }

  getGhostBehaviorLikely(): BehaviorCommonEntity[] {
    return GHOST_BEHAVIOR_LIKELY;
  }

  isEvidenceUndefined(evidenceId: Evidence): boolean {
    const currentEvidence = this.evidenceMatrix[evidenceId];
    return isUndefined(currentEvidence);
  }

  isEvidencePresent(evidenceId: Evidence): boolean {
    const currentEvidence = this.evidenceMatrix[evidenceId];
    if (isUndefined(currentEvidence)) {
      return false;
    }
    return currentEvidence;
  }

  isEvidenceAbsent(evidenceId: Evidence): boolean {
    const currentEvidence = this.evidenceMatrix[evidenceId];
    if (isUndefined(currentEvidence)) {
      return false;
    }
    return !currentEvidence;
  }

  toggleEvidencePresence(evidenceId: Evidence): void {
    this.changeDetectorRef.markForCheck();
    if (this.isEvidenceUndefined(evidenceId) || this.isEvidenceAbsent(evidenceId)) {
      this.evidenceMatrix[evidenceId] = true;
      return;
    }
    this.evidenceMatrix[evidenceId] = undefined;
  }

  toggleEvidenceAbsence(evidenceId: Evidence): void {
    this.changeDetectorRef.markForCheck();
    if (this.isEvidenceUndefined(evidenceId) || this.isEvidencePresent(evidenceId)) {
      this.evidenceMatrix[evidenceId] = false;
      return;
    }
    this.evidenceMatrix[evidenceId] = undefined;
  }

  private getCurrentEvidence(): [Evidence[], Evidence[]] {
    return reduce(this.evidenceMatrix, ([present, absent]: [Evidence[], Evidence[]], isPresent, evidence) => {
      if (!isUndefined(isPresent)) {
        if (isPresent) {
          present.push(evidence);
        } else {
          absent.push(evidence);
        }
      }
      return [present, absent];
    }, [[], []]);
  }

  getPossibleGhosts(): GhostEntity[] {
    const [evidencePresent, evidenceAbsent] = this.getCurrentEvidence();

    if (!isUndefined(this.sureCandidate)) {
      return [GHOST[this.sureCandidate]];
    }

    return filter(GHOST, (ghost) => {
      return difference(evidencePresent, ghost.evidence).length === 0
        && difference(evidenceAbsent, ghost.evidence).length === evidenceAbsent.length;
    });
  }

  getRemainingEvidence(evidences: Evidence[]): string[] {
    const [evidencePresent, evidenceAbsent] = this.getCurrentEvidence();
    return map(difference(evidences, [...evidencePresent, ...evidenceAbsent]), (evidenceId) => {
      return EVIDENCE[evidenceId].name;
    });
  }

  isSureCandidate(ghostId: Ghost): boolean {
    return this.sureCandidate === ghostId;
  }

  toggleSureCandidate(ghostId: Ghost): void {
    this.changeDetectorRef.markForCheck();
    if (this.isSureCandidate(ghostId)) {
      this.sureCandidate = undefined;
    } else {
      this.sureCandidate = ghostId;
    }
  }

  isCommonBehaviorSelected(behaviorIndex: number): boolean {
    return this.selectedCommonBehavior.includes(behaviorIndex);
  }

  toggleCommonBehavior(behaviorIndex: number): void {
    this.changeDetectorRef.markForCheck();
    if (this.isCommonBehaviorSelected(behaviorIndex)) {
      this.selectedCommonBehavior = this.selectedCommonBehavior.filter(index => index !== behaviorIndex);
      return;
    }
    this.selectedCommonBehavior.push(behaviorIndex);
  }

}
