/**
 * Created by alex on 2/11/17.
 */
export class RootRequest {
    methodName: string;
    request: any;

    constructor(methodName: string, requestBody: any) {
        this.methodName = methodName;
        this.request = requestBody;
    }
}
