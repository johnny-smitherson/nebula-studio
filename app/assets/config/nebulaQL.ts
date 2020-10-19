const nebulaWordsUppercase = [
  'ADD',
  'ALTER',
  'AND',
  'AS',
  'ASC',
  'BALANCE',
  'BIGINT',
  'BOOL',
  'BY',
  'CHANGE',
  'COMPACT',
  'CREATE',
  'DELETE',
  'DESC',
  'DESCRIBE',
  'DISTINCT',
  'DOUBLE',
  'DOWNLOAD',
  'DROP',
  'EDGE',
  'EDGES',
  'EXISTS',
  'FETCH',
  'FIND',
  'FLUSH',
  'FROM',
  'GET',
  'GO',
  'GRANT',
  'IF',
  'IN',
  'INDEX',
  'INDEXES',
  'INGEST',
  'INSERT',
  'INT',
  'INTERSECT',
  'IS',
  'LIMIT',
  'LOOKUP',
  'MATCH',
  'MINUS',
  'NO',
  'NOT',
  'NULL',
  'OF',
  'OFFSET',
  'ON',
  'OR',
  'ORDER',
  'OVER',
  'OVERWRITE',
  'PROP',
  'REBUILD',
  'RECOVER',
  'REMOVE',
  'RETURN',
  'REVERSELY',
  'REVOKE',
  'SET',
  'SHOW',
  'STEPS',
  'STOP',
  'STRING',
  'SUBMIT',
  'TAG',
  'TAGS',
  'TIMESTAMP',
  'TO',
  'UNION',
  'UPDATE',
  'UPSERT',
  'UPTO',
  'USE',
  'VERTEX',
  'WHEN',
  'WHERE',
  'WITH',
  'XOR',
  'YIELD',
  'ACCOUNT',
  'ADMIN',
  'ALL',
  'AVG',
  'BIDIRECT',
  'BIT_AND',
  'BIT_OR',
  'BIT_XOR',
  'CHARSET',
  'COLLATE',
  'COLLATION',
  'CONFIGS',
  'COUNT',
  'COUNT_DISTINCT',
  'DATA',
  'DBA',
  'DEFAULT',
  'FORCE',
  'GOD',
  'GRAPH',
  'GROUP',
  'GUEST',
  'HDFS',
  'HOSTS',
  'JOB',
  'JOBS',
  'LEADER',
  'MAX',
  'META',
  'MIN',
  'OFFLINE',
  'PART',
  'PARTITION_NUM',
  'PARTS',
  'PASSWORD',
  'PATH',
  'REPLICA_FACTOR',
  'ROLE',
  'ROLES',
  'SHORTEST',
  'SNAPSHOT',
  'SNAPSHOTS',
  'SPACE',
  'SPACES',
  'STATUS',
  'STD',
  'STORAGE',
  'SUM',
  'TTL_COL',
  'TTL_DURATION',
  'USER',
  'USERS',
  'UUID',
  'VALUES',
];

export const ban = ['use', 'USE'];

export const operators = [
  // Bitwise Operator
  '&',
  '|',
  '^',
  // Math
  'abs',
  'floor',
  'ceil',
  'round',
  'sqrt',
  'cbrt',
  'hypot',
  'pow',
  'exp',
  'exp2',
  'log',
  'log2',
  'sin',
  'asin',
  'cos',
  'acos',
  'tan',
  'atan',
  'rand32',
  'rand64',
  // String
  'strcasecmp',
  'lower',
  'upper',
  'length',
  'trim',
  'ltrim',
  'rtrim',
  'left',
  'right',
  'lpad',
  'rpad',
  'substr',
  'hash',
  // Timestamp
  'now',
  // Comparison Functions And Operators
  '=',
  '/',
  '==',
  '!=',
  '<',
  '<=',
  '-',
  '%',
  '+',
  '*',
  '-',
  'udf_is_in',
  // Aggregate
  'AVG',
  'COUNT',
  'MAX',
  'MIN',
  'STD',
  'SUM',
  // Logical Operator
  '&&',
  '!',
  '||',
  'XOR',
  // Order by Function
  'ORDER',
  'BY',
  'DESC',
  'ASC',
  // Limit
  'LIMIT',
  // Set Operations
  'UNION',
  'INTERSECT',
  'MINUS',
  // uuid
  'uuid',
];

const nebulaWordsLowercase = nebulaWordsUppercase.map(w => w.toLowerCase());

export const keyWords = [...nebulaWordsUppercase, ...nebulaWordsLowercase];

export const maxLineNum = 20;
