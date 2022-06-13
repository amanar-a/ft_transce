import { VerifyCallback } from 'passport-42';
declare const FtAuthStrategy_base: new (...args: any[]) => any;
export declare class FtAuthStrategy extends FtAuthStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
