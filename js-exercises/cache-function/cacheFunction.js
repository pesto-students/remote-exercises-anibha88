function cacheFunction(cb) {
	var cache = {};
	return function(param) {
		if (cache.hasOwnProperty(param)) {
			return cache[param];
		} else {
			return cache[param] = cb(param)
		}
	}
}

export { cacheFunction };
