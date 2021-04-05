//Can u keep a Secret

function createSecretHolder(secret) {
  return {
  	getSecret: () =>secret,
  	setSecret: (a) => secret = a
  }
}