declare const Ft42AuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class Ft42AuthGuard extends Ft42AuthGuard_base {
    handleRequest(err: Error, user: any, info: any): any;
}
export {};
