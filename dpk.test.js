const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	test('should return trivial partition key when event is undefined', () => {
		expect(deterministicPartitionKey(undefined)).toBe('0');
	});

	test('should return trivial partition key when event has no partitionKey', () => {
		expect(deterministicPartitionKey({})).toBe('0');
	});

	test('should return partition key when event has a valid partitionKey', () => {
		expect(deterministicPartitionKey({ partitionKey: '123' })).toBe('123');
	});

	test('should return hash of event when event has no partitionKey', () => {
		const event = { data: 'example' };
		const expectedHash = '4f0f2e2bfe90f42f4d6700e59c6053a3a65df1e2d8dbd14b4ce7a3bfa22533f3';
		expect(deterministicPartitionKey(event)).toBe(expectedHash);
	});

	// Add more tests to cover edge cases and specific scenarios
});
