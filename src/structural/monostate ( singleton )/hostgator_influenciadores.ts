import { Influenciadores } from "./influenciadores";

export class HostGatorInfluenciadores {
    private members: Influenciadores[] = [];

    constructor() {

    }

    setMembers(...members: Influenciadores[]) {
        members.forEach(item => this.members?.push(item))
    }

    getMembers(): Influenciadores[] {
        return this.members;
    }
}