import request from "superagent";

const museumURL = "https://public.enigma.com/api/snapshots/c8073df4-0374-4c98-acdb-e08ac0880eb6?&row_limit=200&row_offset=0&include_serialids=true";

export function getArtifacts(callback) {
    request.get(museumURL)
    .end((err, res) => {callback(err, res.body)})
}

