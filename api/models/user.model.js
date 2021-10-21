class UserModel {
    id;
    name;
    email;
    password;

    errors;

    createFromReq(req) {
        if (!req.params.id) {
            this.verifyReqErrors(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.email = req.body.email;
        this.password = md5(req.body.password);

        return this;
    }

    verifyReqErrors(req) {
        if (!req.body.password) {
            this.errors.push("No password specified");
        }
        if (!req.body.email) {
            this.errors.push("No email specified");
        }
    }

    prepareToSave() {
        let attributesToSave = [this.name, this.email, this.password];

        if (this.id) {
            attributesToSave = [...attributesToSave, ...[id]];
        }

        return attributesToSave;
    }
}