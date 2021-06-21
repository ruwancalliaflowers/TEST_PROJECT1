const {v4: uuidv4} = require('uuid');
const {generateHTTPResponse} = require('./utils/responseUtil');
const {
    INSERT_WAREHOUSE_RULE,
    DELETE_REGION,
    SELECT_ALL_REGION
} = require('./utils/dbUtil');
const dbClient = require('data-api-client')({
    options: { region: 'us-east-2' },
    //need to change followings when go for commit
    secretArn: 'arn:aws:secretsmanager:us-east-2:872401033045:secret:rds-db-credentials/cluster-GUHZM6DLDY7U7UOPBX6VM6KNYA/calliadbuser-pt0p5Q',
    resourceArn: 'arn:aws:rds:us-east-2:872401033045:cluster:dev-db',
    database: 'callia_admin'
    // secretArn: process.env.SECRET_STORE_ARN,
    // resourceArn: process.env.DATABASE_ARN,
    // database: process.env.DATABASE_NAME
});
//test

exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    // const request = JSON.parse(event.body)
    if (event.httpMethod == 'POST') {
        const response = await insertRegion(request)
        return generateHTTPResponse(response)
    } else if (event.httpMethod == 'DELETE') {
        const response = await deleteRegion(event.pathParameters.id)
        return generateHTTPResponse(response)
    } else if (event.httpMethod == 'GET') {
        const response = await getAllRegion()
        return generateHTTPResponse(response)
    }
}

const getAllRegion = async () => {
    let result = await dbClient.query(SELECT_ALL_REGION)
    console.log(result);
    return result;
}

//this.handler({'httpMethod':'GET'});



