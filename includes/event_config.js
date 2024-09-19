function extractEventParam(paramName) {
  return `
    (
      SELECT
        -- Check for non-null values in each possible data type
        CASE
          WHEN value.string_value IS NOT NULL THEN value.string_value
          WHEN value.int_value IS NOT NULL THEN CAST(value.int_value AS STRING)
          WHEN value.float_value IS NOT NULL THEN CAST(value.float_value AS STRING)
          ELSE NULL
        END AS param_value
      FROM UNNEST(event_params)
      WHERE key = '${paramName}'
      LIMIT 1
    )
  `;
}

module.exports = {
  extractEventParam
};
