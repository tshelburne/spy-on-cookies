declare function spyOnCookies(): {
	calls: string[]
	restore(): void
}

export default spyOnCookies