const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});
});

// const crypto = require('crypto');
// const { deterministicPartitionKey } = require('./your-refactored-file');

describe('deterministicPartitionKey', () => {
	it('returns the partition key if it exists', () => {
		const event = { partitionKey: 'existing-key' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('existing-key');
	});

	it('generates a hash for the event if partition key does not exist', () => {
		const event = { data: 'some-data' };
		const hash = crypto.createHash('sha3-512').update(JSON.stringify(event)).digest('hex');
		const result = deterministicPartitionKey(event);
		expect(result).toBe(hash);
	});

	it('returns the trivial partition key if event is falsy', () => {
		const result = deterministicPartitionKey(null);
		expect(result).toBe('0');
	});

	it('converts non-string candidates to a JSON string', () => {
		const event = { key: 123 };
		const result = deterministicPartitionKey(event);
		expect(result).toBe(JSON.stringify(event));
	});

	it('hashes the candidate if it exceeds the maximum length', () => {
		const candidate = 'a'.repeat(257);
		const hash = crypto.createHash('sha3-512').update(candidate).digest('hex');
		const result = deterministicPartitionKey(candidate);
		expect(result).toBe(hash);
	});
});
