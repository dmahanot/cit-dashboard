const express = require('express');
const https = require('https');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(cors());

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

app.get('/', (req, res) => {
    res.send({'msg':'Welcome to my server!'});
});


app.get('/trigger-build/:region/', async (req, res) => {
    console.log('\n\n\n\n\n----------------------------hello------------------------------');

    const p = req.query.p;
    const region = req.params.region;

    console.log(`REQ PRAMS : ${p}`);
    console.log(`REQ PRAMS : ${region}`);

    // ************* ANF TRIGGER CODE START ********************//
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://cvscit-team-jenkins.daas.netapp.com/job/ANF_Sanity/job/ANF_Sanity_Github/job/${region}/${p}?token=cit-dash`,
        headers: {
            'Access-Control-Allow-Origin': 'true',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json',
            'Authorization': 'Basic Y2l0dXNlcjoxMTY5MDY0MTQ2MWFiNzNkMzU2OWJhNTJhNjg1M2QyZmUz'
        },
        httpsAgent
    };
    axios.request(config)
        .then((response) => {
            if (response.status == 201) { res.send({ "result": "Build Triggered Successfully" }); }
            else {
                res.send({ "result": "Build Triggered Failed" });
            }
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            res.send({ "error": error.message });
            console.log(error);
        });
    // ************* ANF TRIGGER CODE END ********************//




});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});