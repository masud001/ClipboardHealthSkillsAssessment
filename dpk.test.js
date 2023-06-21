const { deterministicPartitionKey } = require('./dpk');
const crypto = require('crypto');

describe('deterministicPartitionKey', () => {
	it('returns the trivial partition key when event and partitionKey are both undefined', () => {
		const result = deterministicPartitionKey();
		expect(result).toBe('0');
	});

	it('returns the partition key from the event object', () => {
		const event = { partitionKey: 'abc' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('abc');
	});

	it('returns the JSON stringified event object when partitionKey is undefined', () => {
		const event = { foo: 'bar' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('{"foo":"bar"}');
	});

	it('returns the JSON stringified event object when partitionKey is not a string', () => {
		const event = { partitionKey: 123 };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('{"partitionKey":123}');
	});

	it('returns the hashed partition key when its length exceeds MAX_PARTITION_KEY_LENGTH', () => {
		const longKey = 'a'.repeat(257);
		const hash = crypto.createHash('sha3-512').update(longKey).digest('hex');
		const event = { partitionKey: longKey };
		const result = deterministicPartitionKey(event);
		expect(result).toBe(hash);
	});

	it('returns the partition key when its length does not exceed MAX_PARTITION_KEY_LENGTH', () => {
		const event = { partitionKey: 'short-key' };
		const result = deterministicPartitionKey(event);
		expect(result).toBe('short-key');
	});
});
