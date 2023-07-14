
const AWS = require("aws-sdk")
module.exports.handler = async (event) => {
  const dynamodb= new AWS.DynamoDB.DocumentClient();
  let todos;
try{
const results = await dynamodb.scan({ TableName: "TodoTable" }).promise();
todos= results.Items
}catch(error){
    console.log(error)

}
  

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
