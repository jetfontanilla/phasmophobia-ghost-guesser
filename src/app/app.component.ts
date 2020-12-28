import { Component } from '@angular/core';
import { EVIDENCE, Evidence, Ghost, NameDictionary } from './ghost-properties';
import { isUndefined } from 'lodash-es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private evidence: (boolean | undefined)[] = [undefined, undefined, undefined, undefined, undefined, undefined];
  private likelyCandidates: Ghost[] = [];
  private sureCandidates: Ghost[] = [];

  reset(): void {
    this.evidence = [undefined, undefined, undefined, undefined, undefined, undefined];
    this.likelyCandidates = [];
    this.sureCandidates = [];
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
    return currentEvidence === true;
  }

  isEvidenceAbsent(evidence: Evidence): boolean {
    const currentEvidence = this.evidence[evidence];
    if (isUndefined(currentEvidence)) {
      return false;
    }
    return currentEvidence === false;
  }
}
