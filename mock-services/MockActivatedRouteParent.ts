export class MockActivatedRouteParent {
    parent: any;
    params: any;

    constructor(options) {
        this.parent = options.parent;
        this.params = options.params;
    }
}
