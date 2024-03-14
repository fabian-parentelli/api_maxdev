// Shifts Cande.
export class ServiceNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};

export class ShiftNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    };
};