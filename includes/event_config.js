function extractEventParam(paramName) {
    return `
    (SELECT value.string_value 
     FROM UNNEST(event_params) 
     WHERE key = '${paramName}' 
     LIMIT 1)
  `;
}
module.exports = {
    extractEventParam
};
