import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { EVIDENCE, Evidence, GHOST, Ghost, GhostDictionary, NameDictionary } from './ghost-properties';
import { difference, filter, isUndefined, reduce } from 'lodash-es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private evidence: (boolean | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined];
  private likelyCandidates: Ghost[] = [];
  private sureCandidates: Ghost[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  reset(): void {
    this.evidence = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.likelyCandidates = [];
    this.sureCandidates = [];
    this.changeDetectorRef.markForCheck();
  }

  getEvidence(): NameDictionary[] {
    return EVIDENCE;
  }

  isEvidenceUndefined(evidence: Evidence): boolean {
    const currentEvidence = this.evidence[evidence];
    return isUndefined(currentEvidence);
  }

  isEvidencePresent(evidence: Evidence): boolean {
    const currentEvidence = this.evidence[evidence];
    if (isUndefined(currentEvidence)) {
      return false;
    }
    return currentEvidence;
  }

  isEvidenceAbsent(evidence: Evidence): boolean {
    const currentEvidence = this.evidence[evidence];
    if (isUndefined(currentEvidence)) {
      return false;
    }
    return !currentEvidence;
  }

  toggleEvidencePresence(evidence: Evidence): void {
    this.changeDetectorRef.markForCheck();
    if (this.isEvidenceUndefined(evidence) || this.isEvidenceAbsent(evidence)) {
      this.evidence[evidence] = true;
      return;
    }
    this.evidence[evidence] = undefined;
  }

  toggleEvidenceAbsence(evidence: Evidence): void {
    this.changeDetectorRef.markForCheck();
    if (this.isEvidenceUndefined(evidence) || this.isEvidencePresent(evidence)) {
      this.evidence[evidence] = false;
      return;
    }
    this.evidence[evidence] = undefined;
  }

  getPossibleGhosts(): GhostDictionary[] {
    const [evidencePresent, evidenceAbsent] = reduce(this.evidence, ([present, absent]: [Evidence[], Evidence[]], isPresent, evidence) => {
      if (!isUndefined(isPresent)) {
        if (isPresent) {
          present.push(evidence);
        } else {
          absent.push(evidence);
        }
      }
      return [present, absent];
    }, [[], []]);

    return filter(GHOST, (ghost) => {
      return difference(evidencePresent, ghost.evidence).length === 0
        && difference(evidenceAbsent, ghost.evidence).length === evidenceAbsent.length;
    });
  }
}
