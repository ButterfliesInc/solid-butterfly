// copied from Inrupt
export const ERRORS = {
  BAD_REQUEST: "Bad Request",
  CONFLICT: "Conflict",
  EXPECTATION_FAILED: "Expectation Failed",
  FAILED_DEPENDENCY: "Failed Dependency",
  FORBIDDEN: "Forbidden",
  GONE: "Gone",
  LENGTH_REQUIRED: "Length Required",
  LOCKED: "Locked",
  METHOD_NOT_ALLOWED: "Method Not Allowed",
  MISDIRECTED_REQUEST: "Misdirected Request",
  NOT_ACCEPTABLE: "Not Acceptable",
  NOT_FOUND: "Not Found",
  PAYLOAD_TOO_LARGE: "Payload Too Large",
  PAYMENT_REQUIRED: "Payment Required",
  PRECONDITION_FAILED: "Precondition Failed",
  PRECONDITION_REQUIRED: "Precondition Required",
  PROXY_AUTHENTICATION_REQUIRED: "Proxy Authentication Required",
  RANGE_NOT_SATISFIABLE: "Range Not Satisfiable",
  REQUEST_HEADER_FIELDS_TOO_LARGE: "Request Header Fields Too Large",
  REQUEST_TIMEOUT: "Request Timeout",
  TEAPOT: "I'm a teapot",
  TOO_EARLY: "Too Early",
  TOO_MANY_REQUESTS: "Too Many Requests",
  UNAUTHORIZED: "Unauthorized",
  UNAVAILABLE_FOR_LEGAL_REASONS: "Unavailable For Legal Reasons",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",
  UNSUPPORTED_MEDIA_TYPE: "Unsupported Media Type",
  UPGRADE_REQUIRED: "Upgrade Required",
  URI_TOO_LONG: "URI Too Long",
};

export const ERROR_CODES = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  EXPECTATION_FAILED: 417,
  FAILED_DEPENDENCY: 424,
  FORBIDDEN: 403,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  LOCKED: 423,
  METHOD_NOT_ALLOWED: 405,
  MISDIRECTED_REQUEST: 421,
  NOT_ACCEPTABLE: 406,
  NOT_FOUND: 404,
  PAYLOAD_TOO_LARGE: 413,
  PAYMENT_REQUIRED: 402,
  PRECONDITION_FAILED: 412,
  PRECONDITION_REQUIRED: 428,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  RANGE_NOT_SATISFIABLE: 416,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  REQUEST_TIMEOUT: 408,
  TEAPOT: 418,
  TOO_EARLY: 425,
  TOO_MANY_REQUESTS: 429,
  UNAUTHORIZED: 401,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  UNPROCESSABLE_ENTITY: 422,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UPGRADE_REQUIRED: 426,
  URI_TOO_LONG: 414,
};

export const ERROR_REGEXES = {
  HANDLER_NOT_FOUND: [
      /sessionId/g, // emitted from AggregateLoginHandler in Solid UI React
  ],
  INVALID_IDP: [
      /fetch/g, // Chrome, Edge, Firefox
      /Not allowed to request resource/g, // Safari (macOS)
      /SSL Error/g, // Safari (iOS)
  ],
  INVALID_URL: [
      /Invalid URL/g, // Chrome, Edge
      /URL constructor/g, // Firefox
  ],
};

export function hasError(error, errorRegexes) {
  return !!errorRegexes.find((r) => error.message.match(r));
}

export function isHTTPError(error, code) {
  return error && !!error.toString().match(new RegExp(code));
}
