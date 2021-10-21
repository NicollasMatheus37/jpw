class CastModel {
    id;
    name;
    gender;
    character;

    errors;

    createFromReq(req) {
        if (!req.params.id) {
            this.verifyReqErrors(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.gender = req.body.gender;
        this.character = req.body.character;

        return this;
    }

    verifyReqErrors(req) {
        if (!req.body.name) {
            this.errors.push("No name specified");
        }
        if (!req.body.gender) {
            this.errors.push("No gender specified");
        }
        if (!req.body.character) {
            this.errors.push("No character specified");
        }
    }

    prepareToSave() {
        let attributesToSave = [this.name, this.gender, this.character];

        if (this.id) {
            attributesToSave = [...attributesToSave, ...[id]];
        }

        return attributesToSave;
    }
}