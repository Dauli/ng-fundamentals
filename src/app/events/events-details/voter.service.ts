import { Injectable } from "@angular/core";
import { ISession } from '../shared';

@Injectable()
export class VoterService {
  // 3 methods used in UpvoteComponent
  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string){
    sessionStorage.voters.push(voterName);
  }

  userHasVoted(session: ISession, voterName: string){
    return session.voters.some(voter => voter === voterName);
  }
}
