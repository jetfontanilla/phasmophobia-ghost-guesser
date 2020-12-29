import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EVIDENCE, Evidence, GHOST, Ghost, GhostEntity, EvidenceEntity } from './ghost-properties';
import { difference, filter, isUndefined, map, reduce } from 'lodash-es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private evidenceMatrix: (boolean | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined];
  private likelyCandidates: Ghost[] = [];
  private sureCandidates: Ghost[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  reset(): void {
    this.evidenceMatrix = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.likelyCandidates = [];
    this.sureCandidates = [];
    this.changeDetectorRef.markForCheck();
  }

  getEvidence(): EvidenceEntity[] {
    return EVIDENCE;
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
}
