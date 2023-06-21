const crypto = require('crypto');

exports.deterministicPartitionKey = (event) => {
	const TRIVIAL_PARTITION_KEY = '0';
	const MAX_PARTITION_KEY_LENGTH = 256;

	let candidate =
		event && event.partitionKey
			? event.partitionKey
			: JSON.stringify(event || TRIVIAL_PARTITION_KEY);

	if (typeof candidate !== 'string') {
		candidate = JSON.stringify(candidate);
	}

	candidate =
		candidate.length > MAX_PARTITION_KEY_LENGTH
			? crypto.createHash('sha3-512').update(candidate).digest('hex')
			: candidate;

	return candidate;
};
