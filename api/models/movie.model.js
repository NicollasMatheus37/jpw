class MovieModel {
    id;
    name;
    genre;
    release_date;

    errors;

    createFromReq(req) {
        if (!req.params.id) {
            this.verifyReqErrors(req);
        }

        this.id = req.params.id;
        this.name = req.body.name;
        this.genre = req.body.genre;
        this.release_date = req.body.release_date;

        return this;
    }

    verifyReqErrors(req) {
        if (!req.body.name) {
            this.errors.push("No name specified");
        }
        if (!req.body.genre) {
            this.errors.push("No genre specified");
        }
        if (!req.body.release_date) {
            this.errors.push("No release_date specified");
        }
    }

    prepareToSave() {
        let attributesToSave = [this.name, this.genre, this.release_date];

        if (this.id) {
            attributesToSave = [...attributesToSave, ...[id]];
        }

        return attributesToSave;
    }
}