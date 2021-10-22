module.exports = class DirectorModel {
    id;
    name;
    gender;

    errors = [];

    createFromReq(req) {
        if (!req.params.id) {
            this.verifyReqErrors(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.gender = req.body.gender;

        return this;
    }

    verifyReqErrors(req) {
        if (!req.body.name) {
            this.errors.push("No name specified");
        }
        if (!req.body.gender) {
            this.errors.push("No gender specified");
        }
    }

    prepareToSave() {
        let attributesToSave = [this.name, this.gender];

        if (this.id) {
            attributesToSave = [...attributesToSave, ...[id]];
        }

        return attributesToSave;
    }
}