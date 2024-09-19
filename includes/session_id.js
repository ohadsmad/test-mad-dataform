function sessionId() {
    return `
    CONCAT(user_pseudo_id,(SELECT value.int_value 
     FROM UNNEST(event_params) 
     WHERE key = 'ga_session_id'))
  `;
}
module.exports = {
    sessionId
};
