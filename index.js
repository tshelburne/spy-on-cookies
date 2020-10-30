let calls = []
let wrapped = false

function spyOnCookies() {
	if (wrapped) {
		throw new Error('you are mocking cookies, but they are already mocked')
	}

	const {set, ...rest} = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie')

	Object.defineProperty(document, 'cookie', {
		...rest,
		set: (def) => {
			calls.push(def)
			return set.call(document, def)
		}
	})

	wrapped = true

	return {
		calls,
		restore() {
			cookies = []
			Object.defineProperty(document, 'cookie', {...rest, set})
			wrapped = false
		}
	}
}

module.exports = spyOnCookies