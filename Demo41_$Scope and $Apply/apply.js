$apply: function(expr){
	try{
		beginPhase('$apply');
		return this.$eval(expr);
	} catch(e){
		$exceptionHandler(e);
	} finally {
		ClearPhase();
		try{
			$root.$digest();
		} catch(e) {
			$exceptionHandler(e);
			throw e;
		}
	}
}

// $apply() template
// function $apply(expr) {
  // try {
    // return $eval(expr);
  // } catch (e) {
    // $exceptionHandler(e);
  // } finally {
    // $root.$digest();
  // }
// }