export class AppSession {
    id: string;
    public user_id: Number;
    public created: number;
    public expires: number;

    constructor(session: Object) {
        const expireTime: number = 1000 * 60 * 60 * 24 * 30;

        this.id = session['id'] || '';
        this.user_id = session['user_id'] || '';
        this.created = session['created'] || Date.now();
        this.expires = session['expires'] || this.created + expireTime;
        // console.log("Creating session: ", this.created, expireTime);
    }

    public generateSessionId(): Promise<string> {
        return new Promise(function(resolve, reject) {
            resolve('');
        });
    }

    public destroy(): Promise<Object> {
        return new Promise(function(resolve, reject) {
            resolve({});
        });
    }

    public isExpired() {
        // console.log("Session expired? ", this.expires, Date.now(), this.expires > Date.now());
        return this.expires < Date.now();
    }
}
